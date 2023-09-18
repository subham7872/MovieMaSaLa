import React, { useState } from "react";

const images = [
  "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner1-1680x900.jpg",
  "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2018/09/24/735007-23pti-ap9232018000157b.jpg",
  "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2018/09/asia-cup-final-1538189038.jpg",
  "https://images.thequint.com/thequint/2018-09/9a9a8c71-43c9-466d-923e-28a1cd0c8abc/e25e9b37_d487_416b_ba2b_da1fa9c13b69.jpg?%20%20%20%20%20%20%20%20%20%20%20%20%20%20auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0",
  "https://images.news18.com/static-bengali/2023/09/ASIA-CUP-2023-CHAMPION.jpg?im=FitAndFill,width=1200,height=675",
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const nextSide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  return (
    <div>
      <div className="slider flex justify-evenly p-5 items-center h-screen">
        <div
          className="left_arrow bg-gray-200 hover:bg-gray-400 hover:text-white p-2 rounded-lg cursor-pointer"
          onClick={prevSide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="image">
          {images.map(
            (image, index) =>
              current === index && (
                <div key={image} className="slide flex justify-center">
                  <img
                    className="w-[80%] rounded-2xl"
                    src={image}
                    alt="images"
                  />
                </div>
              )
          )}
        </div>
        <div
          className="right_arrow bg-gray-200 hover:bg-gray-400 hover:text-white p-2 rounded-lg cursor-pointer"
          onClick={nextSide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
