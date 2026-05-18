import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import type { UserCredentialType } from "@/context/model/types";

import { useAuth } from "@/hooks/UseAuth";
import { useForm } from "react-hook-form";
import { AUTH_ERRORS, FIREBASE_ERROR } from "@/constants/errors/firebase";
import { FirebaseError } from "firebase/app";
import { CircleLoading } from "@/shared";

export function Auth() {
    const { signIn, logIn } = useAuth();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<UserCredentialType>({
        mode: "onChange",
    });

    const navigate = useNavigate();

    const onLogIn = async ({ email, pass }: UserCredentialType) => {
        try {
            await logIn({ email, pass });
            navigate("/");
        } catch (error: unknown) {
            if (error instanceof FirebaseError) {
                const errorMessage = FIREBASE_ERROR[error.code] || AUTH_ERRORS.UNKNOWN;
                if (error.code?.includes("password")) {
                    setError("pass", { message: errorMessage });
                } else if (error.code?.includes("user") || error.code?.includes("email")) {
                    setError("email", { message: errorMessage });
                }
            }
        }
    };

    const onSignIn = async ({ email, pass }: UserCredentialType) => {
        try {
            await signIn({ email, pass });
            navigate("/");
        } catch (error: unknown) {
            if (error instanceof FirebaseError) {
                const errorMessage = FIREBASE_ERROR[error.code] || AUTH_ERRORS.UNKNOWN;
                if (error.code?.includes("password")) {
                    setError("pass", { message: errorMessage });
                } else if (error.code?.includes("user") || error.code?.includes("email")) {
                    setError("email", { message: errorMessage });
                }
            }
        }
    };

    const { isLoading } = useAuth();

    return isLoading ? (
        <CircleLoading />
    ) : (
        <div className="min-h-screen flex items-center justify-center p-4">
            <Card className="w-full max-w-sm m-auto">
                <CardHeader>
                    <CardTitle>Войдите в свой аккаунт</CardTitle>
                    <CardDescription>
                        Введите адрес электронной почты, чтобы войти в аккаунт.
                    </CardDescription>
                    <CardAction>
                        <Button variant="link" type="button" onClick={handleSubmit(onSignIn)}>
                            Войти
                        </Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form id="authForm">
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    {...register("email", {
                                        required: AUTH_ERRORS.REQUIRED,
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: AUTH_ERRORS.INVALID_EMAIL,
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <span className="text-red-500 text-sm ">
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    {/* <a
                                    href="#"
                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                    Forgot your password?
                                </a> */}
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    {...register("pass", {
                                        required: AUTH_ERRORS.REQUIRED,
                                        minLength: {
                                            value: 6,
                                            message: AUTH_ERRORS.WEAK_PASSWORD,
                                        },
                                    })}
                                />
                                {errors.pass && (
                                    <span className="text-red-500 text-sm ">
                                        {errors.pass.message}
                                    </span>
                                )}
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button
                        type="submit"
                        className="w-full bg-[#68B738]"
                        form="authForm"
                        onClick={handleSubmit(onLogIn)}
                    >
                        Зарегестрироваться
                    </Button>
                    {/* <Button variant="outline" className="w-full">
                    Login with Google
                </Button> */}
                </CardFooter>
            </Card>
        </div>
    );
}
