'use client'
import React, { useState } from 'react';

// Predefined code examples for different languages
const languageExamples: { [key: string]: string } = {
    c: `// Queue implementation in C using array
#include <stdio.h>
#include <stdlib.h>
#define MAX 100

typedef struct Queue {
    int front, rear;
    int items[MAX];
} Queue;

void initQueue(Queue* q) {
    q->front = q->rear = -1;
}

int isFull(Queue* q) {
    return q->rear == MAX - 1;
}

int isEmpty(Queue* q) {
    return q->front == -1;
}

void enqueue(Queue* q, int item) {
    if (isFull(q)) {
        printf("Queue Overflow\\n");
        return;
    }
    if (q->front == -1) {
        q->front = 0;
    }
    q->items[++(q->rear)] = item;
}

int dequeue(Queue* q) {
    if (isEmpty(q)) {
        printf("Queue Underflow\\n");
        return -1;
    }
    int item = q->items[q->front];
    if (q->front == q->rear) {
        q->front = q->rear = -1;
    } else {
        q->front++;
    }
    return item;
}

int peek(Queue* q) {
    if (isEmpty(q)) {
        printf("Queue is empty\\n");
        return -1;
    }
    return q->items[q->front];
}

// Example usage
int main() {
    Queue queue;
    initQueue(&queue);

    enqueue(&queue, 10);
    enqueue(&queue, 20);
    enqueue(&queue, 30);

    printf("Front element: %d\\n", peek(&queue));
    printf("Dequeued: %d\\n", dequeue(&queue));
    printf("Dequeued: %d\\n", dequeue(&queue));
    return 0;
}`,
    javascript: `// Queue implementation in JavaScript using array
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue Underflow");
            return null;
        }
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// Example usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Front element:", queue.peek());
console.log("Dequeued:", queue.dequeue());
console.log("Dequeued:", queue.dequeue());`,
    python: `# Queue implementation in Python using list
class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.append(item)

    def dequeue(self):
        if self.is_empty():
            print("Queue Underflow")
            return None
        return self.items.pop(0)

    def peek(self):
        if self.is_empty():
            print("Queue is empty")
            return None
        return self.items[0]

    def is_empty(self):
        return len(self.items) == 0

# Example usage
queue = Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

print("Front element:", queue.peek())
print("Dequeued:", queue.dequeue())
print("Dequeued:", queue.dequeue())`,
    cpp: `// Queue implementation in C++ using deque
#include <iostream>
#include <deque>
using namespace std;

class Queue {
private:
    deque<int> items;

public:
    void enqueue(int item) {
        items.push_back(item);
    }

    int dequeue() {
        if (isEmpty()) {
            cout << "Queue Underflow\\n";
            return -1;
        }
        int front = items.front();
        items.pop_front();
        return front;
    }

    int peek() {
        if (isEmpty()) {
            cout << "Queue is empty\\n";
            return -1;
        }
        return items.front();
    }

    bool isEmpty() {
        return items.empty();
    }
};

// Example usage
int main() {
    Queue queue;
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    cout << "Front element: " << queue.peek() << "\\n";
    cout << "Dequeued: " << queue.dequeue() << "\\n";
    cout << "Dequeued: " << queue.dequeue() << "\\n";
    return 0;
}`,
    java: `// Queue implementation in Java using LinkedList
import java.util.LinkedList;
import java.util.Queue;

public class Main {
    public static void main(String[] args) {
        Queue<Integer> queue = new LinkedList<>();

        // Enqueue elements
        queue.add(10);
        queue.add(20);
        queue.add(30);

        // Front element
        System.out.println("Front element: " + queue.peek());

        // Dequeue elements
        System.out.println("Dequeued: " + queue.poll());
        System.out.println("Dequeued: " + queue.poll());
    }
}`,
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
        <div className=' px-80 py-14'>
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
