import React from "react";
import './About.css';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Christine.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
           "I have taken long enough before showcasing what I am capable of as far as web development goes. I have given myself enough excuses. I have hidden my light under the bed for a long time. The end of all excuses is right now. So I code; Scared. Unsure... I create Apps. I am  Proficient in HTML, CSS, React, Ruby & Ruby on Rails frameworks. I am seeking a position to grow as a Full Stack Software Developer. I recently
           completed a Software Engineering course at Moringa School and I
            am eager to apply my skills and knowledge to contribute to the success of an organization.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt=""
            src=""
          />
        </div>
      </div>
    </section>
  );
}