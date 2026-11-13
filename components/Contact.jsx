'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { CONTACT, EMAILJS, SOCIALS } from '@/lib/data';

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // { ok: boolean, text: string }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setSending(true);
    setStatus(null);

    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          from_name: data.get('name'),
          reply_to: data.get('email'),
          subject: data.get('subject'),
          message: data.get('message'),
          to_email: EMAILJS.toEmail,
        },
        { publicKey: EMAILJS.publicKey }
      );
      setStatus({ ok: true, text: '✓ Message sent successfully!' });
      form.reset();
    } catch {
      setStatus({ ok: false, text: '✗ Something went wrong. Please try again.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <SectionHeader tag="Get In Touch" title="Contact Me" />
        <div className="contact__container grid">
          <Reveal className="contact__info">
            <p className="contact__description">
              Have a project in mind or want to collaborate? Feel free to reach out. I&apos;ll get
              back to you within 24 hours.
            </p>
            <div className="contact__cards">
              <div className="contact__card">
                <div className="contact__card-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="contact__card-info">
                  <span className="contact__card-title">Email</span>
                  <a href={`mailto:${CONTACT.email}`} className="contact__card-data">
                    {CONTACT.email}
                  </a>
                </div>
              </div>
              <div className="contact__card">
                <div className="contact__card-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="contact__card-info">
                  <span className="contact__card-title">Phone</span>
                  <a href={CONTACT.phoneHref} className="contact__card-data">
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
              <div className="contact__card">
                <div className="contact__card-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="contact__card-info">
                  <span className="contact__card-title">Location</span>
                  <span className="contact__card-data">{CONTACT.location}</span>
                </div>
              </div>
            </div>
            <div className="contact__socials">
              {SOCIALS.map(({ href, icon, label }) => (
                <a href={href} className="social__link" aria-label={label} key={href}>
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal as="form" className="contact__form" id="contact-form" onSubmit={handleSubmit}>
            <div className="form__group">
              <div className="form__field">
                <label className="form__label" htmlFor="f-name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="f-name"
                  name="name"
                  className="form__input"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form__field">
                <label className="form__label" htmlFor="f-email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="f-email"
                  name="email"
                  className="form__input"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div className="form__field">
              <label className="form__label" htmlFor="f-subject">
                Subject
              </label>
              <input
                type="text"
                id="f-subject"
                name="subject"
                className="form__input"
                placeholder="Project Inquiry"
                required
              />
            </div>
            <div className="form__field">
              <label className="form__label" htmlFor="f-message">
                Message
              </label>
              <textarea
                id="f-message"
                name="message"
                className="form__textarea"
                placeholder="Tell me about your project..."
                rows={5}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="button button--primary button--full"
              disabled={sending}
            >
              {sending ? (
                'Sending...'
              ) : (
                <>
                  Send Message <i className="fa-solid fa-paper-plane"></i>
                </>
              )}
            </button>
            <div
              className="form__message"
              id="form-message"
              style={status ? { color: status.ok ? 'green' : 'red' } : undefined}
            >
              {status?.text}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
