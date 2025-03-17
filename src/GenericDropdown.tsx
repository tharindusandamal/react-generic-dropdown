import React, { useState } from 'react';

interface DropdownOption<T> {
  id: T;
  name: string;
}

interface DropdownProps<T> {
  label: string;
  options: DropdownOption<T>[];
  onSelect: (id: T) => void;  // Event triggers when an item is selected
}

const Dropdown = <T extends {}>({ label, options, onSelect }: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownOption<T> | null>(null);

  // Toggle the dropdown open/close
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle item selection
  const handleSelect = (item: DropdownOption<T>) => {
    setSelectedItem(item); // Set selected item
    onSelect(item.id);      // Trigger onSelect with the item's id (key)
    setIsOpen(false);       // Close the dropdown after selection
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded={isOpen ? 'true' : 'false'}
        onClick={toggleDropdown}
      >
        {selectedItem ? selectedItem.name : label}
      </button>

      <ul
        className={`dropdown-menu ${isOpen ? 'show' : ''}`}
        aria-labelledby="dropdownMenuButton"
      >
        {options.map((option) => (
          <li key={option.id as React.Key}>  {/* Ensure 'key' is a valid React.Key type */}
            <button
              className="dropdown-item"
              type="button"
              onClick={() => handleSelect(option)}
            >
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
