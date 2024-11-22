export default function Home() {
  return (
    <>
      {/* Head section to include title */}
      
        <title>Fatima Salman Resume</title>
      

      <div id="container">
        {/* Navigation Bar */}
        <header id="navbar">
          <nav>
            <a className="child" href="#about">About</a>
            <a className="child" href="#skills">Skills</a>
            <a className="child" href="#education">Education</a>
            <a className="child" href="#projects">Projects</a>
            <a className="child" href="#contact">Contact</a>
          </nav>
        </header>

        <main id="section">
          {/* Basic Information */}
          <section id="about">
            <h1 id="h1">Fatima Salman</h1>
            <h2>Aspiring Electronics Engineer</h2>
            <p>Welcome to my personal resume website! I am passionate about coding, electronics, and learning new technologies.</p>
          </section>

          {/* Skills */}
          <section id="skills">
            <h3 id="h3">Key Skills</h3>
            <ul>
              <li>HTML, CSS, JavaScript, TypeScript</li>
              <li>React, Next.js</li>
              <li>Problem-solving, Teamwork</li>
              <li>Basic Circuit Design</li>
            </ul>
          </section>

          {/* Education */}
          <section id="education">
            <h3 id="h3">Education</h3>
            <p>Bachelors in Electronics Engineering</p>
            <p>Institute: NED University of Engineering and Technology</p>
            <p>Currently a student of GIAIC</p>
          </section>

          {/* Contact */}
          <section id="contact">
            <h3 id="h3">Contact Me</h3>
            <p>Email: fati.salman@gmail.com</p>
            <p>Phone: 123-456-7890</p>
            <p>
              LinkedIn: <a href="https://www.linkedin.com/in/fatima-salman-16b2642ba/" target="_blank" rel="noopener noreferrer">linkedin.com/in/fatimasalman</a>
            </p>
            <p>
              GitHub: <a href="https://github.com/Jeonfatima" target="_blank" rel="noopener noreferrer">github.com/fatimasalman</a>
            </p>
          </section>

          {/* Portfolio Section */}
          <section id="projects">
            <h3 id="h3">Projects</h3>
            <a href="https://github.com/Jeonfatima" target="_blank" rel="noopener noreferrer">View my projects on GitHub</a>
          </section>
        </main>
      </div>
    </>
  );
}
