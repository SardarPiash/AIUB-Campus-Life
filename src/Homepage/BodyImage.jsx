import React from "react";

export default function BodyImage({ imgSrc, title, text, imgPosition }) {
  return (
    <div>
      <div className="flex p-6 rounded-lg shadow-md">
        {imgPosition === "left" && (
          <div className="w-1/2 fade-in-left flex-none">
            <img
              src={imgSrc}
              alt="Student Activities"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        )}
        <div
          className={`w-1/2 p-4 rounded-lg shadow-inner ${
            imgPosition === "left" ? "fade-in-right" : "fade-in-left"
          } flex-none`}
        >
          <div>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700 text-justify">{text}</p>
          </div>
        </div>
        {imgPosition === "right" && (
          <div className="w-1/2 fade-in-right flex-none">
            <img
              src={imgSrc}
              alt="Student Activities"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
