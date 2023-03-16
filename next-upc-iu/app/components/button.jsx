function Button({text}) {
  return (
    <button className="border-2 border-custom-black uppercase text-lg py-2 px-4 hover:shadow-custom-button transition-shadow">
      { text }
    </button>
  );
}

export default Button;