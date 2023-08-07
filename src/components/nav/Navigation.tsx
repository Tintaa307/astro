import { Icons } from "../icons/Icons"
import { motion } from "framer-motion"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip"

const Navigation = () => {
  const navItems = [
    {
      name: "Contact",
      icon: Icons().contact,
      margin: "mt-36 ml-2",
    },
    {
      name: "About",
      icon: Icons().about,
      margin: "-ml-2 mt-4",
    },
    {
      name: "Skills",
      icon: Icons().skills,
      margin: "-mt-12",
    },
    {
      name: "Projects",
      icon: Icons().projects,
      margin: "-mr-2 mt-4",
    },
    {
      name: "Darkmode",
      icon: Icons().moon,
      margin: "mt-36 ml-2",
    },
  ]

  return (
    <motion.header className="fixed w-full flex items-center justify-center bottom-8 z-40">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>{Icons().arrow_up}</MenubarTrigger>
          <MenubarContent className="my-4 backdrop-blur-sm -ml-[74px]">
            <MenubarItem>
              <div className="w-max px-2 py-2 h-max flex items-center justify-center flex-row bg-transparent backdrop-blur-sm">
                {navItems.map((item, index) => (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.3,
                              type: "tween",
                              bounce: 0.7,
                              delay: index * 0.1,
                            },
                          }}
                          whileHover={{
                            borderColor: "hsl(214.3 31.8% 91.4%)",
                            cursor: "pointer",
                            transition: {
                              duration: 0.3,
                              type: "tween",
                            },
                          }}
                          className={[
                            "w-12 h-12 flex items-center justify-center mx-4 rounded-full border border-my_border",
                            item.margin,
                          ].join(" ")}
                        >
                          {item.icon}
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-semibold">{item.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </motion.header>
  )
}

export default Navigation
