"use client";

import Fuse from "fuse.js";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { IoFilter } from "react-icons/io5";
import Card from "../components/card";
import Search from "../components/search";
import PriceFilter from "../components/pricefilter";
import { useState, useMemo } from "react";
import { useTranslation } from "@/app/i18n/client";
import { motion, AnimatePresence } from "framer-motion";

export default function ShowCard({ products, session, lng }) {
  const { t } = useTranslation(lng)
  const [valueSlider, setValueSlider] = useState([0, 15]);
  const [valueSearch, setValueSearch] = useState("");
  const [valueCategories, setValueCategories] = useState({
    vegan: false,
    vegetarian: false,
    esmorzars: false,
    begudes: false,
  });
  const [valueAllergies, setValueAllergies] = useState({
    lactose: false,
    gluten: false,
  });

  const carta = useMemo(
    () => products,
    []
  );

  const restoreFilters = function () {
    setValueSlider([0, 15]);
    setValueSearch("");
    setValueCategories({ vegan: false, vegetarian: false, esmorzars: false, begudes: false,});
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

  const [popupVisible, setPopupVisible] = useState(false);

  const handlePopup = function () {
    setPopupVisible(true);
    setTimeout(() => {setPopupVisible(false)}, 5000);
  }

  return (
    <>
      <div className="flex flex-wrap mt-4 gap-8">
        {/* FILTRES */}
        <div className="basis-full md:basis-0 w-64">
          <div className="flex gap-4 justify-between pb-2">
            <h1 className="text-black text-sm font-semibold uppercase">
                {t('carta_filters')}
            </h1>
            <button
                className="py-0 px-0 text-primary text-xs object-contain hover:text-primary-hover transition"
                onClick={restoreFilters}
            >
                {t('carta_reset_filters')}

            </button>
          </div>
          <div className="text-xs">
            <div className="flex flex-col xs:flex-row md:block">
              <div className="py-2 xs:border-b md:border-0 xs:flex-1">
                <h2 className="font-medium uppercase">{t('carta_search')}</h2>
                <div className="py-2 xs:pr-3 md:pr-0">
                  <Search
                    placeholder="Producte"
                    value={valueSearch}
                    setValue={setValueSearch}
                  />
                </div>
              </div>
              <div className="py-2 border-b xs:flex-1">
                <h2 className="font-medium uppercase">{t('carta_price')}</h2>
                <div className="py-2">
                  <PriceFilter
                    value={valueSlider}
                    setValue={setValueSlider}
                  />
                </div>
              </div>
            </div>
            <div className="py-2 border-b">
              <h2 className="font-medium uppercase">
              {t('carta_category')}
              </h2>
              <ul className="flex flex-row md:flex-col gap-2 py-2">
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
                    {t('carta_vegetarian')}
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
                    {t('carta_vegan')}
                  </label>
                </li>
                <li className="flex gap-1 items-center">
                  <input
                    type="checkbox"
                    className="appearance-none h-2 w-2 bg-gray-200 rounded-full hover:bg-primary transition duration-300 hover:cursor-pointer checked:bg-primary"
                    id="03"
                    name="03"
                    checked={valueCategories.esmorzars}
                    onChange={(e) =>
                      setValueCategories({
                        ...valueCategories,
                        esmorzars: e.target.checked,
                      })
                    }
                  />
                  <label
                    htmlFor="03"
                    className="hover:cursor-pointer"
                  >
                    {t('carta_breakfast')}
                  </label>
                </li>
                <li className="flex gap-1 items-center">
                  <input
                    type="checkbox"
                    className="appearance-none h-2 w-2 bg-gray-200 rounded-full hover:bg-primary transition duration-300 hover:cursor-pointer checked:bg-primary"
                    id="04"
                    name="04"
                    checked={valueCategories.begudes}
                    onChange={(e) =>
                      setValueCategories({
                        ...valueCategories,
                        begudes: e.target.checked,
                      })
                    }
                  />
                  <label
                    htmlFor="04"
                    className="hover:cursor-pointer"
                  >
                    {t('carta_drinks')}
                  </label>
                </li>
              </ul>
            </div>
            <div className="py-2 border-b">
              <h2 className="font-medium uppercase">
              {t('carta_alergies')} 
              </h2>
              <ul className="flex flex-row md:flex-col gap-2 py-2">
                <li className="flex gap-1 items-center">
                  <input
                    type="checkbox"
                    className="appearance-none h-2 w-2 bg-gray-200 rounded-full hover:bg-primary transition duration-300 hover:cursor-pointer checked:bg-primary"
                    id="05"
                    name="05"
                    checked={valueAllergies.gluten}
                    onChange={(e) =>
                      setValueAllergies({
                        ...valueAllergies,
                        gluten: e.target.checked,
                      })
                    }
                  />
                  <label
                    htmlFor="05"
                    className="hover:cursor-pointer"
                  >
                    {t('carta_no_gluten')}
                  </label>
                </li>
                <li className="flex gap-1 items-center">
                  <input
                    type="checkbox"
                    className="appearance-none h-2 w-2 bg-gray-200 rounded-full hover:bg-primary transition duration-300 hover:cursor-pointer checked:bg-primary"
                    id="06"
                    name="06"
                    checked={valueAllergies.lactose}
                    onChange={(e) =>
                      setValueAllergies({
                        ...valueAllergies,
                        lactose: e.target.checked,
                      })
                    }
                  />
                  <label
                    htmlFor="06"
                    className="hover:cursor-pointer"
                  >
                    {t('carta_no_lactose')}
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
                <li key={e._id}>
                  <Card
                    id={e._id}
                    image={e.imgURL}
                    name={e[`name_${lng}`]}
                    price={e.price}
                    description={e[`description_${lng}`]}
                    allergies={e.allergies}
                    session={session}
                    lng={lng}
                    onAdd={handlePopup}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <AnimatePresence>
          {popupVisible && (
            <motion.div
                className="fixed inset-0 w-full h-full bg-transparent flex items-start justify-center pointer-events-none z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                exit={{ opacity: 0, y: -20 }}
            >
              <div className="rounded shadow-lg bg-green-500 text-white p-4 mt-4">
                {t('carta_popup')}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
