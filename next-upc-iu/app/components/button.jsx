function Button({text, white}) {
  return (
    {...(white
      ? <button className="border-4 border-white text-white w-full font-extrabold uppercase text-lg py-2 px-4 hover:shadow-custom-button-white transition-shadow">
          { text }
        </button>
      : <button className="border-2 border-custom-black font-semibold uppercase text-lg py-2 px-4 hover:shadow-custom-button transition-shadow">
          { text }
        </button>
    )}
    // <button className="border-2 border-custom-black font-semibold uppercase text-lg py-2 px-4 hover:shadow-custom-button transition-shadow">
    //   { text }
    // </button>
  );
}

export default Button;