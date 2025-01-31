import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, Cpu } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-indigo-600">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            Full Stack Developer | Creating Digital Experiences
          </p>
          <div className="flex justify-center gap-6">
            <a href="#contact" className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
              Get in Touch
            </a>
            <a href="#projects" className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition">
              View Work
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Developer workspace"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <User className="w-8 h-8 text-indigo-600" />
                About Me
              </h2>
              <p className="text-gray-600 mb-6">
                I'm a passionate developer with expertise in building modern web applications.
                With a strong foundation in both frontend and backend technologies,
                I create seamless digital experiences that solve real-world problems.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-indigo-600">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
            <Cpu className="w-8 h-8 text-indigo-600" />
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'Git', 'MongoDB'].map((skill) => (
              <div key={skill} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-800">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
            <Code2 className="w-8 h-8 text-indigo-600" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <img 
                  src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Title {project}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of the project and the technologies used.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a href="#" className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
            <Briefcase className="w-8 h-8 text-indigo-600" />
            Get In Touch
          </h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;