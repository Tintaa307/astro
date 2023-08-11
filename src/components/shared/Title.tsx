"use client"

import { motion, Transition } from "framer-motion"

interface TitleProps {
  title: string
}

const Title = ({ title }: TitleProps) => {
  return (
    <article className="w-full h-max flex items-center justify-center flex-col my-12 gap-2">
      <motion.h1
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={
          {
            duration: 0.5,
            type: "tween",
            bounce: 0.7,
          } as Transition
        }
        viewport={{ once: true }}
        className="text-white-0 font-semibold text-3xl"
      >
        {title}
      </motion.h1>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "180px" }}
        transition={
          {
            duration: 0.5,
            type: "tween",
            bounce: 0.7,
            delay: 0.4,
          } as Transition
        }
        viewport={{ once: true }}
        className="h-1 rounded-3xl bg-black-800 shadow-box"
      />
    </article>
  )
}

export default Title
