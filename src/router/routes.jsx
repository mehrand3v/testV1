//src/router/routes.jsx
import RootLayout from "@components/layout/RootLayout";
import TestPage from "@pages/TestPage";

// Simple homepage message
const HomePage = () => (
  <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
    <h1 className="text-2xl font-bold mb-4">Component Testing App</h1>
    <p className="mb-4">
      This app is for testing React components on different devices.
    </p>
    <a
      href="/test"
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      View Test Components
    </a>
  </div>
);

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "test", element: <TestPage /> },
    ],
  },
];

export default routes;
