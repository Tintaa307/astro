import { Icons } from "../icons/Icons"
import Title from "../shared/Title"
import { Toaster } from "../ui/toaster"
import { useToast } from "../ui/use-toast"

const Contact = () => {
  const { toast } = useToast()
  const contactLinks = [
    {
      icon: Icons().github,
      url: "https://github.com/Tintaa307",
      target: "_blank",
      onclick: () => {},
    },
    {
      icon: Icons().linkedin,
      url: "https://www.linkedin.com/in/valentin-gonzalez-6a1805276/",
      target: "_blank",
      onclick: () => {},
    },
    {
      icon: Icons().email,
      url: "#Contact",
      target: "",
      onclick: () => {
        toast({
          description: "Copied to clipboard!",
        })
      },
    },
  ]
  return (
    <section className="w-full h-full flex items-center justify-center flex-col mt-8 my-20">
      <Title title="CONTACT" />
      <div className="w-full h-full flex items-center justify-center flex-row gap-16 mt-6">
        {contactLinks.map((link, index) => (
          <a
            href={link.url}
            target={link.target}
            key={index}
            onClick={link.onclick}
            className="relative w-20 h-20 flex items-center justify-center rounded-full bg-figma-radial shadow-dark border-[1px] border-figma_border cursor-pointer hover:shadow-shine transition-shadow z-30"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <Toaster />
    </section>
  )
}

export default Contact
