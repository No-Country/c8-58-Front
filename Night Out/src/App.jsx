import Header from "./components/Header";
import Introduction from "./components/Home/Introduction";
import HowItWorks from "./components/Home/HowItWorks";
import SignIn from "./components/Home/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import LogIn from './components/LogIn/LogIn'
import Publications from './components/Feed/Publications'
import Navbar from './components/Feed/Navbar'
import Filters from './components/Feed/Filters'

import { AlertsProvider } from './components/alerts/Alerts'

function App() {
  return (
    <div className="bg-fondo ">
      <AlertsProvider>
      <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
              <main className="w-10/12 flex flex-col items-center mx-auto ">
                <Introduction />
                <HowItWorks />
                <SignIn />
              </main>
        <Footer />
        </>
            }
          ></Route>
          <Route
            path="/Sign-up"
            element={
              <>
              <main className="w-10/12 flex flex-col items-center mx-auto ">
                <SignUp />
              </main>
        <Footer />
              </>
            }
          ></Route>
          <Route path="/Sign-In" element={
            <>
            <main className="w-10/12 flex flex-col items-center mx-auto ">
              <LogIn />
            </main>
        <Footer />
            </>
          }></Route>
          <Route path="/Feed" element={
            <main className="w-4/5 flex flex-col items-center mx-auto relative overflow-hidden">
            <Publications />
            <Filters />
            <Navbar />
            </main>
          }></Route>
        </Routes>
      </AlertsProvider>
    </div>
  );
}

export default App;
