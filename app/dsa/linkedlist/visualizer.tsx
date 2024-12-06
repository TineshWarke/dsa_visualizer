'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface Node {
  value: number;
  next: Node | null;
}

const LinkedListVisualizer: React.FC = () => {
  const [linkedList, setLinkedList] = useState<Node | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [indexValue, setIndexValue] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Function to create a linked list from an array
  const createLinkedList = (values: number[]): Node | null => {
    if (values.length === 0) return null;
    let head: Node = { value: values[0], next: null };
    let current = head;
    for (let i = 1; i < values.length; i++) {
      current.next = { value: values[i], next: null };
      current = current.next;
    }
    return head;
  };

  // Array Operations
  const handlePushFront = () => {
    if (!inputValue) {
      toast.error('Enter number to add');
      return;
    }
    const value = Number(inputValue);
    const newNode: Node = { value, next: linkedList };
    setLinkedList(newNode);
    setInputValue("");
    setIndexValue("");
  };

  const handlePushEnd = () => {
    if (!inputValue) {
      toast.error('Enter number to add');
      return;
    }
    const value = Number(inputValue);
    const newNode: Node = { value, next: null };

    if (!linkedList) {
      setLinkedList(newNode);
    } else {
      let current = linkedList;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    setInputValue("");
    setIndexValue("");
  };

  const handlePopFront = () => {
    if (!linkedList) {
      toast.error('Empty Linked List');
      return;
    }
    setLinkedList(linkedList.next);
    setInputValue("");
    setIndexValue("");
  };

  const handlePopEnd = () => {
    if (!linkedList) {
      toast.error('Empty Linked List');
      return;
    }
    if (!linkedList.next) {
      setLinkedList(null);
    } else {
      let current = linkedList;
      while (current.next && current.next.next) {
        current = current.next;
      }
      current.next = null;
    }
    setInputValue("");
    setIndexValue("");
  };

  const handleReset = () => {
    setLinkedList(createLinkedList([10, 20, 30, 40, 50]));
    setInputValue("");
    setIndexValue("");
  };

  const handleLength = () => {
    let current = linkedList;
    let length = 0;
    while (current) {
      length++;
      current = current.next;
    }
    toast.success(`Length of Linked List is ${length}`);
  };

  const handleAtIndex = () => {
    const index = Number(indexValue);
    if (!isNaN(index) && index >= 0) {
      let current = linkedList;
      let currentIndex = 0;
      while (current) {
        if (currentIndex === index) {
          toast.success(`Value at index ${index}: ${current.value}`);
          return;
        }
        current = current.next;
        currentIndex++;
      }
      toast.error("Invalid index!");
    }
  };

  const handleSearch = () => {
    const value = Number(inputValue);
    let current = linkedList;
    let index = 0;
    while (current) {
      if (current.value === value) {
        toast.success(`Value ${value} found at index ${index}`);
        return;
      }
      current = current.next;
      index++;
    }
    toast.error("Value not found!");
  };

  const handleInsertAtIndex = () => {
    const index = Number(indexValue);
    if (!isNaN(index) && inputValue) {
      const value = Number(inputValue);
      const newNode: Node = { value, next: null };
      if (index === 0) {
        newNode.next = linkedList;
        setLinkedList(newNode);
        return;
      }

      let current = linkedList;
      let currentIndex = 0;
      while (current) {
        if (currentIndex === index - 1) {
          newNode.next = current.next;
          current.next = newNode;
          setLinkedList(linkedList);
          return;
        }
        current = current.next;
        currentIndex++;
      }
      toast.error("Invalid index!");
    }
  };

  const handleRemoveAtIndex = () => {
    const index = Number(indexValue);
    if (!isNaN(index)) {
      if (index === 0 && linkedList) {
        setLinkedList(linkedList.next);
        return;
      }

      let current = linkedList;
      let currentIndex = 0;
      while (current && current.next) {
        if (currentIndex === index - 1) {
          current.next = current.next.next;
          setLinkedList(linkedList);
          return;
        }
        current = current.next;
        currentIndex++;
      }
      toast.error("Invalid index!");
    }
  };

  // Helper function to render the linked list
  const renderLinkedList = () => {
    const nodes: JSX.Element[] = [];
    let current = linkedList;
    let index = 0;
    while (current) {
      nodes.push(
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 p-2 border border-gray-300 rounded-md"
        >
          <span className="font-bold">{current.value}</span>
          <span className="text-sm text-gray-500">({index})</span>
          {current.next && <span className="text-sm text-gray-400">→</span>}
        </motion.div>
      );
      current = current.next;
      index++;
    }
    return nodes;
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <ToastContainer position="top-center" />
      <h1 className="text-3xl font-bold mb-6">Linked List Visualizer</h1>

      {/* Linked List Visualization */}
      <div className="flex flex-col space-y-2 w-full max-w-4xl mb-6">
        {renderLinkedList()}
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

        {/* Linked List Method Buttons */}
        <div className="grid grid-cols-3 gap-4">
          <button onClick={handlePushFront} className="btn border-white border-2">Add Front</button>
          <button onClick={handlePushEnd} className="btn border-white border-2">Add End</button>
          <button onClick={handlePopFront} className="btn border-white border-2">Remove Front</button>
          <button onClick={handlePopEnd} className="btn border-white border-2">Remove End</button>
          <button onClick={handleReset} className="btn border-white border-2">Reset</button>
          <button onClick={handleLength} className="btn border-white border-2">Length</button>
          <button onClick={handleAtIndex} className="btn border-white border-2">At Index</button>
          <button onClick={handleSearch} className="btn border-white border-2">Search</button>
          <button onClick={handleInsertAtIndex} className="btn border-white border-2">Insert at Index</button>
          <button onClick={handleRemoveAtIndex} className="btn border-white border-2">Remove at Index</button>
        </div>
      </div>
    </div>
  );
};

export default LinkedListVisualizer;
