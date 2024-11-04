import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
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