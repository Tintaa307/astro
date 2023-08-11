"use client"

import { Icons } from "../icons/Icons"
import Title from "../shared/Title"
import { motion } from "framer-motion"

const Skills = () => {
  const orbits = [
    {
      name: "typescript",
      width: "w-40",
      height: "h-40",
      icon: Icons().typescript,
      position: "w-11 h-11 relative top-32 left-5 cursor-pointer z-20",
      secondColor: "",
      thirdColor: "",
    },
    {
      name: "nextjs",
      width: "w-64",
      height: "h-64",
      icon: Icons().nextjs,
      position: "w-14 h-14 relative top-12 -left-4 cursor-pointer z-20",
      secondColor: "",
      thirdColor: "",
    },
    {
      name: "tailwindcss",
      width: "w-96",
      height: "h-96",
      icon: Icons().tailwindcss,
      position: "w-16 h-16 relative -top-4 left-24 cursor-pointer z-20",
      secondColor: "",
      thirdColor: "",
    },
    {
      name: "framer",
      width: "w-[550px]",
      height: "h-[550px]",
      icon: Icons().framer,
      position: "w-20 h-20 relative top-96 left-2 cursor-pointer z-20",
      secondColor: "",
      thirdColor: "",
    },
    {
      name: "html",
      width: "w-[700px]",
      height: "h-[700px]",
      icon: Icons().html,
      position: "w-24 h-24 relative top-56 -left-8 cursor-pointer z-20",
      secondColor: "",
      thirdColor: "",
    },
    {
      name: "prisma",
      width: "w-[700px] bg-none",
      height: "h-[700px] bg-none",
      icon: Icons().prisma,
      position: "w-20 h-20 relative top-56 left-[565px] cursor-pointer z-20",
      secondColor: "",
      thirdColor: "",
    },
    {
      name: "planetScale",
      width: "w-[700px] bg-none",
      height: "h-[700px] bg-none",
      icon: Icons().planetScale,
      position:
        "w-16 h-16 relative top-[450px] left-[450px] cursor-pointer z-20",
      secondColor: "",
      thirdColor: "",
    },
  ]
  return (
    <section className="w-full h-[150vh] flex items-center justify-center flex-col xxl:h-[110vh]">
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
            whileInView={{
              scale: 1,
              transition: {
                duration: 3,
                delay: 0.3 * index,
                type: "tween",
                bounce: 0.7,
              },
            }}
            animate={{
              rotate: 360,
              transition: {
                duration: 20,
                repeat: Infinity,
                delay: 5,
                ease: "linear",
              },
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
              viewport={{ once: true }}
              className={[
                "rounded-full bg-[#0000002d] backdrop-blur-sm flex items-center justify-center border-[1px] border-my_border cursor-pointer",
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
                viewport={{ once: true }}
                className={[
                  "rounded-full bg-[#00000007] backdrop-blur-sm flex items-center justify-center cursor-pointer",
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
                  viewport={{ once: true }}
                  className={[
                    "rounded-full backdrop-blur-sm flex items-center justify-center cursor-pointer ",
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
          <img
            src="/logo-negro100x100.png"
            className="rounded-full bg-transparent"
            alt="logo"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
