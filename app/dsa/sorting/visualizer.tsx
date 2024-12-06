'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Visualizer: React.FC = () => {
    const [array, setArray] = useState<number[]>(Array.from({ length: 10 }, () => Math.floor(Math.random() * 120)));
    const [inputValue, setInputValue] = useState<string>("");
    const [mounted, setMounted] = useState(false);
    const [comparingBars, setComparingBars] = useState<{ [key: number]: boolean }>({});
    const [sortingInProgress, setSortingInProgress] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    // Utility delay function
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    // Array Operations
    const handlePush = () => {
        if (!inputValue) {
            toast.error('Enter number to push')
            return
        }
        if (array.length < 25) {
            const value = Number(inputValue);
            if (value <= 100) {
                setArray([...array, value]);
                setInputValue("");
            } else {
                toast.error("Value cannot exceed 120!");
            }
        } else {
            toast.error("Array size is limited to 25!");
        }
    };

    const handlePop = () => {
        if (!array.length) {
            toast.error('Empty Array')
            return
        }
        setArray(array.slice(0, -1));
        setInputValue("");
    };

    const handleReset = () => {
        setArray(Array.from({ length: 10 }, () => Math.floor(Math.random() * 120)));
        setInputValue("");
    };

    // Bubble Sort Visualization
    const handleBubbleSort = async () => {
        setSortingInProgress(true)
        const arr = [...array];
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                setComparingBars({ [j]: true, [j + 1]: true });
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    setArray([...arr]);
                    await delay(500); // Increased delay
                }
                setComparingBars({});
            }
        }
        setSortingInProgress(false)
        toast.success("Bubble Sort Complete!");
    };

    // Selection Sort Visualization
    const handleSelectionSort = async () => {
        const arr = [...array];
        setSortingInProgress(true)
        for (let i = 0; i < arr.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                setComparingBars({ [i]: true, [j]: true });
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
                setArray([...arr]);
                await delay(500); // Increased delay
            }
            if (minIndex !== i) {
                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
                setArray([...arr]);
                await delay(500); // Increased delay
            }
        }
        setComparingBars({});
        setSortingInProgress(false)
        toast.success("Selection Sort Complete!");
    };

    // Insertion Sort Visualization
    const handleInsertionSort = async () => {
        const arr = [...array];
        setSortingInProgress(true)
        for (let i = 1; i < arr.length; i++) {
            const current = arr[i];
            let j = i - 1;
            
            while (j >= 0 && arr[j] > current) {
                setComparingBars({ [i]: true, [j]: true });
                arr[j + 1] = arr[j];
                j--;
                setArray([...arr]);
                await delay(500); // Increased delay
            }
            arr[j + 1] = current;
            setArray([...arr]);
            await delay(500); // Increased delay
        }
        setComparingBars({});
        setSortingInProgress(false)
        toast.success("Insertion Sort Complete!");
    };

    // Merge Sort Visualization
    const mergeSort = async (arr: number[]): Promise<number[]> => {
        if (arr.length <= 1) return arr;
        const mid = Math.floor(arr.length / 2);
        const left = await mergeSort(arr.slice(0, mid));
        const right = await mergeSort(arr.slice(mid));
        return merge(left, right);
    };

    const merge = async (left: number[], right: number[]): Promise<number[]> => {
        const result: number[] = [];
        let i = 0;
        let j = 0;
        while (i < left.length && j < right.length) {
            setComparingBars({ [i]: true, [j]: true });
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
            await delay(100);
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    };

    const handleMergeSort = async () => {
        setSortingInProgress(true)
        const sortedArray = await mergeSort([...array]);
        setArray(sortedArray);
        setComparingBars({});
        setSortingInProgress(false)
        toast.success("Merge Sort Complete!");
    };

    // Quick Sort Visualization
    const handleQuickSort = async () => {
        const arr = [...array];
        setSortingInProgress(true)
        await quickSort(arr, 0, arr.length - 1);
        setArray([...arr]);
        setComparingBars({});
        setSortingInProgress(false)
        toast.success("Quick Sort Complete!");
    };

    const quickSort = async (arr: number[], low: number, high: number): Promise<void> => {
        if (low < high) {
            const pi = await partition(arr, low, high);
            await quickSort(arr, low, pi - 1);
            await quickSort(arr, pi + 1, high);
        }
    };

    const partition = async (arr: number[], low: number, high: number): Promise<number> => {
        const pivot = arr[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
            setComparingBars({ [i]: true, [j]: true });
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                setArray([...arr]);
                await delay(500); // Increased delay
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        setArray([...arr]);
        await delay(500); // Increased delay
        return i + 1;
    };

    // Heap Sort Visualization
    const handleHeapSort = async () => {
        const arr = [...array];
        setSortingInProgress(true)
        await heapSort(arr);
        setArray([...arr]);
        setComparingBars({});
        setSortingInProgress(false)
        toast.success("Heap Sort Complete!");
    };

    const heapSort = async (arr: number[]): Promise<void> => {
        const n = arr.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            await heapify(arr, n, i);
        }
        for (let i = n - 1; i > 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            await heapify(arr, i, 0);
        }
    };

    const heapify = async (arr: number[], n: number, i: number): Promise<void> => {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }
        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            setArray([...arr]);
            await delay(500); // Increased delay
            await heapify(arr, n, largest);
        }
    };

    const handleStop = () => {
        setSortingInProgress(false);
        toast.info("Sorting stopped!");
    };

    return (
        <div className="flex flex-col items-center min-h-screen p-4">
            <ToastContainer position="top-center" />
            <h1 className="text-3xl font-bold mb-6">Sorting Algorithms</h1>

            {/* Array Visualization */}
            <div className="flex items-end space-x-2 h-64 w-full max-w-4xl border-t border-gray-300">
                {array.map((value, index) => (
                    <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${value * 2}px` }}
                        transition={{ duration: 0.5 }}
                        className={`w-8 rounded-t-lg text-center text-xs text-black relative ${comparingBars[index] ? "bg-red-500" : "bg-accent"
                            }`}
                    >
                        <span className="absolute -bottom-5 left-0 right-0 text-white text-xs">
                            {index}
                        </span>
                        <span className="font-bold">{value}</span>
                    </motion.div>
                ))}
            </div>

            {/* Controls */}
            <div className="mt-20 flex flex-col items-center space-y-4">
                <div className="flex space-x-4">
                    <button onClick={handleBubbleSort} disabled={sortingInProgress} className="btn border-white border-2">Bubble Sort</button>
                    <button onClick={handleSelectionSort} disabled={sortingInProgress} className="btn border-white border-2">Selection Sort</button>
                    <button onClick={handleInsertionSort} disabled={sortingInProgress} className="btn border-white border-2">Insertion Sort</button>
                    <button onClick={handleMergeSort} disabled={sortingInProgress} className="btn border-white border-2">Merge Sort</button>
                    <button onClick={handleQuickSort} disabled={sortingInProgress} className="btn border-white border-2">Quick Sort</button>
                    <button onClick={handleHeapSort} disabled={sortingInProgress} className="btn border-white border-2">Heap Sort</button>
                </div>

                {/* Input */}
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="mt-4 p-2 rounded border-2"
                    placeholder="Enter value"
                />
                <div className="flex mt-4 space-x-4">
                    <button onClick={handlePush} disabled={sortingInProgress} className="btn border-white border-2">Push</button>
                    <button onClick={handlePop} disabled={sortingInProgress} className="btn border-white border-2">Pop</button>
                    <button onClick={handleReset} disabled={sortingInProgress} className="btn border-white border-2">Reset</button>
                    <button onClick={handleStop} disabled={true} className="btn border-white border-2">Stop</button>
                </div>
            </div>
        </div>
    );
};

export default Visualizer;
