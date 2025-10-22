import React from "react";
import logo from '../assets/logo.png';
import { Linkedin, Twitter, Youtube } from "lucide-react";


const Footer = () => {
  return (
    <div>
        <div className="flex justify-between items-center bg-[#001931] px-2 py-5">
          <div className="flex items-center">
            <img src={logo} alt="" className="w-10 h-10"/>
            <h3 className="ml-2 text-2xl font-semibold text-[#632EE3]">ZeroThree</h3>
          </div>
            <div>
                <h2 className="text-white font-semibold">Social Links</h2>
                <div className="flex gap-1.5 items-center text-white">
                  <Youtube></Youtube>
                  <Linkedin></Linkedin>
                  <Twitter></Twitter>
                </div>
            </div>
        </div>
        <div className="divider divider-neutral bg-[#001931] -my-0"></div>
      <footer className="footer sm:footer-horizontal footer-center bg-[#001931] text-white p-4 mb-">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Zero3Quest
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;