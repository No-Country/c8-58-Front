import React from "react";

function DarkMode() {

    
    // const toggleDarkMode = ref(document.documentElement.className === "dark");
    let modo = "Dark";
    const changeDarkMode = (mode) => {
        
        if ( mode.target.value === "light" ) {
            document.documentElement.classList.add("dark");
            modo = "light"
            console.log("Modo Claro " + modo)
        }
        else {
            document.documentElement.classList.remove("dark");
            modo = "dark"
            console.log("Modo Oscuro " + modo)
        }

    };

  return (
    <div className="w-full flex flex-row items-center">
      <p className="mr-3">
        Dark/Light mode:
      </p>
      <select
        name="darkMode"
        id="darkMode"
        defaultValue={modo}
        onChange={changeDarkMode}
        className="text-black bg-gray p-2 pr-4 pl-4 outline-none border-none rounded-full appearance-none hover:cursor-pointer text-center"
      >
        <option value="dark">
          Dark
        </option>
        <option value="light">Light</option>
      </select>
    </div>
  );
}

export default DarkMode;
