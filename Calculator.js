import React, { useState } from "react";
function Calculator() {
  const [result, setResult] = useState("");

  const clickHandle = (e) => {
    setResult(result.concat(e.target.value));
  };

  const clearScreen = () => {
    setResult(" ");
  };

  const calculate = () => {
    setResult(eval(result).toString());
  };
  return (
    <>
      <div className="bg-gray-800 text-white w-screen h-screen flex justify-center items-center">
        <div className="main w-64 h-auto bg-gray-900 rounded-2xl shadow-xl border-4 border-gray-100">
          <div className="screen p-2">
            <input
              type="text"
              value={result}
              className="text-black w-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] placeholder-black px-1 rounded-lg bg-gray text-2xl pt-10 outline-none text-right placeholder-0"
            />
          </div>
          <div className="brand bg-gray-200 bg-opacity-90 text-center mb-2">
            <h1 className="text-gray-900 text-xs font-bold">Subham</h1>
          </div>
          {/* 1 */}
          <div className="keyword">
            <div className="flex justify-between m-2">
              <input
                type="button"
                onClick={clearScreen}
                value="c"
                className="bg-red-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              />
              <input
                type="button"
                onClick={clickHandle}
                value="<"
                className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              />
              <input
                type="button"
                onClick={clickHandle}
                value="%"
                className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              />
              <input
                type="button"
                onClick={clickHandle}
                value="/"
                className="bg-pink-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              />
            </div>
            {/* 2 */}
            <div className="flex justify-between m-2">
              <input
                type="button"
                onClick={clickHandle}
                value="7"
                className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              />
              <input
                type="button"
                onClick={clickHandle}
                value="8"
                className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              />
              <input
                type="button"
                onClick={clickHandle}
                value="9"
                className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              />
              <input
                type="button"
                onClick={clickHandle}
                value="*"
                className="bg-green-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              />
            </div>
            {/* 3 */}
            <div className="flex justify-between m-2">
              <input
                type="button"
                onClick={clickHandle}
                value="4"
                className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              />
              <input
                type="button"
                onClick={clickHandle}
                value="5"
                className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              />
              <input
                type="button"
                onClick={clickHandle}
                value="6"
                className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              />
              <input
                type="button"
                onClick={clickHandle}
                value="-"
                className="bg-blue-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              />
            </div>
            {/* 4 */}
            <div className="flex justify-between m-2">
              <input
                type="button"
                onClick={clickHandle}
                value="1"
                className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              />
              <input
                type="button"
                onClick={clickHandle}
                value="2"
                className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              />
              <input
                type="button"
                onClick={clickHandle}
                value="3"
                className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              />
              <input
                type="button"
                onClick={clickHandle}
                value="+"
                className="bg-violet-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              />
            </div>
            {/* 5 */}
            <div className="flex justify-between m-2">
              <input
                type="button"
                onClick={clickHandle}
                value="0"
                className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              />
              <input
                type="button"
                onClick={clickHandle}
                value="00"
                className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              />
              <input
                type="button"
                onClick={clickHandle}
                value="."
                className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              />
              <input
                type="button"
                onClick={calculate}
                value="="
                className="bg-orange-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
