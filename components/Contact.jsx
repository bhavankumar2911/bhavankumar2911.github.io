import React from "react";
import { IoMail } from "react-icons/io5";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import { RiWhatsappFill } from "react-icons/ri";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="section-card sm:flex-1">
      <h2 className="section-title">contact</h2>
      <div className="mt-5">
        <div className="flex flex-col items-center">
          <p className="contact-urls">
            <span>
              <IoMail />
            </span>
            <span className="text-sm ml-2 inline-block break-all">
              bhavankumarcse2020@gmail.com
            </span>
          </p>
          <p className="contact-urls">
            <span>
              <AiFillGithub />
            </span>
            <span className="text-sm ml-2 inline-block break-all">
              <Link href="https://github.com/bhavankumar2911">
                https://github.com/bhavankumar2911
              </Link>
            </span>
          </p>
        </div>
        <div className="flex place-content-center">
          <Link
            className="social-btn hover:bg-blue-500"
            href="https://www.linkedin.com/in/bhavan-kumar-v-599562223/"
          >
            <ImLinkedin2 />
          </Link>
          <Link
            className="social-btn hover:bg-green-500"
            href="https://api.whatsapp.com/send?phone=917871842326"
          >
            <RiWhatsappFill />
          </Link>
          <Link
            className="social-btn hover:bg-rose-500"
            href="https://www.instagram.com/bhavan29_/"
          >
            <AiFillInstagram />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
