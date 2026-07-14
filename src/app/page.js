import Hero from '../components/Hero';
import About from '../components/About';
import Principles from '../components/Principles';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import GithubActivity from '../components/GithubActivity';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Principles />
      <Skills />
      <Projects />
      <GithubActivity />
      <Blog />
      <Contact />
    </main>
  );
}
