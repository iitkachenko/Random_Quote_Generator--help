const Tags = () => {
  return (
    <div className="mt-14 mx-auto relative h-11 bg-gray-300 border-2 flex items-center justify-center gap-[.5em] p-[.5em] rounded-3xl outline-none w-[20em] focus:border-cyan-300">
      <span className="flex-grow-[1] flex gap-2 flex-wrap">
      </span>
      <button className="bg-none border-t-gray-800 border-none outline-none cursor-pointer p-0 text-xl focus:text-gray-700 hover:text-gray-700">
        &times;
      </button>
      <div className="bg-gray-400 self-stretch w-[0.05em]"></div>
      <div
        className="border-[.38em] cursor-pointer border-transparent border-t-gray-800
      translate-y-[25%]"
      ></div>
      <ul
        className={`absolute hidden overflow-y-scroll m-0 p-0 list-none max-h-60 border-2 border-gray-400 rounded-md w-full left-0 top-[calc(100%+.25em)] bg-white z-10`}
      >
        <li className="p-4 cursor-pointer">hey</li>
        <li className="p-4 cursor-pointer">hey</li>
        <li className="p-4 cursor-pointer">hey</li>
      </ul>
    </div>
  );
};

export default Tags;
