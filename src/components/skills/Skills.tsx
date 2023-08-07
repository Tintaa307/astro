"use client"

import { Icons } from "../icons/Icons"
import Title from "../shared/Title"
import { motion } from "framer-motion"

const Skills = () => {
  const orbits = [
    {
      name: "Typescript",
      width: "w-40",
      height: "h-40",
      icon: Icons().framer,
      position: "w-16 h-16 relative top-32 left-5",
      secondColor: "",
      thirdColor: "",
    },
    {
      name: "Nextjs",
      width: "w-64",
      height: "h-64",
      icon: Icons().framer,
      position: "w-16 h-16 relative top-12 -left-4",
      secondColor: "",
      thirdColor: "",
    },
    {
      name: "Tailwindcss",
      width: "w-96",
      height: "h-96",
      icon: Icons().framer,
      position: "w-16 h-16 relative -top-4 left-24",
      secondColor: "",
      thirdColor: "",
    },
    {
      name: "Framer Motion",
      width: "w-[550px]",
      height: "h-[550px]",
      icon: Icons().framer,
      position: "w-16 h-16 relative top-96 left-2",
      secondColor: "",
      thirdColor: "",
    },
    {
      name: "React Query",
      width: "w-[700px]",
      height: "h-[700px]",
      icon: Icons().framer,
      position: "w-24 h-24 relative top-56 -left-8",
      secondColor: "w-[78px] h-[78px]",
      thirdColor: "w-14 h-14",
    },
  ]
  return (
    <section className="w-full h-[150vh] flex items-center justify-center flex-col">
      <Title title="SKILLS" />
      <div className="w-1/3 flex items-center text-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,
              type: "tween",
              bounce: 0.7,
            },
          }}
          viewport={{ once: true }}
          className="text-gray-900 font-semibold text-xl"
        >
          These are some of the technologies I have worked with recently
        </motion.p>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        {orbits.map((orbit, index) => (
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 3,
              delay: 0.3 * index,
              type: "tween",
              bounce: 0.7,
            }}
            viewport={{ once: true }}
            className={[
              "absolute bg-cover bg-[url('/orbit.svg')]",
              orbit.width,
              orbit.height,
            ].join(" ")}
            key={index}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                duration: 1.2,
                type: "spring",
                delay: 4,
              }}
              className={[
                "rounded-full bg-[#0000002d] backdrop-blur-sm flex items-center justify-center border-[1px] border-my_border",
                orbit.position,
              ].join(" ")}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 1.2,
                  type: "spring",
                  delay: 4.1,
                }}
                className={[
                  "rounded-full bg-[#00000007] backdrop-blur-sm flex items-center justify-center",
                  orbit.secondColor,
                ].join(" ")}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 1.2,
                    type: "spring",
                    delay: 4.2,
                  }}
                  className={[
                    "rounded-full bg-black-0 backdrop-blur-sm flex items-center justify-center",
                    orbit.thirdColor,
                  ].join(" ")}
                >
                  {orbit.icon}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
        <motion.div
          initial={{ scale: 0, rotate: 90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 3,
            type: "spring",
            delay: 0.1,
            bounce: 0.6,
            stiffness: 100,
          }}
          viewport={{ once: true }}
          className=""
        >
          <div className="w-[100px] h-[100px] rounded-full bg-[#0000002a] absolute -z-10 mt-[6px]" />
          <img
            src="/logo-negro100x100.png"
            className="rounded-full"
            alt="logo"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
