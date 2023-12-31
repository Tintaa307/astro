"use client"

import { useEffect, useState } from "react"
import Title from "../shared/Title"
import Navbar from "./Navbar"
import { motion, Transition } from "framer-motion"
import { cn } from "../../lib/utils"
import Content from "./Content"

const Projects = () => {
  const [isFinished, setIsFinished] = useState(false)
  const [myInnerHeight, setMyInnerHeight] = useState("")
  const [layerWidth, setLayerWidth] = useState("")
  const [layerHeight, setLayerHeight] = useState("")

  useEffect(() => {
    setMyInnerHeight(window.innerWidth * 0.85 * 0.5625 + "px")
    setLayerWidth(window.innerWidth * 0.75 + "px")
    setLayerHeight(window.innerWidth * 0.65 * 0.5625 + "px")
  }, [window.innerHeight])

  return (
    <section className="w-full h-full flex items-center justify-center flex-col">
      <Title title="PROJECTS" />
      <div className="w-full h-full flex items-center justify-center flex-col gap-12">
        <div className="w-1/3 flex text-center justify-center">
          <p className="text-gray-900 font-semibold text-xl">
            Here are some of my favourite projects that I have worked on.
          </p>
        </div>
        <div className="w-full h-full flex items-center justify-center flex-row">
          <motion.article
            initial={{ opacity: 0, y: -40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                type: "tween",
                bounce: 0.7,
              } as Transition,
            }}
            style={{
              height: myInnerHeight,
            }}
            viewport={{ once: true }}
            onAnimationComplete={() => setIsFinished(true)}
            className={cn(
              "w-[85%] bg-black-800 rounded-lg border-[2px] border-my_border flex items-center justify-start flex-col overflow-hidden",
              {
                "bg-gradient-radial transition-all duration-1000": isFinished,
              }
            )}
          >
            <Navbar />
            <Content widthSize={layerWidth} heightSize={layerHeight} />
          </motion.article>
        </div>
      </div>
    </section>
  )
}

export default Projects
