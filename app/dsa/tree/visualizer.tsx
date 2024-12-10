'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type TreeNode = {
  value: number;
  left?: TreeNode | null;
  right?: TreeNode | null;
  x?: number; // X-coordinate for rendering
  y?: number; // Y-coordinate for rendering
};

const TreeVisualizer: React.FC = () => {
  const [tree, setTree] = useState<TreeNode | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [depthLimit] = useState(5); // Set depth limit to 5

  const addNode = (value: number) => {
    const newNode: TreeNode = { value };

    if (!tree) {
      setTree({ ...newNode, x: 300, y: 50 }); // Center root node
      return;
    }

    const insert = (node: TreeNode | null, depth: number, x: number): TreeNode | null => {
      if (depth > depthLimit) {
        toast.error(`Depth limit of ${depthLimit} reached!`);
        return node;
      }

      const offset = 200 / depth; // Reduce offset as depth increases
      if (value < (node?.value ?? Infinity)) {
        if (node?.left) {
          node.left = insert(node.left, depth + 1, x - offset);
        } else {
          node.left = { ...newNode, x: x - offset, y: node.y! + 100 };
        }
      } else if (value > (node?.value ?? -Infinity)) {
        if (node?.right) {
          node.right = insert(node.right, depth + 1, x + offset);
        } else {
          node.right = { ...newNode, x: x + offset, y: node.y! + 100 };
        }
      } else {
        toast.error('Duplicate values are not allowed!');
      }

      return node;
    };

    setTree((prevTree) => {
      const updatedTree = insert(prevTree, 1, 300);
      return updatedTree;
    });
  };

  const renderEdges = (node: TreeNode | null): JSX.Element[] => {
    if (!node) return [];
    const edges: JSX.Element[] = [];

    if (node.left) {
      edges.push(
        <line
          key={`edge-${node.value}-left`}
          x1={node.x}
          y1={node.y}
          x2={node.left.x}
          y2={node.left.y}
          stroke="gray"
          strokeWidth="2"
        />
      );
      edges.push(...renderEdges(node.left));
    }

    if (node.right) {
      edges.push(
        <line
          key={`edge-${node.value}-right`}
          x1={node.x}
          y1={node.y}
          x2={node.right.x}
          y2={node.right.y}
          stroke="gray"
          strokeWidth="2"
        />
      );
      edges.push(...renderEdges(node.right));
    }

    return edges;
  };

  const renderNodes = (node: TreeNode | null): JSX.Element[] => {
    if (!node) return [];
    const nodes: JSX.Element[] = [
      <motion.div
        key={node.value}
        className="absolute w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-md border-4 border-white"
        style={{ left: node.x! - 24, top: node.y! - 24 }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {node.value}
      </motion.div>
    ];

    nodes.push(...renderNodes(node.left));
    nodes.push(...renderNodes(node.right));
    return nodes;
  };

  const handleAddNode = () => {
    if (!inputValue) {
      toast.error('Enter a value to add!');
      return;
    }
    const value = Number(inputValue);
    if (isNaN(value) || value > 100 || value < 0) {
      toast.error('Enter a valid number between 0 and 100!');
      return;
    }
    addNode(value);
    setInputValue('');
  };

  const resetTree = () => {
    setTree(null);
    toast.success('Tree reset successfully!');
  };

  const searchNode = (value: number) => {
    const search = (node: TreeNode | null): boolean => {
      if (!node) return false;
      if (node.value === value) return true;
      return value < node.value ? search(node.left) : search(node.right);
    };

    if (search(tree)) {
      toast.success(`Node ${value} found!`);
    } else {
      toast.error(`Node ${value} not found!`);
    }
  };

  const deleteNode = (value: number) => {
    const deleteHelper = (node: TreeNode | null): TreeNode | null => {
      if (!node) return node;
      if (value < node.value) {
        node.left = deleteHelper(node.left);
      } else if (value > node.value) {
        node.right = deleteHelper(node.right);
      } else {
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        let minValueNode = node.right;
        while (minValueNode && minValueNode.left) {
          minValueNode = minValueNode.left;
        }
        if (minValueNode) {
          node.value = minValueNode.value;
          node.right = deleteHelper(node.right);
        }
      }
      return node;
    };

    setTree(deleteHelper(tree));
    toast.success(`Node ${value} deleted!`);
  };

  const handleRandomInsert = () => {
    const randomValue = Math.floor(Math.random() * 101); // Insert a random number between 0 and 100
    addNode(randomValue);
  };

  const handleClearTree = () => {
    setTree(null);
    toast.info('Tree cleared!');
  };

  return (
    <div className="min-h-screen flex items-start bg-gradient-to-br from-gray-800 to-black text-white py-8 px-4">
      <ToastContainer position="top-center" />

      {/* Tree Visualization */}
      <div className="relative w-2/3 h-[600px] bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <svg width="100%" height="100%" className="absolute">
          {renderEdges(tree)}
        </svg>
        {renderNodes(tree)}
      </div>

      {/* Controls */}
      <div className="w-1/3 flex flex-col items-center gap-8 p-6 bg-gray-700 rounded-lg shadow-lg ml-8">
        <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Tree Operations
        </h1>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
          className="w-full px-6 py-3 rounded-lg text-black bg-gray-200 border-2 border-gray-400 focus:outline-none focus:border-pink-500"
        />
        <button
          onClick={handleAddNode}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition"
        >
          Add Node
        </button>
        <button
          onClick={resetTree}
          className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition"
        >
          Reset Tree
        </button>
        <button
          onClick={() => searchNode(Number(inputValue))}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition"
        >
          Search Node
        </button>
        <button
          onClick={() => deleteNode(Number(inputValue))}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition"
        >
          Delete Node
        </button>
        <button
          onClick={handleRandomInsert}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition"
        >
          Insert Random Node
        </button>
        <button
          onClick={handleClearTree}
          className="w-full bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition"
        >
          Clear Tree
        </button>
      </div>
    </div>
  );
};

export default TreeVisualizer;
