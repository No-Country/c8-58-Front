import React from "react";

function HowItWorks() {
  return (
    <div className="flex flex-col items-center colorBlanco scroll-mt-4 snap-start snap-always">
      <h2 className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante4 rounded-3xl font-bold px-48 py-10 text-4xl">
        How it works
      </h2>
      <div className="flex flex-col flex-nowrap justify-around gap-x-44 m-8">
        <div className="flex flex-row justify-evenly">
          <div className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 rounded-3xl flex flex-col items-start p-5 w-3/12 m-5 h-80">
            <h3 className=" font-semibold my-3 text-4xl p-3">First step</h3>
            <p className="text-xl p-3">
              <span className=" font-semibold">Verify your identity.</span>{" "}
              <br /> Create your profile and get verified to start your journey
              with Night Out.
            </p>
          </div>
          <div className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 rounded-3xl flex flex-col items-start p-5 w-3/12 m-5 h-80 ">
            <h3 className=" font-semibold my-3 text-4xl p-3">Second step</h3>
            <p className="text-xl p-3">
              <span className=" font-semibold">Set up your profile.</span>{" "}
              <br /> Upload pictures, tell people about you and post all the
              places you would like to go to.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-evenly">
          <div className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 rounded-3xl flex flex-col items-start p-5 w-3/12 m-5 h-80 ">
            <h3 className=" font-semibold my-3 text-4xl p-3">Third step</h3>
            <p className="text-xl p-3">
              <span className=" font-semibold">Connect.</span> <br /> Find your
              next hang out and get to know new people to go out with.
            </p>
          </div>
          <div className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 rounded-3xl flex flex-row items-center w-96 m-5 overflow-hidden">
            <img src="src\assets\imagen1.png" alt="imagen" className="w-8/12" />
            <h3 className=" font-semibold text-4xl text-center">
              Easy, right?
            </h3>
          </div>
        </div>
      </div>
      <img className="w-1/3 h-20 opacity-70" src="src\assets\flechas.png" alt="imagen flechas" />
    </div>
  );
}

export default HowItWorks;
