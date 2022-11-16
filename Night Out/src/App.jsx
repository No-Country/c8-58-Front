import Header from "./components/Header";
import Introduction from "./components/Home/Introduction";
import HowItWorks from "./components/Home/HowItWorks";
import SignIn from "./components/Home/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-fondo ">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main className="w-10/12 flex flex-col items-center mx-auto ">
              <Introduction />
              <HowItWorks />
              <SignIn />
            </main>
          }
        ></Route>
        <Route
          path="/Sign-up"
          element={
            <main className="w-10/12 flex flex-col items-center mx-auto ">
              <SignUp />
            </main>
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
