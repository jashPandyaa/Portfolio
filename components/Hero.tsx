import { FaGithub, FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 bg-black-100">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  Fixed to show dark background with grid pattern
       */}
      <div
        className="h-screen w-full bg-black-100 bg-grid-white/[0.03]
        absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            WELCOME TO MY DIGITAL PORTFOLIO
          </p>

          <TextGenerateEffect
          words="Building Full-Stack Solutions from Travel Platforms to SaaS Applications"
          className="text-white text-center text-[40px] md:text-5xl lg:text-6xl"
          />

              <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
                Hi! I&apos;m <span className="text-purple">Jash Pandya</span>, a full-stack web developer with 4+ full-stack projects including 
                travel platforms, blogging systems, and data visualization tools.
              </p>
          
          {/* // Add after your bio */}
              <div className="flex gap-4 mb-6 flex-wrap justify-center">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-cyan-500 text-green-950 rounded-full text-sm">MongoDB</span>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Express</span>
              </div>
          <div className="flex gap-4 flex-col sm:flex-row">
                <a href="#projects">
                  <MagicButton
                    title="View Projects"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
          </a>
          <a href="https://github.com/jashPandyaa/" target="_blank" rel="noopener noreferrer">
            <MagicButton
              title="GitHub"
              icon={<FaGithub />}
              position="right"
              otherClasses="border-white/20"
            />
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;