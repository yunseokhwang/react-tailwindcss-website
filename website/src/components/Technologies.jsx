import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import java from "../assets/java.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.jpg";
import dart from "../assets/dart.png";
import flutter from "../assets/flutter.png";
import c from "../assets/c.png";
import nodejs from "../assets/node.png";

const Technologies = () => {
  const techs = [
    {
      id: 1,
      src: python,
      title: "Python",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: java,
      title: "Java",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: html,
      title: "HTML",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: css,
      title: "CSS",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-white",
    },
    {
      id: 7,
      src: reactImage,
      title: "React",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: nextjs,
      title: "NextJS",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-orange-500",
    },
    {
      id: 10,
      src: dart,
      title: "Dart",
      style: "shadow-gray-500",
    },
    {
      id: 11,
      src: flutter,
      title: "Flutter",
      style: "shadow-sky-500",
    },
    {
      id: 12,
      src: c,
      title: "C",
      style: "shadow-white",
    },
    {
      id: 13,
      src: nodejs,
      title: "NodeJS",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="technologies"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto px-4 py-12 flex flex-col justify-center w-full min-h-screen text-white">
        <div className="mb-12">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline-block mb-3">
            Technology
          </p>
          <p className="text-xl">These are the technologies I've worked with</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Technologies;