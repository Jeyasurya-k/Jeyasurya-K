import styles from "./HeroStyles.module.css";
import HeroImg from "../../assets/hero-img.png";
import cv from "../../assets/JEYASURYA K - FULL STACK DEVELOPER.pdf";
import { useTheme } from "../../common/ThemeContext";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedInLight from "../../assets/linkedin-light.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import gitHubLight from "../../assets/github-light.svg";
import gitHubDark from "../../assets/github-dark.svg";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  // Dynamically set icons based on theme
  const themeIcon = theme === "light" ? sun : moon;
  const linkedInIcon = theme === "light" ? linkedInLight : linkedInDark;
  const gitHubIcon = theme === "light" ? gitHubLight : gitHubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={HeroImg} alt="profile picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Jeyasurya K</h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/jeyasurya-k-8a462622a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInIcon} alt="LinkedIn Icon" />
          </a>
          <a
            href="https://github.com/Jeyasurya-k"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitHubIcon} alt="GitHub Icon" />
          </a>
        </span>
        <p className={styles.description}>
          passionate about building dynamic, scalable, and user-friendly web
          applications.
        </p>
        <a href={cv} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
