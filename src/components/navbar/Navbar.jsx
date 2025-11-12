import React from "react";

const Navbar = () => {
    return(
        <div className="px-20 py-4 flex justify-between items-center">
            <div>
                <h1 className="font-bold text-[#130B2D] text-xl md:text-2xl">CS — Ticket System</h1>
            </div>
            <div className="flex justify-evenly items-center gap-6">
                <ul className=" hidden md:flex justify-between items-center gap-6 opacity-90 ">
                    <li><a href="">Home</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Changelog</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Download</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <button className="btn bg-linear-to-br from-[#422AD5] to-[#b171e8] hover:from-[#320559] hover:to-[#fffff] transition-colors duration-300 rounded-md text-white font-semibold">+ New Ticket</button>
            </div>
           
        </div>
    )
}

export default Navbar