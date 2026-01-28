"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a passionate Full-Stack Software Engineer with a strong foundation in building modern web and mobile applications. During my university studies at the Faculty of Information Technology, University of Moratuwa, I gained hands-on experience in full-stack web development using .NET, React, and Angular, as well as mobile application development using Flutter.

I enjoy designing and developing scalable web applications, RESTful APIs, and efficient software solutions. Problem-solving is the part of programming I enjoy the most—I find great satisfaction in analyzing challenges and turning them into working, reliable solutions.

My core technical stack includes C#, .NET, React, Angular, MS SQL, and Material UI, and I am also familiar with JavaScript, TypeScript, Java, Flutter, and Dart. I am continuously learning and improving my skills, and I am currently expanding my knowledge in cloud computing with Microsoft Azure.

I am actively seeking a full-time Software Engineer position where I can contribute to impactful projects, grow as an engineer, and build meaningful software solutions.
      </p>

      <p>
        <span className="italic">I aim to create impactful software solutions </span>that drive innovation 
        and efficiency. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Docker and application containerization.</span>.
      </p>
    </motion.section>
  );
}
