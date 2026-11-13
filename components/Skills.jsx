import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import SkillBar from './SkillBar';
import { SKILL_GROUPS } from '@/lib/data';

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <SectionHeader tag="My Abilities" title="Skills & Expertise" />
        <div className="skills__container grid">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal className="skills__group" delay={i * 80} key={group.title}>
              <h3 className="skills__group-title">{group.title}</h3>
              <div className="skills__list">
                {group.skills.map((skill) => (
                  <div className="skill__item" key={skill.name}>
                    <div className="skill__info">
                      <span className="skill__name">
                        <i className={skill.icon}></i> {skill.name}
                      </span>
                      <span className="skill__percent">{skill.percent}%</span>
                    </div>
                    <div className="skill__bar">
                      <SkillBar percent={skill.percent} />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
