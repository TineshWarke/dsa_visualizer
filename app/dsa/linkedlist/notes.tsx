import React from 'react';

const Notes: React.FC = () => {
    const notes = [
        {
          title: '1. What is a Linked List?',
          description:
            'A linked list is a linear data structure where elements, called nodes, are connected using pointers. Each node contains data and a reference (or link) to the next node in the sequence.',
        },
        {
          title: '2. Types of Linked Lists',
          description:
            'There are three main types of linked lists: \n- Singly Linked List: Each node points to the next node, and the last node points to null.\n- Doubly Linked List: Each node has pointers to both the next and the previous node.\n- Circular Linked List: The last node points back to the first node, forming a circle.',
        },
        {
          title: '3. Characteristics of a Linked List',
          description:
            'Linked lists are dynamic in size, meaning they can grow or shrink during runtime. They use pointers to manage connections between elements, which allows insertion and deletion without shifting elements as in arrays.',
        },
        {
          title: '4. Advantages of Linked Lists',
          description:
            'Linked lists allow efficient insertion and deletion operations compared to arrays. They provide flexibility in memory usage since they do not require contiguous memory allocation.',
        },
        {
          title: '5. Disadvantages of Linked Lists',
          description:
            'Linked lists have higher memory overhead due to storage of pointers. Random access is not possible; elements must be accessed sequentially, making lookup operations slower compared to arrays.',
        },
        {
          title: '6. Basic Operations on Linked Lists',
          description:
            'Common operations include: \n- Insertion: Adding elements at the beginning, middle, or end of the list.\n- Deletion: Removing elements from the beginning, middle, or end of the list.\n- Traversal: Accessing each node to read or modify data.\n- Search: Finding a specific value in the list.',
        },
        {
          title: '7. Applications of Linked Lists',
          description:
            'Linked lists are used in scenarios like implementing stacks, queues, and graphs. They are also used in dynamic memory management, file systems, and adjacency lists for graphs.',
        },
        {
          title: '8. Linked List vs Array',
          description:
            'Unlike arrays, linked lists do not require predefined size and do not need contiguous memory allocation. However, linked lists have slower access times due to the lack of direct indexing.',
        },
        {
          title: '9. Circular Linked List Use Cases',
          description:
            'Circular linked lists are often used in scenarios where a continuous loop of data is needed, such as in scheduling algorithms, multiplayer games, or buffers.',
        },
        {
          title: '10. Doubly Linked List Advantages',
          description:
            'Doubly linked lists provide efficient traversal in both directions and allow easier deletion of nodes compared to singly linked lists. They are particularly useful in applications like navigation systems or undo-redo functionality.',
        },
        {
          title: '11. Performance Considerations',
          description:
            'Insertion and deletion operations in linked lists are generally O(1) if the pointer is known. However, searching for an element takes O(n) time in the worst case.',
        },
        {
          title: '12. Real-World Use Cases',
          description:
            'Linked lists are used in various real-world applications like implementing hash tables, managing memory through free lists, and in applications where dynamic and frequent insertion or deletion is required.',
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
