import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { SERVICES } from '@/lib/data';

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <SectionHeader tag="What I Offer" title="My Services" />
        <div className="services__container grid">
          {SERVICES.map((service, i) => (
            <Reveal
              className={`service__card${service.featured ? ' service__card--featured' : ''}`}
              delay={i * 80}
              key={service.title}
            >
              <div className="service__icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service__title">{service.title}</h3>
              <p className="service__description">{service.description}</p>
              <ul className="service__list">
                {service.features.map((feature) => (
                  <li key={feature}>
                    <i className="fa-solid fa-check"></i> {feature}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
