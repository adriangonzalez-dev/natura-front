
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Alert } from '../alerts/Alert';
import { toast } from 'sonner';
import { authService } from '../../services/authServices';
import { useState } from 'react';
import { DotPulse } from '@uiball/loaders';

export const Register = () => {
    const { register, handleSubmit, formState: { errors }  } = useForm();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onSubmit = async (data: any) => {
        setIsLoading(true);
        try {
            const response = await authService.register({
                username: data.username,
                email: data.email,
                password: data.password
            })
            if(response.status !== 200){
                toast.error('Error al registrarse');
            }
            toast.success(response.data.msg);
            navigate('/auth/login');
        } catch (error:Error | any) {
            console.log(error);
            toast.error(String(error.response?.data.msg));
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    Registro
                </h1>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mb-0 mt-3 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                    <p className="text-center text-lg font-medium">Ingresa tus datos</p>

                    <div>
                        <label htmlFor="email" className="sr-only">Nombre de usuario</label>

                        <div className="relative">
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Ingresa tu usuario"
                                {...register('username', {
                                        required: {
                                            value: true,
                                            message: 'El usuario es requerido'
                                        }
                                    }
                                )}
                            />
                        </div>
                        {
                            errors.username && <Alert message={String(errors.username.message)}/>
                        }
                    </div>

                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Ingresa tu email"
                                {...register('email', {
                                        required: {
                                            value: true,
                                            message: 'El email es requerido'
                                        },
                                        pattern: {
                                            value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'El email no es válido'
                                        }
                                    }
                                )}
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                        {
                            errors.email && <Alert message={String(errors.email.message)}/>
                        }
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Contraseña</label>

                        <div className="relative">
                            <input
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="ingresa tu contraseña"
                                {...register('password', {
                                        required: {
                                            value: true,
                                            message: 'La contraseña es requerida'
                                        },
                                        minLength: {
                                            value: 8,
                                            message: 'La contraseña debe tener al menos 8 caracteres'
                                        }
                                    }
                                )}
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                        {
                            errors.password && <Alert message={String(errors.password.message)}/>
                        }
                    </div>

                    <button
                        type="submit"
                        className="flex items-center justify-center w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        disabled={isLoading}
                    >
                        {isLoading ? <DotPulse size={50} speed={1} color="#fff"/> : 'Registrate!'}
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        Ya tienes una cuenta? &nbsp;
                        <Link className="underline" to="/auth/login">Inicia sesión</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
