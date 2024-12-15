'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

interface Problem {
    title: string;
    titleSlug: string;
    level: string;
    topics: string[];
}

const problems: Problem[] = [
    {
        title: "Implement Queue using Stacks",
        titleSlug: "implement-queue-using-stacks",
        level: "Easy",
        topics: ["Queue", "Stack"]
    },
    {
        title: "Number of Recent Calls",
        titleSlug: "number-of-recent-calls",
        level: "Easy",
        topics: ["Queue"]
    },
    {
        title: "Design Circular Queue",
        titleSlug: "design-circular-queue",
        level: "Medium",
        topics: ["Queue"]
    },
    {
        title: "My Calendar I",
        titleSlug: "my-calendar-i",
        level: "Medium",
        topics: ["Queue"]
    },
    {
        title: "Moving Average from Data Stream",
        titleSlug: "moving-average-from-data-stream",
        level: "Easy",
        topics: ["Queue"]
    },
    {
        title: "Design Hit Counter",
        titleSlug: "design-hit-counter",
        level: "Medium",
        topics: ["Queue"]
    },
    {
        title: "The Kth Largest Element in a Stream",
        titleSlug: "the-kth-largest-element-in-a-stream",
        level: "Easy",
        topics: ["Queue", "Design", "Heap"]
    },
    {
        title: "Last Stone Weight",
        titleSlug: "last-stone-weight",
        level: "Easy",
        topics: ["Queue", "Simulation"]
    },
    {
        title: "Maximal Rectangle",
        titleSlug: "maximal-rectangle",
        level: "Hard",
        topics: ["Queue", "Stack", "Dynamic Programming"]
    },
    {
        title: "Sliding Window Maximum",
        titleSlug: "sliding-window-maximum",
        level: "Hard",
        topics: ["Queue", "Sliding Window", "Heap"]
    },
    {
        title: "Kth Smallest Element in a Sorted Matrix",
        titleSlug: "kth-smallest-element-in-a-sorted-matrix",
        level: "Medium",
        topics: ["Queue", "Binary Search"]
    },
    {
        title: "Surrounded Regions",
        titleSlug: "surrounded-regions",
        level: "Medium",
        topics: ["Queue", "DFS", "BFS"]
    },
    {
        title: "Water and Jug Problem",
        titleSlug: "water-and-jug-problem",
        level: "Medium",
        topics: ["Queue", "Math"]
    },
    {
        title: "Open the Lock",
        titleSlug: "open-the-lock",
        level: "Medium",
        topics: ["Queue", "BFS"]
    },
    {
        title: "Minimum Window Substring",
        titleSlug: "minimum-window-substring",
        level: "Hard",
        topics: ["Queue", "Sliding Window", "Hash Map"]
    },
    {
        title: "Word Ladder II",
        titleSlug: "word-ladder-ii",
        level: "Hard",
        topics: ["Queue", "BFS", "Backtracking"]
    }
];

const LeetCodePage: React.FC = () => {
    const [completedQueList, setCompletedQueList] = useState<string[]>([]);

    const handelSubmission = async (title: string) => {
        try {
            if (typeof window !== "undefined") {
                const storedUser = localStorage.getItem("user");
                if (storedUser) {
                    const parsedUser = JSON.parse(storedUser);
                    await axios.put("/api/problems", { email: parsedUser.email, topic: "Queue", title: title });
                    getSubmission();
                }
            }
        } catch (error) {
            const errorMessage =
                axios.isAxiosError(error) && error.response?.data?.error
                    ? error.response.data.error
                    : "An error occurred";
            console.log(errorMessage);
        }
    }

    const getSubmission = async () => {
        try {
            if (typeof window !== "undefined") {
                const storedUser = localStorage.getItem("user");
                if (storedUser) {
                    const parsedUser = JSON.parse(storedUser);
                    const response = await axios.put("/api/topic", { email: parsedUser.email });
                    const { topicData } = response.data;
                    setCompletedQueList(topicData[6].completedQuestions);
                }
            }
        } catch (error) {
            const errorMessage =
                axios.isAxiosError(error) && error.response?.data?.error
                    ? error.response.data.error
                    : "An error occurred";
            console.log(errorMessage);
        }
    }

    useEffect(() => {
        getSubmission();
    }, [])

    return (
        <div className="container mx-auto p-4 mb-8 w-[1300px]">
            <h1 className="text-2xl font-bold mb-4">LeetCode Problems</h1>
            <motion.ul
                className="space-y-4"
                initial={{ opacity: 0, scale: 0.95 }} // Starting slightly scaled down
                animate={{ opacity: 1, scale: 1 }} // End state with full scale and opacity
                transition={{ duration: 0.7, type: "spring", stiffness: 100 }} // Spring animation for smoothness
            >
                {problems.map(({ title, titleSlug, level, topics }, index) => (
                    <motion.li
                        key={titleSlug}
                        className="flex items-center justify-between p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 50 }} // Start from below the viewport
                        animate={{ opacity: 1, y: 0 }} // Animate to its normal position
                        transition={{
                            duration: 0.6,
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 200,
                            damping: 25
                        }} // Spring-based animation for individual list items
                    >
                        <div className="flex-1">
                            <div className="flex justify-start items-center mb-2 gap-8">
                                <p className="text-lg font-semibold text-white">{title}</p>
                                <div className={`badge pb-3 p-2 text-black font-medium ${level === 'Easy' ? 'bg-green-500' : level === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'}`}>{level}</div>
                            </div>
                            <p className="text-sm text-gray-300">{topics.join(", ")}</p>
                        </div>
                        <div className="flex items-center justify-between gap-8">
                            <Link href={`https://leetcode.com/problems/${titleSlug}`} target="_blank">
                                <button
                                    className="btn btn-outline btn-accent"
                                    aria-label={`View problem ${title}`}
                                >
                                    View
                                </button>
                            </Link>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id={`checkbox-${titleSlug}`}
                                    className="checkbox checkbox-accent checked:true"
                                    checked={completedQueList.includes(title)}
                                    onChange={() => (handelSubmission(title))}
                                />
                                <label htmlFor={`checkbox-${titleSlug}`} className="text-sm text-gray-300 min-w-[150px]">
                                    {
                                        completedQueList.includes(title) ?
                                            "Completed"
                                            : "Mark as Complete"
                                    }
                                </label>
                            </div>
                        </div>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    )
};

export default LeetCodePage;
