import styles from './ProjectsStyles.module.css';
import HouseFull from '../../assets/HouseFull logo.svg';
import Movielander from '../../assets/Movielander logo.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={HouseFull}
          link="https://github.com/Jeyasurya-k/Ticket-Booking"
          h3="HouseFull"
          p="Movie Ticket Booking"
        />
        <ProjectCard
          src={Movielander}
          link="https://github.com/Jeyasurya-k/Movielander"
          h3="Movielander"
          p="Movie Details"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;