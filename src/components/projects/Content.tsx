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
    transition: { duration: 3, type: "tween", delay: 0.8, ease: "easeInOut" },
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

interface ProjectProps {
  name: string
  description: string
  link: string
  github: string
  build: JSX.Element[]
}

const Content = () => {
  const [isSelected, setIsSelected] = useState(false)
  const [counter, setCounter] = useState(0)
  const [item, setItem] = useState("")
  const [content, setContent] = useState(false)
  const [close, setClose] = useState(false)
  const [project, setProject] = useState({} as ProjectProps | undefined)
  const x = useMotionValue(0)
  const scale = useTransform(x, [0, 1000], [0, 1]) as MotionValue<number>

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
      build: [
        Icons().nextjs,
        Icons().typescript,
        Icons().tailwindcss,
        Icons().openai,
        Icons().radix,
      ],
    },
    {
      name: "Realtime Chat",
      description:
        "An aplicattion for chatting with adding friends by the E-Mail.",
      link: "realtime-chat-tintaa307.vercel.app",
      github: "https://github.com/Tintaa307/realtime-chat",
      build: [
        Icons().nextjs,
        Icons().typescript,
        Icons().tailwindcss,
        Icons().prisma,
        Icons().planetScale,
      ],
    },
    {
      name: "Tavross",
      description:
        "The perfect application to be in shape and learn things about the gym.",
      link: "tavross-final-version.vercel.app",
      github: "https://github.com/Tintaa307/tavross-final-version",
      build: [
        Icons().nextjs,
        Icons().typescript,
        Icons().tailwindcss,
        Icons().framer,
        Icons().prisma,
      ],
    },
    {
      name: "Pillwise",
      description: "Your personal pillbox reminder and medical assistant.",
      link: "#",
      github: "#",
      build: [
        Icons().nextjs,
        Icons().typescript,
        Icons().tailwindcss,
        Icons().framer,
        Icons().prisma,
      ],
    },
    {
      name: "Todo App",
      description: "Notes app to have a list of pending things to do.",
      link: "todo-on1gbe3n9-tintaa307.vercel.app",
      github: "https://github.com/Tintaa307/todo-app",
      build: [Icons().vite, Icons().typescript, Icons().css, Icons().framer],
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
              setClose(false)
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
        initial={{ x: 0 }}
        animate={
          close
            ? {
                x: [0, -30, 3000],
                transition: {
                  duration: 1.6,
                  type: "tween",
                  delay: 0.6,
                  ease: "easeInOut",
                },
              }
            : { x: 0 }
        }
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
              className="flex flex-col gap-5 ml-12"
            >
              <h1 className="text-white-800 font-semibold text-4xl">
                {project?.name}
              </h1>
              <p className="w-3/4 text-gray-900 font-semibold text-base">
                {project?.description}
              </p>
              <div className="w-3/4 text-gray-900 font-semibold text-base flex flex-row">
                Technologies:
                <div className="flex flex-row mx-2">{project?.build}</div>
              </div>
              <motion.a
                className="w-1/2 flex items-center bg-figma-radial justify-center flex-row gap-3 border-[1px] border-figma_border shadow-dark rounded-md py-1.5 text-white-800 font-semibold hover:shadow-shine transition-shadow"
                href={project?.github}
              >
                Repository {Icons().github}
              </motion.a>
            </motion.div>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center ">
            <motion.img
              initial={{ scale: 0 }}
              animate={content ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.7 }}
              src="/gym.jpg"
              alt="gym"
              className={"w-[300px] h-[400px] rounded-md"}
            />
          </div>
          <motion.div
            initial={"off"}
            variants={contentVariants}
            animate={content ? "on" : "off"}
            onClick={() => {
              setClose(true)
              setContent(false)
            }}
            className="absolute top-5 left-5 cursor-pointer"
          >
            {Icons().close}
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}

export default Content
