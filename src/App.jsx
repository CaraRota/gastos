import React from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";

import { ToastContainer, cssTransition } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "animate.css";
import "react-toastify/dist/ReactToastify.css";

const bounce = cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut",
});

const App = () => {
    return (
        <Router>
            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
                transition={bounce}
            />
            <main className='py-16 bg-gradient-to-br from-oracle-50 to-oracle-200 min-h-screen'>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
