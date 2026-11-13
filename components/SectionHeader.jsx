import Reveal from './Reveal';

export default function SectionHeader({ tag, title }) {
  return (
    <Reveal className="section__header">
      <span className="section__tag">{tag}</span>
      <h2 className="section__title">{title}</h2>
    </Reveal>
  );
}
