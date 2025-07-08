const Header = ({ state }) => {
  console.log(state.step);
  return (
    <div className="flex items-center mt-5 justify-between w-full max-w-2xl mx-auto">
      {/* step one */}

      <div
        className={`flex flex-col items-center ${
          state.step === 1 ? "text-blue-600" : "text-gray-400"
        }`}
      >
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full  text-sm font-semibold ${
            state.step === 1
              ? "bg-blue-600 text-white"
              : "border-gray-300 text-gray-400 border-2 "
          }`}
        >
          1
        </div>
        <span className="mt-2 font-medium">Profile</span>
      </div>
      {/* step two */}
      <div
        className={`flex flex-col items-center ${
          state.step === 2 ? "text-blue-600" : "text-gray-400"
        }`}
      >
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full  text-sm font-semibold ${
            state.step === 2
              ? "bg-blue-600 text-white"
              : "border-gray-300 text-gray-400 border-2 "
          }`}
        >
          2
        </div>
        <span className="mt-2 font-medium">Contact</span>
      </div>

      {/* step three */}

      <div  className={`flex flex-col items-center ${
          state.step === 3 ? "text-blue-600" : "text-gray-400"
        }`}>
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full  text-sm font-semibold ${
            state.step === 3
              ? "bg-blue-600 text-white"
              : "border-gray-300 text-gray-400 border-2 "
          }`}
        >
          3
        </div>
        <span className="mt-2 font-medium">Confirm</span>
      </div>
    </div>
  );
};

export default Header;
