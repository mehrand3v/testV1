// src/pages/TestPage.jsx


// Import your test components here
// Example:
// import TestComponent1 from '../components/TestComponent1';
// import TestComponent2 from '../components/TestComponent2';
import TestComponent from "../components/TestComponent";

const TestPage = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8 border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Component Testing Page
        </h1>
        <p className="text-gray-600">
          Add your components below to test how they look and behave
        </p>
      </header>

      <div className="space-y-8">
        {/* Component 1 */}
        <div className="border rounded-lg p-4 bg-white">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
            Test Component 1
          </h2>
          <div className="p-2">
            <TestComponent />
          </div>
        </div>

        {/* Component 2 - Uncomment and replace with your component */}
        {/*
        <div className="border rounded-lg p-4 bg-white">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
            Test Component 2
          </h2>
          <div className="p-2">
            <TestComponent2 />
          </div>
        </div>
        */}

        {/* Component 3 - Uncomment and replace with your component */}
        {/*
        <div className="border rounded-lg p-4 bg-white">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
            Test Component 3
          </h2>
          <div className="p-2">
            <TestComponent3 />
          </div>
        </div>
        */}

        {/* Add more components as needed */}
      </div>
    </div>
  );
};

export default TestPage;
