'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Visualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([20, 40, 30, 10, 50]);
  const [inputValue, setInputValue] = useState<string>("");
  const [indexValue, setIndexValue] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Array Operations
  const handlePush = () => {
    if (!inputValue) {
      toast.error('Enter number to push')
      return
    }
    if (array.length < 20) {
      const value = Number(inputValue);
      if (value <= 100) {
        setArray([...array, value]);
        setInputValue("");
        setIndexValue("");
      } else {
        toast.error("Value cannot exceed 100!");
      }
    } else {
      toast.error("Array size is limited to 20!");
    }
  };

  const handlePop = () => {
    if (!array.length) {
      toast.error('Empty Array')
      return
    }
    setArray(array.slice(0, -1));
    setInputValue("");
    setIndexValue("");
  };

  const handleShift = () => {
    if (!array.length) {
      toast.error('Empty Array')
      return
    }
    setArray(array.slice(1));
    setInputValue("");
    setIndexValue("");
  };

  const handleUnshift = () => {
    if (!inputValue) {
      toast.error('Enter number to unshift')
      return
    }
    if (array.length < 20) {
      const value = Number(inputValue);
      if (value <= 100) {
        setArray([value, ...array]);
        setInputValue("");
        setIndexValue("");
      } else {
        toast.error("Value cannot exceed 100!");
      }
    } else {
      toast.error("Array size is limited to 20!");
    }
  };

  const handleSort = () => {
    setArray([...array].sort((a, b) => a - b));
    setInputValue("");
    setIndexValue("");
  };

  const handleReverse = () => {
    setArray([...array].reverse());
    setInputValue("");
    setIndexValue("");
  };

  const handleReset = () => {
    setArray([20, 40, 30, 10, 50]);
    setInputValue("");
    setIndexValue("");
  };

  const handleAtIndex = () => {
    const index = Number(indexValue);
    if (!isNaN(index) && index >= 0 && index < array.length) {
      toast.success(`Value at index ${index}: ${array[index]}`);
      setInputValue("");
      setIndexValue("");
    } else {
      toast.error("Invalid index!");
    }
  };

  const handleIndexOf = () => {
    if (inputValue) {
      const value = Number(inputValue);
      const index = array.indexOf(value);
      if (index !== -1) {
        toast.success(`Value ${value} found at index ${index}`);
        setInputValue("");
        setIndexValue("");
      } else {
        toast.error("Value not found!");
      }
    }
  };

  const handleRemoveAtIndex = () => {
    const index = Number(indexValue);
    if (!isNaN(index) && index >= 0 && index < array.length) {
      const newArray = [...array];
      newArray.splice(index, 1);
      setArray(newArray);
      setInputValue("");
      setIndexValue("");
    } else {
      toast.error("Invalid index!");
    }
  };

  const handleAddAtIndex = () => {
    const index = Number(indexValue);
    if (!isNaN(index) && inputValue && index >= 0 && index <= array.length && array.length < 20) {
      const value = Number(inputValue);
      if (value <= 100) {
        const newArray = [...array];
        newArray.splice(index, 0, value);
        setArray(newArray);
        setInputValue("");
        setIndexValue("");
      } else {
        toast.error("Value cannot exceed 100!");
      }
    } else {
      toast.error("Invalid input, index, or array is already full!");
    }
  };

  const handleLength = () => {
    toast.success('Length of Array is ' + array.length);
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <ToastContainer position="top-center" />
      <h1 className="text-3xl font-bold mb-6">Array Visualizer</h1>

      {/* Array Visualization */}
      <div className="flex items-end space-x-2 h-64 w-full max-w-4xl border-t border-gray-300">
        {array.map((value, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            animate={{ height: `${value * 2}px` }}
            transition={{ duration: 0.5 }}
            className="w-8 bg-accent rounded-t-lg text-center text-xs text-black relative"
          >
            <span className="absolute -bottom-5 left-0 right-0 text-white text-xs">
              {index}
            </span>
            <span className="font-bold">{value}</span>
          </motion.div>
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
          <button
            onClick={handleUnshift}
            className="btn border-white border-2"
          >
            Unshift
          </button>
          <button
            onClick={handlePush}
            className="btn border-white border-2"
          >
            Push
          </button>
          <button
            onClick={handleSort}
            className="btn border-white border-2"
          >
            Sort
          </button>
          <button
            onClick={handleShift}
            className="btn border-white border-2"
          >
            Shift
          </button>
          <button
            onClick={handlePop}
            className="btn border-white border-2"
          >
            Pop
          </button>
          <button
            onClick={handleReverse}
            className="btn border-white border-2"
          >
            Reverse
          </button>
          <button
            onClick={handleReset}
            className="btn border-white border-2"
          >
            Reset
          </button>
          <button
            onClick={handleAtIndex}
            className="btn border-white border-2"
          >
            At Index
          </button>
          <button
            onClick={handleIndexOf}
            className="btn border-white border-2"
          >
            Index Of
          </button>
          <button
            onClick={handleAddAtIndex}
            className="btn border-white border-2"
          >
            Add at Index
          </button>
          <button
            onClick={handleRemoveAtIndex}
            className="btn border-white border-2"
          >
            Remove at Index
          </button>
          <button
            onClick={handleLength}
            className="btn border-white border-2"
          >
            Length
          </button>
        </div>
      </div>

      <div>

      </div>
    </div>
  );
};

export default Visualizer;
