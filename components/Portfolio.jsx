'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { PROJECTS, PROJECT_FILTERS } from '@/lib/data';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [animate, setAnimate] = useState(false);

  const selectFilter = (key) => {
    setFilter(key);
    setAnimate(true);
  };

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <SectionHeader tag="My Work" title="Recent Projects" />
        <div className="portfolio__filters">
          {PROJECT_FILTERS.map(({ key, label }) => (
            <button
              key={key}
              className={`filter__btn${filter === key ? ' active' : ''}`}
              onClick={() => selectFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="portfolio__container grid">
          {PROJECTS.map((project, i) => {
            const show = filter === 'all' || project.category === filter;
            return (
              <Reveal
                className={`portfolio__item${show ? '' : ' hidden'}`}
                delay={(i % 3) * 80}
                key={project.title}
                style={show && animate ? { animation: 'fadeInDown 0.4s ease' } : undefined}
              >
                <div className="portfolio__img-wrap">
                  <div className="portfolio__img-placeholder">
                    <i className={project.icon}></i>
                  </div>
                </div>
                <div className="portfolio__info">
                  <span className="portfolio__tag">{project.tag}</span>
                  <h3 className="portfolio__title">{project.title}</h3>
                  <p className="portfolio__desc">{project.description}</p>
                  <div className="portfolio__links">
                    <a href={project.demo} className="portfolio__link">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                    </a>
                    <a href={project.github} className="portfolio__link">
                      <i className="fa-brands fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
