"use client"
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ContactSvg from "./ContactSvg";
import ButtonV from "@/components/modif/buttonV";
import { useEffect } from "react";
import NavBar from "@/components/self/navBar";
import { useTheme } from "next-themes";
const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};



const Page = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  handleResize();
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

  const ref = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID!,
      process.env.NEXT_PUBLIC_TEMPLATE_ID!,
      form.current!,
      {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
      }
      )
      .then(
      () => {
        setSuccess(true);
        setError(false);
        setLoading(false);
        form.current?.reset(); 
      },
      (error) => {
        console.log(error);
        setError(true);
        setSuccess(false);
        setLoading(false);
      }
      );
  };
  const {theme}=useTheme();
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="h-full flex gap-[100px] lg:gap-[30px] flex-row" ref={ref} style={{ backgroundImage: theme==='dark'?'url(bg-profile.jpg)':'url(bg-blue-contact.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <NavBar></NavBar>
      <div className="w-1/2 h-full p-5 flex items-center justify-center md:w-full md:h-[70%]">
      <motion.form
        ref={form}
        variants={listVariant}
        animate={isInView ? "animate" : "initial"}
        onSubmit={sendEmail}
        className="w-4/5 flex flex-col gap-5  p-12 rounded-[50px] lg:w-full"
      >
        <motion.h1 variants={listVariant} className="text-1xl md:text-4xl font-extrabold text-center text-primary">
        Get In Touch With Me Anytime!
        </motion.h1>
        <motion.div variants={listVariant} className="flex flex-col gap-2.5">
        <label className="text-sm text-primary">Name</label>
        <input type="text" name="user_username" placeholder="Vishwas" className="p-3 border-none rounded-md" />
        </motion.div>
        <motion.div variants={listVariant} className="flex flex-col gap-2.5">
        <label className="text-sm text-primary">Email</label>
        <input type="email" name="user_email" placeholder="vishwasphawa@gmail.com" className="p-3 border-none rounded-md" />
        </motion.div>
        <motion.div variants={listVariant} className="flex flex-col gap-2.5">
        <label className="text-sm text-primary">Message</label>
        <textarea rows={10} name="user_message" placeholder="Tell Us Your Thoughts" className="p-3 border-none rounded-md"></textarea>
        </motion.div>
        <motion.button variants={listVariant} className="bg-primary text-primary-foreground p-5 border-none rounded-lg cursor-pointer" disabled={loading}>
        {loading ? "Sending..." : "Send"}
        </motion.button>
        {success && (
         <ButtonV name="Yout Message Has Been Sent" isBeam containerClass="sm:w-fit w-full sm:min-w-96 "></ButtonV>
        )}
        {error && (
         <ButtonV name="Something Went Wrong!" isBeam containerClass="sm:w-fit w-full sm:min-w-96 "></ButtonV>
        )}
      </motion.form>
      </div>
      {!isMobile?<div className="w-1/2 h-full p-5 flex items-center justify-center my-12 rounded-[50%_0] md:w-full md:h-[30%]">
      <ContactSvg />
      </div>:null}
    </div>
  );
};

export default Page;
