"use client";

import Image from "next/image";
import Footer from "../components/footer";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useTranslation } from "@/app/i18n/client";

export default function ShowLogin({ lng }) {
    const { t } = useTranslation(lng)
    const [triedLogin, setTriedLogin] = useState(false);

    const handleSignIn = () => {
        signIn("google");
    };

    const [valueEmail, setValueEmail] = useState("");
    const [valuePassword, setValuePassword] = useState("");

    const handleChangeEmail = (event) => {
        const result = event.target.value;

        setValueEmail(result);
    };

    const handleChangePassword = (event) => {
        const result = event.target.value;

        setValuePassword(result);
    };

    const handleLogin = (event) => {
        axios
            .post(
                "/login",
                {
                    email: valueEmail,
                    password: valuePassword,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <>
            <form className="bg-white shadow-xl-full rounded p-8 mb-6 flex flex-col gap-4">
                <div>
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        {t('form_email')}
                    </label>
                    <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline transition-colors ${
                            triedLogin ? "border-red-500" : ""
                        }`}
                        id="email"
                        type="email"
                        placeholder="exemple@email.com"
                        value={valueEmail}
                        onChange={handleChangeEmail}
                    />
                    {triedLogin ? (
                        <p className="text-red-500 text-xs italic mt-2">
                            {t('form_email_error')}
                        </p>
                    ) : (
                        ""
                    )}
                </div>
                <div>
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        {t('form_password')}
                    </label>
                    <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline transition-colors ${
                            triedLogin ? "border-red-500" : ""
                        }`}
                        id="password"
                        type="email"
                        placeholder="******************"
                        value={valuePassword}
                        onChange={handleChangePassword}
                    />
                    {triedLogin ? (
                        <p className="text-red-500 text-xs italic mt-2">
                            {t('form_password_error')}
                        </p>
                    ) : (
                        ""
                    )}
                </div>
                <button
                    onClick={setTriedLogin}
                    className="bg-primary-fill w-full hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    {t('form_login')}
                </button>
                <a
                    className="inline-block align-baseline font-bold text-sm text-primary-fill hover:text-primary"
                    href="#"
                >
                    {t('form_forgot_password')}
                </a>
            </form>
            <section className="flex gap-4 w-full">
                <div onClick={handleSignIn} className="rounded p-4 w-1/2 flex justify-center bg-white shadow-xl-full hover:bg-gray-100 transition-colors cursor-pointer">
                    <a href="#">
                        <FcGoogle size="40" />
                    </a>
                </div>
                <div className="rounded p-4 w-1/2 flex justify-center bg-white shadow-xl-full hover:bg-gray-100 transition-colors cursor-pointer">
                    <a href="#">
                        <Image
                            src="/upc.svg"
                            alt="Upc Logo"
                            width={40}
                            height={40}
                            className="h-[40px]"
                        />
                    </a>
                </div>
            </section>
        </>
    );
}
