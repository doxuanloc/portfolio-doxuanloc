import { useState } from "react";
import Button from "../../Components/Button";
import styles from "./index.module.scss";

const DATA = [
  {
    id: 1,
    time: "July 2022 - Present",
    tech: "ReactJs",
    name: "PolkaDot",
    url: "https://github.com/doxuanloc/webPolkadotCloneReactJs",
    nameProject: "Clone UI PolkaDot",
    content1:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
    content2:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
    content3:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
  },
  {
    id: 2,
    time: "April 2022 - Present",
    tech: "WordPress",
    name: "GenCapital",
    url: "https://gencapital.io/",
    nameProject: "GenCapital",
    content1:
      "Work with a variety of different languaand content management systems such as JavaScript, React",
    content2:
      "Work with a variety of different languages, platforms, frameworks, a systems such as JavaScript, React",
    content3:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
  },
  {
    id: 3,
    time: "August 2021 - Jan 2022",
    tech: "ReactJs, NodeJs",
    name: "SHOP GPS PET",
    url: "https://pet-shop-fe.vercel.app/",
    nameProject: "SHOP GPS PET",
    content1:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
    content2:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
    content3:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
  },
  {
    id: 4,
    time: "April 2022 - May 2022",
    tech: "Symfony PHP",
    name: "Buy Honda",
    url: "https://polkadot.network/",
    nameProject: "Buy Honda",
    content1:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
    content2:
      "Work with a variety of different languagest languagest languagest languagest languages, platforms, frameworks, and content management systems such as JavaScript, React",
    content3:
      "Work with a variety of different languages, platforms, frameworks,ent languages, platformsent languages, platforms and content management systems such as JavaScript, React",
  },
  {
    id: 5,
    time: "May 2022 - Present",
    tech: "ReactJs, NodeJs",
    name: "TikTok",
    url: "https://github.com/doxuanloc/webPolkadotCloneReactJs",
    nameProject: "Clone UI TikTok",
    content1:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
    content2:
      "Work with a variety of different languages, plety of different langatforms, frameworks, and content management systems such as JavaScript, React",
    content3:
      "Work with a variety of different languagety of different langety of different langes, platforms, frameworks, and content management systems such as JavaScript, React",
  },
  {
    id: 6,
    time: "May 2018 - Present",
    tech: "ReactJs",
    name: "PolkaDot",
    url: "https://polkadot.network/",
    git: "https://github.com/doxuanloc/webPolkadotCloneReactJs",
    nameProject: " Clone UI PolkaDot",
    content1:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
    content2:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
    content3:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
  },
];

function Body() {
  const toProject = () => {
    window.open("https://pet-shop-fe.vercel.app/");
  };

  const [currentTab, setCurrentTab] = useState(DATA[0].id);

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h2>Hi, my name is</h2>
        <h1>Do Xuan Loc.</h1>
        <h3>I build things for the web and love blockchain.</h3>
        <p>
          I'm a fontend and backend website developer. Researching on blockchain
          and blockchain ecosystems.
        </p>
        <Button>
          <h4>View a website</h4>
        </Button>
      </div>
      <div className={styles.about} id="about">
        <div className={styles["title-about"]}>
          <h1>
            <span style={{ color: "var(--blue)" }}>01. </span>
            About Me
          </h1>
        </div>
        <div className={styles.content}>
          <div className={styles["content-about"]}>
            <div>
              <p>
                Hello! My name is Do Xuan Loc. I studied for 2 year at the
                University of Information Technology (UIT) and I am currently
                studying in the final year of FPT BTEC College. I have the
                desire to become a back-end & front‑end developer, I am
                passionate about building excellent website that improves the
                lives of those around me.
              </p>
              <p>
                I am learning and deep learning about blockchain and love it
                very much
              </p>
              <p>
                I also recently launched a course that covers everything you
                need to build a web app with the{" "}
                <span onClick={toProject} className={styles.span}>
                  GPS Pet Shop
                </span>{" "}
                API using Node & React. Here are a few technologies I’ve been
                working with recently:
              </p>
              <p>Lorem......</p>
            </div>
            <img
              src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/2/28/1018683/Rose_Blackpink_Vogue.jpg"
              alt="s"
            ></img>
          </div>
          <div className={styles.tech}>
            <ul class="fa-solid fa-tag">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>WordPress</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SASS</li>
              <li>C++</li>
              <li>PHP</li>
              <li>SQL</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.experience} id="experience">
        <div className={styles["title-experience"]}>
          <h1>
            <span style={{ color: "var(--blue)" }}>02. </span>
            My Project
          </h1>
        </div>
        <div className={styles["content-experience"]}>
          <div>
            {DATA?.map((item) => (
              <button
                className={
                  item.id === currentTab
                    ? styles["active-btn"]
                    : styles["non-active-btn"]
                }
                key={item.id}
                onClick={() => setCurrentTab(item.id)}
              >
                <span>{item.nameProject}</span>
              </button>
            ))}
          </div>
          <div className={styles.detail}>
            <p>
              {DATA[currentTab - 1]?.tech}
              <span>
                {" "}
                <a
                  target="blank"
                  style={{ color: "var(--blue", fontSize: 24 }}
                  href={DATA[currentTab - 1]?.url}
                >{`@${DATA[currentTab - 1]?.nameProject}`}</a>
              </span>
            </p>

            <h2 style={{ color: "var(--slate)", fontWeight: "200" }}>
              {DATA[currentTab - 1]?.time}
            </h2>
            <ul
              style={{
                color: "var(--slate)",
                fontSize: 14,
                letterSpacing: 1.2,
              }}
            >
              <h4>{DATA[currentTab - 1]?.content1}</h4>
              <h4>{DATA[currentTab - 1]?.content2}</h4>
              <h4>{DATA[currentTab - 1]?.content3}</h4>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.work} id="work">
        <div className={styles["title-work"]}>
          <h1>
            <span style={{ color: "var(--blue)" }}>03. </span>
            Some Things I’ve Built
          </h1>
        </div>
        <div className={styles["content-work"]}> </div>
      </div>
      <div className={styles.contact} id="contact">
        <div className={styles["title-contact"]}>
          <h1>
            <span style={{ color: "var(--blue)" }}>04. </span>
            What’s Next?
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Body;
