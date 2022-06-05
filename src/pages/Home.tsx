import { motion } from "framer-motion";
import useAnimations from "../hooks/useAnimations";
import "../styles/Home.css";

const Home = () => {
    const { pageAnimation, homeAvatarAnimation, homeProfileContactBtnAnimation } = useAnimations();
    
    return (
        <motion.div variants={ pageAnimation } initial="begin" animate="enter" exit="exit">
            <div className="main-content">
                <div className="home-header">
                    <div className="avatar">
                        <motion.img src="img/profile.png" alt="profile image" 
                            variants={ homeAvatarAnimation } whileHover="hover" />
                    </div>
                    <div >
                        <div className="name">Terry Chen</div>
                        <div className="title">Software Engineer</div>
                        <motion.button className="contact-btn" variants={ homeProfileContactBtnAnimation }
                            whileHover="hover" whileTap="tap">
                            Get in touch
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Home;