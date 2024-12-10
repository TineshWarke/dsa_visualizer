// 'use client'
// import React, { useState } from 'react';

// // Predefined code examples for different languages
// const languageExamples: { [key: string]: string } = {
//     c: `// Linked List implementation in C
// #include <stdio.h>
// #include <stdlib.h>

// typedef struct Node {
//     int data;
//     struct Node* next;
// } Node;

// // Function to create a new node
// Node* createNode(int data) {
//     Node* newNode = (Node*)malloc(sizeof(Node));
//     newNode->data = data;
//     newNode->next = NULL;
//     return newNode;
// }

// // Example usage
// int main() {
//     Node* head = createNode(10);
//     head->next = createNode(20);
//     head->next->next = createNode(30);

//     // Traversal
//     Node* temp = head;
//     while (temp) {
//         printf("%d -> ", temp->data);
//         temp = temp->next;
//     }
//     printf("NULL\\n");
//     return 0;
// }`,
//     javascript: `// Linked List implementation in JavaScript
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     append(value) {
//         const newNode = new Node(value);
//         if (!this.head) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }

//     print() {
//         let current = this.head;
//         while (current) {
//             process.stdout.write(current.value + " -> ");
//             current = current.next;
//         }
//         console.log("NULL");
//     }
// }

// // Example usage
// const list = new LinkedList();
// list.append(10);
// list.append(20);
// list.append(30);
// list.print();`,
//     python: `# Linked List implementation in Python
// class Node:
//     def __init__(self, data):
//         self.data = data
//         self.next = None

// class LinkedList:
//     def __init__(self):
//         self.head = None

//     def append(self, data):
//         new_node = Node(data)
//         if not self.head:
//             self.head = new_node
//         else:
//             current = self.head
//             while current.next:
//                 current = current.next
//             current.next = new_node

//     def print_list(self):
//         current = self.head
//         while current:
//             print(current.data, end=" -> ")
//             current = current.next
//         print("NULL")

// # Example usage
// ll = LinkedList()
// ll.append(10)
// ll.append(20)
// ll.append(30)
// ll.print_list()`,
//     cpp: `// Linked List implementation in C++
// #include <iostream>
// using namespace std;

// struct Node {
//     int data;
//     Node* next;
//     Node(int x) : data(x), next(nullptr) {}
// };

// class LinkedList {
// public:
//     Node* head;

//     LinkedList() : head(nullptr) {}

//     void append(int data) {
//         Node* newNode = new Node(data);
//         if (!head) {
//             head = newNode;
//         } else {
//             Node* temp = head;
//             while (temp->next) {
//                 temp = temp->next;
//             }
//             temp->next = newNode;
//         }
//     }

//     void print() {
//         Node* temp = head;
//         while (temp) {
//             cout << temp->data << " -> ";
//             temp = temp->next;
//         }
//         cout << "NULL\\n";
//     }
// };

// // Example usage
// int main() {
//     LinkedList list;
//     list.append(10);
//     list.append(20);
//     list.append(30);
//     list.print();
//     return 0;
// }`,
//     java: `// Linked List implementation in Java
// class Node {
//     int data;
//     Node next;

//     Node(int data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     Node head;

//     void append(int data) {
//         Node newNode = new Node(data);
//         if (head == null) {
//             head = newNode;
//         } else {
//             Node current = head;
//             while (current.next != null) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }

//     void printList() {
//         Node current = head;
//         while (current != null) {
//             System.out.print(current.data + " -> ");
//             current = current.next;
//         }
//         System.out.println("NULL");
//     }
// }

// // Example usage
// public class Main {
//     public static void main(String[] args) {
//         LinkedList list = new LinkedList();
//         list.append(10);
//         list.append(20);
//         list.append(30);
//         list.printList();
//     }
// }`,
// };


// const Terminal: React.FC = () => {
//     const [selectedLang, setSelectedLang] = useState<string>('c');
//     const [copied, setCopied] = useState<boolean>(false);

//     const handleLangChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setSelectedLang(event.target.value);
//         setCopied(false);
//     };

//     const handleCopyCode = () => {
//         navigator.clipboard.writeText(languageExamples[selectedLang])
//             .then(() => setCopied(true))
//             .catch(() => alert('Failed to copy the code.'));
//     };

//     return (
//         <div className='h-screen px-80 py-14'>
//             <div className="bg-black text-white p-6 rounded-lg font-mono">
//                 <div className="mb-4">
//                     <label htmlFor="language" className="text-gray-300">Select Language:</label>
//                     <select
//                         id="language"
//                         value={selectedLang}
//                         onChange={handleLangChange}
//                         className="bg-gray-800 text-white p-2 rounded mt-2 w-full"
//                     >
//                         <option value="c">C</option>
//                         <option value="javascript">JavaScript</option>
//                         <option value="python">Python</option>
//                         <option value="cpp">C++</option>
//                         <option value="java">Java</option>
//                     </select>
//                 </div>

//                 <div className="h-full overflow-y-auto p-4 bg-gray-900 rounded-lg">
//                     <div className='grid grid-cols-2'>
//                         <div className="text-accent mb-2"> {selectedLang}</div>
//                         <button
//                             onClick={handleCopyCode}
//                             className="ml-64 h-7 bg-gray-800 hover:bg-gray-700 text-white px-4 rounded"
//                         >
//                             {copied ? 'Copied!' : 'Copy Code'}
//                         </button>
//                     </div>

//                     <pre className="whitespace-pre-wrap break-words text-sm text-gray-300">
//                         {languageExamples[selectedLang]}
//                     </pre>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Terminal;
