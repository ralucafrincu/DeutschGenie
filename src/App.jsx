import React from "react";
import avatar from "./assets/new-avatar.png";
import topLogo from "./assets/top-logo.svg";
import convoIcon from "./assets/convo-icon.svg";
import learningIcon from "./assets/learning-icon.svg";
import funGermanIcon from "./assets/fun-german-icon.svg";
import phoneScreen1 from "./assets/phone-screen-1-new.svg";
import phoneScreen2 from "./assets/phone-screen-2.svg";
import phoneScreen3 from "./assets/phone-screen-3.svg";

const features = [
  {
    icon: convoIcon,
    title: "Immersive Conversations",
    text: "Engage in life-like German conversations and improve your skills naturally.",
  },
  {
    icon: learningIcon,
    title: "Personalised Learning",
    text: "Receive tailored exercises and personalised feedback based on your progress.",
  },
  {
    icon: funGermanIcon,
    title: "German in a Fun Way",
    text: "Practice German easily and learn grammar and vocabulary in a playful way.",
  },
];

const struggles = [
  {
    left: "I keep studying German, but I don't know how to use it actively.",
    right: "You immediately apply grammar and vocabulary in real text-based conversations.",
  },
  {
    left: "Many online German courses follow the same structure for every learner.",
    right: "Our app gives you a personalised experience through adapted feedback.",
  },
  {
    left: "Long explanations make me lose interest.",
    right: "We combine the real feeling of a German conversation with fun game-like tasks.",
  },
];

const reviews = [
  {
    name: "Danielle K.",
    text: "I was always afraid of making mistakes in German. Chatting with the AI tutor feels stress-free and supportive. It's helped me build confidence step by step.",
  },
  {
    name: "Christina W.",
    text: "I've tried several apps to learn German, but this one feels different. The chat makes practicing much more natural and the small exercises in between conversations really help me remember new vocabulary.",
  },
  {
    name: "Markus T.",
    text: "Best German app! It fits perfectly into my daily routine. I can practice during breakfast, while conversations feel realistic and engaging.",
  },
];

function Logo() {
  return (
    <div className="logo">
      <img className="logo-image" src={topLogo} alt="DeutschGenie" />
    </div>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <article className="feature-card">
      <img
        className="feature-icon"
        src={icon}
        alt={`${title} icon`}
        loading="lazy"
        decoding="async"
      />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function ChatPhone({ variant }) {
  const screens = {
    one: {
      src: phoneScreen1,
      alt: "Phone screen showing a German conversation lesson inside the app",
    },
    two: {
      src: phoneScreen2,
      alt: "Phone screen showing personalised German learning exercises inside the app",
    },
    three: {
      src: phoneScreen3,
      alt: "Phone screen showing a fun German vocabulary activity inside the app",
    },
  };

  return (
    <div className={`phone phone-${variant}`}>
      <div className="phone-notch" />
      <div className="phone-screen">
        <img
          className="phone-screen-image"
          src={screens[variant].src}
          alt={screens[variant].alt}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="page-shell" id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="topbar">
        <Logo />
        <nav className="nav-links" aria-label="Primary">
          <a href="#features">Features</a>
          <a href="#practice">How it works</a>
          <a href="#testimonials">Reviews</a>
        </nav>
        <a className="pill-button pill-button-light" href="/download.html">
          Download the app
        </a>
      </header>

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">Learn German online by Chatting with an AI Virtual Teacher</h1>
            <div className="scribble" aria-hidden="true" />
            <p>
              Practice real German conversations online through text, complete fun
              vocabulary exercises, and improve your grammar step by step in an
              engaging way.
            </p>
            <a className="pill-button pill-button-green pill-button-hero" href="/download.html">
              Start learning german
            </a>
          </div>

          <figure className="hero-visual">
            <img
              className="teacher-avatar"
              src={avatar}
              alt="Illustration of the DeutschGenie AI virtual German teacher"
              decoding="async"
            />
          </figure>
        </section>

        <section className="section section-soft" id="features" aria-labelledby="features-title">
          <h2 id="features-title">Improve your german today</h2>
          <p className="section-lead">
            Learn German online with interactive AI chat and exercises. Practice
            German through engaging text-based conversations and build confidence
            every day.
          </p>
          <div className="feature-grid" role="list">
            {features.map((feature) => (
              <div key={feature.title} role="listitem">
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
          <a className="pill-button pill-button-green" href="/download.html">
            Practice german now
          </a>
        </section>

        <section className="section" id="practice" aria-labelledby="practice-title">
          <h2 id="practice-title">Why our app works</h2>
          <div className="scribble scribble-center" aria-hidden="true" />
          <div className="comparison-headings">
            <span>Your problems...</span>
            <span>Our solution</span>
          </div>

          <div className="comparison-grid" role="list">
            {struggles.map((row, index) => (
              <article className="comparison-row" key={row.left} role="listitem">
                <div className="problem-box">{row.left}</div>
                <ChatPhone variant={index === 0 ? "one" : index === 1 ? "two" : "three"} />
                <div className="solution-box">{row.right}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section testimonials" id="testimonials" aria-labelledby="testimonials-title">
          <h2 id="testimonials-title">What do our users say?</h2>
          <p className="section-lead">
            Some reviews from people who learned German with our app
          </p>
          <div className="review-grid" role="list">
            {reviews.map((review) => (
              <article className="review-card" key={review.name} role="listitem">
                <h3>{review.name}</h3>
                <blockquote>
                  <p>{review.text}</p>
                </blockquote>
                <cite>{review.name}</cite>
              </article>
            ))}
          </div>
          <a id="download" className="pill-button pill-button-green" href="/download.html">
            Download the app
          </a>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="footer-brand">
          <Logo />
          <p className="footer-tagline">
            Learn German online with AI-guided conversations, practical exercises,
            and a supportive virtual teacher.
          </p>
          <a className="footer-cta" href="/download.html">
            Download DeutschGenie
          </a>
        </div>

        <nav className="footer-column" aria-label="Footer navigation">
          <h3>Explore</h3>
          <a href="#top">Home</a>
          <a href="#features">Features</a>
          <a href="#practice">How it works</a>
          <a href="#testimonials">Reviews</a>
          <a href="/download.html">Download the app</a>
        </nav>

        <div className="footer-column footer-meta" id="about">
          <h3>Contact</h3>
          <a href="#contact">Get in touch</a>
          <span>Designed for modern German learners</span>
          <span>AI German tutor landing page</span>
        </div>

        <div className="footer-bottom">
          <p className="copyright">©2025 DeutschGenie. All rights reserved.</p>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
