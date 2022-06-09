import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import useAnimations from "../hooks/useAnimations";
import "../styles/Home.css";
import Showcase from "./Showcase";

const Home = () => {
    const { pageAnimation, homeAvatarAnimation, defaultButtonAnimation } = useAnimations();
    const footerRef = useRef<HTMLDivElement>();
    const navigate = useNavigate();

    const scrollToFooter = () => footerRef.current?.scrollIntoView();

    const gotoAboutPage = () => navigate("/about");
    
    return (
        <motion.div variants={ pageAnimation } initial="begin" animate="enter" exit="exit">
            <div className="home-header">
                <div>
                    <div className="avatar" onClick={ gotoAboutPage } title="profile">
                        <motion.img src="img/profile.png" alt="profile image" 
                            variants={ homeAvatarAnimation } whileHover="hover" />
                    </div>
                    <div>
                        <div className="name">Terry Chen</div>
                        <div className="title">Software Engineer</div>
                        <motion.button className="contact-btn" variants={ defaultButtonAnimation }
                            whileHover="hover" whileTap="tap"
                            onClick={ scrollToFooter }>
                            Get in touch
                        </motion.button>
                    </div>
                </div>
            </div>
            
            <Showcase useAsPage={ false } />

            <Footer footerRef={ footerRef as React.RefObject<HTMLDivElement> } />
        </motion.div>
    );
}

export default Home;