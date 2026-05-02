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

    return (
        <Sheet>
            <SheetTrigger className="p-2 rounded-lg font-oswald border border-gray-300">
                <IoReceiptSharp className="text-[#68B738]" size={20} />
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-gray-300">
                <SheetHeader className="border-b pb-4 mb-6">
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
                    <Accordion type="single" collapsible className="w-full">
                        {orders.map((order) => (
                            <AccordionItem key={order.id} value={order.id}>
                                <AccordionTrigger className="hover:no-underline">
                                    <div className="flex flex-col items-start text-left gap-1">
                                        <span className="font-bold text-sm">
                                            Заказ №{order.id.slice(0, 8)}...
                                        </span>
                                        <div className="flex gap-2 items-center">
                                            <Badge variant="outline" className="text-[10px]">
                                                {order.status}
                                            </Badge>
                                            <span className="text-xs text-gray-500">
                                                {order.totalPrice} ₽
                                            </span>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-3 pt-2">
                                        {order.items.map((product, idx) => (
                                            <div
                                                key={idx}
                                                className="flex justify-between items-center text-sm border-b border-dashed pb-2"
                                            >
                                                <span className="flex-1 pr-2">{product.name}</span>
                                                <span className="font-medium whitespace-nowrap">
                                                    {product.price} ₽
                                                </span>
                                            </div>
                                        ))}
                                        <div className="pt-2 flex justify-between font-bold border-t">
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
