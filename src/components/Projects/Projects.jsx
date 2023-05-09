import "./projects.scss";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiGooglemaps,
  SiSass,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function projects() {
  const itemsData = [
    {
      id: 1,
      imgSrs: "assets/Imgs/projectes/project3.JPG",
      title: "Khazanty",
      description:
        "website for buying and maintaining home furniture in the Kingdom of Saudi Arabia",
      icons: [
        <SiNextdotjs className='mr-3 duration-200 hover:scale-105 text-3xl' />,
        <SiTailwindcss className='mr-3 duration-200 hover:scale-105 bg-white text-blue-800 text-3xl' />,
      ],
      url: "https://www.khazantyksa.com/",
    },
    {
      id: 2,
      imgSrs: "assets/Imgs/projectes/project1.JPG",
      title: "travel advisor",
      description:
        "An application that helps the user to explore some nearby places (restaurants, cafes or motels)",
      icons: [
        <FaReact className='mr-3 duration-200 hover:scale-105 text-blue-500 text-3xl' />,
        <SiGooglemaps className='mr-3 duration-200 hover:scale-105 text-[#d1463a] text-3xl' />,
      ],
      url: "https://travele-advisor.vercel.app/",
    },
    {
      id: 3,
      imgSrs: "assets/Imgs/projectes/project2.JPG",
      title: "Tasty",
      description:
        "A website specialized in food and the most famous food recipes and chefs. With some dynamic functions",
      icons: [
        <FaReact className='mr-3 duration-200 hover:scale-105 text-blue-500 text-3xl' />,
        <SiSass className='mr-3 duration-200 hover:scale-105 text-[#c36291] text-3xl' />,
      ],
      url: "https://tasty-ten.vercel.app/",
    },
  ];
  return (
    <div className='projects p-5 h-96' id='projects'>
      <div className='h-60 lg:h-40'>
        <h1>Projects</h1>
        <p className='text-center font-light tracking-wider text-lg text-gray-500 top-0'>
          Here some of my works, feel free to preview them
        </p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-1 sm:px-0'>
        {itemsData.map((item) => (
          <div
            className='shadow-sm shadow-gray-500 rounded-lg overflow-hidden h-[27rem] md:h-[25rem] lg:h-[26rem]'
            key={item.id}>
            <a href={item.url} target='_blank'>
              <img
                src={item.imgSrs}
                alt='project'
                className='duration-200 hover:scale-105'
              />
            </a>
            <div className='p-3'>
              <h2 className='font-bold text-xl text-[#2b1758]'>{item.title}</h2>
              <p className='text-gray-500'>{item.description}</p>
            </div>
            <div className='flex items-center justify-center bg-gray-50 h-[38%] lg:h-[20%]'>
              <div className='w-1/2 px-6 py-3 m-4 flex justify-start'>
                {item.icons}
              </div>
              <a
                href={item.url}
                target='_blank'
                className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center flex justify-end  '>
                <button className='text-[#2b1758] text-xl font-bold flex'>
                  Preview
                  <BsBoxArrowUpRight className='ml-2 m-auto' />
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
