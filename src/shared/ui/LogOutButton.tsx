import { AUTH_ERRORS, FIREBASE_ERROR } from "@/constants/error";
import type { UserCredentialType } from "@/context/model/types";
import { useAuth } from "@/hooks/UseAuth";
import { FirebaseError } from "firebase/app";
import { useForm } from "react-hook-form";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export const LogOutButton = () => {
    const {
        setError,
        handleSubmit,
        formState: { errors },
    } = useForm<UserCredentialType>();
    const navigate = useNavigate();
    const { logOut } = useAuth();

    const onLogOut = async () => {
        try {
            await logOut();
            navigate("/auth");
        } catch (error: unknown) {
            if (error instanceof FirebaseError) {
                const errorMessage = FIREBASE_ERROR[error.code] || AUTH_ERRORS.UNKNOWN;
                if (error.code?.includes("network")) {
                    setError("root", { message: errorMessage });
                }
            }
        }
    };
    return (
        <div className="flex items-center pb-1 border-b-2 border-transparent">
            <CiLogout
                className="size-5 md:size-7 text-[#68B738] cursor-pointer text-xl "
                onClick={handleSubmit(onLogOut)}
            />
            {errors.root && (
                <div>
                    <p>{errors.root?.message}</p>
                </div>
            )}
        </div>
    );
};
