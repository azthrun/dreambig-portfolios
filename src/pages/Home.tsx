import { motion } from "framer-motion";
import useAnimations from "../hooks/useAnimations";
import "../styles/Home.css";
import Showcase from "./Showcase";

const Home = () => {
    const { pageAnimation, homeAvatarAnimation, defaultButtonAnimation } = useAnimations();
    
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
                            whileHover="hover" whileTap="tap">
                            Get in touch
                        </motion.button>
                    </div>
                </div>
            </div>
            <Showcase useAsPage={ false } />
        </motion.div>
    );
}

export default Home;