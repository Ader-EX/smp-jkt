/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

const RadioGroup = ({
  label,
  name,
  options,
  value,
  onChange,
  required = false,
  description,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <label className="block text-md mb-2 font-bold">
        {label}{" "}
        <span
          className="inline-flex text-primary cursor-help"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <IoMdInformationCircleOutline className="w-5 h-5 text-secondary-background" />
        </span>
      </label>

      {showTooltip && (
        <div className="absolute z-10 bg-white border   top-8 border-gray-200 rounded-md shadow-lg p-4 w-80 text-sm mt-1">
          {description || "isi berdasarkan pilihan Anda"}
        </div>
      )}

      <div className="space-x-4">
        {options.map((option) => (
          <label key={option.value} className="inline-flex items-center">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              required={required}
              className="mr-2"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};
export default RadioGroup;
