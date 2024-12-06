'use client';
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SetVisualizer: React.FC = () => {
  const initialSetValues = new Set([10, 20, 30, 40, 50]);
  const [setValues, setSetValues] = useState<Set<number>>(new Set(initialSetValues));
  const [inputValue, setInputValue] = useState<string>("");
  const [secondarySet] = useState<Set<number>>(new Set([30, 40, 60, 70, 90]));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const updateSet = (newSet: Set<number>) => {
    setSetValues(new Set(newSet));
    setInputValue("");
  };

  const resetSet = () => {
    setSetValues(new Set(initialSetValues));
    setInputValue("");
    toast.success("Set has been reset!");
  };

  const animations = {
    add: {
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 0.5 },
    },
    delete: {
      initial: { scale: 1, opacity: 1 },
      exit: { scale: 0, opacity: 0 },
      transition: { duration: 0.5 },
    },
    update: {
      initial: { y: -50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const handleAdd = () => {
    if (!inputValue) {
      toast.error("Enter a number to add!");
      return;
    }
    const value = Number(inputValue);
    if (value > 100) {
      toast.error("Value cannot exceed 100!");
      return;
    }
    if (setValues.size >= 10) {
      toast.error("Set size limit of 10 reached!");
      return;
    }
    const newSet = new Set(setValues);
    newSet.add(value);
    updateSet(newSet);
  };

  const handleDelete = () => {
    if (!inputValue) {
      toast.error("Enter a number to delete!");
      return;
    }
    const value = Number(inputValue);
    const newSet = new Set(setValues);
    if (newSet.delete(value)) {
      updateSet(newSet);
    } else {
      toast.error("Value not found in the set!");
    }
  };

  const handleClear = () => {
    updateSet(new Set());
  };

  const handleHas = () => {
    if (!inputValue) {
      toast.error("Enter a number to check!");
      return;
    }
    const value = Number(inputValue);
    if (setValues.has(value)) {
      toast.success(`Set contains ${value}`);
    } else {
      toast.error(`Set does not contain ${value}`);
    }
    setInputValue("");
  };

  const handleUnion = () => {
    const unionSet = new Set([...setValues, ...secondarySet]);
    toast.success("Union operation completed!");
    updateSet(unionSet);
  };

  const handleIntersection = () => {
    const intersectionSet = new Set([...setValues].filter((x) => secondarySet.has(x)));
    toast.success("Intersection operation completed!");
    updateSet(intersectionSet);
  };

  const handleDifference = () => {
    const differenceSet = new Set([...setValues].filter((x) => !secondarySet.has(x)));
    toast.success("Difference operation completed!");
    updateSet(differenceSet);
  };

  const handleSize = () => {
    toast.success(`Set size is ${setValues.size}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <ToastContainer position="top-center" />
      <h1 className="text-3xl font-bold mb-6">Set Visualizer</h1>

      <div className="flex flex-wrap gap-2 p-4 border-t min-w-96 border-gray-300">
        <AnimatePresence>
          {[...setValues].map((value) => (
            <motion.div
              key={value}
              {...animations.update}
              exit={animations.delete.exit}
              transition={animations.update.transition}
              className="px-4 py-2 bg-accent text-accent-content font-bold rounded-lg"
            >
              {value}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-6 flex flex-col items-center space-y-4">
        <div className="flex space-x-4">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="px-4 py-2 border-white border-2 rounded-lg focus:outline-none"
            placeholder="Enter a number"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button onClick={handleAdd} className="btn border-white border-2">
            Add
          </button>
          <button onClick={handleDelete} className="btn border-white border-2">
            Delete
          </button>
          <button onClick={handleHas} className="btn border-white border-2">
            Has
          </button>
          <button onClick={handleSize} className="btn border-white border-2">
            Size
          </button>
          <button onClick={handleClear} className="btn border-white border-2">
            Clear
          </button>
          <button onClick={resetSet} className="btn border-white border-2 text-white">
            Reset
          </button>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Secondary Set</h2>
        <div className="flex flex-wrap gap-2 p-4 border-t pl-9 border-gray-300">
          {[...secondarySet].map((value) => (
            <motion.div
              key={value}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="px-4 py-2 bg-secondary text-black font-bold rounded-lg"
            >
              {value}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <button onClick={handleUnion} className="btn border-white border-2">
            Union
          </button>
          <button onClick={handleIntersection} className="btn border-white border-2">
            Intersection
          </button>
          <button onClick={handleDifference} className="btn border-white border-2">
            Difference
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetVisualizer;
