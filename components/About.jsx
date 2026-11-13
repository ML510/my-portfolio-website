import Image from 'next/image';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { ABOUT_INFO } from '@/lib/data';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <SectionHeader tag="Who I Am" title="About Me" />
        <div className="about__container grid">
          <Reveal className="about__img-wrap">
            <div className="about__img-box">
              <div className="about__img-placeholder">
                <Image
                  src="/asset/image2.jpeg"
                  width={896}
                  height={1196}
                  alt="Mahesh Lakshan"
                  style={{ height: 400, width: 'auto' }}
                />
              </div>
            </div>
            <div className="about__experience">
              <span className="about__exp-number">5+</span>
              <span className="about__exp-text">Years of Experience</span>
            </div>
          </Reveal>

          <Reveal className="about__info">
            <h3 className="about__subtitle">A passionate full-stack developer based in Colombo</h3>
            <p className="about__description">
              I am a passionate Full Stack Software Engineer with a strong interest in building
              high-quality web applications. I enjoy solving real-world problems using modern
              technologies and continuously improving my skills.
            </p>
            <p className="about__description">
              I have experience in both frontend and backend development, and I focus on creating
              responsive, user-friendly, and efficient systems. I am always eager to learn new tools
              and frameworks to stay up-to-date in the tech industry.
            </p>
            <p className="about__description">
              My goal is to become a highly skilled software engineer and contribute to impactful and
              innovative projects.
            </p>

            <div className="about__info-grid">
              {ABOUT_INFO.map(({ label, value, available }) => (
                <div className="info__item" key={label}>
                  <span className="info__label">{label}</span>
                  <span className={`info__value${available ? ' available' : ''}`}>{value}</span>
                </div>
              ))}
            </div>
            <a href="/asset/myNewCv.pdf" className="button button--primary" download>
              Download CV <i className="fa-solid fa-download"></i>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
