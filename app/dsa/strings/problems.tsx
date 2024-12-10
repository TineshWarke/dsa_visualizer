'use client';

import Link from "next/link";
import { motion } from "framer-motion";

interface Problem {
    title: string;
    titleSlug: string;
    level: string;
    topics: string[];
}

const problems: Problem[] = [
    {
        title: "Final Value of Variable After Performing Operations",
        titleSlug: "final-value-of-variable-after-performing-operations",
        level: "Easy",
        topics: ["String"]
    },
    {
        title: "Defanging an IP Address",
        titleSlug: "defanging-an-ip-address",
        level: "Easy",
        topics: ["String"]
    },
    {
        title: "Maximum Number of Words Found in Sentences",
        titleSlug: "maximum-number-of-words-found-in-sentences",
        level: "Easy",
        topics: ["String"]
    },
    {
        title: "Goal Parser Interpretation",
        titleSlug: "goal-parser-interpretation",
        level: "Easy",
        topics: ["String"]
    },
    {
        title: "Shuffle String",
        titleSlug: "shuffle-string",
        level: "Easy",
        topics: ["String"]
    },
    {
        title: "Jewels and Stones",
        titleSlug: "jewels-and-stones",
        level: "Easy",
        topics: ["String", "Hash Set"]
    },
    {
        title: "Count the Number of Consistent Strings",
        titleSlug: "count-the-number-of-consistent-strings",
        level: "Easy",
        topics: ["String", "Hash Set"]
    },
    {
        title: "Sorting the Sentence",
        titleSlug: "sorting-the-sentence",
        level: "Easy",
        topics: ["String"]
    },
    {
        title: "Valid Anagram",
        titleSlug: "valid-anagram",
        level: "Easy",
        topics: ["String", "Hash Map"]
    },
    {
        title: "Find First Palindromic String in the Array",
        titleSlug: "find-first-palindromic-string-in-the-array",
        level: "Easy",
        topics: ["String"]
    },
    {
        title: "Reverse Words in a String III",
        titleSlug: "reverse-words-in-a-string-iii",
        level: "Easy",
        topics: ["String"]
    },
    {
        title: "Split a String in Balanced Strings",
        titleSlug: "split-a-string-in-balanced-strings",
        level: "Easy",
        topics: ["String"]
    },
    {
        title: "Determine if String Halves Are Alike",
        titleSlug: "determine-if-string-halves-are-alike",
        level: "Easy",
        topics: ["String"]
    },
    {
        title: "Substrings of Size Three with Distinct Characters",
        titleSlug: "substrings-of-size-three-with-distinct-characters",
        level: "Easy",
        topics: ["String"]
    },
    {
        title: "Longest Nice Substring",
        titleSlug: "longest-nice-substring",
        level: "Medium",
        topics: ["String"]
    },
    {
        title: "Is Subsequence",
        titleSlug: "is-subsequence",
        level: "Easy",
        topics: ["String", "Dynamic Programming"]
    },
    {
        title: "Count Substrings That Differ by One Character",
        titleSlug: "count-substrings-that-differ-by-one-character",
        level: "Medium",
        topics: ["String"]
    },
    {
        title: "Find the Longest Substring Containing Vowels in Even Counts",
        titleSlug: "find-the-longest-substring-containing-vowels-in-even-counts",
        level: "Medium",
        topics: ["String"]
    },
    {
        title: "Maximize the Confusion of an Exam",
        titleSlug: "maximize-the-confusion-of-an-exam",
        level: "Medium",
        topics: ["String"]
    },
    {
        title: "Reverse String",
        titleSlug: "reverse-string",
        level: "Easy",
        topics: ["String"]
    },
    {
        title: "Different Ways to Add Parentheses",
        titleSlug: "different-ways-to-add-parentheses",
        level: "Medium",
        topics: ["String", "Recursion"]
    },
    {
        title: "Binary Tree Paths",
        titleSlug: "binary-tree-paths",
        level: "Easy",
        topics: ["Tree"]
    },
    {
        title: "Letter Tile Possibilities",
        titleSlug: "letter-tile-possibilities",
        level: "Medium",
        topics: ["String", "Backtracking"]
    },
    {
        title: "Check if a Word Occurs as a Prefix of Any Word in a Sentence",
        titleSlug: "check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence",
        level: "Easy",
        topics: ["String"]
    },
    {
        title: "String Matching in an Array",
        titleSlug: "string-matching-in-an-array",
        level: "Easy",
        topics: ["String"]
    }
];


const LeetCodePage = () => (
    <div className="container mx-auto p-4 mb-8">
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
                                className="checkbox checkbox-accent"
                            />
                            <label htmlFor={`checkbox-${titleSlug}`} className="text-sm text-gray-300">
                                Mark as Complete
                            </label>
                        </div>
                    </div>
                </motion.li>
            ))}
        </motion.ul>

    </div>
);

export default LeetCodePage;
