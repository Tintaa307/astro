import Title from "../shared/Title"
import Navbar from "./Navbar"

const Projects = () => {
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
          <article className="w-[85%] h-[600px] bg-black-800 rounded-lg border-[2px] border-my_border">
            <Navbar />
          </article>
        </div>
      </div>
    </section>
  )
}

export default Projects
