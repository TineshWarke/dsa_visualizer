'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Visualizer: React.FC = () => {
  const [arrayList, setArrayList] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [indexValue, setIndexValue] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Preload the array with 12 values (max size)
    setArrayList([5, 10, 20]);
  }, []);

  if (!mounted) {
    return null;
  }

  // Array-based methods

  const handlePush = () => {
    if (!inputValue) {
      toast.error('Enter number to push');
      return;
    }
    const value = Number(inputValue);
    if (value <= 100) {
      setArrayList([...arrayList, value]);
      setInputValue("");
    } else {
      toast.error("Value cannot exceed 100!");
    }
  };

  const handlePop = () => {
    if (arrayList.length === 0) {
      toast.error('Linked-List is empty');
      return;
    }
    setArrayList(arrayList.slice(0, -1));
  };

  const handleShift = () => {
    if (arrayList.length === 0) {
      toast.error('Linked-List is empty');
      return;
    }
    setArrayList(arrayList.slice(1));
  };

  const handleUnshift = () => {
    if (!inputValue) {
      toast.error('Enter number to unshift');
      return;
    }
    const value = Number(inputValue);
    if (value <= 100) {
      setArrayList([value, ...arrayList]);
      setInputValue("");
    } else {
      toast.error("Value cannot exceed 100!");
    }
  };

  const handleInsertAt = () => {
    const index = Number(indexValue);
    if (!inputValue) {
      toast.error('Enter value to insert');
      return;
    }
    if (index < 0 || index > arrayList.length) {
      toast.error("Index out of bounds!");
      return;
    }
    const value = Number(inputValue);
    const newArray = [...arrayList];
    newArray.splice(index, 0, value);
    setArrayList(newArray);
    setInputValue("");
    setIndexValue("");
  };

  const handleDeleteAt = () => {
    const index = Number(indexValue);
    if (index < 0 || index >= arrayList.length) {
      toast.error("Index out of bounds!");
      return;
    }
    const newArray = [...arrayList];
    newArray.splice(index, 1);
    setArrayList(newArray);
    setInputValue("");
    setIndexValue("");
  };

  const handleReverse = () => {
    setArrayList([...arrayList].reverse());
  };

  const getSize = () => {
    toast.success(`Size of the Linked-List: ${arrayList.length}`);
  };

  const handleReset = () => {
    setArrayList([5, 10, 20]);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <ToastContainer position="top-center" />
      <h1 className="text-3xl font-bold mb-6">Linked-List Visualizer</h1>

      {/* Linked-List Visualization */}
      <div className="border-white border-t-2 flex items-center space-x-8 h-56 w-full max-w-6xl overflow-auto px-8 py-6 bg-transparent relative">
        {/* Background Blur Effect */}
        <div className="absolute inset-0 pointer-events-none"></div>

        {arrayList.map((value, index) => (
          <div key={index} className="flex items-center space-x-6 relative">
            {/* Node */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-28 h-28 bg-gradient-to-br from-accent to-pink-600 rounded-full flex flex-col items-center justify-center shadow-lg text-white font-bold relative hover:scale-110 transform transition duration-300"
            >
              {/* Value */}
              <span className="text-3xl">{value}</span>
              {/* Index */}
              <span className="absolute -bottom-8 text-xs text-gray-300">
                Index: {index}
              </span>
            </motion.div>

            {/* Dynamic Arrow */}
            {index !== arrayList.length - 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 0.7,
                }}
                className="flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-accent animate-pulse"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-6 flex flex-col items-center space-y-4">
        {/* Input */}
        <div className="flex space-x-4">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="px-4 py-2 border-white border-2 rounded-lg focus:outline-none"
            placeholder="Enter a number"
          />
          <input
            type="number"
            value={indexValue}
            onChange={(e) => setIndexValue(e.target.value)}
            className="px-4 py-2 border-white border-2 rounded-lg focus:outline-none"
            placeholder="Index"
          />
        </div>

        {/* Array Method Buttons */}
        <div className="grid grid-cols-3 gap-4">
          <button onClick={handleUnshift} className="btn border-white border-2">Unshift</button>
          <button onClick={handlePush} className="btn border-white border-2">Push</button>
          <button onClick={handleShift} className="btn border-white border-2">Shift</button>
          <button onClick={handlePop} className="btn border-white border-2">Pop</button>
          <button onClick={handleInsertAt} className="btn border-white border-2">Insert At</button>
          <button onClick={handleDeleteAt} className="btn border-white border-2">Delete At</button>
          <button onClick={handleReverse} className="btn border-white border-2">Reverse</button>
          <button onClick={getSize} className="btn border-white border-2">Get Size</button>
          <button onClick={handleReset} className="btn border-white border-2"> Reset </button>
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
