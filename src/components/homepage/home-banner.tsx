"use client";

import { motion } from "framer-motion";

export default function HomeBanner() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-4 py-1 shadow-lg bg-gradient-to-r from-amber-800 via-amber-600 to-amber-900 text-zinc-50 font-semibold rounded-b-md sticky top-0 z-10">
      <button className="flex-1 justify-center items-center p-1 shadow-sm w-full md:text-center space-x-2 uppercase text-center">
        you Pay nothing unless we win -{" "}
        <motion.span
          className="font-bold text-lg cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.1, color: "#fafafa" }}
        >
          &nbsp;Call Now: 678-653-0309
        </motion.span>
      </button>
    </div>
  );
}
