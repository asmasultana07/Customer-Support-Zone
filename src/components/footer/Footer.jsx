import React from "react";
import { Facebook, Linkedin, Twitter, Mail} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black p-20">
      <div className="grid md:grid-cols-6 gap-6 mb-6 text-[#A1A1AA]">
        <div className="col-span-2 mr-12">
          <h2 className="text-white text-[24px] mb-4">CS — Ticket System</h2>
          <p className="text-[#A1A1AA] mr-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex flex-col ">
            <h3 className="text-white text-[20px] mb-4">Company</h3>
            <a href="">About Us</a>
            <a href="">Our Mission</a>
            <a href="">Contact Saled</a>
        </div>
        <div className="flex flex-col gap-2">
            <h3 className="text-white text-[20px] mb-4">Services</h3>
            <a href="">Download Apps</a>
            <a href="">Products & Services</a>
            <a href="">Customer Stories</a>
        </div>
        <div className="flex flex-col gap-2">
            <h3 className="text-white text-[20px] mb-4">Information</h3>
            <a href="">Privacy Policy</a>
            <a href="">Terms & Conditions</a>
            <a href="">Join Us</a>
        </div>

        <div className="flex flex-col gap-2">
            <h3 className="text-white text-[20px] mb-4">Social Links</h3>
            <a href="" className="flex gap-3"><Twitter className="border-b-white rounded-b-full-full"/> Twitter</a>
            <a href="" className="flex gap-3"><Linkedin />  Linkedin</a>
            <a href="" className="flex gap-3"><Facebook/> Facebook</a>
            <a href="" className="flex gap-3"><Mail/> support@cst.com</a>
        </div>
      </div>
      <hr />
      <aside className="text-[#A1A1AA] text-center mt-6">
        <p>© 2025 CS — Ticket System. All rights reserved.</p>
      </aside>
    </footer>
  );
};

export default Footer;
