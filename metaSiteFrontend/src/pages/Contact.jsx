import React, { useState } from "react";
import { Footer } from "../Components";
import { ContactForm } from "../sections/Contact";
// import { ContactForm,Texts } from '../sections/Contact'

const Contact = () => {
  

  return (
    <section className="bg-black h-full ">
      <ContactForm/>
      <Footer/>

    </section>
    
  );
};

export default Contact;
