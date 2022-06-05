import { motion, AnimatePresence } from "framer-motion";
import useAnimations from "../hooks/useAnimations";

const Showcase = () => {
    const { pageAnimation } = useAnimations();
    
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div variants={ pageAnimation } initial="begin" animate="enter" exit="exit">
                <div>Showcase</div>
            </motion.div>
        </AnimatePresence>
    );
}

export default Showcase;