import Image from "next/image";
import React from "react";
import footerimages from "@/app/assets/images/kasb.jpg";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__list">
            <Image
              className="footer__list__img"
              src={footerimages}
              alt="footerlogo"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="footer__list">
            <h5>Contact Us</h5>
            <div className="footer__nav__wrapper">
              <Link href="">E:info@example.com</Link>
              <Link href="">P:+94 7670000000</Link>
              <Link href="">A:123 Hospital rd,</Link>
              <Link href="">Kalubowila, Dehiwela</Link>
            </div>
          </div>
          <div className="footer__list">
            <h5>Uselful Links</h5>
            <div className="footer__nav__wrapper">
              <Link href="">Shop All</Link>
              <Link href="">Tempered Glass</Link>
              <Link href="">Back-cover</Link>
              <Link href="">About US</Link>
            </div>
          </div>
          <div className="footer__list">
            <ul>
              <li>
                <IoLogoWhatsapp />
                <p>Whatsapp</p>
              </li>
              <li>
                <FaFacebookSquare />
                <p>Facebook</p>
              </li>
              <li>
                <FaSquareInstagram />
                <p>Instagram</p>
              </li>
              <li>
                <AiFillTikTok />
                <p>Tik Tok</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
