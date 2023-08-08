import {
  MotionValue,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { useState } from "react"
import { cn } from "../../lib/utils"

const variants = {
  off: {
    display: "none",
  },
  on: {
    display: "block",
    x: 1000,
    y: 420,
    transition: { duration: 4.2, type: "tween", delay: 0.8 },
  },
}

const Content = () => {
  const [isSelected, setIsSelected] = useState(false)
  const x = useMotionValue(0)
  const width = useTransform(x, [0, 1000], ["0%", "75%"]) as MotionValue<string>
  const projects = [
    {
      name: "Chatbot",
      description:
        "This is a chatbot helper to support or manage your webapps and give a better user experience.",
      link: "chatbot-tintaa307.vercel.app",
      github: "https://github.com/Tintaa307/chatbot",
    },
    {
      name: "Realtime Chat",
      description:
        "An aplicattion for chatting with adding friends by the E-Mail.",
      link: "realtime-chat-tintaa307.vercel.app",
      github: "https://github.com/Tintaa307/realtime-chat",
    },
    {
      name: "Tavross",
      description:
        "The perfect application to be in shape and learn things about the gym.",
      link: "tavross-final-version.vercel.app",
      github: "https://github.com/Tintaa307/tavross-final-version",
    },
    {
      name: "Pillwise",
      description: "Your personal pillbox reminder and medical assistant.",
      link: "#",
      github: "#",
    },
    {
      name: "Todo App",
      description: "Notes app to have a list of pending things to do.",
      link: "todo-on1gbe3n9-tintaa307.vercel.app",
      github: "https://github.com/Tintaa307/todo-app",
    },
  ]
  return (
    <main className="w-full h-full flex items-center justify-center flex-col gap-12">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, type: "tween", delay: 2.9 },
        }}
        animate={isSelected ? { opacity: 0 } : { opacity: 1 }}
        viewport={{ once: true }}
        className="text-gray-800 font-semibold text-xl"
      >
        Choose one project to know more about.
      </motion.h2>
      <div className="flex items-center justify-center flex-row gap-5">
        {projects.map((project, index) => (
          <motion.div
            onClick={() => setIsSelected(true)}
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: { duration: 1, type: "spring", delay: 3.4 },
            }}
            animate={isSelected ? { opacity: 0 } : { opacity: 1 }}
            viewport={{ once: true }}
            key={index}
            className="w-[140px] h-10 bg-figma-radial shadow-dark border-[1px] border-figma_border rounded-lg flex items-center justify-center cursor-pointer hover:shadow-shine transition-shadow"
          >
            <h1 className="text-white-500 font-semibold">{project.name}</h1>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={"off"}
        variants={variants}
        style={{ x }}
        animate={isSelected ? "on" : "off"}
        className={cn("absolute -mt-96 left-[150px] opacity-0 z-20", {
          "opacity-100": isSelected,
        })}
        onAnimationComplete={() => setIsSelected(false)}
      >
        <img className="w-[74px] h-[74px]" src="/cursor.png" alt="cursor" />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          width: width,
          height: width,
          transformOrigin: "left",
        }}
        className={cn(
          "bg-figma-radial border-[1px] border-figma_border shadow-dark rounded-lg"
        )}
      ></motion.div>
    </main>
  )
}

export default Content
