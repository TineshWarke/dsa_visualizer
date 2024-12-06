'use client'
import React, { useState } from 'react';

// Predefined code examples for different languages
const languageExamples: { [key: string]: string } = {
    c: `// C Program to demonstrate array initialization
#include <stdio.h>

int main()
{
    // array initialization using initializer list
    int arr[5] = { 10, 20, 30, 40, 50 };

    // array initialization using initializer list without specifying size
    int arr1[] = { 1, 2, 3, 4, 5 };

    // array initialization using for loop
    float arr2[5];
    for (int i = 0; i < 5; i++) {
        arr2[i] = (float)i * 2.1;
    }
    return 0;
}`,
    javascript: `// JavaScript array initialization
const arr = [10, 20, 30, 40, 50]; // Using initializer list
const arr1 = new Array(5).fill(0).map((_, index) => index * 2.1); // Using for loop to initialize`,
    python: `# Python list initialization
arr = [10, 20, 30, 40, 50]  # Using initializer list
arr1 = [i * 2.1 for i in range(5)]  # Using list comprehension to initialize`,
    cpp: `// C++ Program to demonstrate array initialization
#include <iostream>
using namespace std;

int main()
{
    // array initialization using initializer list
    int arr[5] = {10, 20, 30, 40, 50};

    // array initialization using initializer list without specifying size
    int arr1[] = {1, 2, 3, 4, 5};

    // array initialization using for loop
    float arr2[5];
    for (int i = 0; i < 5; i++) {
        arr2[i] = (float)i * 2.1;
    }

    return 0;
}`,
    java: `// Java Program to demonstrate array initialization
public class Main {
    public static void main(String[] args) {
        // array initialization using initializer list
        int[] arr = {10, 20, 30, 40, 50};

        // array initialization using for loop
        float[] arr2 = new float[5];
        for (int i = 0; i < 5; i++) {
            arr2[i] = (float) i * 2.1;
        }
    }
}`
};

const Terminal: React.FC = () => {
    const [selectedLang, setSelectedLang] = useState<string>('c');
    const [copied, setCopied] = useState<boolean>(false);

    const handleLangChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLang(event.target.value);
        setCopied(false);
    };

    const handleCopyCode = () => {
        navigator.clipboard.writeText(languageExamples[selectedLang])
            .then(() => setCopied(true))
            .catch(() => alert('Failed to copy the code.'));
    };

    return (
        <div className='h-screen px-80 py-14'>
            <div className="bg-black text-white p-6 rounded-lg font-mono">
                <div className="mb-4">
                    <label htmlFor="language" className="text-gray-300">Select Language:</label>
                    <select
                        id="language"
                        value={selectedLang}
                        onChange={handleLangChange}
                        className="bg-gray-800 text-white p-2 rounded mt-2 w-full"
                    >
                        <option value="c">C</option>
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="cpp">C++</option>
                        <option value="java">Java</option>
                    </select>
                </div>

                <div className="h-full overflow-y-auto p-4 bg-gray-900 rounded-lg">
                    <div className='grid grid-cols-2'>
                        <div className="text-accent mb-2"> {selectedLang}</div>
                        <button
                            onClick={handleCopyCode}
                            className="ml-64 h-7 bg-gray-800 hover:bg-gray-700 text-white px-4 rounded"
                        >
                            {copied ? 'Copied!' : 'Copy Code'}
                        </button>
                    </div>

                    <pre className="whitespace-pre-wrap break-words text-sm text-gray-300">
                        {languageExamples[selectedLang]}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default Terminal;
