import Header from '@/components/Header';
import Home from '@/components/Home';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollUp from '@/components/ScrollUp';
import CustomCursor from '@/components/CustomCursor';

export default function Page() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <section className="statement section" aria-label="My approach">
          <div className="container">
            <p>
              THOUGHTFUL DESIGN.
              <br />
              BUILT FOR <em>REAL</em> PEOPLE.
            </p>
          </div>
        </section>
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
      <CustomCursor />
    </>
  );
}
