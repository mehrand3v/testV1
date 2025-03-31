// src/components/TestComponent.jsx
import { useState } from "react";

// This is where you'll paste your component code for testing
// Replace everything inside this component with your own code
const TestComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Test Component
      </h2>

      <div className="flex items-center justify-center mb-4">
        <span className="text-4xl font-bold text-blue-600">{count}</span>
      </div>

      <div className="flex space-x-4 justify-center">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Decrease
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default TestComponent;
