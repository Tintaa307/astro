import { Icons } from "../icons/Icons"

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
  return (
    <header className="w-full h-12 border-t-0 border-l-0 border-r-0 border-[1px] border-b-my_border">
      <nav className="w-full h-full flex justify-start items-center flex-row">
        <ul>
          {navItems.map((item, index) => {
            return (
              <li key={index} className="inline-block">
                <div className="w-12 h-12 flex items-center justify-center">
                  {item.icon}
                </div>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
