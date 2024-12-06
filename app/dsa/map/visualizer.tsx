'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MapVisualizer: React.FC = () => {
  const [map, setMap] = useState<Map<string, number>>(new Map());
  const [keyInput, setKeyInput] = useState<string>("");
  const [valueInput, setValueInput] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initialize with some default key-value pairs
    setMap(new Map([["A", 100], ["B", 200], ["C", 300]]));
  }, []);

  if (!mounted) {
    return null;
  }

  // Map Operations
  const handleAdd = () => {
    if (!keyInput || !valueInput) {
      toast.error("Both key and value are required!");
      return;
    }
    const value = Number(valueInput);
    if (value < 0 || value > 1000) {
      toast.error("Value must be between 0 and 1000!");
      return;
    }
    setMap((prev) => {
      const newMap = new Map(prev);
      if (newMap.size >= 6) {
        toast.error("The map already has 6 entries. Remove an entry before adding a new one.");
        return prev;
      }
      newMap.set(keyInput, value);
      return newMap;
    });
    toast.success(`Added/Updated key "${keyInput}" with value ${value}`);
    setKeyInput("");
    setValueInput("");
  };

  const handleRemove = () => {
    if (!keyInput) {
      toast.error("Enter a key to remove!");
      return;
    }
    if (!map.has(keyInput)) {
      toast.error("Key not found!");
      return;
    }
    setMap((prev) => {
      const newMap = new Map(prev);
      newMap.delete(keyInput);
      return newMap;
    });
    toast.success(`Removed key "${keyInput}"`);
    setKeyInput("");
  };

  const handleGet = () => {
    if (!keyInput) {
      toast.error("Enter a key to get value!");
      return;
    }
    const value = map.get(keyInput);
    if (value !== undefined) {
      toast.success(`Value for key "${keyInput}" is ${value}`);
    } else {
      toast.error("Key not found!");
    }
    setKeyInput("");
  };

  const handleClear = () => {
    setMap(new Map());
    toast.info("Map cleared!");
  };

  const handleReset = () => {
    setMap(new Map([["A", 100], ["B", 200], ["C", 300]]));
    toast.info("Map reset to default values!");
  };

  // Iteration Methods
  const handleForEach = () => {
    let output = "";
    map.forEach((value, key) => {
      output += `${key}: ${value}, `;
    });
    toast.info(`ForEach Output: ${output.slice(0, -2)}`);
  };

  const handleKeys = () => {
    const keys = [...map.keys()];
    toast.info(`Keys: ${keys.join(", ")}`);
  };

  const handleValues = () => {
    const values = [...map.values()];
    toast.info(`Values: ${values.join(", ")}`);
  };

  const handleEntries = () => {
    const entries = [...map.entries()];
    toast.info(`Entries: ${entries.map(([k, v]) => `${k}: ${v}`).join(", ")}`);
  };

  const handleHas = () => {
    if (!keyInput) {
      toast.error("Enter a key to check!");
      return;
    }
    const exists = map.has(keyInput);
    toast.info(`Key "${keyInput}" ${exists ? "exists" : "does not exist"} in the map.`);
    setKeyInput("");
  };

  const handleSize = () => {
    toast.info(`The map contains ${map.size} entries.`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <ToastContainer position="top-center" />
      <h1 className="text-3xl font-bold mb-6">Map Visualizer</h1>

      {/* Map Visualization */}
      <div className="grid grid-cols-3 gap-4 w-full max-w-4xl border-t border-gray-300 p-4">
        {[...map.entries()].map(([key, value]) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.5 }}
            className="p-4 rounded-lg text-center bg-accent text-white shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center justify-between space-x-4">
              <div className="w-16 h-16 bg-base-300 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                {key}
              </div>

              <div className="flex-1 p-4 bg-base-300 text-white rounded-lg shadow-md text-black">
                <p className="text-lg font-medium">{value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-6 flex flex-col items-center space-y-4">
        {/* Input */}
        <div className="flex space-x-4">
          <input
            type="text"
            value={keyInput}
            onChange={(e) => setKeyInput(e.target.value)}
            className="px-4 py-2 border-white border-2 rounded-lg focus:outline-none"
            placeholder="Enter key"
          />
          <input
            type="number"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
            className="px-4 py-2 border-white border-2 rounded-lg focus:outline-none"
            placeholder="Enter value"
          />
        </div>

        {/* Map Method Buttons */}
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={handleAdd}
            className="btn border-white border-2"
          >
            Add/Update
          </button>
          <button
            onClick={handleRemove}
            className="btn border-white border-2"
          >
            Remove
          </button>
          <button
            onClick={handleGet}
            className="btn border-white border-2"
          >
            Get Value
          </button>
          <button
            onClick={handleClear}
            className="btn border-white border-2"
          >
            Clear
          </button>
          <button
            onClick={handleHas}
            className="btn border-white border-2"
          >
            Has Key
          </button>
          <button
            onClick={handleSize}
            className="btn border-white border-2"
          >
            Map Size
          </button>
          <button
            onClick={handleForEach}
            className="btn border-white border-2"
          >
            ForEach
          </button>
          <button
            onClick={handleKeys}
            className="btn border-white border-2"
          >
            Keys
          </button>
          <button
            onClick={handleValues}
            className="btn border-white border-2"
          >
            Values
          </button>
          <button
            onClick={handleEntries}
            className="btn border-white border-2"
          >
            Entries
          </button>
          <button
            onClick={handleReset}
            className="btn border-white border-2"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapVisualizer;
