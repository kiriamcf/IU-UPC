"use client";

import Footer from "../components/footer";
import { useState } from "react";
import axios from "axios";
import { useTranslation } from "@/app/i18n/client";

export default function ShowBooking({lng}) {
    const { t } = useTranslation(lng)
    const [triedReserva, setTriedReserva] = useState(false);

    const [valueName, setValueName] = useState("");
    const [valueSurname, setValueSurname] = useState("");
    const [valueEmail, setValueEmail] = useState("");
    const [valueTelephone, setValueTelephone] = useState("");
    const [valuePeople, setValuePeople] = useState("");

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

    const handleChangeTelephone = (event) => {
        const result = event.target.value.replace(/\D/g, "");

        setValueTelephone(result);
    };

    const handleChangePeople = (event) => {
        const result = event.target.value.replace(/\D/g, "");

        if (result < 9 && result != 0) {
            setValuePeople(result);
        }
    };

    const handleRemovePeople = (event) => {
        setValuePeople("");
    };

    const handleReserva = (event) => {
        axios
            .post(
                "/reserva",
                {
                    name: valueName,
                    surname: valueSurname,
                    email: valueEmail,
                    phone: valueTelephone,
                    people: valuePeople,
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
                                triedReserva ? "border-red-500" : ""
                            }`}
                            id="nom"
                            type="text"
                            placeholder="foo"
                            value={valueName}
                            onChange={handleChangeName}
                        />
                        <input
                            className={`relative shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline transition-colors ${
                                triedReserva ? "border-red-500" : ""
                            }`}
                            id="cognoms"
                            type="text"
                            placeholder="bar baz"
                            value={valueSurname}
                            onChange={handleChangeSurname}
                        />
                    </div>
                    {triedReserva ? (
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
                            triedReserva ? "border-red-500" : ""
                        }`}
                        id="email"
                        type="email"
                        placeholder="exemple@email.com"
                        value={valueEmail}
                        onChange={handleChangeEmail}
                    />
                    {triedReserva ? (
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
                        htmlFor="telephone"
                    >
                        {t('form_phone')}
                    </label>
                    <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline transition-colors ${
                            triedReserva ? "border-red-500" : ""
                        }`}
                        id="telephone"
                        type="tel"
                        placeholder="612 34 56 78"
                        value={valueTelephone}
                        onChange={handleChangeTelephone}
                        pattern="(?:6[0-9]{2}|7[1-9][0-9])(?: ?[0-9]{3}){2}\r?$"
                    />
                    {triedReserva ? (
                        <p className="text-red-500 text-xs italic mt-2">
                            {t('form_phone_error')}
                        </p>
                    ) : (
                        ""
                    )}
                </div>
                <div>
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="people"
                    >
                        {t('form_number')}
                    </label>
                    <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline transition-colors ${
                            triedReserva ? "border-red-500" : ""
                        }`}
                        id="people"
                        type="text"
                        placeholder="1-8"
                        value={valuePeople}
                        onChange={handleChangePeople}
                        onKeyDown={handleRemovePeople}
                    />
                    {triedReserva ? (
                        <p className="text-red-500 text-xs italic mt-2">
                            {t('form_number_error')}
                        </p>
                    ) : (
                        ""
                    )}
                </div>

                <button
                    onClick={setTriedReserva}
                    className="bg-primary-fill w-full hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    {t('form_book')}
                </button>
            </form>
        </>
    );
}
