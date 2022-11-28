import React from "react";

function Introduction() {
  return (
    <div className="colorBlanco flex flex-col justify-around items-center m-8 mb-32 mt-32 scroll-mt-64 snap-end snap-always">
      {/*Para el texto, imagen y las flechas para cambiar lo que se ve */}
      <div className="flex flex-row justify-around items-center mb-36">
        {/*Para el texto y la imagen */}
        <div className="flex flex-col w-2/4 ">
          {/*Para el texto */}
          <h2 className="font-bold text-8xl p-6">The new way to make friends</h2>
          <p className="p-6 text-xl">
            Night Out is a platform made for people who want to go out, but
            don’t know who to go with.
          </p>
        </div>
        <img className="" src="src\assets\imgIntroduction.png" alt="imagen" />
      </div>
      <img className="w-1/3 h-20 opacity-70" src="src\assets\flechas.png" alt="imagen flechas" />
    </div>
  );
}

export default Introduction;
