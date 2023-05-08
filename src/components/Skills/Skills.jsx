import "./skills.scss";

import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiSass } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function Skills() {
  const skills = [
    {
      id: 1,
      name: "HTML",
      discreption:
        "Create accessible and user-friendly web pages and optimize web pages for search engines by using proper HTML tags and attributes.",
      icon: [
        <AiFillHtml5 className='text-8xl group-hover:text-9xl duration-200 ease-in-out text-[#d84924]' />,
      ],
    },
    {
      id: 2,
      name: "CSS",
      discreption:
        "Design beautiful and appealing websites, making them more professional and impactful",
      icon: [
        <DiCss3 className='text-8xl group-hover:text-9xl duration-200 ease-in-out text-[#2449d8]' />,
      ],
    },
    {
      id: 3,
      name: "JavaScript",
      discreption:
        "Develop interactive and dynamic web applications, adding animated details and visual effects",
      icon: [
        <IoLogoJavascript className='text-8xl group-hover:text-9xl duration-200 ease-in-out text-[#ead41c]' />,
      ],
    },
    ,
    {
      id: 4,
      name: "SASS",
      discreption:
        "Develop advanced CSS designs that are easy to control and maintain",
      icon: [
        <DiSass className='text-8xl group-hover:text-9xl duration-200 ease-in-out text-[#c36291]' />,
      ],
    },
    {
      id: 5,
      name: "Bootstrap",
      discreption:
        "Build responsive designs for websites, making them work well on all mobile devices",
      icon: [
        <BsFillBootstrapFill className='text-8xl group-hover:text-9xl duration-200 ease-in-out text-[#7611ed]' />,
      ],
    },
    ,
    {
      id: 6,
      name: "Tailwind CSS",
      discreption:
        "Create modern and responsive designs for websites using a utility-first approach",
      icon: [
        <SiTailwindcss className='text-8xl group-hover:text-9xl duration-200 ease-in-out text-[#07adca]' />,
      ],
    },
    {
      id: 7,
      name: "React",
      discreption:
        "Develop interactive web applications that can be easily extended in the future",
      icon: [
        <FaReact className='text-8xl group-hover:text-9xl duration-200 ease-in-out text-[#5ccfee]' />,
      ],
    },
    {
      id: 8,
      name: "Next js",
      discreption:
        "Build alternative web applications to thick and server-side based applications, improving the user experience",
      icon: [
        <SiNextdotjs className='text-8xl group-hover:text-9xl duration-200 ease-in-out text-[#2b2a39]' />,
      ],
    },
  ];

  return (
    <div className='skills' id='skills'>
      <div className='mt-5 h-52 md:h-[5.5rem] lg:h-24'>
        <h1>Skills</h1>
        <p className='text-center font-light tracking-wider text-lg text-gray-500 top-0'>
          Here is what I learned and what I can do
        </p>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16'>
        {skills.map((skill) => (
          <div
            key={skill.id}
            className='bg-white h-80 lg:h-60 shadow-md hover:shadow-xl rounded-md group hover:rounded-md p-4 flex items-center flex-col m-2 ease-in-out duration-200'>
            {skill.icon}
            <span className='font-semibold text-xl text-[#2b1758]'>
              {skill.name}
            </span>
            <p className='text-center text-gray-400'>{skill.discreption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
