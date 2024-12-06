import React from 'react';

const Notes: React.FC = () => {
    const notes = [
        {
            title: '1. What is a Set?',
            description:
                'A set is a data structure that stores unique values in an unordered collection. Sets do not allow duplicate elements, making them useful for storing distinct items like unique IDs or words.',
        },
        {
            title: '2. Set Initialization',
            description:
                'In most programming languages, sets can be initialized using specific syntax. For example, in JavaScript, `const mySet = new Set([1, 2, 3]);` initializes a set with three unique values.',
        },
        {
            title: '3. Uniqueness of Elements',
            description:
                'Sets automatically remove duplicate values. For example, adding the number `5` multiple times to a set will result in only one instance of `5` being stored.',
        },
        {
            title: '4. Set Operations',
            description:
                'Common operations on sets include adding elements (`add`), removing elements (`delete`), checking membership (`has`), and clearing all elements (`clear`).',
        },
        {
            title: '5. Iterating Over a Set',
            description:
                'Sets can be traversed using loops like `for...of` or iterators like `set.keys()`, `set.values()`, or `set.entries()`. Unlike arrays, the order of iteration is based on insertion order.',
        },
        {
            title: '6. Sets vs Arrays',
            description:
                'While both sets and arrays can store collections of data, sets enforce uniqueness and are unordered. Arrays can store duplicates and maintain insertion order. Conversions between sets and arrays can be done easily using spread syntax or constructors.',
        },
        {
            title: '7. Set Size',
            description:
                'The number of elements in a set can be retrieved using the `size` property. For example, `mySet.size` gives the total number of unique elements in the set.',
        },
        {
            title: '8. Union of Sets',
            description:
                'The union of two sets combines their elements, ensuring no duplicates. For example, in JavaScript: `const union = new Set([...setA, ...setB]);`.',
        },
        {
            title: '9. Intersection of Sets',
            description:
                'The intersection of two sets is the collection of elements common to both. For example, in JavaScript: `const intersection = new Set([...setA].filter(x => setB.has(x)));`.',
        },
        {
            title: '10. Difference of Sets',
            description:
                'The difference of two sets is the collection of elements present in one set but not the other. For example, in JavaScript: `const difference = new Set([...setA].filter(x => !setB.has(x)));`.',
        },
        {
            title: '11. Subset and Superset',
            description:
                'A set `A` is a subset of set `B` if all elements of `A` are in `B`. Conversely, `B` is a superset of `A`. These relations are often checked using logical operations or custom functions.',
        },
        {
            title: '12. Practical Use Cases of Sets',
            description:
                'Sets are used for tasks like removing duplicates from arrays, performing mathematical operations (union, intersection, etc.), and efficient membership testing.',
        },
        {
            title: '13. Set Performance',
            description:
                'Sets are optimized for fast membership testing, insertion, and deletion, often with average time complexity of O(1) for these operations in many implementations.',
        },
        {
            title: '14. WeakSet in JavaScript',
            description:
                'A `WeakSet` is a special type of set in JavaScript where elements must be objects. It does not prevent garbage collection of its items, making it ideal for storing objects without creating strong references.',
        },
        {
            title: '15. Immutable Sets',
            description:
                'In some programming languages, sets can be immutable, meaning they cannot be modified after creation. This ensures data consistency in functional programming paradigms.',
        },
        {
            title: '16. Converting Sets to Arrays',
            description:
                'Sets can be converted to arrays using the spread operator (`[...set]`) or a constructor like `Array.from(set)`. This is useful for tasks that require array operations.',
        },
        {
            title: '17. Removing Duplicates from an Array',
            description:
                'Sets can be used to remove duplicates from an array efficiently. For example, in JavaScript: `const uniqueArray = [...new Set(array)];`.',
        },
        {
            title: '18. Limitations of Sets',
            description:
                'Sets do not support indexing or direct access to elements by position, making them less suitable for tasks that require element ordering or positional access.',
        },
        {
            title: '19. Ordered Sets in Other Languages',
            description:
                'Some languages like Python offer ordered sets, which maintain the insertion order of elements while still enforcing uniqueness.',
        },
        {
            title: '20. Multi-Sets',
            description:
                'A multi-set allows duplicate elements and is implemented in some languages like C++ (e.g., `std::multiset`). These are not the same as regular sets, which enforce uniqueness.',
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
