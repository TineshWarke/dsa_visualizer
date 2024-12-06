'use client'
import React, { useState } from 'react';

// Predefined code examples for different languages
const languageExamples: { [key: string]: string } = {
  c: `// C Program to demonstrate string initialization
#include <stdio.h>
#include <string.h>

int main()
{
    // Initializing a string using a string literal
    char str1[] = "Hello, World!";

    // Initializing an empty string
    char str2[20] = "";

    // Copying a string
    strcpy(str2, "C Programming");

    // Printing the strings
    printf("%s\\n", str1);
    printf("%s\\n", str2);

    return 0;
}`,

  javascript: `// JavaScript program to demonstrate string initialization
// Initializing strings using double quotes
const str1 = "Hello, World!";

// Initializing strings using single quotes
const str2 = 'JavaScript Programming';

// Using template literals
const str3 = \`Welcome to \${str2}\`;

// Printing the strings
console.log(str1);
console.log(str2);
console.log(str3);`,

  python: `# Python program to demonstrate string initialization
# Initializing strings using double quotes
str1 = "Hello, World!"

# Initializing strings using single quotes
str2 = 'Python Programming'

# Using f-strings
str3 = f"Welcome to {str2}"

# Printing the strings
print(str1)
print(str2)
print(str3)`,

  cpp: `// C++ Program to demonstrate string initialization
#include <iostream>
#include <string>
using namespace std;

int main()
{
    // Initializing a string using a string literal
    string str1 = "Hello, World!";

    // Initializing an empty string
    string str2;

    // Assigning a value to the string
    str2 = "C++ Programming";

    // Printing the strings
    cout << str1 << endl;
    cout << str2 << endl;

    return 0;
}`,

  java: `// Java program to demonstrate string initialization
public class Main {
    public static void main(String[] args) {
        // Initializing strings using literals
        String str1 = "Hello, World!";
        String str2 = "Java Programming";

        // Concatenating strings
        String str3 = str1 + " Welcome to " + str2;

        // Printing the strings
        System.out.println(str1);
        System.out.println(str2);
        System.out.println(str3);
    }
}`
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
    <div className='h-screen px-80 py-14'>
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

