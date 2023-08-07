import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { motion } from "framer-motion"

const Preload = () => {
  return (
    <main className="w-full h-screen bg-black-0 flex items-center justify-center flex-col gap-12">
      <motion.div
        initial={{ opacity: 0, y: -120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          type: "spring",
          bounce: 0.5,
          stiffness: 100,
          delay: 0.8,
        }}
      >
        <Avatar className="w-40 h-40">
          <AvatarImage
            className="rounded-full"
            src="https://github.com/shadcn.png"
          />
          <AvatarFallback>T</AvatarFallback>
        </Avatar>
      </motion.div>
      <motion.div className="">
        <motion.h1 className="text-white-0 text-4xl font-cursive">
          Tintaa
        </motion.h1>
      </motion.div>
    </main>
  )
}

export default Preload
