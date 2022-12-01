import React from "react";

function Introduction() {
  return (
    <div className="colorBlanco flex flex-col justify-around items-center  mb-36 mt-36 scroll-mt-64 snap-end snap-always s:mb-10 s:mt-24 w-full">
      {/*Para el texto, imagen y las flechas para cambiar lo que se ve */}
      <div className="flex md:flex-row justify-around items-center mb-36 s:flex-col s:mb-10">
        {/*Para el texto y la imagen */}
        <div className="flex flex-col w-2/4 s:order-2 s:w-full md:order-1">
          {/*Para el texto */}
          <h2 className="font-bold text-6xl p-6 md:text-4xl s:text-2xl">The new way to make friends</h2>
          <p className="p-6 text-xl md:text-lg s:text-base">
            Night Out is a platform made for people who want to go out, but
            don’t know who to go with.
          </p>
        </div>
        <img className="md:h-56 lg:h-60 s:h-auto s:order-1 md:order-2 xl:h-96" src="src\assets\imgIntroduction.png" alt="imagen" />
      </div>
      <img className=" opacity-70 lg:w-1/2 s:w-1/2 s:h-10 xl:w-1/3 2xl:w-1/4" src="src\assets\flechas.png" alt="imagen flechas" />
    </div>
  );
}

export default Introduction;
