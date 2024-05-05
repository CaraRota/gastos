import React from "react";
import LoginIcon from "../uicomponents/icons/LoginIcon";
import ExpenseLogo from "/expense-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className='container'>
            <nav className='flex justify-between py-4 bg-white/80 backdrop-blur-md shadow-md w-full px-10 fixed top-0 left-0 right-0 z-10'>
                <div className='flex items-center'>
                    <Link to={"/"} className='cursor-pointer'>
                        <h3 className='flex gap-5 items-center justify-center text-2xl font-bold text-oracle-500'>
                            <img src={ExpenseLogo} alt='App logo' className='h-10' />
                            Gastos
                        </h3>
                    </Link>
                </div>
                <div className='flex items-center space-x-5'>
                    <Link to={"/login"} className='flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold hover:text-oracle-600'>
                        <LoginIcon className='fill-current h-5 w-5 mr-2 mt-0.5' />
                        Ingresar
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
