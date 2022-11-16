import React from "react";

function Footer() {
  return <footer className="text-white flex flex-col items-center justify-evenly">
    <span className="mt-8 h-1 bg-gray w-4/5"></span>
    <h2 className="font-semibold text-2xl mt-8">Useful Links</h2>
    <ul className="list-none flex flex-row font-semibold text-2xl mt-10">
      <li className="px-10"><a href="#">About Us</a></li>
      <li className="px-10"><a href="#">Team</a></li>
      <li className="px-10"><a href="#">Services</a></li>
      <li className="px-10"><a href="#">Contact Us</a></li>
    </ul>
    <div className="flex flex-col items-center justify-center mt-16 mb-8">
      <div className="flex flex-row items-center justify-center">
        <img className="w-14 mr-3" src="src\assets\logo.png" alt="logo" />
        <h2 className="font-semibold text-2xl">Night Out</h2>
      </div>
      <h3 className="text-gray font-semibold text-md">© All Rights Reserved</h3>
    </div>
  </footer>;
}

export default Footer;
