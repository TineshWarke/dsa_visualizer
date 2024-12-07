import React from 'react';

const Notes: React.FC = () => {
    const notes = [
        {
            title: '1. What is a Queue?',
            description:
                'A queue is a linear data structure that follows the First In, First Out (FIFO) principle. This means the first element added to the queue will be the first one to be removed.',
        },
        {
            title: '2. Key Operations of a Queue',
            description:
                'Queues support two primary operations:\n- Enqueue: Adds an element to the end of the queue.\n- Dequeue: Removes the element from the front of the queue.\nAdditionally, you can use the Peek operation to view the front element without removing it and Check if the queue is empty.',
        },
        {
            title: '3. Characteristics of a Queue',
            description:
                'Queues are dynamic structures, typically implemented using arrays or linked lists. Elements are added at the rear and removed from the front, allowing for sequential processing.',
        },
        {
            title: '4. Types of Queues',
            description:
                'There are several types of queues:\n- Simple Queue: A basic queue that operates in a linear manner.\n- Circular Queue: A queue where the last position is connected back to the first, creating a circular structure.\n- Double-Ended Queue (Deque): A queue that allows insertion and deletion from both ends.\n- Priority Queue: A queue where each element has a priority, and elements are dequeued based on priority rather than FIFO.',
        },
        {
            title: '5. Applications of Queues',
            description:
                'Queues are used in various real-world applications like:\n- Managing tasks in CPU scheduling.\n- Print spooling.\n- Handling requests in web servers.\n- Implementing breadth-first search (BFS) in graph traversal.\n- Buffering data in streaming services or media players.',
        },
        {
            title: '6. Queue Representation',
            description:
                'A queue can be represented in two main ways:\n- Array-Based: Uses a fixed-size array with two pointers to track the front and rear.\n- Linked List-Based: Uses nodes, allowing dynamic memory allocation and flexibility.',
        },
        {
            title: '7. Queue vs Stack',
            description:
                'Queues follow the FIFO principle, whereas stacks follow the LIFO principle. Stacks are useful for reversing operations, while queues are used for tasks where elements need to be processed in the order they arrive.',
        },
        {
            title: '8. Limitations of Queues',
            description:
                'Queues may face issues with memory overflow if the array is fixed-size, or inefficient space usage with a linked list implementation due to pointer overhead. Performance can also degrade when resizing arrays or shifting elements.',
        },
        {
            title: '9. Time Complexity of Queue Operations',
            description:
                'The enqueue and dequeue operations typically have O(1) time complexity in a well-implemented queue. However, some implementations (like array-based queues) can have O(n) complexity due to resizing or shifting elements.',
        },
        {
            title: '10. Real-World Analogies of Queues',
            description:
                'Queues are similar to real-world processes like:\n- A line at a checkout counter where the first person in line is the first to be served.\n- A printer queue, where documents are printed in the order they are sent to the printer.',
        },
        {
            title: '11. Use in System Design',
            description:
                'Queues are important in system-level applications like task scheduling, request handling, and network data packet management. They are also used in scenarios that involve buffering or managing asynchronous tasks.',
        },
        {
            title: '12. Circular Queue Use Case',
            description:
                'A circular queue is useful when you have a fixed-size buffer that needs to be reused continuously, like in CPU scheduling or network buffering, without the need for shifting elements.',
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
