import React from "react";
import ktimages from "../../assets/images/kasb.jpg";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__wrapper">
          <Image
            className="navbar__wrapper__left"
            src={ktimages}
            alt="ktrasm"
          />
          <ul className="navbar__wrapper__list">
            <li className="navbar__list__item">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="navbar__list__item">
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li className="navbar__list__item">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="navbar__list__item">
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li className="navbar__list__item">
              <Link href={"/login"}>Login</Link>
            </li>
          </ul>
          <div className="navbar__wrapper__right">
            <div className="input__wrapper">
              <input placeholder="search" type="text" />
              <CiSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
