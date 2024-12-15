import mongoose, { Schema } from "mongoose";

// Note Schema
const NoteSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
},
  { _id: false, autoIndex: false }
);

// Topic Data Schema
const TopicDataSchema: Schema = new Schema({
  topic: {
    type: String,
    required: false,
  },
  completedQuestions: {
    type: [String],
    default: [],
  },
  notes: {
    type: [NoteSchema],
    default: [],
  },
},
  { _id: false }
);

const sampleData = [
  {
    "topic": "Arrays",
    "completedQuestions": [],
    "notes": [
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
    ]
  },
  {
    "topic": "Strings",
    "completedQuestions": [],
    "notes": [
      {
        title: '1. What is a String?',
        description:
          'A string is a sequence of characters used to represent text. Strings are immutable in many programming languages, meaning their content cannot be changed after creation. They can include letters, digits, symbols, and whitespace.',
      },
      {
        title: '2. String Representation',
        description:
          'Strings are often enclosed in quotes: single quotes (\'), double quotes ("), or backticks (`) depending on the language. For example, "Hello World" or `Hello ${name}`.',
      },
    ]
  },
  {
    "topic": "Sorting Algorithms",
    "completedQuestions": [],
    "notes": [
      {
        title: "1. Bubble Sort",
        description:
          'Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order'
      },
      {
        title: '2. Selection Sort',
        description:
          'Selection Sort is an intuitive sorting algorithm that works by selecting the smallest (or largest) element from the unsorted part of the array and moving it to the sorted part.',
      },
    ]
  },
  {
    "topic": "Sets",
    "completedQuestions": [],
    "notes": [
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
    ]
  },
  {
    "topic": "Map",
    "completedQuestions": [],
    "notes": [
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
    ]
  },
  {
    "topic": "Stack",
    "completedQuestions": [],
    "notes": [
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
    ]
  },
  {
    "topic": "Queue",
    "completedQuestions": [],
    "notes": [
      {
        title: '1. What is a Queue?',
        description:
          'A queue is a linear data structure that follows the First In, First Out (FIFO) principle. This means the first element added to the queue will be the first one to be removed.',
      },
      {
        title: '2. Types of Queues',
        description:
          'There are several types of queues:\n- Simple Queue: A basic queue that operates in a linear manner.\n- Circular Queue: A queue where the last position is connected back to the first, creating a circular structure.\n- Double-Ended Queue (Deque): A queue that allows insertion and deletion from both ends.\n- Priority Queue: A queue where each element has a priority, and elements are dequeued based on priority rather than FIFO.',
      },
    ]
  },
  {
    "topic": "Linked List",
    "completedQuestions": [],
    "notes": [
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
    ]
  },
]

const UserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: false,
      unique: true,
      default: function () {
        return `user_${Math.random().toString(36).substr(2, 9)}`;
      },
      minlength: 8,
      maxlength: 20,
    },
    fullName: {
      type: String,
      required: false,
      default: "Anonymous User",
      minlength: 3,
      maxlength: 50,
    },
    bio: {
      type: String,
      default: "This user has not set up a bio yet.",
      maxlength: 120,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
    topicData: {
      type: [TopicDataSchema],
      default: sampleData,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
