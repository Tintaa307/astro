import { Icons } from "../icons/Icons"
import Title from "../shared/Title"

const About = () => {
  return (
    <section className="w-full h-[80vh] flex items-center justify-center flex-col mb-4">
      <Title title="ABOUT ME" />
      <div className="w-full h-full flex items-center justify-center flex-row">
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="w-full flex items-center justify-center text-center flex-col gap-4">
            <h2 className="text-white-0 font-medium text-3xl ml-4">
              Hi there!
            </h2>
            <p className="w-3/4 ml-4 text-gray-900 font-normal">
              Im Valentin Gonzalez most people call me Tintaa,{" "}
              <span className="">fullstack developer</span> based on Argentina
              with 2 years of experience in the web development.
            </p>
            <button className="w-1/4 h-11 bg-figma-radial border-[1px] border-figma_border shadow-dark rounded-md text-white-800 font-semibold hover:shadow-shine transition-shadow flex items-center justify-center flex-row gap-2">
              Resume {Icons().download}
            </button>
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center bg-black-900 overflow-hidden"></div>
      </div>
    </section>
  )
}

export default About
