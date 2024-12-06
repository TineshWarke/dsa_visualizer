'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StringVisualizer: React.FC = () => {
    const [str, setStr] = useState<string>('HELLO');
    const [inputValue, setInputValue] = useState<string>('');
    const [indexValue, setIndexValue] = useState<string>('');
    const [replaceValue, setReplaceValue] = useState<string>('');
    const [mounted, setMounted] = useState(false);
    const [uniqueKeys, setUniqueKeys] = useState<string[]>([]);

    useEffect(() => {
        setMounted(true);
        setUniqueKeys(str.split('').map(() => generateUniqueKey()));
    }, []);

    const generateUniqueKey = () => Math.random().toString(36).substr(2, 9);

    if (!mounted) {
        return null;
    }

    // String Operations
    const handleAppend = () => {
        if (!inputValue) {
            toast.error('Enter a character to append');
            return;
        }
        setStr(str + inputValue);
        setUniqueKeys([...uniqueKeys, generateUniqueKey()]);
        setInputValue('');
    };

    const handlePrepend = () => {
        if (!inputValue) {
            toast.error('Enter a character to prepend');
            return;
        }
        setStr(inputValue + str);
        setUniqueKeys([generateUniqueKey(), ...uniqueKeys]);
        setInputValue('');
    };

    const handleAddAtIndex = () => {
        const index = Number(indexValue);
        if (!isNaN(index) && index >= 0 && index <= str.length && inputValue) {
            const newStr = str.slice(0, index) + inputValue + str.slice(index);
            setStr(newStr);
            const newKeys = [...uniqueKeys];
            newKeys.splice(index, 0, generateUniqueKey());
            setUniqueKeys(newKeys);
            setInputValue('');
            setIndexValue('');
        } else {
            toast.error('Invalid input or index!');
        }
    };

    const handleDeleteAtIndex = () => {
        const index = Number(indexValue);
        if (!isNaN(index) && index >= 0 && index < str.length) {
            const newStr = str.slice(0, index) + str.slice(index + 1);
            setStr(newStr);
            const newKeys = [...uniqueKeys];
            newKeys.splice(index, 1);
            setUniqueKeys(newKeys);
            setIndexValue('');
        } else {
            toast.error('Invalid index!');
        }
    };

    const handleReset = () => {
        setStr('HELLO');
        setUniqueKeys('HELLO'.split('').map(() => generateUniqueKey()));
    };

    const handleReverse = () => {
        setStr(str.split('').reverse().join(''));
        setUniqueKeys([...uniqueKeys].reverse());
    };

    const handleToUpperCase = () => {
        setStr(str.toUpperCase());
    };

    const handleToLowerCase = () => {
        setStr(str.toLowerCase());
    };

    const handleCapitalize = () => {
        setStr(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    };

    const handleTrim = () => {
        setStr(str.trim());
    };

    const handleSubstring = () => {
        const index = Number(indexValue);
        if (!isNaN(index) && index >= 0 && index < str.length) {
            setStr(str.substring(0, index));
        } else {
            toast.error('Invalid index for substring!');
        }
    };

    const handleSplit = () => {
        const delimiter = inputValue || ' ';
        const splitStr = str.split(delimiter);
        setStr(splitStr.join(' '));
        setInputValue('');
    };

    const handleReplace = () => {
        if (!inputValue || !replaceValue) {
            toast.error('Enter both target and replacement strings');
            return;
        }
        setStr(str.replace(inputValue, replaceValue));
        setInputValue('');
        setReplaceValue('');
    };

    const handleClear = () => {
        setStr('');
        setUniqueKeys([]);
    };

    return (
        <div className="flex flex-col items-center min-h-screen p-4">
            <ToastContainer position="top-center" />
            <h1 className="text-3xl font-bold mb-6">String Visualizer</h1>

            {/* String Visualization */}
            <div className="flex items-center justify-center space-x-4 h-56 w-full max-w-4xl border-t border-gray-300">
                {str.split('').map((char, index) => (
                    <motion.div
                        key={uniqueKeys[index] || generateUniqueKey()}
                        initial={{ scale: 1.5 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 0.6,
                            ease: 'easeOut',
                        }}
                        whileHover={{
                            scale: 1.3,
                            backgroundColor: '#34d399',
                            transition: { duration: 0.3 },
                        }}
                        className="w-12 h-12 flex items-center justify-center bg-accent rounded-full text-accent-content text-xl font-bold shadow-md relative"
                    >
                        {char}
                        <span className="absolute -bottom-6 text-xs text-white">{index}</span>
                    </motion.div>
                ))}
            </div>

            {/* Controls */}
            <div className="flex flex-col items-center space-y-4">
                <div className="flex space-x-4">
                    <input
                        type="text"
                        maxLength={1}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="px-4 py-2 border-white border-2 rounded-lg focus:outline-none"
                        placeholder="Input"
                    />
                    <input
                        type="number"
                        value={indexValue}
                        onChange={(e) => setIndexValue(e.target.value)}
                        className="px-4 py-2 border-white border-2 rounded-lg focus:outline-none"
                        placeholder="Index"
                    />
                    <input
                        type="text"
                        value={replaceValue}
                        onChange={(e) => setReplaceValue(e.target.value)}
                        className="px-4 py-2 border-white border-2 rounded-lg focus:outline-none"
                        placeholder="Replace Value"
                    />
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-3 gap-4">
                    <button onClick={handlePrepend} className="btn border-white border-2">Prepend</button>
                    <button onClick={handleAppend} className="btn border-white border-2">Append</button>
                    <button onClick={handleAddAtIndex} className="btn border-white border-2">Add at Index</button>
                    <button onClick={handleDeleteAtIndex} className="btn border-white border-2">Delete at Index</button>
                    <button onClick={handleReset} className="btn border-white border-2">Reset</button>
                    <button onClick={handleReverse} className="btn border-white border-2">Reverse</button>
                    <button onClick={handleToUpperCase} className="btn border-white border-2">To Upper</button>
                    <button onClick={handleToLowerCase} className="btn border-white border-2">To Lower</button>
                    <button onClick={handleCapitalize} className="btn border-white border-2">Capitalize</button>
                    <button onClick={handleTrim} className="btn border-white border-2">Trim</button>
                    <button onClick={handleSubstring} className="btn border-white border-2">Substring</button>
                    <button onClick={handleSplit} className="btn border-white border-2">Split</button>
                    <button onClick={handleReplace} className="btn border-white border-2">Replace</button>
                    <button onClick={handleClear} className="btn border-white border-2">Clear</button>
                </div>
            </div>
        </div>
    );
};

export default StringVisualizer;
