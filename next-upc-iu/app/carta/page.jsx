"use client";

import Footer from "../components/footer";
import Fuse from "fuse.js";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { IoFilter } from "react-icons/io5";
import Card from "../components/card";
import Search from "../components/search";
import PriceFilter from "../components/pricefilter";
import { useState, useMemo } from "react";

export default function CardPage() {
    const [valueSlider, setValueSlider] = useState([0, 15]);
    const [valueSearch, setValueSearch] = useState("");
    const [valueCategories, setValueCategories] = useState({
        vegan: false,
        vegetarian: false,
    });
    const [valueAllergies, setValueAllergies] = useState({
        lactose: false,
        gluten: false,
    });

    const carta = useMemo(
        () => [
            {
                id: 1,
                image: "/example.jpg",
                name: "Test 1",
                price: 3.5,
                description: "asdsad",
                category: {
                    vegan: true,
                    vegetarian: true,
                },
                allergies: {
                    lactose: false,
                    gluten: false,
                },
            },
            {
                id: 2,
                image: "/example.jpg",
                name: "Test 2",
                price: 3,
                description: "asdasddsadasasdasddsa",
                category: {
                    vegan: true,
                    vegetarian: false,
                },
                allergies: {
                    lactose: false,
                    gluten: false,
                },
            },
            {
                id: 3,
                image: "/example.jpg",
                name: "Test 3",
                price: 5,
                description: "asdsaasdasasdd",
                category: {
                    vegan: false,
                    vegetarian: true,
                },
                allergies: {
                    lactose: false,
                    gluten: false,
                },
            },
            {
                id: 4,
                image: "/example.jpg",
                name: "Test 4",
                price: 2,
                description: "aad",
                category: {
                    vegan: false,
                    vegetarian: false,
                },
                allergies: {
                    lactose: false,
                    gluten: false,
                },
            },
            {
                id: 5,
                image: "/example.jpg",
                name: "Test 5",
                price: 3.5,
                description: "asdsad",
                category: {
                    vegan: false,
                    vegetarian: false,
                },
                allergies: {
                    lactose: true,
                    gluten: true,
                },
            },
            {
                id: 6,
                image: "/example.jpg",
                name: "Test 6",
                price: 6,
                description: "sd",
                category: {
                    vegan: false,
                    vegetarian: false,
                },
                allergies: {
                    lactose: true,
                    gluten: false,
                },
            },
            {
                id: 7,
                image: "/example.jpg",
                name: "Test 7",
                price: 5,
                description: "asdsaasdasasdd",
                category: {
                    vegan: false,
                    vegetarian: false,
                },
                allergies: {
                    lactose: false,
                    gluten: true,
                },
            },
            {
                id: 8,
                image: "/example.jpg",
                name: "Test 8",
                price: 10,
                description: "aad",
                category: {
                    vegan: false,
                    vegetarian: false,
                },
                allergies: {
                    lactose: false,
                    gluten: false,
                },
            },
        ],
        []
    );

    const restoreFilters = function () {
        setValueSlider([0, 15]);
        setValueSearch("");
        setValueCategories({ vegan: false, vegetarian: false });
        setValueAllergies({ lactose: false, gluten: false });
    };

    const filteredCarta = useMemo(
        () =>
            carta
                .filter(
                    (e) =>
                        e.price >= valueSlider[0] && e.price <= valueSlider[1]
                )
                .filter((e) => {
                    if (valueCategories.vegan && valueCategories.vegetarian) {
                        return (
                            e.category.vegan == valueCategories.vegan &&
                            e.category.vegetarian == valueCategories.vegetarian
                        );
                    }

                    if (valueCategories.vegan) {
                        return e.category.vegan === valueCategories.vegan;
                    }

                    if (valueCategories.vegetarian) {
                        return (
                            e.category.vegetarian === valueCategories.vegetarian
                        );
                    }

                    return true;
                })
                .filter((e) => {
                    if (valueAllergies.lactose && valueAllergies.gluten) {
                        return (
                            e.allergies.lactose != valueAllergies.lactose &&
                            e.allergies.gluten != valueAllergies.gluten
                        );
                    }

                    if (valueAllergies.lactose) {
                        return e.allergies.lactose !== valueAllergies.lactose;
                    }

                    if (valueAllergies.gluten) {
                        return e.allergies.gluten !== valueAllergies.gluten;
                    }

                    return true;
                }),
        [carta, valueSlider, valueCategories, valueAllergies]
    );

    const fuse = useMemo(
        () =>
            new Fuse(filteredCarta, {
                keys: ["name", "description"],
                threshold: 0.4,
            }),
        [filteredCarta]
    );

    const filteredCartaSearched = useMemo(
        () =>
            valueSearch !== ""
                ? fuse.search(valueSearch).map((e) => e.item)
                : filteredCarta,
        [fuse, filteredCarta, valueSearch]
    );

    return (
        <>
            <main className="min-h-almostScreen pb-10 px-5">
                {/* CATEGORIES I BUSCADOR */}
                <div
                    style={{ backgroundColor: "#333" }}
                    className="-mx-5 mb-7 p-4 flex justify-between items-center"
                >
                    <div className="md:hidden">
                        <IoFilter
                            size={20}
                            className="text-custom-gray2 cursor-pointer hover:text-hover-gray transition"
                        />
                    </div>
                    <div className="flex gap-10 text-custom-gray2">
                        <Link
                            href="/carta"
                            className="uppercase text-sm hover:text-hover-gray transition"
                        >
                            Esmorzar
                        </Link>
                        <Link
                            href="/carta"
                            className="uppercase text-sm hover:text-hover-gray transition"
                        >
                            Dinar
                        </Link>
                        <Link
                            href="/carta"
                            className="uppercase text-sm hover:text-hover-gray transition"
                        >
                            Begudes
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <Search
                            placeholder="Producte"
                            value={valueSearch}
                            setValue={setValueSearch}
                        />
                    </div>
                    <div className="md:hidden">
                        <BsSearch className="text-custom-gray2 cursor-pointer hover:text-hover-gray transition" />
                    </div>
                </div>
                <div className="flex gap-8">
                    {/* FILTRES */}
                    <div className="hidden md:block w-64">
                        <div className="flex gap-4 justify-between pb-2">
                            <h1 className="text-black text-sm font-semibold uppercase">
                                Filtres
                            </h1>
                            <button
                                className="py-0 px-0 text-primary text-xs object-contain hover:text-primary-hover transition"
                                onClick={restoreFilters}
                            >
                                Restablir filtres
                            </button>
                        </div>
                        <div className="divide-y text-xs">
                            <div className="py-2">
                                <h2 className="font-medium uppercase">Preu</h2>
                                <div className="py-2">
                                    <PriceFilter
                                        value={valueSlider}
                                        setValue={setValueSlider}
                                    />
                                </div>
                            </div>
                            <div className="py-2">
                                <h2 className="font-medium uppercase">
                                    Categoria
                                </h2>
                                <ul className="grid gap-2 py-2">
                                    <li className="flex gap-1 items-center">
                                        <input
                                            type="checkbox"
                                            className="appearance-none h-2 w-2 bg-gray-200 rounded-full hover:bg-primary transition duration-300 hover:cursor-pointer checked:bg-primary"
                                            id="01"
                                            name="01"
                                            checked={valueCategories.vegetarian}
                                            onChange={(e) =>
                                                setValueCategories({
                                                    ...valueCategories,
                                                    vegetarian:
                                                        e.target.checked,
                                                })
                                            }
                                        />
                                        <label
                                            htmlFor="01"
                                            className="hover:cursor-pointer"
                                        >
                                            Vegetarià
                                        </label>
                                    </li>
                                    <li className="flex gap-1 items-center">
                                        <input
                                            type="checkbox"
                                            className="appearance-none h-2 w-2 bg-gray-200 rounded-full hover:bg-primary transition duration-300 hover:cursor-pointer checked:bg-primary"
                                            id="02"
                                            name="02"
                                            checked={valueCategories.vegan}
                                            onChange={(e) =>
                                                setValueCategories({
                                                    ...valueCategories,
                                                    vegan: e.target.checked,
                                                })
                                            }
                                        />
                                        <label
                                            htmlFor="02"
                                            className="hover:cursor-pointer"
                                        >
                                            Vegà
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="py-2">
                                <h2 className="font-medium uppercase">
                                    Al·lergògens
                                </h2>
                                <ul className="grid gap-2 py-2">
                                    <li className="flex gap-1 items-center">
                                        <input
                                            type="checkbox"
                                            className="appearance-none h-2 w-2 bg-gray-200 rounded-full hover:bg-primary transition duration-300 hover:cursor-pointer checked:bg-primary"
                                            id="03"
                                            name="03"
                                            checked={valueAllergies.gluten}
                                            onChange={(e) =>
                                                setValueAllergies({
                                                    ...valueAllergies,
                                                    gluten: e.target.checked,
                                                })
                                            }
                                        />
                                        <label
                                            htmlFor="03"
                                            className="hover:cursor-pointer"
                                        >
                                            Sense gluten
                                        </label>
                                    </li>
                                    <li className="flex gap-1 items-center">
                                        <input
                                            type="checkbox"
                                            className="appearance-none h-2 w-2 bg-gray-200 rounded-full hover:bg-primary transition duration-300 hover:cursor-pointer checked:bg-primary"
                                            id="04"
                                            name="04"
                                            checked={valueAllergies.lactose}
                                            onChange={(e) =>
                                                setValueAllergies({
                                                    ...valueAllergies,
                                                    lactose: e.target.checked,
                                                })
                                            }
                                        />
                                        <label
                                            htmlFor="04"
                                            className="hover:cursor-pointer"
                                        >
                                            Sense lactosa
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* GRID PRODUCTES */}
                    <div className="flex-1">
                        <ul className="grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {filteredCartaSearched.map((e) => {
                                return (
                                    <li key={e.id}>
                                        <Card
                                            image={e.image}
                                            name={e.name}
                                            price={e.price}
                                            description={e.description}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
