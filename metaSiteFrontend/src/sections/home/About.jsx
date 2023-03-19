import React from "react";
import styles from "../../styles";
import { TypingText } from "../../Components";
import { PlanetaryMetaBg1 } from "../../assets";
import {
  staggeringOfContainer,
  textVariations,
  slideingIn,
  fadeIn,
} from "../../utils/Animations";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10 lg:overflow-hidden w-[]`}>
      <div className="gradient-02 z-0 " />
      <motion.div
        variants={staggeringOfContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWd} mx-auto ${styles.flexBoxCenter} flex-col`}
      >
        <TypingText title="Curious about us ?" TextStyle="text-center md:text-[54px] text-[34px] font-bold" />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[12px] font-light lg:text-[30px] text-[15px] text-center text-white"
        >
          Blockchain defined: Blockchain is a shared, immutable ledger that
          facilitates the process of recording transactions and tracking assets
          in a business network. An asset can be tangible (a house, car, cash,
          land) or intangible (intellectual property, patents, copyrights,
          branding). Virtually anything of value can be tracked and traded on a   
          blockchain network, reducing risk and cutting costs for all involved.
          Why blockchain is important: Business runs on information. The faster
          it’s received and the more accurate it is, the better. Blockchain is
          ideal for delivering that information because it provides immediate,
          shared and completely transparent information stored on an immutable
          ledger that can be accessed only by permissioned network members. A
          blockchain network can track orders, payments, accounts, production
          and much more.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
