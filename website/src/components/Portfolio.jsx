import React from "react";
import Vogro from "../assets/portfolio/Vogro.png";
import twenty from "../assets/portfolio/twenty.png";
import worldcup from "../assets/portfolio/worldcup.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Vogro,
      href: "https://vogro.ca/",
    },
    {
      id: 2,
      src: worldcup,
    },
    {
      id: 3,
      src: twenty,
      href: "https://vijanshul-2048.netlify.app/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 text-white w-full min-h-screen pt-8 md:pt-12"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <a 
              key={id} 
              href={href || '#'} 
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
              style={{ position: 'relative', paddingBottom: '100%' }}
            >
              <img
                src={src}
                alt={`Portfolio item ${id}`}
                className="absolute w-full h-full object-cover rounded-md"
                style={{ top: 0, left: 0 }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;