'use client'
import React, { useState } from 'react';

// Predefined code examples for different languages
const languageExamples: { [key: string]: string } = {
    c: `// Stack implementation in C using array
#include <stdio.h>
#include <stdlib.h>
#define MAX 100

typedef struct Stack {
    int top;
    int items[MAX];
} Stack;

void initStack(Stack* s) {
    s->top = -1;
}

int isFull(Stack* s) {
    return s->top == MAX - 1;
}

int isEmpty(Stack* s) {
    return s->top == -1;
}

void push(Stack* s, int item) {
    if (isFull(s)) {
        printf("Stack Overflow\\n");
        return;
    }
    s->items[++(s->top)] = item;
}

int pop(Stack* s) {
    if (isEmpty(s)) {
        printf("Stack Underflow\\n");
        return -1;
    }
    return s->items[(s->top)--];
}

int peek(Stack* s) {
    if (isEmpty(s)) {
        printf("Stack is empty\\n");
        return -1;
    }
    return s->items[s->top];
}

// Example usage
int main() {
    Stack stack;
    initStack(&stack);

    push(&stack, 10);
    push(&stack, 20);
    push(&stack, 30);

    printf("Top element: %d\\n", peek(&stack));
    printf("Popped: %d\\n", pop(&stack));
    printf("Popped: %d\\n", pop(&stack));
    return 0;
}`,
    javascript: `// Stack implementation in JavaScript
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack Underflow");
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element:", stack.peek());
console.log("Popped:", stack.pop());
console.log("Popped:", stack.pop());`,
    python: `# Stack implementation in Python
class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if self.is_empty():
            print("Stack Underflow")
            return None
        return self.items.pop()

    def peek(self):
        if self.is_empty():
            print("Stack is empty")
            return None
        return self.items[-1]

    def is_empty(self):
        return len(self.items) == 0

# Example usage
stack = Stack()
stack.push(10)
stack.push(20)
stack.push(30)

print("Top element:", stack.peek())
print("Popped:", stack.pop())
print("Popped:", stack.pop())`,
    cpp: `// Stack implementation in C++ using vector
#include <iostream>
#include <vector>
using namespace std;

class Stack {
private:
    vector<int> items;

public:
    void push(int item) {
        items.push_back(item);
    }

    int pop() {
        if (isEmpty()) {
            cout << "Stack Underflow\\n";
            return -1;
        }
        int top = items.back();
        items.pop_back();
        return top;
    }

    int peek() {
        if (isEmpty()) {
            cout << "Stack is empty\\n";
            return -1;
        }
        return items.back();
    }

    bool isEmpty() {
        return items.empty();
    }
};

// Example usage
int main() {
    Stack stack;
    stack.push(10);
    stack.push(20);
    stack.push(30);

    cout << "Top element: " << stack.peek() << "\\n";
    cout << "Popped: " << stack.pop() << "\\n";
    cout << "Popped: " << stack.pop() << "\\n";
    return 0;
}`,
    java: `// Stack implementation in Java
import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();

        // Push elements
        stack.push(10);
        stack.push(20);
        stack.push(30);

        // Top element
        System.out.println("Top element: " + stack.peek());

        // Pop elements
        System.out.println("Popped: " + stack.pop());
        System.out.println("Popped: " + stack.pop());
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
        <div className='min-h-screen px-80 py-14'>
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
