import React, { useState } from 'react';

const CleaningType = ({ onTypeSelect }) => {
  const [selectedType, setSelectedType] = useState('');
  const cleaningTypes = [
    { id: 1, label: 'Standard Cleaning' },
    { id: 2, label: 'Deep Cleaning' },
    { id: 3, label: 'Move-In/Move-Out Cleaning' },
    { id: 4, label: 'Office Cleaning' },
    { id: 5, label: 'Eco-friendly Cleaning' },
    { id: 6, label: 'Post-construction Cleaning' },
    { id: 7, label: 'Vacation Rental Cleaning' },
    { id: 8, label: 'Window Cleaning' },
    { id: 9, label: 'Appliance Cleaning' },
    { id: 10, label: 'Tile Cleaning' },
    { id: 11, label: 'Pressure Washing' },
    { id: 12, label: 'Carpet Cleaning' },
    { id: 13, label: 'Office Cleaning' },
    { id: 14, label: 'Warehouse Cleaning' },

  ];

  const handleTypeSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedType(selectedValue);
    if (onTypeSelect) {
      onTypeSelect(selectedValue);
    }
  };

  return (
    <div className="p-4">
      <label
        htmlFor="cleaningType"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Select Cleaning Type
      </label>
      <select
        id="cleaningType"
        value={selectedType}
        onChange={handleTypeSelect}
        className="block w-full p-3 sm:p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-800"
      >
        <option value="" disabled>
          Select a type
        </option>
        {cleaningTypes.map((type) => (
          <option
            key={type.id}
            value={type.label}
            className={`hover:bg-blue-500 hover:text-white transition`}
          >
            {type.label}
          </option>
        ))}
      </select>
      {selectedType && (
        <p className="mt-2 text-blue-600 text-sm sm:text-base font-medium">
          Selected: {selectedType}
        </p>
      )}
    </div>
  );
};

export default CleaningType;


