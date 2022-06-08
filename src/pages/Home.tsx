import { motion } from "framer-motion";
import React, { LegacyRef, useRef } from "react";
import Footer from "../components/Footer";
import useAnimations from "../hooks/useAnimations";
import "../styles/Home.css";
import Showcase from "./Showcase";

const Home = () => {
    const { pageAnimation, homeAvatarAnimation, defaultButtonAnimation } = useAnimations();
    const footerRef = useRef<HTMLDivElement>();

    const scrollToFooter = () => footerRef.current?.scrollIntoView();
    
    return (
        <motion.div variants={ pageAnimation } initial="begin" animate="enter" exit="exit">
            <div className="home-header">
                <div>
                    <div className="avatar">
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