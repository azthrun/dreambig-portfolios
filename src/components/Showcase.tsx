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
    const [showButton, setShowButton] = useState(true);

    useEffect(() => {
        setProjects(getHighlighted());
    }, []);

    const showAllProjects = () => {
        setProjects(getAll());
        setShowButton(false);
    }

    return (
        <div id="showcase">
            <h1 className="showcases-header">Showcases</h1>
            <div className="showcases">
                {
                    projects.map(project => <ProjectCard project={ project } key={ project.id } />)
                }
            </div>
            {
                showButton &&
                <motion.button className="view-more-button" variants={ defaultButtonAnimation }
                    whileHover="hover" whileTap="tap" onClick={ showAllProjects }>
                    View More
                </motion.button>
            }
        </div>
    );
}

export default Showcase;