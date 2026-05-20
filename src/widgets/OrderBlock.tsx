import { IoReceiptSharp } from "react-icons/io5";

import {
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    Sheet,
    SheetDescription,
} from "@/components/ui/sheet";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { useFirestore } from "@/hooks/UseFirestore";
import type { OrderType } from "@/lib/firestore/filters/models/types";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

export const OrderBlock = () => {
    const { data: orders, isLoading } = useFirestore<OrderType>("orders");

    const getNumericId = (id: string) => {
        let hash = 0;
        for (let i = 0; i < id.length; i++) {
            hash = id.charCodeAt(i) + ((hash << 5) - hash);
        }
        return Math.abs(hash % 900000) + 100000;
    };

    return (
        <Sheet>
            <SheetTrigger className="p-2 rounded-lg font-oswald border border-gray-300">
                <IoReceiptSharp className="text-[#68B738]" size={20} />
            </SheetTrigger>

            <SheetContent
                side="right"
                className="!max-w-none w-full h-full bg-white border-gray-300 p-4 overflow-y-auto"
            >
                <SheetHeader className="border-b pb-4 mb-4">
                    <SheetTitle className="font-oswald text-2xl uppercase">Ваши заказы</SheetTitle>
                    <SheetDescription className="text-gray-400 font-oswald">
                        Здесь будет вся ифнормация о ваших заказах
                    </SheetDescription>
                </SheetHeader>

                {isLoading ? (
                    <Skeleton />
                ) : orders.length === 0 ? (
                    <p className="text-center text-gray-400">У вас пока нет заказов :(</p>
                ) : (
                    <Accordion type="single" collapsible className="w-full flex flex-col gap-5">
                        {orders.map((order) => (
                            <AccordionItem key={order.id} value={order.id}>
                                <AccordionTrigger className="hover:no-underline">
                                    <div className="flex flex-col items-start text-left gap-1">
                                        <span className="font-bold text-sm">
                                            Заказ №{getNumericId(order.id)}
                                        </span>
                                        <div className="flex gap-2 items-center">
                                            <Badge
                                                variant="outline"
                                                className="text-sm text-[#68B738]"
                                            >
                                                {order.status}
                                            </Badge>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="!overflow-visible !h-auto">
                                    <div className="flex flex-col space-y-6 pt-2 ">
                                        <div className="flex flex-row flex-wrap gap-8">
                                            {order.items.map((product, id) => (
                                                <div
                                                    key={id}
                                                    className="flex flex-col justify-between text-sm w-fit"
                                                >
                                                    <div className="flex items-center gap-6 justify-center mw:flex-col mw:gap-4">
                                                        <div className="size-20 mw:size-30 lg:size-35 shrink-0">
                                                            <img
                                                                src={product.imageUrl}
                                                                alt="#"
                                                                className="w-full h-full object-contain"
                                                            />
                                                        </div>

                                                        <div className="w-auto mw:w-full mw:p-3">
                                                            <h2 className="font-oswald mb-3 text-center mx-auto text-base text-nowrap">
                                                                {product.name}
                                                            </h2>

                                                            <div className="text-[11px] text-gray-700 grid grid-cols-2 gap-x-6 gap-y-2 w-full mw:gap-x-0">
                                                                <span className="text-sm mw:py-1.5 mw:border-b mw:border-gray-300 lg:text-base">
                                                                    Вкус:
                                                                </span>
                                                                <span className="text-sm text-right mw:py-1.5 mw:border-b mw:border-gray-300 lg:text-base">
                                                                    {product.taste}
                                                                </span>

                                                                <span className="text-sm mw:py-1.5 mw:border-b mw:border-gray-300 lg:text-base">
                                                                    Цена:
                                                                </span>
                                                                <span className="text-sm text-right mw:py-1.5 mw:border-b mw:border-gray-300 lg:text-base">
                                                                    {product.price} Р.
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex justify-between font-bold border-t pt-4 mt-2">
                                            <span>Итого:</span>
                                            <span>{order.totalPrice} ₽</span>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                )}
            </SheetContent>
        </Sheet>
    );
};
