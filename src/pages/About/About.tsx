import React from "react";

const About = () => {
  return (
    <div className="flex justify-center py-4 bg-bgPrimary">
      <div className="flex flex-col w-[600px] bg-bgPrimary p-6 rounded-lg shadow-md text-primary">
        <h1 className="mb-4 text-3xl font-bold">About Us</h1>
        
        <p className="mb-4 text-justify">
          We’re a small team of designers and developers passionate about crafting
          modern, intuitive, and accessible user interfaces. Our mission is to
          simplify complexity — turning ideas into digital experiences that are both
          elegant and user-friendly.
        </p>

        <p className="mb-4 text-justify">
          This project showcases a fully themable UI built using Tailwind CSS,
          designed with scalability and flexibility in mind. Whether you're building
          a landing page, a dashboard, or a component library, our structure and
          theme system make it easy to adapt to any brand or style.
        </p>

        <h2 className="mb-2 text-2xl font-semibold">What We Stand For</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>Clean, semantic, and maintainable code</li>
          <li>Consistent design tokens and theming</li>
          <li>Focus on user experience and accessibility</li>
          <li>Easy integration into modern stacks</li>
        </ul>

        <p className="text-justify">
          We're always exploring ways to improve developer experience and UI
          architecture. If you're interested in contributing, collaborating, or
          learning more about our approach — feel free to reach out or explore the
          repo.
        </p>
      </div>
    </div>
  );
};

export default About;
