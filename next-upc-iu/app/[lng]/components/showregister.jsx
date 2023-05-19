"use client";

import Image from "next/image";
import Footer from "../components/footer";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useTranslation } from "@/app/i18n/client";

export default function ShowRegister({ lng }) {
    const { t } = useTranslation(lng)
    const [triedRegister, setTriedRegister] = useState(false);

    const [valueName, setValueName] = useState("");
    const [valueSurname, setValueSurname] = useState("");
    const [valueEmail, setValueEmail] = useState("");
    const [valuePassword, setValuePassword] = useState("");
    const [valuePasswordConfirmation, setValuePasswordConfirmation] =
        useState("");

    const handleChangeName = (event) => {
        const result = event.target.value;

        setValueName(result);
    };

    const handleChangeSurname = (event) => {
        const result = event.target.value;

        setValueSurname(result);
    };

    const handleChangeEmail = (event) => {
        const result = event.target.value;

        setValueEmail(result);
    };

    const handleChangePassword = (event) => {
        const result = event.target.value;

        setValuePassword(result);
    };

    const handleChangePasswordConfirmation = (event) => {
        const result = event.target.value;

        setValuePasswordConfirmation(result);
    };

    const handleRegister = (event) => {
        axios
            .post(
                "/register",
                {
                    name: valueName,
                    surname: valueSurname,
                    email: valueEmail,
                    password: valuePassword,
                    passwordConfirmation: valuePasswordConfirmation,
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
                    <div className="flex gap-2">
                        <label
                            className="block w-1/3 text-gray-700 text-sm font-bold mb-2"
                            htmlFor="nom"
                        >
                            {t('form_name')}
                        </label>
                        <label
                            className="block w-2/3 text-gray-700 text-sm font-bold mb-2"
                            htmlFor="cognoms"
                        >
                            {t('form_surname')}
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <input
                            className={`shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline transition-colors ${
                                triedRegister ? "border-red-500" : ""
                            }`}
                            id="nom"
                            type="text"
                            placeholder="foo"
                            value={valueName}
                            onChange={handleChangeName}
                        />
                        <input
                            className={`relative shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline transition-colors ${
                                triedRegister ? "border-red-500" : ""
                            }`}
                            id="cognoms"
                            type="text"
                            placeholder="bar baz"
                            value={valueSurname}
                            onChange={handleChangeSurname}
                        />
                    </div>
                    {triedRegister ? (
                        <p className="text-red-500 text-xs italic mt-2">
                            {t('form_name_surname_error')}
                        </p>
                    ) : (
                        ""
                    )}
                </div>
                <div>
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        {t('form_email')}
                    </label>
                    <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline transition-colors ${
                            triedRegister ? "border-red-500" : ""
                        }`}
                        id="email"
                        type="email"
                        placeholder="exemple@email.com"
                        value={valueEmail}
                        onChange={handleChangeEmail}
                    />
                    {triedRegister ? (
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
                            triedRegister ? "border-red-500" : ""
                        }`}
                        id="password"
                        type="password"
                        placeholder="******************"
                        value={valuePassword}
                        onChange={handleChangePassword}
                    />
                    {triedRegister ? (
                        <p className="text-red-500 text-xs italic mt-2">
                            {t('form_password_error')}
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
                        {t('form_password_confirmation')}
                    </label>
                    <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline transition-colors ${
                            triedRegister ? "border-red-500" : ""
                        }`}
                        id="password-confirm"
                        type="password"
                        placeholder="******************"
                        value={valuePasswordConfirmation}
                        onChange={handleChangePasswordConfirmation}
                    />
                    {triedRegister ? (
                        <p className="text-red-500 text-xs italic mt-2">
                            {t('form_password_confirmation_error')}
                        </p>
                    ) : (
                        ""
                    )}
                </div>
                <button
                    onClick={setTriedRegister}
                    className="bg-primary-fill w-full hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    {t('form_register')}
                </button>
            </form>
            <section className="flex gap-4 w-full mb-6">
                <div className="rounded p-4 w-1/2 flex justify-center bg-white shadow-xl-full hover:bg-gray-100 transition-colors cursor-pointer">
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
