"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function HomeLogosSection() {
  const scrollRef = useRef(null);
  return (
    <section className="">
      <div className="bg-slate-900">
        <div className="">
          <div className="flex flex-col justify-between py-16 space-y-6 md:space-y-0 md:flex-row md:justify-evenly items-center text-white text-xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ root: scrollRef }}
              transition={{ delay: 0.3 }}
            >
              <Image
                src="https://wp.flackinjurylaw.com/wp-content/uploads/2024/01/state-bar-of-georgia.png"
                width={220}
                height={60}
                alt="Georgia Super Lawyer"
                className="rounded-md p-2 bg-white"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ root: scrollRef }}
              transition={{ delay: 0.3 }}
            >
              <Image
                src="https://wp.flackinjurylaw.com/wp-content/uploads/2024/01/unnamed.jpg"
                width={220}
                height={60}
                alt="Georgia Super Lawyer"
                className="rounded-md p-2 bg-white"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ root: scrollRef }}
              transition={{ delay: 0.3 }}
            >
              <Image
                src="https://wp.flackinjurylaw.com/wp-content/uploads/2024/01/gtla.png"
                width={204}
                height={60}
                alt="Georgia Super Lawyer"
                className="rounded-md p-2 bg-white h-[90px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
