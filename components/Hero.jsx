"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from "next/link";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default function Hero() {
  return (
    <div className="">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col items-center justify-center gap-4 px-4"
        >
          <div className="text-3xl font-extrabold text-center md:text-7xl dark:text-white">
            Turn Long URLs into
            <Highlight className="text-black dark:text-white">
              Easy-to-Share Links
            </Highlight>
          </div>
          <div className="py-4 text-base font-extralight md:text-4xl dark:text-neutral-200">
            with QuickLinks
          </div>
          <Link href={"/generate"}>
            <button className="px-4 py-2 text-white bg-black rounded-full dark:bg-white w-fit dark:text-black">
              Generate Link
            </button>
          </Link>
        </motion.div>
        {/* <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="max-w-4xl px-4 mx-auto text-2xl font-bold leading-relaxed text-center md:text-4xl lg:text-5xl text-neutral-700 dark:text-white lg:leading-snug "
        >
          With insomnia, nothing&apos;s real. Everything is far away. Everything
          is a{" "}
          <Highlight className="text-black dark:text-white">
            copy, of a copy, of a copy.
          </Highlight>
        </motion.h1> */}
      </AuroraBackground>
    </div>
  );
}
