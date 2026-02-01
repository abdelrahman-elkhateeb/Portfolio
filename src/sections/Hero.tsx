import Button from "../components/Button";
import { words } from "../constants";

const Hero = () => {
  return (
    <section className='relative overflow-hidden' id="hero">
      <div className='absolute top-0 left-0 z-10'>
        <img src="/images/bg.png" alt='background' />
      </div>

      <div className='hero-layout'>
        {/* left: hero content */}
        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
          <div className='flex flex-col gap-7'>
            <div className='hero-text'>
              <h1>
                shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span key={word.text} className="flex items-center md:gap-3 gap-1 pd-2">
                        <img src={word.imgPath} alt={word.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50" />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into real projects</h1>
              <h1>that deliver results</h1>
              <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                Hi, i'm abdelrahman elkhateeb, a Frontend developer specializing in React.js, Next.js, TypeScript, and Tailwind CSS, with expertise in
                pixel-perfect implementation of Figma designs. Experienced in state management with Redux Toolkit, and
                building responsive, accessible web applications. Familiar with Node.js, Express.js, MongoDB.
              </p>
              <Button className="md:w-80 md:h-16 h-12" id="button" text="see my work" />
              
            </div>
          </div>
        </header>
        {/* right: hero 3d Model */}
      </div>
    </section>
  )
}

export default Hero