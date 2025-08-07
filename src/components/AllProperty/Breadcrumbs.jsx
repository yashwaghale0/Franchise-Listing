import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-sm text-gray-500 mb-4 breadcrumb-section">
      <ol className="list-none p-0 inline-flex space-x-2">
        <li>
          <Link to="/" className="hover:underline text-blue-600">
            Home
          </Link>
        </li>
        {paths.map((path, index) => {
          const routeTo = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;

          return (
            <li key={routeTo} className="flex items-center space-x-2">
              <span>/</span>
              {isLast ? (
                <span className="text-gray-700 capitalize">{path}</span>
              ) : (
                <Link
                  to={routeTo}
                  className="hover:underline text-blue-600 capitalize"
                >
                  {path}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
