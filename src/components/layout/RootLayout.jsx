// src/components/layout/RootLayout.jsx
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="wrapper bg-gray-100">
      {/* Simple header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="font-bold text-xl text-gray-800">
              Component Tester
            </Link>

            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-gray-900">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/test"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Test Component
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
