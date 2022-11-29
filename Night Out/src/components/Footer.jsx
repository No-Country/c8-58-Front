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
    <div className="w-1/3 mt-16 flex flex-col items-center">
      <h2 className="text-2xl font-medium mb-3">Subscribe to our newsletter!</h2>
      <form action="" className="flex flex-row items-center w-full" autoComplete="off">
      <div className="w-3/4 flex flex-row flex-nowrap bg-gray rounded-l-full">
          <img className="h-8 m-3" src="src\assets\sobre.svg" alt="email" />
          <input type="email" name="mail" id="mail" className="w-full colorNegro rounded-r-full outline-none text-xl bg-gray"/>
          </div>
        <button className="w-1/4 h-14 bg-gradient-to-r from-gradiante3 via-gradiante2 to-gradiante1 pl-6 pr-6 flex justify-center items-center rounded-r-full" type="submit"><img className="w-10" src="src\assets\flechaBlancaDerecha.png" alt="Subscribe" /></button>
      </form>
    </div>
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
