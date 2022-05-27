import ProjectImage from "../components/project/image";
import Project from "../components/project/project";
import styles from "../styles/pages/Projects.module.css";
import FootAPI from "../public/FootAPI.png";
import urlxcf from "../public/urlxcf.png";
import CD from "../public/CloneDirecte.png";
import { Heading } from "@chakra-ui/react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faPython,
  faReact,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  return (
    <>
      <Head>
        <title>hugo | Projects</title>
      </Head>
      <div className={styles.projects}>
        <Heading className="headingTitle" as="h1">
          Projects
        </Heading>
        <div className={styles.container}>
          <ProjectImage
            className={styles.urlxcf}
            href="https://urlx.cf"
            name="urlx.cf"
            description="🔗 A simple URL shortener."
            src={urlxcf}
            width={366}
            height={200}
            icon={
              <div className={styles.multipleIcons}>
                <FontAwesomeIcon icon={faJs} />
                <FontAwesomeIcon icon={faHtml5} />
                <FontAwesomeIcon icon={faCss3} />
              </div>
            }
          />
          <ProjectImage
            className={styles.clonedirecte}
            href="https://github.com/CloneDirecte"
            name="CloneDirecte"
            description="Une alternative à EcoleDirecte."
            src={CD}
            icon={<FontAwesomeIcon icon={faJs} />}
          />
          <ProjectImage
            className={styles.footapi}
            href="https://github.com/FootAPI"
            name="FootAPI"
            description="⚽️ A simple API for Football"
            src={FootAPI}
            icon={<FontAwesomeIcon icon={faJs} />}
          />
          <Project
            className={`${styles.fullscreenSpotify}  ${styles.textProjects}`}
            href="https://spotify.hugo.rest"
            name="Fullscreen Spotify"
            description="🎧 A website that simply shows what you’re listening to using Last.fm"
            icon={
              <div className={styles.multipleIcons}>
                <FontAwesomeIcon icon={faJs} />
                <FontAwesomeIcon icon={faHtml5} />
                <FontAwesomeIcon icon={faCss3} />
              </div>
            }
          />
          <Project
            className={`${styles.githubChecker} ${styles.textProjects}`}
            href="https://github.com/wheredidhugo/github-username-checker"
            name="GitHub Username Checker"
            description="🧾 Checks for random usernames with a define number of letters on GitHub"
            icon={<FontAwesomeIcon icon={faPython} />}
          />
          <Project
            className={`${styles.discordLastFm} ${styles.textProjects}`}
            href="https://github.com/wheredidhugo/discord-last.fm"
            name="Discord Last.fm"
            description="🎵 A simple Discord RPC for Last.fm"
            icon={<FontAwesomeIcon icon={faJs} />}
          />
          <Project
            className={`${styles.audioRussianRoulette}  ${styles.textProjects}`}
            href="https://github.com/wheredidhugo/audio-russian-roulette"
            name="Audio Russian Roulette"
            description="🔫 Turn your volume up and wait for a meme/funny song to play."
            icon={
              <div className={styles.multipleIcons}>
                <FontAwesomeIcon icon={faJs} />
                <FontAwesomeIcon icon={faHtml5} />
                <FontAwesomeIcon icon={faCss3} />
              </div>
            }
          />
        </div>
      </div>
    </>
  );
}
