import { motion, AnimatePresence } from "framer-motion";
import useAnimations from "../hooks/useAnimations";

const About = () => {
    const { pageAnimation } = useAnimations();
    
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div variants={ pageAnimation } initial="begin" animate="enter" exit="exit">
                <div>About</div>
            </motion.div>
        </AnimatePresence>
    );
}

export default About;