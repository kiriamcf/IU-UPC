<template>
    <main class="min-h-almostScreen w-full max-w-sm mx-auto pt-8">
        <form class="bg-white shadow-xl-full rounded p-8 mb-6 flex flex-col gap-4">
            <div>
                <div class="flex gap-2">
                    <label
                        class="block w-1/3 text-gray-700 text-sm font-bold mb-2"
                        for="nom"
                    >
                        Nom
                    </label>
                    <label
                        class="block w-2/3 text-gray-700 text-sm font-bold mb-2"
                        for="cognoms"
                    >
                        Cognoms
                    </label>
                </div>
                <div class="flex gap-2">
                    <input
                        class={`shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline transition-colors ${
                            triedReserva ? "border-red-500" : ""
                        }`}
                        id="nom"
                        type="text"
                        placeholder="foo"
                        value={valueName}
                        onChange={handleChangeName}
                    />
                    <input
                        class={`relative shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline transition-colors ${
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
                    <p class="text-red-500 text-xs italic mt-2">
                        Introdueix el nom i cognoms.
                    </p>
                ) : (
                    ""
                )}
            </div>
            <div>
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="email"
                >
                    Correu electrònic
                </label>
                <input
                    class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline transition-colors ${
                        triedReserva ? "border-red-500" : ""
                    }`}
                    id="email"
                    type="email"
                    placeholder="exemple@email.com"
                    value={valueEmail}
                    onChange={handleChangeEmail}
                />
                {triedReserva ? (
                    <p class="text-red-500 text-xs italic mt-2">
                        Introdueix el correu.
                    </p>
                ) : (
                    ""
                )}
            </div>
            <div>
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="telephone"
                >
                    Telèfon
                </label>
                <input
                    class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline transition-colors ${
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
                    <p class="text-red-500 text-xs italic mt-2">
                        Introdueix el telèfon.
                    </p>
                ) : (
                    ""
                )}
            </div>
            <div>
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="people"
                >
                    Nombre de persones
                </label>
                <input
                    class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline transition-colors ${
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
                    <p class="text-red-500 text-xs italic mt-2">
                        Introdueix la quantitat de persones.
                    </p>
                ) : (
                    ""
                )}
            </div>

            <button
                onClick={setTriedReserva}
                class="bg-primary-fill w-full hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
            >
                Reservar
            </button>
        </form>
    </main>
</template>