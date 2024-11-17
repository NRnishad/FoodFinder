import Header from "./Header";
import Admin from './Admin'
import AdminClass from './AdminClass'
const About = () => {
  return (
    <div>
      <Header />

      <div className="about-container">
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Hello! My name is Nishad, and I am a passionate developer who loves
            learning and building projects that solve real-world problems. I
            have experience working with various technologies, and I enjoy
            exploring new trends in web development.
          </p>
          <p>
            In my free time, I like reading tech books, contributing to
            open-source projects, and connecting with the developer community.
            I'm always looking for opportunities to expand my knowledge and
            share what I've learned with others.
          </p>
        </div>
        <div className="Cardcontainer">
          <Admin name={"Nishad(function)"} location={"kottukadu"} />
          <AdminClass name={"Nishad(Class)"} location={"kottukadu"} />
        </div>
      </div>
    </div>
  );
}


export default About;