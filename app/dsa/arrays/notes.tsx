import React from 'react';

const Notes: React.FC = () => {
    const notes = [
        {
            title: '1. What is an Array?',
            description:
                'An array is a data structure that can hold multiple values under a single variable name. The values in an array are stored in a contiguous memory location and are usually of the same data type. Each element in the array is accessed using an index, starting from 0.',
        },
        {
            title: '2. Array Indexing',
            description:
                'Arrays are indexed collections, meaning each element has a unique index. The first element is at index 0, the second at index 1, and so on. Negative indexing (starting from the end) is supported in some languages like Python, allowing access from the end of the array.',
        },
        {
            title: '3. Fixed Size vs Dynamic Size',
            description:
                'In most languages, arrays have a fixed size when they are created. However, some languages allow arrays to dynamically resize. For example, dynamic arrays (e.g., ArrayList in Java, vector in C++) can grow or shrink in size during runtime.',
        },
        {
            title: '4. Homogeneous Data Type',
            description:
                'Arrays generally store elements of the same data type. This means all elements are either integers, strings, or any other single type. This makes it easier to perform operations and optimizations on the data.',
        },
        {
            title: '5. Array Traversal',
            description:
                'Arrays can be traversed using various techniques like loops (for, while) or iterators. Traversing through an array allows accessing each element and performing operations, such as printing, updating, or manipulating the elements.',
        },
        {
            title: '6. Multidimensional Arrays',
            description:
                'Arrays can be multidimensional, which means they can hold arrays as elements. A 2D array can be thought of as a table or grid, with rows and columns. Multidimensional arrays are used for complex data representation like matrices or images.',
        },
        {
            title: '7. Array Operations',
            description:
                'Common operations on arrays include adding or removing elements, searching for specific elements, sorting, filtering, slicing (getting a subarray), and updating array elements. In many languages, built-in functions exist for these operations.',
        },
        {
            title: '8. Memory Efficiency',
            description:
                'Arrays are often memory-efficient because they store elements in contiguous memory locations. This allows for faster data access, as the memory is organized and predictable. The fixed-size nature of arrays can also help in optimizing memory usage.',
        },
        {
            title: '9. Array Initialization',
            description:
                'Arrays can be initialized with specific values or left empty with a predefined size. In most languages, the syntax to declare an array is as follows: `Type[] arrayName = new Type[size]`. Some languages allow array initialization with values like `arrayName = [1, 2, 3]`.',
        },
        {
            title: '10. Immutable vs Mutable Arrays',
            description:
                'In some languages, arrays are immutable, meaning their elements cannot be modified after creation (e.g., tuples in Python). In other languages, arrays are mutable, meaning their elements can be modified at any point in time.',
        },
        {
            title: '11. Array vs List',
            description:
                'While both arrays and lists are used to store collections of data, arrays usually have a fixed size, and elements must be of the same type. Lists, on the other hand, are often dynamic and can hold elements of mixed types (depending on the language). Lists can grow or shrink in size dynamically.',
        },
        {
            title: '12. Sparse Arrays',
            description:
                'A sparse array is an array in which most of the elements are zero or empty. Sparse arrays are often used to store large datasets with many missing values, helping save memory by only storing non-zero elements.',
        },
        {
            title: '13. Array Slicing',
            description:
                'Array slicing is the process of extracting a subset of an array. In many languages like Python, this can be done using a range or specific index, e.g., `array[2:5]` extracts elements at index 2, 3, and 4.',
        },
        {
            title: '14. Associative Arrays (Hash Maps)',
            description:
                'Associative arrays are arrays that use key-value pairs rather than numerical indices. This allows you to store values associated with a unique key. Some languages (e.g., JavaScript, PHP) support associative arrays natively, while others implement them using hash maps.',
        },
        {
            title: '15. Resizing Arrays',
            description:
                'Resizing an array involves creating a new array with a larger or smaller size and copying the existing elements into it. Some data structures like dynamic arrays (e.g., `ArrayList` in Java, `Vector` in C++) support automatic resizing when elements are added or removed.',
        },
        {
            title: '16. Memory Allocation of Arrays',
            description:
                'Arrays are typically allocated in contiguous blocks of memory. In languages with manual memory management (like C), the memory for arrays can be allocated using specific functions like `malloc`. In higher-level languages, the memory allocation is managed automatically.',
        },
        {
            title: '17. Array References and Copying',
            description:
                'When passing arrays to functions, a reference to the array is passed, not the actual array. This means modifications made within the function affect the original array. To avoid this, arrays can be copied before passing, either by value or through shallow/deep copy mechanisms.',
        },
        {
            title: '18. Array Search Algorithms',
            description:
                'Common algorithms for searching in arrays include linear search (for unsorted arrays) and binary search (for sorted arrays). Searching allows finding the index or value of a particular element.',
        },
        {
            title: '19. Sorting Arrays',
            description:
                'Sorting is the process of arranging elements in a particular order. Common sorting algorithms include bubble sort, quicksort, mergesort, and heapsort. Arrays can be sorted either in ascending or descending order.',
        },
        {
            title: '20. Array Concatenation',
            description:
                'Concatenation is the process of joining two or more arrays to form a single array. Many languages provide built-in methods for array concatenation, like `concat()` in JavaScript or `array1 + array2` in Python.',
        },
        {
            title: '21. Array Spreading/Unpacking',
            description:
                'In some languages, you can use the spread operator or unpacking syntax to expand an array into individual elements. For example, in JavaScript, `let newArray = [...array1, ...array2]` combines two arrays.',
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
