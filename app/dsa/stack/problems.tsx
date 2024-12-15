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
        title: "Maximum Nesting Depth of the Parentheses",
        titleSlug: "maximum-nesting-depth-of-the-parentheses",
        level: "Easy",
        topics: ["String", "Stack"]
    },
    {
        title: "Remove Outermost Parentheses",
        titleSlug: "remove-outermost-parentheses",
        level: "Easy",
        topics: ["String", "Stack"]
    },
    {
        title: "Baseball Game",
        titleSlug: "baseball-game",
        level: "Easy",
        topics: ["Array", "Stack"]
    },
    {
        title: "Remove All Adjacent Duplicates in String",
        titleSlug: "remove-all-adjacent-duplicates-in-string",
        level: "Easy",
        topics: ["String", "Stack"]
    },
    {
        title: "Build an Array with Stack Operations",
        titleSlug: "build-an-array-with-stack-operations",
        level: "Easy",
        topics: ["Array", "Stack"]
    },
    {
        title: "Final Prices with a Special Discount in a Shop",
        titleSlug: "final-prices-with-a-special-discount-in-a-shop",
        level: "Easy",
        topics: ["Array", "Stack"]
    },
    {
        title: "Next Greater Element I",
        titleSlug: "next-greater-element-i",
        level: "Easy",
        topics: ["Array", "Stack"]
    },
    {
        title: "Maximum Twin Sum of a Linked List",
        titleSlug: "maximum-twin-sum-of-a-linked-list",
        level: "Medium",
        topics: ["Linked List", "Two Pointers"]
    },
    {
        title: "Minimum Number of Swaps to Make the String Balanced",
        titleSlug: "minimum-number-of-swaps-to-make-the-string-balanced",
        level: "Medium",
        topics: ["String", "Greedy"]
    },
    {
        title: "Longest Valid Parentheses",
        titleSlug: "longest-valid-parentheses",
        level: "Medium",
        topics: ["String", "Stack"]
    },
    {
        title: "Trapping Rain Water",
        titleSlug: "trapping-rain-water",
        level: "Hard",
        topics: ["Array", "Two Pointers"]
    },
    {
        title: "N-ary Tree Postorder Traversal",
        titleSlug: "n-ary-tree-postorder-traversal",
        level: "Easy",
        topics: ["Tree"]
    },
    {
        title: "N-ary Tree Preorder Traversal",
        titleSlug: "n-ary-tree-preorder-traversal",
        level: "Easy",
        topics: ["Tree"]
    },
    {
        title: "Implement Queue Using Stacks",
        titleSlug: "implement-queue-using-stacks",
        level: "Medium",
        topics: ["Stack", "Queue"]
    },
    {
        title: "Implement Stack Using Queues",
        titleSlug: "implement-stack-using-queues",
        level: "Medium",
        topics: ["Queue", "Stack"]
    },
    {
        title: "Increasing Order Search Tree",
        titleSlug: "increasing-order-search-tree",
        level: "Medium",
        topics: ["Tree"]
    },
    {
        title: "Binary Tree Inorder Traversal",
        titleSlug: "binary-tree-inorder-traversal",
        level: "Easy",
        topics: ["Tree"]
    },
    {
        title: "Construct Binary Search Tree from Preorder Traversal",
        titleSlug: "construct-binary-search-tree-from-preorder-traversal",
        level: "Medium",
        topics: ["Tree", "Binary Search"]
    },
    {
        title: "Maximum Binary Tree",
        titleSlug: "maximum-binary-tree",
        level: "Medium",
        topics: ["Tree"]
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
                    await axios.put("/api/problems", { email: parsedUser.email, topic: "Stack", title: title });
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
                    setCompletedQueList(topicData[5].completedQuestions);
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
