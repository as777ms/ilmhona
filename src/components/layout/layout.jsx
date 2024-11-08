import { Link, Outlet } from "react-router-dom";

import { HashLink } from 'react-router-hash-link';
const Layout = ({ilmhona, darkMode, onToggleDarkMode }) => {
  console.log(ilmhona)
  return (
    <>
       <div
        className={`sticky top-0 w-full bg-transparent z-50 ${darkMode ? 'dark' : ''}`}
        style={{ backdropFilter: 'blur(5px)' }} // This creates a mirrored glass effect
      >
    <div className={`w-[80%] m-auto flex justify-between ${darkMode ? 'dark' : ''}`}>

    <div className="w-[40%] flex justify-around items-center mt-[10px] p-2 backdrop-blur-md bg-opacity-30">
  <div className="flex-shrink-0">
    <Link to="/">
      <img 
        src={ilmhona} 
        alt="Ilmhona Logo" 
        className="h-10 w-auto hover:scale-105 transition-transform duration-300" 
      />
    </Link>
  </div>

  <div>
    <HashLink 
      smooth 
      to="#courses" 
      className="text-[#FF6F00] font-semibold px-4 py-2 transition-all duration-300 hover:text-white hover:bg-[#FFA629] hover:shadow-md hover:rounded-md"
    >
      Courses
    </HashLink>
  </div>

  <div>
    <Link 
      to="/news" 
      className="text-[#FF6F00] font-semibold px-4 py-2 transition-all duration-300 hover:text-white hover:bg-[#FFA629] hover:shadow-md hover:rounded-md"
    >
      News
    </Link>
  </div>

  <div>
    <Link 
      to="/about" 
      className="text-[#262626] font-semibold px-4 py-2 transition-all duration-300 hover:text-white hover:bg-sky-300 hover:shadow-md hover:rounded-md"
    >
      About
    </Link>
  </div>
</div>


      
      <div className="w-[20%] flex justify-around items-center space-x-4">
  <div>
    <select
      name=""
      id=""
      className="p-2 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 font-medium rounded-md shadow-md outline-none hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-400 transition-all duration-300"
    >
      <option value="">ru</option>
      <option value="">tj</option>
      <option value="">eng</option>
    </select>
  </div>

  <div>
    <button
      onClick={onToggleDarkMode}
      className={`p-3 rounded-full text-white font-semibold shadow-md transition-all duration-300 ${
        darkMode
          ? "bg-gradient-to-r from-[#007CC7] to-[#003B73] hover:from-[#005FA1] hover:to-[#00285A]"
          : "bg-gradient-to-r from-[#FFD54F] to-[#FF6F00] hover:from-[#FFC107] hover:to-[#FF5722]"
      }`}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  </div>

  <div>
    <button
      className="p-3 bg-gradient-to-r from-[#FF6F00] to-[#FF5722] text-white font-semibold rounded-full shadow-md hover:from-[#FF8F00] hover:to-[#FF7043] transition-all duration-300"
    >
      Login
    </button>
  </div>
</div>
    </div>
    </div>
      <Outlet />
      <div className="w-[80%] m-[auto] flex flex-col justify-center items-center">
        <Link to="/">Home</Link>

        {/* Header Links */}
        <div className="relative group">
          <button className="text-blue-500 hover:text-blue-700">Professions</button>
          <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md">
            <Link to="/profession-android-dev" className="block px-4 py-2 hover:bg-gray-100">Android Developer</Link>
            <Link to="/profession-ios-dev" className="block px-4 py-2 hover:bg-gray-100">iOS Developer</Link>
            <Link to="/profession-project-manager" className="block px-4 py-2 hover:bg-gray-100">Project Manager</Link>
            <Link to="/profession-python-beckend-dev" className="block px-4 py-2 hover:bg-gray-100">Python Backend Developer</Link>
            <Link to="/profession-graphic-design" className="block px-4 py-2 hover:bg-gray-100">Graphic Designer</Link>
            <Link to="/profession-front-end-dev" className="block px-4 py-2 hover:bg-gray-100">Front-end Developer</Link>
            <Link to="/profession-js-backend-dev" className="block px-4 py-2 hover:bg-gray-100">JS Backend Developer</Link>
          </div>
        </div>

        {/* Courses Dates Links */}
        <div className="relative group">
          <button className="text-blue-500 hover:text-blue-700">Courses</button>
          <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md">
            <Link to="/course-digital-freelance" className="block px-4 py-2 hover:bg-gray-100">Digital Freelance</Link>
            <Link to="/course-python-lvl-1" className="block px-4 py-2 hover:bg-gray-100">Python Level 1</Link>
            <Link to="/course-webdesign" className="block px-4 py-2 hover:bg-gray-100">Web Design</Link>
            <Link to="/course-web-zero" className="block px-4 py-2 hover:bg-gray-100">Web Zero</Link>
            <Link to="/course-js-lvl-1" className="block px-4 py-2 hover:bg-gray-100">JS Level 1</Link>
            <Link to="/course-smm" className="block px-4 py-2 hover:bg-gray-100">SMM</Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="relative group">
          <button className="text-blue-500 hover:text-blue-700">Footer</button>
          <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md">
            <Link to="/course-android-zero" className="block px-4 py-2 hover:bg-gray-100">Android Zero</Link>
            <Link to="/course-android-lvl-1" className="block px-4 py-2 hover:bg-gray-100">Android Level 1</Link>
            <Link to="/course-ios-zero" className="block px-4 py-2 hover:bg-gray-100">iOS Zero</Link>
            <Link to="/course-ios-lvl-1" className="block px-4 py-2 hover:bg-gray-100">iOS Level 1</Link>
            <Link to="/course-python-zero" className="block px-4 py-2 hover:bg-gray-100">Python Zero</Link>
            <Link to="/course-python-lvl-2" className="block px-4 py-2 hover:bg-gray-100">Python Level 2</Link>
            <Link to="/course-web-zero" className="block px-4 py-2 hover:bg-gray-100">Web Zero</Link>
            <Link to="/course-js-lvl-2-frontend" className="block px-4 py-2 hover:bg-gray-100">JS Level 2 Frontend</Link>
            <Link to="/course-js-lvl-2-beckend" className="block px-4 py-2 hover:bg-gray-100">JS Level 2 Backend</Link>
            <Link to="/course-project-managment-intro" className="block px-4 py-2 hover:bg-gray-100">Project Management Intro</Link>
            <Link to="/course-project-managment-lvl-1" className="block px-4 py-2 hover:bg-gray-100">Project Management Level 1</Link>
            <Link to="/course-project-managment-lvl-2" className="block px-4 py-2 hover:bg-gray-100">Project Management Level 2</Link>
            <Link to="/course-graphic-design-zero" className="block px-4 py-2 hover:bg-gray-100">Graphic Design Zero</Link>
            <Link to="/course-graphic-design-lvl-1" className="block px-4 py-2 hover:bg-gray-100">Graphic Design Level 1</Link>
            <Link to="/course-graphic-designer-pro" className="block px-4 py-2 hover:bg-gray-100">Graphic Designer Pro</Link>
            <Link to="/course-english-elementary" className="block px-4 py-2 hover:bg-gray-100">English Elementary</Link>
            <Link to="/course-english-for-tech" className="block px-4 py-2 hover:bg-gray-100">English for Tech</Link>
            <Link to="/course-intro-to-data" className="block px-4 py-2 hover:bg-gray-100">Intro to Data</Link>
            <Link to="/course-product-management" className="block px-4 py-2 hover:bg-gray-100">Product Management</Link>
            <Link to="/course-ux-ui" className="block px-4 py-2 hover:bg-gray-100">UX/UI</Link>
            <Link to="/course-ilmhonakids-storytelling-with-scatch" className="block px-4 py-2 hover:bg-gray-100">Storytelling with Scratch</Link>
            <Link to="/course-ilmhonakids-cs50" className="block px-4 py-2 hover:bg-gray-100">CS50</Link>
          </div>
        </div>

        {/* Other Links */}
        <Link to="/donishgo">Donishgo</Link>
        <Link to="/blog/all">Blog All</Link>
        <Link to="/tech-jam">Tech Jam</Link>
        <Link to="/faqs">FAQs</Link>
        <Link to="/location">Location</Link>
        <Link to="/about">About</Link>
        <Link to="/support-us">Support Us</Link>
        <Link to="/course-digital-freelance">Course Digital Freelance</Link>
      </div>
    </>
  );
};

export default Layout;