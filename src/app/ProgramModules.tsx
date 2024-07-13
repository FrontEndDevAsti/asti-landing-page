"use client";

import React, { useState } from 'react';
import { PROGRAMS } from './Constants/Constants';

const ProgramModule: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState('MECH');
  const [selectedUnitType, setSelectedUnitType] = useState('commonUnits');

  const programData = PROGRAMS[selectedProgram];

  return (
    <div className="flex flex-col md:flex-row text-white overflow-hidden">
      {/* Program Selection */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-start p-4 space-y-4 overflow-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-auto ">
          {Object.keys(PROGRAMS).map(program => (
            <button
              key={program}
              className={`py-2 text-center rounded ${selectedProgram === program ? 'bg-blue-500' : 'bg-blue-700'}`}
              onClick={() => setSelectedProgram(program)}
            >
              {program}
            </button>
          ))}
        </div>
      </div>

      {/* Unit Type Selection and Details */}
      <div className="w-full md:w-1/2 h-full p-8 flex flex-col">
        {/* Unit Type Buttons */}
        <div className="flex flex-wrap mb-8">
          {['commonUnits', 'coreUnit1', 'coreUnit2', 'specialUnits'].map(unitType => (
            <button
              key={unitType}
              className={`flex-1 py-2 px-4 mr-2 mb-2 rounded ${selectedUnitType === unitType ? 'bg-green-500' : 'bg-green-700'}`}
              onClick={() => setSelectedUnitType(unitType)}
            >
              {unitType.split(/(?=[A-Z])/).join(' ')}
            </button>
          ))}
        </div>

        {/* Unit Details Table */}
        <div className="overflow-y-auto h-64">
          <h1 className="text-4xl font-bold mb-8">{selectedProgram} Program</h1>
          <p className="mb-4">
            Here you can find the details of the {selectedProgram} program including common units, core units, and special
            units.
          </p>
          <table className="w-full text-left table-auto">
            <thead>
              <tr>
                <th className="border px-4 py-2">Unit Code</th>
                <th className="border px-4 py-2">Unit Title</th>
                <th className="border px-4 py-2">Credits</th>
              </tr>
            </thead>
            <tbody>
              {programData[selectedUnitType].map((unit, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{unit.code}</td>
                  <td className="border px-4 py-2">{unit.title}</td>
                  <td className="border px-4 py-2">{unit.credits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProgramModule;

