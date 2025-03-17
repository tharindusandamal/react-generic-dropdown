import React, { useState } from 'react';
import Dropdown from './GenericDropdown';
import { Employer } from './models/Employer';
import { Employee } from './models/Employee';

const App: React.FC = () => {

  // Example options: Model with numeric IDs
  const numericOptions = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
  ];

  // Example options: Model with string IDs
  const stringOptions = [
    { id: 'a', name: 'Option A' },
    { id: 'b', name: 'Option B' },
    { id: 'c', name: 'Option C' },
  ];

  const employers = [
    new Employer(1, 'Company A'),
    new Employer(2, 'Company B'),
    new Employer(3, 'Company C'),
  ];

  const employees = [
    new Employee(1, 'Alice', 1),
    new Employee(2, 'Bob', 1),
    new Employee(3, 'Charlie', 2),
    new Employee(4, 'David', 3),
    new Employee(5, 'Eve', 3),
  ];

  // Handle selection
  const handleSelect = (id: any) => {
    console.log('Selected item ID:', id);  // This will log the ID of the selected option
  };

  const [selectedNumericOption, setSelectedNumericOption] = useState<number | null>(null);
  const [selectedStringOption, setSelectedStringOption] = useState<string | null>(null);

  const [selectedOptionOnEmployer, setSelectedOptionOnEmployer] = useState<number | null>(null);
  const [selectedOptionOnEmployee, setSelectedOptionOnEmployee] = useState<number | null>(null);

  return (
    <div className="container mt-5">
      <h1>Generic Dropdown Example</h1>

      {/* Numeric ID Dropdown */}
      <div className="mb-4">
        <Dropdown label="Select Option" options={numericOptions} onSelect={setSelectedNumericOption} />
        <p>Selected Option ID: {selectedNumericOption}</p>
      </div>

      {/* String ID Dropdown */}
      <div>
        <Dropdown label="Select Option" options={stringOptions} onSelect={setSelectedStringOption} />
        <p>Selected Option ID: {selectedStringOption}</p>
      </div>

      {/* Employer */}
      <div>
        <Dropdown label="Select Option" options={employers} onSelect={setSelectedOptionOnEmployer} />
        <p>Selected Option ID: {selectedOptionOnEmployer}</p>
      </div>

      {/* Employee */}
      <div>
        <Dropdown label="Select Option" options={employees} onSelect={setSelectedOptionOnEmployee} />
        <p>Selected Option ID: {selectedOptionOnEmployee}</p>
      </div>
    </div>
  );
};

export default App;
