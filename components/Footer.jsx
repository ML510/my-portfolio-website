import { SOCIALS } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__logo">
            Mahesh<span>.</span>
          </div>
          <div className="footer__socials">
            {SOCIALS.map(({ href, icon, label }) => (
              <a href={href} className="social__link" aria-label={label} key={href}>
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
