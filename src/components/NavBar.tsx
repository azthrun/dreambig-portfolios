import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiZodiacLeo, mdiMenu, mdiClose } from "@mdi/js";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Header.css";
import useAnimations from "../hooks/useAnimations";

const NavBar = ({ children } : { children : React.ReactNode}) => {
    const navigate = useNavigate();
    const { navBarTitleAnimation, navBarMenuAnimation } = useAnimations();
    const [showNavPanel, setShowNavPanel] = useState<boolean>(false);

    useEffect(() => {
        const screenRotate = () => setShowNavPanel(false);
        window.addEventListener("orientationchange", screenRotate);
        return () => window.removeEventListener("orientationchange", screenRotate);
    }, []);

    const toggleNavPanelDisplay = () => setShowNavPanel(prev => !prev);

    const navigateTo = (pageName : string) => {
        navigate(`/${pageName}`);
        setShowNavPanel(false);
    }

    return (
        <>
            <header className="header">
                <motion.div className="nav-item" variants={ navBarTitleAnimation } whileHover="hover"
                    onClick={ () => navigateTo("") }>
                    <Icon path={ mdiZodiacLeo } size="20px" style={{ marginRight: "10px"}} />
                    <div>Terry Chen</div>
                </motion.div>
                <motion.div className="nav-item" variants={ navBarTitleAnimation } whileHover="hover"
                    onClick={ () => navigateTo("") }>
                    Home
                </motion.div>
                <motion.div className="nav-item" variants={ navBarTitleAnimation } whileHover="hover"
                    onClick={ () => navigateTo("showcase") }>
                    Showcases
                </motion.div>
                <motion.div className="nav-item" variants={ navBarTitleAnimation } whileHover="hover"
                    onClick={ () => navigateTo("about") }>
                    About
                </motion.div>
                <div className="icon" onClick={ toggleNavPanelDisplay }>
                    <Icon path={ mdiMenu } />
                </div>
                <AnimatePresence exitBeforeEnter>
                    {
                        showNavPanel &&
                        <div className="menu-container">
                            <motion.div variants={ navBarMenuAnimation } initial="begin" animate="enter" exit="exit">
                                <menu>
                                    <div className="nav-item" onClick={ () => navigateTo("") }>Home</div>
                                    <div className="nav-item" onClick={ () => navigateTo("showcase") }>Showcases</div>
                                    <div className="nav-item" onClick={ () => navigateTo("about") }>About</div>
                                    <div className="icon" onClick={ toggleNavPanelDisplay }>
                                        <Icon path={ mdiClose } />
                                    </div>
                                </menu>
                            </motion.div>
                        </div>
                    }
                </AnimatePresence>
            </header>
            <div>
                { children }
            </div>
        </>
    )
}

export default NavBar;