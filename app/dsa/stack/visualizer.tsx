'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Visualizer: React.FC = () => {
  const [stack, setStack] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [swapIndex1, setSwapIndex1] = useState<string>("");
  const [swapIndex2, setSwapIndex2] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Preload the stack with some values (optional)
    setStack([5, 10, 20]);
  }, []);

  if (!mounted) {
    return null;
  }

  // Stack-based methods

  const handlePush = () => {
    if (!inputValue) {
      toast.error('Enter number to push');
      return;
    }
    if (stack.length === 6) {
      toast.error('Stack is full');
      return;
    }
    const value = Number(inputValue);
    if (value <= 100000) {
      setStack([...stack, value]);
      setInputValue("");  // Clear the input after pushing
    } else {
      toast.error("Value cannot exceed 100000!");
    }
  };

  const handlePop = () => {
    if (stack.length === 0) {
      toast.error('Stack is empty');
      return;
    }
    setStack(stack.slice(0, -1));
  };

  const handlePeek = () => {
    if (stack.length === 0) {
      toast.error('Stack is empty');
      return;
    }
    toast.success(`Top element is: ${stack[stack.length - 1]}`);
  };

  const handleIsEmpty = () => {
    if (stack.length === 0) {
      toast.success('Stack is empty');
    } else {
      toast.success('Stack is not empty');
    }
  };

  const handleIsFull = () => {
    if (stack.length === 6) {
      toast.success('Stack is full');
    } else {
      toast.success('Stack is not full');
    }
  };

  const handleSize = () => {
    toast.success(`Stack size: ${stack.length}`);
  };

  const handleClear = () => {
    setStack([]);
    toast.success('Stack cleared');
  };

  const handleContains = () => {
    const value = Number(inputValue);
    if (stack.includes(value)) {
      toast.success(`Stack contains: ${value}`);
    } else {
      toast.error(`Stack does not contain: ${value}`);
    }
  };

  const handleSearch = () => {
    const value = Number(inputValue);
    const index = stack.indexOf(value);
    if (index !== -1) {
      toast.success(`Found ${value} at index: ${index}`);
    } else {
      toast.error(`${value} not found in stack`);
    }
  };

  const handleSwap = () => {
    if (stack.length < 2) {
      toast.error('Not enough elements to swap');
      return;
    }
    const index1 = parseInt(swapIndex1);
    const index2 = parseInt(swapIndex2);

    if (isNaN(index1) || isNaN(index2)) {
      toast.error('Please enter valid indices for swap');
      return;
    }

    if (index1 < 0 || index2 < 0 || index1 >= stack.length || index2 >= stack.length) {
      toast.error('Invalid indices for swap');
      return;
    }

    const newStack = [...stack];
    const temp = newStack[index1];
    newStack[index1] = newStack[index2];
    newStack[index2] = temp;
    setStack(newStack);
    toast.success(`Swapped elements at index ${index1} and ${index2}`);

    // Clear swap inputs after swapping
    setSwapIndex1("");
    setSwapIndex2("");
  };

  const handleReverse = () => {
    setStack([...stack].reverse());
    toast.success('Stack reversed');
  };

  const handleToArray = () => {
    const array = [...stack];
    toast.success(`Stack as Array: ${array}`);
  };

  const handleGetMin = () => {
    if (stack.length === 0) {
      toast.error('Stack is empty');
      return;
    }
    const min = Math.min(...stack);
    toast.success(`Minimum element: ${min}`);
  };

  const handleGetMax = () => {
    if (stack.length === 0) {
      toast.error('Stack is empty');
      return;
    }
    const max = Math.max(...stack);
    toast.success(`Maximum element: ${max}`);
  };

  const handleReset = () => {
    setStack([5, 10, 20]);
    toast.success('Stack reset to initial state');
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <ToastContainer position="top-center" />
      <h1 className="text-3xl font-bold mb-6">Stack Visualizer</h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex justify-start h-[600px] w-full">
          <div className="border-white border-x-4 border-b-4 rounded-b-3xl flex flex-col-reverse items-center justify-start space-y-4 p-8 h-[600px]">
            <div className="absolute inset-0 pointer-events-none"></div>

            {stack.map((value, index) => (
              <div key={index} className="relative flex items-center justify-center w-full">
                {/* Node */}
                <motion.div
                  initial={{ opacity: 0, y: -40 }}  // Start from below the screen
                  animate={{ opacity: 1, y: 0 }}   // Animate into final position at the top
                  transition={{ duration: 0.5 }}
                  className="w-64 h-20 bg-gradient-to-br from-accent to-pink-600 rounded-lg shadow-lg text-white font-bold relative flex items-center justify-center transform transition duration-300"
                >
                  {/* Value */}
                  <span className="text-2xl">{value}</span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-36 flex flex-col items-center space-y-4">
          {/* Input */}
          <div className="flex space-x-4">
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="px-4 py-2 border-white border-2 rounded-lg focus:outline-none"
              placeholder="Enter a number"
            />
          </div>

          {/* Swap Inputs */}
          <div className="flex space-x-4">
            <input
              type="number"
              value={swapIndex1}
              onChange={(e) => setSwapIndex1(e.target.value)}
              className="px-4 py-2 border-white border-2 rounded-lg focus:outline-none"
              placeholder="Index 1"
            />
            <input
              type="number"
              value={swapIndex2}
              onChange={(e) => setSwapIndex2(e.target.value)}
              className="px-4 py-2 border-white border-2 rounded-lg focus:outline-none"
              placeholder="Index 2"
            />
          </div>

          {/* Stack Method Buttons */}
          <div className="grid grid-cols-5 gap-4">
            <button onClick={handlePush} className="btn border-white border-2">Push</button>
            <button onClick={handlePop} className="btn border-white border-2">Pop</button>
            <button onClick={handlePeek} className="btn border-white border-2">Peek</button>
            <button onClick={handleIsEmpty} className="btn border-white border-2">Is Empty?</button>
            <button onClick={handleIsFull} className="btn border-white border-2">Is Full?</button>
            <button onClick={handleSize} className="btn border-white border-2">Size</button>
            <button onClick={handleClear} className="btn border-white border-2">Clear</button>
            <button onClick={handleContains} className="btn border-white border-2">Contains</button>
            <button onClick={handleSearch} className="btn border-white border-2">Search</button>
            <button onClick={handleSwap} className="btn border-white border-2">Swap</button>
            <button onClick={handleReverse} className="btn border-white border-2">Reverse</button>
            <button onClick={handleToArray} className="btn border-white border-2">To Array</button>
            <button onClick={handleGetMin} className="btn border-white border-2">Get Min</button>
            <button onClick={handleGetMax} className="btn border-white border-2">Get Max</button>
            <button onClick={handleReset} className="btn border-white border-2">Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
