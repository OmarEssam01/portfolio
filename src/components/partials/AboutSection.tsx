import Button from '@/components/form/Button';
import { FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import { FiCode, FiServer, FiTool, FiSmile } from 'react-icons/fi';

const AboutSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FiCode className="text-blue-400" size={20} />,
      skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'React.js', 'Angular', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      icon: <FiServer className="text-blue-400" size={20} />,
      skills: ['Node.js', 'Express.js', 'Nest.js', 'MongoDB'],
    },
    {
      title: 'Tools',
      icon: <FiTool className="text-blue-400" size={20} />,
      skills: ['Git', 'GitHub', 'Postman'],
    },
    {
      title: 'Soft Skills',
      icon: <FiSmile className="text-blue-400" size={20} />,
      skills: ['Problem-Solving', 'Team Collaboration'],
    },
  ];

  return (
    <>
      {/* About Me + Skills header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">About Me</h1>
        <h1 className="mr-96 text-2xl font-bold">Technical Skills</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
        {/* Bio */}
        <div>
          <p className="mb-4 text-justify">
            Hey, I’m <span className="font-semibold text-blue-400">Omar Essam El Din</span> — a frontend developer
            passionate about crafting sleek, responsive, and modern UIs. I specialize in building interactive web
            experiences that blend design with performance.
          </p>
          <p className="mb-4 text-justify">
            With a strong background in{' '}
            <span className="font-medium">JavaScript, TypeScript, and modern frameworks</span>, I thrive on turning
            ideas into clean, functional, and visually engaging applications. My focus is always on delivering smooth
            user experiences and writing scalable, maintainable code.
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>⚡ Experienced in creating responsive web apps with React.js and Angular</li>
            <li>🎨 Strong eye for detail and UI/UX best practices</li>
            <li>🚀 Eager to explore new frontend technologies and improve constantly</li>
          </ul>
          <a href="/files/OmarEssam-CV.pdf" download="OmarEssam-CV.pdf">
            <Button className="mt-5">Download CV</Button>
          </a>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="rounded-2xl  border border-gray-700 p-6 shadow-lg backdrop-blur-lg">
              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-lg bg-blue-600/20 p-2">{category.icon}</span>
                <h2 className="text-lg font-semibold">{category.title}</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-lg border border-cyan-700 bg-cyan-900/40 px-3 py-1 text-sm text-cyan-300 transition hover:bg-cyan-700 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overview (Projects, Coffee, Clients, Experience) */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineFire size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">500+</h2>
            {/* Previousky Projects Completed */}
            <p className="mt-1">Coding Hours</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <FiCoffee size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">30+</h2>
            <p className="mt-1">Cup of Coffee</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineUsers size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">1000+</h2>
            <p className="mt-1">Errors Debugged</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineChartBar size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">1</h2>
            <p className="mt-1">Years of Experience</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
