import React from 'react';

const Notes: React.FC = () => {
  const notes = [
    {
      title: '1. What is a Stack?',
      description:
        'A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. This means the last element added to the stack is the first one to be removed.',
    },
    {
      title: '2. Key Operations of a Stack',
      description:
        'Stacks support two primary operations:\n- Push: Adds an element to the top of the stack.\n- Pop: Removes the top element from the stack.\nAdditionally, you can use the Peek operation to view the top element without removing it and Check if the stack is empty.',
    },
    {
      title: '3. Characteristics of a Stack',
      description:
        'Stacks are dynamic structures that can grow and shrink as elements are added or removed. They are usually implemented using arrays or linked lists.',
    },
    {
      title: '4. Applications of Stacks',
      description:
        'Stacks are widely used in programming for tasks like:\n- Expression evaluation and syntax parsing.\n- Backtracking (e.g., navigating mazes, solving puzzles).\n- Undo/Redo functionality in editors.\n- Managing function calls in recursion.\n- Converting expressions (infix to postfix/prefix).',
    },
    {
      title: '5. Types of Stacks',
      description:
        'There are different variations of stacks:\n- Simple Stack: The basic stack implementation.\n- Bounded Stack: A stack with a fixed maximum size.\n- Double-Ended Stack (Deque): A stack that allows operations on both ends.',
    },
    {
      title: '6. Stack Representation',
      description:
        'A stack can be represented in two main ways:\n- Array-Based: Uses a fixed-size array, which may require resizing.\n- Linked List-Based: Uses nodes with dynamic memory allocation, avoiding size limitations.',
    },
    {
      title: '7. Stack vs Queue',
      description:
        'While a stack follows the LIFO principle, a queue follows the First In, First Out (FIFO) principle. Stacks are used for reversing processes, while queues are used for sequential tasks.',
    },
    {
      title: '8. Limitations of Stacks',
      description:
        'The main limitation of a stack is its inability to access elements other than the top one directly. It can also run into memory overflow issues if implemented with a fixed size.',
    },
    {
      title: '9. Time Complexity of Stack Operations',
      description:
        'The push, pop, and peek operations in a stack have O(1) time complexity. This makes stacks very efficient for operations on the top element.',
    },
    {
      title: '10. Real-World Analogies of Stacks',
      description:
        'Stacks can be compared to real-world scenarios like:\n- A stack of plates, where the last plate added is the first to be removed.\n- Undo operations in software, where the last action is reversed first.',
    },
    {
      title: '11. Use in System Design',
      description:
        'Stacks play a critical role in system design for handling function calls, managing memory allocation (call stacks), and parsing or navigating hierarchical structures.',
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
