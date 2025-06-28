import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const themes = [
  "theme-black",
  "theme-orange",
  "theme-purple",
  "theme-green",
  "theme-blue",
];
const Home = () => {
  const [theme, setTheme] = useState(themes[1]);

  return (
    <div className={twMerge("flex justify-center my-4", theme)}>
      <div className="flex flex-col w-[600px] bg-bgPrimary p-6 rounded-lg shadow-md">
        <h1 className="mb-2 text-4xl font-bold text-primary">
          Discover the Power of Clean UI
        </h1>
        <h2 className="mb-4 text-lg font-medium text-justify text-primary">
          A well-structured interface not only enhances visual appeal, but also
          improves accessibility and user engagement across platforms.
        </h2>

        <div className="relative flex justify-center mb-4">
          <img
            className="rounded-2xl h-[300px] object-cover"
            src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Modern UI dashboard"
          />
        </div>

        <p className="mb-4 text-justify text-primary">
          Our design principles revolve around clarity, consistency, and
          usability. Whether you're building a simple blog or a complex
          enterprise dashboard, a clean UI creates trust and guides users
          intuitively through your product.
        </p>

        <ul className="mb-6 list-disc list-inside text-primary">
          <li>Intuitive and minimal design</li>
          <li>Fully responsive components</li>
          <li>Easy theming with Tailwind CSS</li>
        </ul>

        <div className="flex gap-4">
          <button className="px-6 py-2 font-medium border rounded text-tBase bg-primary hover:bg-secondary hover:text-primary border-primary">
            Get Started
          </button>
          <button className="px-6 py-2 font-medium border rounded bg-bgPrimary hover:bg-primary hover:text-tBase border-primary text-primary">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
