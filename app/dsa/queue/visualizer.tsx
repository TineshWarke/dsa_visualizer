'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const QueueVisualizer: React.FC = () => {
  const [queue, setQueue] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Preload the queue with some values (optional)
    setQueue([5, 10, 20]);
  }, []);

  if (!mounted) {
    return null;
  }

  // Queue-based methods

  const handleEnqueue = () => {
    if (!inputValue) {
      toast.error('Enter a number to enqueue');
      return;
    }
    if (queue.length === 6) {
      toast.error('Queue is full');
      return;
    }
    const value = Number(inputValue);
    if (value <= 10000) {
      setQueue([...queue, value]);
      setInputValue(""); // Clear the input after enqueue
    } else {
      toast.error("Value cannot exceed 10000!");
    }
  };

  const handleDequeue = () => {
    if (queue.length === 0) {
      toast.error('Queue is empty');
      return;
    }
    setQueue(queue.slice(1));
  };

  const handleFront = () => {
    if (queue.length === 0) {
      toast.error('Queue is empty');
      return;
    }
    toast.success(`Front element is: ${queue[0]}`);
  };

  const handleIsEmpty = () => {
    if (queue.length === 0) {
      toast.success('Queue is empty');
    } else {
      toast.success('Queue is not empty');
    }
  };

  const handleIsFull = () => {
    if (queue.length === 6) {
      toast.success('Queue is full');
    } else {
      toast.success('Queue is not full');
    }
  };

  const handleSize = () => {
    toast.success(`Queue size: ${queue.length}`);
  };

  const handleClear = () => {
    setQueue([]);
    toast.success('Queue cleared');
  };

  const handleContains = () => {
    const value = Number(inputValue);
    if (queue.includes(value)) {
      toast.success(`Queue contains: ${value}`);
    } else {
      toast.error(`Queue does not contain: ${value}`);
    }
  };

  const handleReverse = () => {
    setQueue([...queue].reverse());
    toast.success('Queue reversed');
  };

  const handleGetMin = () => {
    if (queue.length === 0) {
      toast.error('Queue is empty');
      return;
    }
    const min = Math.min(...queue);
    toast.success(`Minimum element: ${min}`);
  };

  const handleGetMax = () => {
    if (queue.length === 0) {
      toast.error('Queue is empty');
      return;
    }
    const max = Math.max(...queue);
    toast.success(`Maximum element: ${max}`);
  };

  const handleReset = () => {
    setQueue([5, 10, 20]);
    toast.success('Queue reset to initial state');
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <ToastContainer position="top-center" />
      <h1 className="text-3xl font-bold mb-6">Queue Visualizer</h1>

      <div className="flex flex-col items-center border-white border-t-2 pt-2">
        {/* Queue Container */}
        <div className="relative flex items-center justify-center space-x-4">

          {/* Queue Items */}
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide p-6 border-4 border-gray-700 rounded-xl shadow-inner">
            {queue.length > 0 ? (
              queue.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-accent to-pink-700 text-accent-content font-bold text-2xl rounded-md shadow-2xl transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  {value}
                </motion.div>
              ))
            ) : (
              // Empty Queue Placeholder
              <div className="italic text-white text-lg">The queue is empty.</div>
            )}
          </div>
        </div>

        {/* Labels */}
        <div className="flex justify-between items-center w-full mt-4 px-10">
          <span className="text-white text-sm font-semibold uppercase tracking-wide">
            Front
          </span>
          <span className="text-white text-sm font-semibold uppercase tracking-wide">
            Rear
          </span>
        </div>
      </div>



      {/* Controls */}
      <div className="mt-20 flex flex-col items-center space-y-4">
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

        {/* Queue Method Buttons */}
        <div className="grid grid-cols-4 gap-4">
          <button onClick={handleEnqueue} className="btn border-white border-2">Enqueue</button>
          <button onClick={handleDequeue} className="btn border-white border-2">Dequeue</button>
          <button onClick={handleFront} className="btn border-white border-2">Front</button>
          <button onClick={handleIsEmpty} className="btn border-white border-2">Is Empty?</button>
          <button onClick={handleIsFull} className="btn border-white border-2">Is Full?</button>
          <button onClick={handleSize} className="btn border-white border-2">Size</button>
          <button onClick={handleClear} className="btn border-white border-2">Clear</button>
          <button onClick={handleContains} className="btn border-white border-2">Contains</button>
          <button onClick={handleReverse} className="btn border-white border-2">Reverse</button>
          <button onClick={handleGetMin} className="btn border-white border-2">Get Min</button>
          <button onClick={handleGetMax} className="btn border-white border-2">Get Max</button>
          <button onClick={handleReset} className="btn border-white border-2">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default QueueVisualizer;
