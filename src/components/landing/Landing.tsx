"use client"

import { Button } from "../ui/button"
import { Icons } from "../icons/Icons"
import { motion } from "framer-motion"
import ParticlesContainer from "../particles/Particles"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

const Landing = () => {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <motion.div className="absolute top-6 left-8">
        <div className="flex items-center justify-center flex-row gap-4">
          <Avatar>
            <AvatarImage src="/logo-negro512x512.png" alt="@tintaa" />
            <AvatarFallback>T</AvatarFallback>
          </Avatar>
          <motion.h2
            initial={{ opacity: 0, x: -70 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                type: "tween",
                bounce: 0.7,
                delay: 0.5,
              },
            }}
            viewport={{ once: true }}
            className="text-white-0 font-semibold text-2xl select-none"
          >
            Tintaa
          </motion.h2>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.5,
          type: "tween",
          bounce: 0.7,
        }}
        viewport={{ once: true }}
        className="w-full h-screen absolute top-0 left-0 -z-10"
      >
        <ParticlesContainer />
      </motion.div>
      <div className="w-max h-full flex items-center justify-center flex-col gap-16">
        <div>
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1,
              type: "tween",
              bounce: 0.7,
            }}
            viewport={{ once: true }}
            className="font-bold text-5xl text-center text-transparent bg-clip-text bg-gradient-to-br from-white-300 from-20% to-gray-900 flex items-center justify-center flex-col gap-3"
          >
            <span className="">Valentin Gonzalez</span>
            <span className="">Fullstack Developer</span>
          </motion.h1>
        </div>
        <div className="w-max h-max flex justify-center items-center flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 1,
              type: "tween",
              bounce: 0.7,
            }}
            viewport={{ once: true }}
          >
            <Button className="rounded-lg backdrop-blur-sm p-6 bg-transparent shadow-box flex items-center justify-center flex-row gap-3 px-7 hover:border hover:border-border transition-colors duration-200">
              <a
                className="text-white-0 font-medium text-base"
                href="https://github.com/tintaa307"
              >
                View repo
              </a>
              <div>{Icons().github}</div>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 1,
              type: "tween",
              bounce: 0.7,
            }}
            viewport={{ once: true }}
          >
            <Button className="rounded-lg backdrop-blur-sm p-6 bg-transparent shadow-box flex items-center justify-center flex-row gap-3 px-7 hover:border hover:border-border transition-colors duration-200">
              <a
                className="text-white-0 font-medium text-base"
                href="#Projects"
              >
                Projects
              </a>
              <div>{Icons().file}</div>
            </Button>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default Landing
