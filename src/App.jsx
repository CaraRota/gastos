import React from "react";
import Homepage from "./components/Homepage";
import "animate.css";
import { ToastContainer } from "react-toastify";

const App = () => {
    return (
        <>
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
                transition:Bounce
            />
            <Homepage />
        </>
    );
};

export default App;
