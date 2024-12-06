import React from 'react';

const Notes: React.FC = () => {
  const notes = [
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
    {
      title: '3. String Indexing',
      description:
        'Strings are indexed collections of characters. Each character can be accessed using an index, starting from 0. Some languages also support negative indexing, allowing access from the end of the string.',
    },
    {
      title: '4. String Length',
      description:
        'The length of a string is the total number of characters it contains, including spaces and special characters. Many languages provide built-in methods to find string length, like `length` in Java or `len()` in Python.',
    },
    {
      title: '5. String Concatenation',
      description:
        'String concatenation is the process of joining two or more strings. This can be done using operators like `+` or functions like `concat()`. For example: `"Hello" + " " + "World"` results in "Hello World".',
    },
    {
      title: '6. Substrings and Slicing',
      description:
        'A substring is a portion of a string. Slicing allows you to extract specific parts of a string using indices. For example, `"Hello".substring(0, 2)` results in "He".',
    },
    {
      title: '7. String Immutability',
      description:
        'In many languages, strings are immutable, meaning any operation that changes a string creates a new string instead of modifying the original. For example, appending to a string returns a new string.',
    },
    {
      title: '8. String Comparison',
      description:
        'Strings can be compared for equality or order. Most languages support comparison operators like `==`, `!=`, `<`, or functions like `compareTo()`. Comparisons are often case-sensitive.',
    },
    {
      title: '9. String Search',
      description:
        'Searching involves finding the position of a character or substring within a string. Common methods include `indexOf()`, `lastIndexOf()`, and `contains()`. If the substring is not found, a specific value (like -1) is returned.',
    },
    {
      title: '10. String Replacement',
      description:
        'Replacement involves substituting specific characters or substrings with new ones. For example, `"Hello".replace("e", "a")` results in "Hallo".',
    },
    {
      title: '11. String Case Manipulation',
      description:
        'Strings can be converted to uppercase or lowercase using methods like `toUpperCase()` or `toLowerCase()`. These operations are useful for case-insensitive comparisons.',
    },
    {
      title: '12. String Trimming',
      description:
        'Trimming removes leading or trailing whitespace from a string. Methods like `trim()` or `strip()` are used to clean up user input or formatted text.',
    },
    {
      title: '13. String Splitting and Joining',
      description:
        'Splitting divides a string into an array of substrings based on a delimiter, while joining combines an array of strings into one string. For example, `"a,b,c".split(",")` results in `["a", "b", "c"]`.',
    },
    {
      title: '14. Escaping Special Characters',
      description:
        'Special characters in strings (e.g., newlines, quotes) can be escaped using a backslash (\\). For example, `He said \"Hello\"` outputs: He said "Hello".',
    },
    {
      title: '15. String Formatting',
      description:
        'String formatting allows placeholders to be replaced with dynamic values. Common methods include `printf` in C, `format()` in Python, or template literals in JavaScript (e.g., `Hello ${name}`).',
    },
    {
      title: '16. Unicode and Encoding',
      description:
        'Strings support various character encodings like ASCII, UTF-8, and Unicode. Unicode allows strings to include characters from multiple languages and symbols.',
    },
    {
      title: '17. String Reversal',
      description:
        'Reversing a string creates a new string with characters in the opposite order. For example, reversing "Hello" results in "olleH".',
    },
    {
      title: '18. Palindromes',
      description:
        'A palindrome is a string that reads the same forward and backward. For example, "radar" and "level" are palindromes.',
    },
    {
      title: '19. String Iteration',
      description:
        'Strings can be iterated character by character using loops. For example, in Python: `for char in "Hello": print(char)`.',
    },
    {
      title: '20. Regular Expressions',
      description:
        'Regular expressions (regex) are used to search, match, and manipulate strings based on patterns. For example, `\\d+` matches one or more digits in a string.',
    },
    {
      title: '21. Multiline Strings',
      description:
        'Some languages support multiline strings using triple quotes or special syntax. For example, in Python: `"""This is a multiline string"""`.',
    },
    {
      title: '22. String Buffer or Builder',
      description:
        'For frequent string modifications, classes like `StringBuilder` in Java or string buffers in other languages improve efficiency by avoiding the creation of new strings.',
    },
    {
      title: '23. Common Use Cases for Strings',
      description:
        'Strings are used in many applications, such as storing and processing user input, constructing dynamic messages, parsing data, and manipulating text in files or documents.',
    },
  ];


  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r my-12">
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-7xl w-full">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center hover:text-base-300 transition-colors duration-300">
          Everything About Strings
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
