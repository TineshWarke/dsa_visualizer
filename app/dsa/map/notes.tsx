import React from 'react';

const Notes: React.FC = () => {
    const notes = [
        {
            title: '1. What is a Map?',
            description:
                'A Map is a collection of key-value pairs where each key is unique and is used to access its corresponding value. Maps are often used when you need to associate data in a way that allows for fast lookups and insertions.',
        },
        {
            title: '2. Difference Between Map and Object',
            description:
                'In JavaScript, both Maps and Objects store key-value pairs. However, Maps allow keys of any type (including objects, functions, and primitive values), while Objects can only have strings and symbols as keys. Maps also maintain the order of elements, while objects do not guarantee order.',
        },
        {
            title: '3. Common Map Operations',
            description:
                'Maps provide several important operations like adding, getting, and removing key-value pairs. You can check if a key exists, retrieve its corresponding value, or delete a key-value pair. Maps also allow checking their size and clearing all key-value pairs.',
        },
        {
            title: '4. Iterating Through a Map',
            description:
                'You can iterate over a Map using methods like `forEach` to execute a function for each key-value pair, or you can use a `for…of` loop with `.keys()`, `.values()`, or `.entries()` to loop through keys, values, or both.',
        },
        {
            title: '5. Time Complexity',
            description:
                'Maps generally provide constant time complexity (O(1)) for common operations like adding, getting, and deleting key-value pairs. This makes them very efficient for large datasets compared to arrays or objects.',
        },
        {
            title: '6. Key Characteristics',
            description:
                'Maps maintain the insertion order of key-value pairs and allow keys of any type. They are also iterable, meaning you can loop through the map easily, which makes them useful for situations where order matters or when dealing with different data types as keys.',
        },
        {
            title: '7. Use Cases for Maps',
            description:
                'Maps are ideal when you need to perform efficient lookups based on keys, such as for caching, storing configuration data, or representing relationships between different types of data. Maps are also useful for scenarios where you need to use objects or other non-primitive values as keys.',
        },
        {
            title: '8. Performance Considerations',
            description:
                'Maps are optimized for frequent insertion, deletion, and lookup operations. In contrast to objects, Maps are better suited for large datasets because they offer faster lookups and maintain the order of elements.',
        },
        {
            title: '9. WeakMap',
            description:
                'A WeakMap is similar to a Map but with one key difference: the keys in a WeakMap are weakly referenced. This means that if there are no other references to the key, it can be garbage collected, helping to avoid memory leaks in certain situations.',
        },
        {
            title: '10. Serialization of Maps',
            description:
                'To convert a Map into an array or JSON format for storage or transmission, you can use methods like `Array.from(map)` or `JSON.stringify(Object.fromEntries(map))`. Similarly, to convert back, you can use `new Map()` to recreate the Map.',
        },
        {
            title: '11. Maps vs. Arrays',
            description:
                'While arrays are great for ordered collections of values, Maps are better for cases where you need to associate values with keys. Arrays use numerical indexes, while Maps allow any type of key. Maps also maintain order and allow fast lookups, making them ideal for certain types of data structures.',
        },
    ];

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r my-12">
            <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-7xl w-full">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center hover:text-base-300 transition-colors duration-300">
                    Everything About Arrays
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {notes.map((note, index) => (
                        <div key={index} className="border-l-4 pl-6 py-4 border-teal-500">
                            <h3 className="text-xl font-semibold text-teal-600">{note.title}</h3>
                            <p className="text-gray-700 text-lg text-justify">{note.description}</p>
                        </div>
                    ))}
                </div>
                <p className="mt-6 text-center text-sm text-gray-500">
                    Arrays are one of the most important data structures, and mastering them is crucial for efficient programming.
                </p>
            </div>
        </div>
    );
};

export default Notes;
