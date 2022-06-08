import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "@mdi/react";
import { mdiBallotOutline } from "@mdi/js";
import useAnimations from "../hooks/useAnimations";
import "../styles/Showcase.css";
import { getAll, getHighlighted } from "../data/Projects";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

const Showcase = ({ useAsPage } : { useAsPage : boolean }) => {
    const navigate = useNavigate();
    const { pageAnimation, defaultButtonAnimation } = useAnimations();
    const projects = useAsPage ? getAll() : getHighlighted();
    
    const gotoShowcasePage = () => {
        navigate("/showcase");
    }

    return (
        <motion.div variants={ pageAnimation } initial="begin" animate="enter" exit="exit">
            {
                useAsPage &&
                <div className="showcases-banner">
                    <h1 className="showcases-header">Showcases</h1>
                </div>
            }
            { 
                !useAsPage && 
                <div className="showcases-header">
                    <h1>Showcases</h1>
                    <motion.div variants={ defaultButtonAnimation } whileHover="hover"  whileTap="tap"
                        onClick={ gotoShowcasePage }>
                        <div className="view-all-text">view all</div>
                        <div className="view-all-icon"><Icon path={ mdiBallotOutline } size="30px" /></div>
                    </motion.div>
                </div>
            }
            
            <div className="showcases">
                {
                    useAsPage && <div style={{ marginTop: "15px" }}></div>
                }
                {
                    projects.map(project => <ProjectCard project={ project } key={ project.id } />)
                }
            </div>

            { useAsPage && <Footer footerRef={ null } /> }
        </motion.div>
    );
}

export default Showcase;