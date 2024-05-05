import React, { useState } from "react";
import Spinner from "../uicomponents/Spinner";
import { signInWithGoogle } from "../../config/signInWithGoogle";
import { toast } from "react-toastify";

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSignInWithGoogle = async () => {
        setIsLoading(true);
        try {
            await signInWithGoogle();
            toast.success("Has iniciado sesion correctamente");
        } catch (error) {
            console.error(error);
            toast.error("Error al iniciar sesion");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className='relative container m-auto px-6 text-oracle-500 md:px-12 xl:px-40'>
                <div className='m-auto max-w-lg'>
                    <div className='rounded-xl bg-white shadow-xl'>
                        <div className='p-6 sm:p-16'>
                            <div className='space-y-4 flex items-center gap-8'>
                                <img className='size-20' src='/favicon.svg' alt='App logo' />
                                <h2 className='mb-8 text-2xl text-oracle-900 font-bold'>
                                    Inicia sesion para
                                    <br /> comenzar tu trayecto.
                                </h2>
                            </div>
                            <div className='mt-16 grid space-y-4'>
                                {isLoading ? (
                                    <div className='flex justify-center items-center'>
                                        <Spinner />
                                    </div>
                                ) : (
                                    <button
                                        onClick={handleSignInWithGoogle}
                                        className='group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-oracle-400 focus:bg-oracle-50 active:bg-oracle-100'>
                                        <div className='relative flex items-center space-x-4 justify-center'>
                                            <img
                                                src='https://tailus.io/sources/blocks/social/preview/images/google.svg'
                                                className='absolute left-0 w-5'
                                                alt='google logo'
                                            />
                                            <span className='block w-max font-semibold tracking-wide text-oracle-700 text-sm transition duration-300 group-hover:text-oracle-600 sm:text-base'>
                                                Iniciar sesion con Google
                                            </span>
                                        </div>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
