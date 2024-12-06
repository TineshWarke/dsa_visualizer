import React from 'react';

interface Note {
  title: string;
  description: string;
}

const sortingDetails = [
  // Bubble Sort
  {
    algorithm: "Bubble Sort",
    points: [
      "1. Overview: Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.",
      "2. How It Works: The algorithm compares each pair of adjacent elements and swaps them if necessary. This process repeats until no more swaps are needed.",
      "3. Time Complexity: Best Case: O(n) when the array is already sorted. Worst and Average Case: O(n²), due to nested iterations.",
      "4. Space Complexity: Bubble Sort is an in-place algorithm, requiring only O(1) additional space.",
      "5. Advantages: Simple, easy to implement, and stable (preserves the order of equal elements).",
      "6. Disadvantages: Inefficient for large datasets, as its time complexity is O(n²).",
    ],
  },

  // Selection Sort
  {
    algorithm: "Selection Sort",
    points: [
      "1. Overview: Selection Sort is an intuitive sorting algorithm that works by selecting the smallest (or largest) element from the unsorted part of the array and moving it to the sorted part.",
      "2. How It Works: It repeatedly selects the smallest element from the unsorted portion of the array and swaps it with the first unsorted element.",
      "3. Time Complexity: Best, Average, and Worst Case: O(n²), since it requires nested iterations.",
      "4. Space Complexity: O(1), as it is an in-place sorting algorithm.",
      "5. Advantages: Simple to implement and uses minimal memory (O(1)).",
      "6. Disadvantages: Inefficient for large datasets due to O(n²) complexity and may not be stable.",
    ],
  },

  // Insertion Sort
  {
    algorithm: "Insertion Sort",
    points: [
      "1. Overview: Insertion Sort builds the final sorted array one item at a time by inserting elements into their correct position within the sorted part of the array.",
      "2. How It Works: Starting from the second element, each element is compared with the elements in the sorted portion and inserted at the correct position.",
      "3. Time Complexity: Best Case: O(n) (when the array is already sorted), Worst and Average Case: O(n²).",
      "4. Space Complexity: O(1), since it is an in-place sorting algorithm.",
      "5. Advantages: Simple to implement and works well for small or nearly sorted datasets.",
      "6. Disadvantages: Inefficient for large datasets with time complexity of O(n²).",
    ],
  },

  // Merge Sort
  {
    algorithm: "Merge Sort",
    points: [
      "1. Overview: Merge Sort is a divide-and-conquer algorithm that divides the array into halves, recursively sorts each half, and then merges the sorted halves back together.",
      "2. How It Works: The array is split into smaller arrays until each array has one element. Then, the sorted arrays are merged back into larger sorted arrays.",
      "3. Time Complexity: Best, Average, and Worst Case: O(n log n), making it efficient for large datasets.",
      "4. Space Complexity: O(n), as it requires extra space for merging subarrays.",
      "5. Advantages: Efficient for large datasets and stable (preserves relative order of equal elements).",
      "6. Disadvantages: Requires extra memory (O(n)), which can be a drawback in memory-constrained environments.",
    ],
  },

  // Quick Sort
  {
    algorithm: "Quick Sort",
    points: [
      "1. Overview: Quick Sort is a divide-and-conquer algorithm that selects a 'pivot' element and partitions the array around that pivot, recursively sorting the two partitions.",
      "2. How It Works: The array is partitioned into two subarrays, elements smaller than the pivot go to one side, and elements greater go to the other. The process is recursively applied to each partition.",
      "3. Time Complexity: Best and Average Case: O(n log n), Worst Case: O(n²) (when the pivot choices are poor).",
      "4. Space Complexity: O(log n) on average for the recursive stack, but can be O(n) in the worst case.",
      "5. Advantages: Very efficient for large datasets in practice and has an average time complexity of O(n log n).",
      "6. Disadvantages: Worst-case time complexity of O(n²) and not stable.",
    ],
  },

  // Heap Sort
  {
    algorithm: "Heap Sort",
    points: [
      "1. Overview: Heap Sort is a comparison-based sorting algorithm that utilizes a binary heap data structure to sort elements.",
      "2. How It Works: The algorithm builds a max-heap (for ascending order) or min-heap (for descending order) and repeatedly extracts the root element, placing it in its correct position in the sorted array.",
      "3. Time Complexity: Best, Average, and Worst Case: O(n log n).",
      "4. Space Complexity: O(1), as it is an in-place sorting algorithm.",
      "5. Advantages: Efficient with O(n log n) time complexity and works well with large datasets.",
      "6. Disadvantages: Not stable and less efficient than Quick Sort for smaller datasets.",
    ],
  },
];

const NoteCard: React.FC<Note> = ({ title, description }) => (
  <article className="border-l-4 pl-6 py-4 border-teal-500">
    <h3 className="text-xl font-semibold text-teal-600">{title}</h3>
    <p className="text-gray-700 text-lg whitespace-pre-line">{description.trim()}</p>
  </article>
);

const SortingAlgorithms: React.FC = () => (
  <div>
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r my-12">
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-7xl w-full">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center hover:text-base-300 transition-colors duration-300">
          Everything About Sorting Algorithms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
          {sortingDetails.map((detail, index) => (
            <div key={index} className="p-4 border-l-4 border-teal-500">
              <h3 className="text-xl font-semibold text-teal-600 mb-4">{detail.algorithm}</h3>
              {detail.points.map((point, idx) => (
                <p key={idx} className="text-gray-700 text-lg whitespace-pre-line mb-2 text-justify">{point}</p>
              ))}
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">
          Sorting algorithms are essential in computer science and help with organizing data in an efficient way.
        </p>
      </div>
    </div>
  </div>
);

export default SortingAlgorithms;
