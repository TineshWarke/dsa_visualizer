'use client'
import React, { useState } from 'react';

// Predefined code examples for different languages
const languageExamples: { [key: string]: string } = {
    c: `// C Program to demonstrate Set (using a custom implementation)
#include <stdio.h>
#include <stdbool.h>

#define MAX_SIZE 100

typedef struct {
    int elements[MAX_SIZE];
    int size;
} Set;

bool contains(Set *set, int value) {
    for (int i = 0; i < set->size; i++) {
        if (set->elements[i] == value) return true;
    }
    return false;
}

void add(Set *set, int value) {
    if (!contains(set, value) && set->size < MAX_SIZE) {
        set->elements[set->size++] = value;
    }
}

int main() {
    Set set = {{0}, 0};
    add(&set, 10);
    add(&set, 20);
    add(&set, 10); // Duplicate won't be added

    printf("Set elements: ");
    for (int i = 0; i < set.size; i++) {
        printf("%d ", set.elements[i]);
    }
    return 0;
}`,
    javascript: `// JavaScript Set example
const set = new Set();

// Adding elements
set.add(10);
set.add(20);
set.add(10); // Duplicate won't be added

// Displaying the set elements
console.log('Set elements:', [...set]);

// Check if an element exists
console.log('Contains 10:', set.has(10));`,
    python: `# Python Set example
# Creating a set
my_set = {10, 20, 10}  # Duplicate values are automatically removed

# Adding an element
my_set.add(30)

# Displaying the set
print('Set elements:', my_set)

# Check if an element exists
print('Contains 10:', 10 in my_set)`,
    cpp: `// C++ Set example using STL
#include <iostream>
#include <set>
using namespace std;

int main() {
    set<int> mySet;

    // Adding elements
    mySet.insert(10);
    mySet.insert(20);
    mySet.insert(10); // Duplicate won't be added

    // Displaying the set elements
    cout << "Set elements: ";
    for (int val : mySet) {
        cout << val << " ";
    }
    cout << endl;

    // Check if an element exists
    cout << "Contains 10: " << (mySet.count(10) > 0 ? "Yes" : "No") << endl;
    return 0;
}`,
    java: `// Java Set example using HashSet
import java.util.HashSet;

public class Main {
    public static void main(String[] args) {
        HashSet<Integer> set = new HashSet<>();

        // Adding elements
        set.add(10);
        set.add(20);
        set.add(10); // Duplicate won't be added

        // Displaying the set
        System.out.println("Set elements: " + set);

        // Check if an element exists
        System.out.println("Contains 10: " + set.contains(10));
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
