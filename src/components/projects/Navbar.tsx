import { Icons } from "../icons/Icons"
import { motion } from "framer-motion"

const Navbar = () => {
  const navItems = [
    {
      name: "figma",
      icon: Icons().figma,
    },
    {
      name: "cursor",
      icon: Icons().cursor,
    },
    {
      name: "frame",
      icon: Icons().frame,
    },
    {
      name: "square",
      icon: Icons().square,
    },
    {
      name: "letter",
      icon: Icons().letter,
    },
    {
      name: "hand",
      icon: Icons().hand,
    },
  ]

  const secondaryItems = [
    {
      icon: Icons().sun,
    },
    {
      icon: "Share",
    },
  ]
  return (
    <header className="w-full h-12 border-t-0 border-l-0 border-r-0 border-[1px] border-b-my_border">
      <nav className="w-full h-full flex justify-start items-center flex-row">
        <ul>
          {navItems.map((item, index) => {
            return (
              <motion.li
                initial={{ opacity: 0, x: -40 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, type: "tween", delay: 2 },
                }}
                viewport={{ once: true }}
                key={index}
                className="inline-block"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  {item.icon}
                </div>
              </motion.li>
            )
          })}
        </ul>
        <div className="w-1/2 flex items-center justify-center">
          <motion.small
            initial={{ y: -40, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, type: "tween", delay: 2.4 },
            }}
            viewport={{ once: true }}
            className="text-gray-800 font-normal text-sm"
          >
            tintaa´s projects
          </motion.small>
        </div>
        <div className="w-1/5 h-full flex items-center justify-end flex-row">
          <ul className="flex items-center justify-center flex-row gap-8">
            {secondaryItems.map((item, index) => (
              <motion.li
                initial={{ opacity: 0, x: 40 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, type: "tween", delay: 2.2 },
                }}
                viewport={{ once: true }}
                className="even:border-[1.2px] even:border-figma_border rounded-md px-3 py-1"
                key={index}
              >
                <div className="text-gray-900">{item.icon}</div>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
