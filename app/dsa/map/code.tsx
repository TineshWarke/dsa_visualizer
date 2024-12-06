'use client'
import React, { useState } from 'react';

// Predefined code examples for different languages
const languageExamples: { [key: string]: string } = {
    c: `// C Program to demonstrate Map (using a custom implementation)
#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100

typedef struct {
    int key;
    int value;
} MapEntry;

typedef struct {
    MapEntry entries[MAX_SIZE];
    int size;
} Map;

void insert(Map *map, int key, int value) {
    if (map->size < MAX_SIZE) {
        map->entries[map->size].key = key;
        map->entries[map->size].value = value;
        map->size++;
    }
}

int get(Map *map, int key) {
    for (int i = 0; i < map->size; i++) {
        if (map->entries[i].key == key) {
            return map->entries[i].value;
        }
    }
    return -1; // Key not found
}

int main() {
    Map map = {{0}, 0};
    insert(&map, 1, 10);
    insert(&map, 2, 20);

    printf("Value for key 1: %d\n", get(&map, 1));
    printf("Value for key 2: %d\n", get(&map, 2));
    return 0;
}`,
    javascript: `// JavaScript Map example
const map = new Map();

// Inserting key-value pairs
map.set(1, 10);
map.set(2, 20);

// Retrieving values
console.log('Value for key 1:', map.get(1));
console.log('Value for key 2:', map.get(2));

// Checking if a key exists
console.log('Contains key 1:', map.has(1));`,
    python: `# Python Dictionary (Map) example
# Creating a dictionary (Map)
my_map = {1: 10, 2: 20}

# Retrieving values
print('Value for key 1:', my_map.get(1))
print('Value for key 2:', my_map.get(2))

# Checking if a key exists
print('Contains key 1:', 1 in my_map)`,
    cpp: `// C++ Map example using STL
#include <iostream>
#include <map>
using namespace std;

int main() {
    map<int, int> myMap;

    // Inserting key-value pairs
    myMap[1] = 10;
    myMap[2] = 20;

    // Retrieving values
    cout << "Value for key 1: " << myMap[1] << endl;
    cout << "Value for key 2: " << myMap[2] << endl;

    // Checking if a key exists
    if (myMap.find(1) != myMap.end()) {
        cout << "Contains key 1" << endl;
    }

    return 0;
}`,
    java: `// Java Map example using HashMap
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<Integer, Integer> map = new HashMap<>();

        // Inserting key-value pairs
        map.put(1, 10);
        map.put(2, 20);

        // Retrieving values
        System.out.println("Value for key 1: " + map.get(1));
        System.out.println("Value for key 2: " + map.get(2));

        // Checking if a key exists
        System.out.println("Contains key 1: " + map.containsKey(1));
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
