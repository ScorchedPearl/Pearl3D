import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { 
  SiNextdotjs, 
  SiRedis, 
  SiApollographql, 
  SiPostgresql, 
  SiPrisma, 
  SiReactquery, 
  SiReact,
  SiMongodb,
  SiNodedotjs, 
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiCss3,
  SiFramer,
  SiThreedotjs
} from "react-icons/si";
import { FaPlug,FaCodeBranch,FaPlayCircle,FaCloud } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { useTheme } from "next-themes";
const items = [
  {
    id: 1,
    img: "assets/v2.jpg",
    title: "Social Media Project",
    desc: "PostPearl is a sleek platform built for connecting users and sharing content effortlessly. Powered by modern technologies like Next.js, GraphQL, and Redis, it offers features like personalized profiles, posts, and real-time updates for an engaging user experience.",
    icons: [SiNextdotjs,SiRedis, SiApollographql, SiPostgresql,SiReactquery, SiPrisma,FaCloud,SiNodedotjs,SiExpress,SiTypescript,SiTailwindcss], 
    link: "https://github.com/ScorchedPearl/PearlPost",
  },
  {
    id: 2,
    img: "assets/v4.jpg",
    title: "MetaVerse Website(In Progress)",
    desc: "PearlVerse combines Redis for fast data storage, WebSockets for real-time communication, TurboPack for optimized performance, and Three.js for immersive 3D visuals. This robust tech stack ensures seamless interactivity, stunning graphics, and low-latency experiences, creating a dynamic virtual environment for users to explore, connect, and engage effortlessly in real time.",
    icons: [SiThreedotjs, FaPlug, FaCodeBranch,SiPostgresql,SiApollographql,SiPrisma,SiRedis,SiReactquery,SiNodedotjs,SiExpress,SiTypescript,SiTailwindcss],
    link: "https://github.com/ScorchedPearl/PearlVerse",
  },
  {
    id: 3,
    img: "assets/v1.jpg",
    title: "Service Website(Backend Soon)",
    desc: "We built ServiceScribe using React.js during an out-of-context design hackathon in my fresher year. It was an exciting challenge that pushed me to innovate and create a functional, user-centric platform under tight time constraints. The project showcases my early proficiency in responsive design and modern web development.",
    icons: [SiReact,SiMongodb,SiNodedotjs, SiExpress,SiJavascript,SiCss3], 
    link: "https://github.com/ScorchedPearl/OOC-1stYear",
  },
  {
    id: 4,
    img: "assets/v3.jpg",
    title: "Animated Portfolio Website",
    desc: "Pearl3D leverages Three.js for captivating 3D visuals, GSAP for smooth animations, Framer Motion for dynamic transitions, and Next.js for optimized performance and seamless navigation. This powerful combination creates a visually stunning and highly interactive experience, showcasing your work with modern, engaging design and fluid, responsive user interactions.",
    icons: [SiThreedotjs, SiNextdotjs,AiOutlineMail,SiJavascript,
      SiTailwindcss,SiFramer,FaPlayCircle], 
    link: "https://github.com/ScorchedPearl/Pearl3D",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};
const ListItem = ({ item }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <div className="icons" style={{ display: "flex", gap: "10px" }}>
          {item.icons.map((Icon, index) => (
            <span key={index}><Icon className="text-3xl text-primary"/></span>
          ))}
        </div>
        <motion.a variants={textVariants} href={item.link}>
          <button className="bg-primary text-primary-foreground">View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });
  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );
  const {theme}=useTheme();
  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          href=""
          style={{ position: "absolute", top: 12, left: 15 }}
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke={theme==='dark'?"white":"black"}
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke={theme==='dark'?"white":"black"}
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>
    </div>
  );
};

export default Portfolio;
