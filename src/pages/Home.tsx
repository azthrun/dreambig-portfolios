import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Events, animateScroll, Link } from "react-scroll";
import useAnimations from "../hooks/useAnimations";

import "../styles/Home.css";
import Footer from "../components/Footer";
import Showcase from "../components/Showcase";
import About from "../components/About";
import NavBar from "../components/NavBar";

const Home = () => {
    const { pageAnimation, homeAvatarAnimation, defaultButtonAnimation } = useAnimations();
    const [showNavPanel, setShowNavPanel] = useState<boolean>(false);

    useEffect(() => {
        Events.scrollEvent.register("begin", () => { 
            setShowNavPanel(false);
        });
        Events.scrollEvent.register("end", () => { });
        
        return () => {
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
        };
    }, []);

    const toggleNavPanelDisplay = () => setShowNavPanel(prev => !prev);
    
    return (
        <motion.div variants={ pageAnimation } initial="begin" animate="enter" exit="exit">
            <NavBar scrollToTop={ animateScroll.scrollToTop } 
                toggleNavPanelDisplay={ toggleNavPanelDisplay}
                showNavPanel={ showNavPanel } />

            <div className="home-header">
                <div>
                    <div className="avatar" title="profile">
                        <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
                            <motion.img src="img/profile.png" alt="profile image" 
                                variants={ homeAvatarAnimation } whileHover="hover" />
                        </Link>
                    </div>
                    <div>
                        <div className="name">Terry Chen</div>
                        <div className="title">Software Engineer</div>
                        <Link to="contacts" spy={true} smooth={true} offset={-80} duration={500}>
                            <motion.button variants={ defaultButtonAnimation }
                                whileHover="hover" whileTap="tap" className="contact-btn">
                                Get in touch
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className="home-content">
                <Showcase />
                <About />
            </div>

            <Footer />
        </motion.div>
    );
}

export default Home;