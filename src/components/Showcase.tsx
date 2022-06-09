import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Icon from "@mdi/react";
import { mdiBallotOutline } from "@mdi/js";
import useAnimations from "../hooks/useAnimations";
import "../styles/Showcase.css";
import Project, { getAll, getHighlighted } from "../data/Projects";
import ProjectCard from "./ProjectCard";

const Showcase = () => {
    const { defaultButtonAnimation } = useAnimations();
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        setProjects(getHighlighted());
    }, []);

    const showAllProjects = () => {
        setProjects(getAll());
    }

    return (
        <div id="showcase">
            <div className="showcases-header">
                <h1>Showcases</h1>
                <motion.div variants={ defaultButtonAnimation } whileHover="hover"  whileTap="tap"
                    onClick={ showAllProjects }>
                    <div className="view-all-text">view all</div>
                    <div className="view-all-icon"><Icon path={ mdiBallotOutline } size="30px" /></div>
                </motion.div>
            </div>
            
            <div className="showcases">
                {
                    projects.map(project => <ProjectCard project={ project } key={ project.id } />)
                }
            </div>
        </div>
    );
}

export default Showcase;