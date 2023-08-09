import {
  MotionValue,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "../../lib/utils"
import { Icons } from "../icons/Icons"

const variants = {
  off: {},
  on: {
    x: [0, 0, 1000],
    y: [220, -30, 420],
    transition: { duration: 4.5, type: "tween", delay: 1.2 },
  },
}

const contentVariants = {
  off: {
    x: -40,
    opacity: 0,
  },
  on: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, type: "tween", delay: 0.6 },
  },
}

const closeVariants = {
  off: {},
  on: {
    rotate: [0, 29, 0],
    transition: {
      duration: 0.8,
      type: "tween",
      delay: 0.8,
      ease: "easeInOut",
    },
  },
}

interface ProjectProps {
  name: string
  description: string
  link: string
  github: string
  build: string
}

const Content = () => {
  const [isSelected, setIsSelected] = useState(false)
  const [counter, setCounter] = useState(0)
  const [item, setItem] = useState("")
  const [content, setContent] = useState(false)
  const [close, setClose] = useState(false)
  const [project, setProject] = useState({} as ProjectProps | undefined)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const scale = useTransform(x, [0, 1000], [0, 1]) as MotionValue<number>
  // const transform = useTransform(
  //   y,
  //   [0, 25, 0],
  //   ["0px", "-40px", "100%"]
  // ) as MotionValue<string>

  useEffect(() => {
    const project = projects.find((project) => project.name === item)
    setProject(project)
  }, [item])

  const projects = [
    {
      name: "Chatbot",
      description:
        "This is a chatbot helper to support or manage your webapps and give a better user experience.",
      link: "chatbot-tintaa307.vercel.app",
      github: "https://github.com/Tintaa307/chatbot",
      build: `This project was built with ${Icons().nextjs}, ${
        Icons().typescript
      }, ${Icons().tailwindcss}, ${Icons().openai} and ${Icons().radix}.`,
    },
    {
      name: "Realtime Chat",
      description:
        "An aplicattion for chatting with adding friends by the E-Mail.",
      link: "realtime-chat-tintaa307.vercel.app",
      github: "https://github.com/Tintaa307/realtime-chat",
      build: `This project was built with ${Icons().nextjs}, ${
        Icons().typescript
      }, ${Icons().tailwindcss}, ${Icons().prisma} and ${Icons().planetScale}.`,
    },
    {
      name: "Tavross",
      description:
        "The perfect application to be in shape and learn things about the gym.",
      link: "tavross-final-version.vercel.app",
      github: "https://github.com/Tintaa307/tavross-final-version",
      build: `This project was built with ${Icons().nextjs}, ${
        Icons().typescript
      }, ${Icons().tailwindcss}, ${Icons().framer} and ${Icons().prisma}`,
    },
    {
      name: "Pillwise",
      description: "Your personal pillbox reminder and medical assistant.",
      link: "#",
      github: "#",
      build: `This project was built with ${Icons().nextjs}, ${
        Icons().typescript
      }, ${Icons().tailwindcss}, ${Icons().framer} and ${Icons().prisma}.`,
    },
    {
      name: "Todo App",
      description: "Notes app to have a list of pending things to do.",
      link: "todo-on1gbe3n9-tintaa307.vercel.app",
      github: "https://github.com/Tintaa307/todo-app",
      build: `This project was built with ${Icons().vite}, ${
        Icons().typescript
      }, ${Icons().css} and ${Icons().framer}`,
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
            onClick={() => {
              setIsSelected(true)
              setItem(project.name)
            }}
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
        className={cn("absolute -mt-96 left-[120px] opacity-0 z-20", {
          "opacity-100": isSelected,
        })}
        onAnimationComplete={() => {
          setCounter(counter + 1)
          setIsSelected(false)
          if (counter > 1) setContent(true)
        }}
      >
        <img className="w-[74px] h-[74px]" src="/cursor.png" alt="cursor" />
      </motion.div>
      <motion.div
        style={{
          scale: scale,
          position: "absolute",
          transformOrigin: "top left",
        }}
        className={cn(
          "w-[75%] h-[75%] bg-figma-radial border-[1px] border-figma_border shadow-dark rounded-lg"
        )}
      >
        <div className="w-full h-full flex items-center justify-center flex-row">
          <div className="w-1/2 h-full flex items-center justify-center">
            <motion.div
              initial={"off"}
              variants={contentVariants}
              animate={content ? "on" : "off"}
              className="flex flex-col gap-4 ml-12"
            >
              <h1 className="text-white-800 font-semibold text-3xl">
                {project?.name}
              </h1>
              <p className="w-3/4 text-gray-900 font-semibold text-sm">
                {project?.description}
              </p>
              <p>Technologies: {project?.build}</p>
              <a
                className="w-1/2 flex items-center justify-center flex-row gap-3 bg-figma-radial border-[1px] border-figma_border shadow-dark rounded-md py-1.5 text-white-800 font-semibold hover:shadow-shine transition-shadow"
                href={project?.github}
              >
                Repository {Icons().github}
              </a>
            </motion.div>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center ">
            <motion.img
              initial={{ scale: 0 }}
              animate={content ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 1.2 }}
              src="/gym.jpg"
              alt="gym"
              className={"w-[300px] h-[400px] rounded-md"}
            />
          </div>
          <div
            onClick={() => setClose(true)}
            className="absolute top-5 left-5 cursor-pointer"
          >
            {Icons().close}
          </div>
          <div
            className={cn("absolute opacity-0", {
              "opacity-100 transition-all duration-500": close,
              "opacity-0": !close,
            })}
          >
            <motion.img
              style={{ rotate: y }}
              initial={"off"}
              variants={closeVariants}
              animate={close ? "on" : "off"}
              className="w-[74px] h-[74px]"
              src="/cursor.png"
              alt="cursor"
            />
          </div>
        </div>
      </motion.div>
    </main>
  )
}

export default Content
