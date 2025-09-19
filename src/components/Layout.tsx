import { NavLink, Outlet } from "react-router";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-orange-300 to-pink-400 text-white p-4 fixed w-full top-0 left-0 shadow z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">MyApp</h1>
          <div className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:underline ${isActive ? "font-bold" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:underline ${isActive ? "font-bold" : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:underline ${isActive ? "font-bold" : ""}`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Page content */}
      <main className="flex-grow container mx-auto p-4 mt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
        <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
