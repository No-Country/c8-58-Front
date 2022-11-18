import React from "react";

function Navbar() {
  return (
    <div className="bg-gradiante1 absolute text-white flex flex-col justify-between Navbar z-50">
      <div>
      <div className="self-center flex flex-col items-center justify-evenly mt-4">
        <img
          src="src\assets\candado.svg"
          alt="foto perfil"
          className="w-20 rounded-full"
        />
        <p className="text-xl">Nombre</p>
        <div className="flex flex-row mb-4">
          <p className="text-sm text-gray">
            <span className="text-white">55M</span> Followers
            <span className="ml-5 text-white">30</span> Following
          </p>
        </div>
      </div>
      <div>
        
      <span className="bg-lineaNavbar h-1 w-full block"></span>
      <h2 className="pr-10 pl-10 text-3xl mt-2 mb-2">Settings</h2>
      <span className="bg-lineaNavbar h-1 w-full block"></span>
      <h2 className="pr-10 pl-10 text-3xl mt-2 mb-2">Direct Messages</h2>
      <span className="bg-lineaNavbar h-1 w-full block"></span>
      <h2 className="pr-10 pl-10 text-3xl mt-2 mb-2">Help</h2>
      <span className="bg-lineaNavbar h-1 w-full block"></span>
      <h2 className="pr-10 pl-10 text-3xl mt-2 mb-2">Log Out</h2>
      <span className="bg-lineaNavbar h-1 w-full block"></span>
      </div>
      </div>
      <div>
        <span className="bg-white h-1 w-4/5 block mx-auto"></span>
        <div className="flex flex-col items-center justify-center mt-8 mb-8">
          <div className="flex flex-row items-center justify-center">
            <img className="w-14 mr-3" src="src\assets\logo.png" alt="logo" />
            <h2 className="font-semibold text-2xl">Night Out</h2>
          </div>
          <h3 className="text-gray font-semibold text-md">
            © All Rights Reserved
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
