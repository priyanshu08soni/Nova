import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, User, Menu, X } from "lucide-react";
import { toast } from "sonner";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) setLoggedInUser(user);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleLogout = () => {
    setIsMobileMenuOpen(false);
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    toast.success("Successfully logged out");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <nav className="fixed top-10 left-10 right-10 z-50 backdrop-blur-sm">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 rounded-xl border border-teal-100/20">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="flex items-center space-x-3 animate-slideIn"
            >
              <span className="logo">Nova</span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="navigation-links">
              Home
            </Link>
            <Link to="/about" className="navigation-links">
              About
            </Link>
            <Link to="/services" className="navigation-links">
              Services
            </Link>
            <Link to="/contact" className="navigation-links">
              Contact
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2  rounded-full text-white hover:text-gray-50/50 transition-colors duration-200"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
          {/* Desktop User Menu */}
          <div className="hidden md:flex space-x-4">
            {loggedInUser ? (
              <>
                <div className="user-pill flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary/50">
                  <User className="icon h-5 w-5 text-gray-600" />
                  <span className="label text-sm font-medium text-gray-900">
                    {loggedInUser}
                  </span>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="navigation-links">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-primary hover:bg-primary/90 text-white transition-colors duration-200"
                >
                  <span>Sign Up</span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="user-pill flex items-center space-x-2 px-4 py-2 rounded-full"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 label" />
              ) : (
                <Menu className="h-6 w-6 label" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 mt-4 space-y-1 backdrop-blur-md shadow-lg rounded-2xl border border-teal-50/20">
          <ul className="space-y-2">
            <Link
              className="flex justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <a href="/" className="navigation-links">
                Home
              </a>
            </Link>
            <Link
              className="flex justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <a href="/about" className="navigation-links">
                About
              </a>
            </Link>
          </ul>

          {loggedInUser && (
            <>
              <div className="px-3 py-2">
                <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary/50">
                  <User className="h-5 w-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-900">
                    {loggedInUser}
                  </span>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="w-full navigation-links  px-3 py-2 rounded-md text-base font-medium text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                Logout
              </button>
            </>
          )}

          {!loggedInUser && (
            <>
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-primary/90 hover:bg-gray-50"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
