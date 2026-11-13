import { Fragment } from 'react';
import Reveal from './Reveal';
import TypedRole from './TypedRole';
import ParallaxImage from './ParallaxImage';
import StatNumber from './StatNumber';
import { HOME_ICONS, STATS } from '@/lib/data';

export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <Reveal className="home__content">
          <div className="home__tag">Available for Work</div>
          <h1 className="home_my_title">
            I BUILD
            <br />
            <TypedRole />
          </h1>

          <p className="home__description">
            Thoughtful, high-performance web experiences built to help people and businesses move
            forward.
          </p>
          <div className="home__buttons">
            <a href="#portfolio" className="button button--primary">
              View My Work
            </a>
            <a href="#contact" className="button button--ghost">
              Hire Me
            </a>
          </div>
          <div className="home__stats">
            {STATS.map((stat, i) => (
              <Fragment key={stat.label}>
                {i > 0 && <div className="stat__divider"></div>}
                <div className="stat">
                  <StatNumber value={stat.value} suffix={stat.suffix} />
                  <span className="stat__label">{stat.label}</span>
                </div>
              </Fragment>
            ))}
          </div>
        </Reveal>

        <Reveal className="home__img-wrap">
          <div>
            <div className="home__img-placeholder">
              <ParallaxImage
                src="/asset/myImage.png"
                width={390}
                height={510}
                alt="Portrait of Mahesh Lakshan"
              />
            </div>
          </div>
          {HOME_ICONS.map((icon, i) => (
            <div key={icon} className={`home__floating home__floating--${i + 1}`}>
              <i className={icon}></i>
            </div>
          ))}
        </Reveal>
      </div>

      <div className="home__scroll">
        <a href="#about" className="home__scroll-button">
          <i className="fa-solid fa-arrow-down"></i>
          <span>Scroll Down</span>
        </a>
      </div>
    </section>
  );
}
