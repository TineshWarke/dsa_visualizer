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
        title: "Reverse Linked List",
        titleSlug: "reverse-linked-list",
        level: "Easy",
        topics: ["Linked List"]
    },
    {
        title: "Merge Two Sorted Lists",
        titleSlug: "merge-two-sorted-lists",
        level: "Easy",
        topics: ["Linked List"]
    },
    {
        title: "Add Two Numbers",
        titleSlug: "add-two-numbers",
        level: "Medium",
        topics: ["Linked List", "Math"]
    },
    {
        title: "Remove Nth Node From End of List",
        titleSlug: "remove-nth-node-from-end-of-list",
        level: "Medium",
        topics: ["Linked List", "Two Pointers"]
    },
    {
        title: "Linked List Cycle",
        titleSlug: "linked-list-cycle",
        level: "Easy",
        topics: ["Linked List", "Two Pointers"]
    },
    {
        title: "Linked List Cycle II",
        titleSlug: "linked-list-cycle-ii",
        level: "Medium",
        topics: ["Linked List", "Two Pointers"]
    },
    {
        title: "Copy List with Random Pointer",
        titleSlug: "copy-list-with-random-pointer",
        level: "Medium",
        topics: ["Linked List", "Hash Map"]
    },
    {
        title: "Intersection of Two Linked Lists",
        titleSlug: "intersection-of-two-linked-lists",
        level: "Easy",
        topics: ["Linked List", "Two Pointers"]
    },
    {
        title: "Remove Duplicates from Sorted List",
        titleSlug: "remove-duplicates-from-sorted-list",
        level: "Easy",
        topics: ["Linked List"]
    },
    {
        title: "Remove Duplicates from Sorted List II",
        titleSlug: "remove-duplicates-from-sorted-list-ii",
        level: "Medium",
        topics: ["Linked List"]
    },
    {
        title: "Reorder List",
        titleSlug: "reorder-list",
        level: "Medium",
        topics: ["Linked List", "Two Pointers"]
    },
    {
        title: "Odd Even Linked List",
        titleSlug: "odd-even-linked-list",
        level: "Medium",
        topics: ["Linked List"]
    },
    {
        title: "Palindrome Linked List",
        titleSlug: "palindrome-linked-list",
        level: "Easy",
        topics: ["Linked List", "Two Pointers"]
    },
    {
        title: "Sort List",
        titleSlug: "sort-list",
        level: "Medium",
        topics: ["Linked List", "Merge Sort"]
    },
    {
        title: "Flatten a Multilevel Doubly Linked List",
        titleSlug: "flatten-a-multilevel-doubly-linked-list",
        level: "Medium",
        topics: ["Linked List", "DFS"]
    },
    {
        title: "Rotate List",
        titleSlug: "rotate-list",
        level: "Medium",
        topics: ["Linked List", "Two Pointers"]
    },
    {
        title: "Swap Nodes in Pairs",
        titleSlug: "swap-nodes-in-pairs",
        level: "Medium",
        topics: ["Linked List"]
    },
    {
        title: "Reverse Nodes in k-Group",
        titleSlug: "reverse-nodes-in-k-group",
        level: "Hard",
        topics: ["Linked List"]
    },
    {
        title: "Delete Node in a Linked List",
        titleSlug: "delete-node-in-a-linked-list",
        level: "Easy",
        topics: ["Linked List"]
    },
    {
        title: "Remove Linked List Elements",
        titleSlug: "remove-linked-list-elements",
        level: "Easy",
        topics: ["Linked List"]
    },
    {
        title: "Convert Binary Number in a Linked List to Integer",
        titleSlug: "convert-binary-number-in-a-linked-list-to-integer",
        level: "Easy",
        topics: ["Linked List", "Math"]
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
                    await axios.put("/api/problems", { email: parsedUser.email, topic: "Linked List", title: title });
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
                    setCompletedQueList(topicData[7].completedQuestions);
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

