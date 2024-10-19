import React from "react";
import "../app.css";

const Card = ({img,title}) => {
  return (
    <div className="max-w-xs sm:max-w-md p-6 m-2 bg-white rounded-lg shadow-md text-center transition-transform duration-700 hover:rotate-360">
      {/* Image and Title Section */}
      <div className="mb-6">
        <img
          src={img}
          alt="Plumbing Service"
          className="w-full h-40 object-cover rounded-lg"
        />
        <h2 className="text-xl font-semibold text-gray-800 mt-4">{title}</h2>
      </div>

      {/* Description Text */}
      <p className="text-gray-600 text-sm mb-4">
        Our plumbers are ready to go 24/7 for emergencies, including nights, weekends, and holidays.
      </p>

      {/* Explore Section */}
      <h2 className="text-xl font-bold text-purple-800 flex items-center justify-center gap-2">
        EXPLORE THIS SERVICE
        <img
          src="https://media.istockphoto.com/id/876112880/vector/magnifying-glass-icon.jpg?s=612x612&w=0&k=20&c=i8nFCIM2WK2l5VwT_Y516dCmALU-aYyUvYSy0iXL93o="
          alt="Magnifying Glass"
          width={30}
          className="inline-block"
        />
      </h2>
    </div>
  );
};

export default Card;
