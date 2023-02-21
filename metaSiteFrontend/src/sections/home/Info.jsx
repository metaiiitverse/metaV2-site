import React from "react";
import {
  staggeringOfContainer,
  planetaryMotion,
  textVariations,
  slideingIn,
  fadeIn,
} from "../../utils/Animations";
import { motion } from "framer-motion";
import { MetaExploreraBoy1 } from "../../assets";
import styles from "../../styles";
import { TypingText } from "../../Components";
import WhyMeta from "../../Components/WhyMeta";

const Info = () => {
  return (
    <section className={`${styles.paddings} relative z-10 w-full`}>
      <motion.div
        variants={staggeringOfContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.25 }}
        className={`${styles.innerWd} mx-auto flex lg:flex-row flex-col gap-8 w-full justify-center items-center`}
      >
        <motion.div
          variants={planetaryMotion("left")}
          className={"flex-1 ${styles.flexBoxCenter}  lg:after:w-[42%] w-1/2 rounded-xl"}
        >
          <img
            src={MetaExploreraBoy1}
            alt="Explore"
            className="w-full h-full object-contain rounded-xl "
          />
        </motion.div>
       

    
        <motion.div variants={fadeIn("left", "spring", 0.3, 1)} className=" lg:w-[58%] w-1/2">
        <TypingText title ="What lies beyond the world you know ?"  TextStyle="text-left font-bold text-[34px] md:text-[44px]"/>
         <WhyMeta/>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Info;
