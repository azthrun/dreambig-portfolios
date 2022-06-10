import Icon from "@mdi/react";
import { mdiHomeOutline, mdiMenu, mdiClose } from "@mdi/js";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";

import "../styles/NavBar.css";
import useAnimations from "../hooks/useAnimations";

interface Props {
    scrollToTop: () => void;
    toggleNavPanelDisplay: () => void;
    showNavPanel: boolean;
}

const NavBar = ({ scrollToTop, toggleNavPanelDisplay, showNavPanel } : Props) => {
    const { navBarTitleAnimation, navBarMenuAnimation } = useAnimations();

    return (
        <header className="header">
            <div className="nav-bar">
                <motion.div className="nav-item" variants={ navBarTitleAnimation } whileHover="hover"
                    onClick={ scrollToTop }>
                    <Icon path={ mdiHomeOutline } size="20px" style={{ marginRight: "10px"}} />
                    <div>Home</div>
                </motion.div>
                {
                    !showNavPanel &&
                    <>
                        <Link to="about" spy={true} smooth={true} offset={-80} duration={500} className="nav-item">
                            <motion.div variants={ navBarTitleAnimation } whileHover="hover">
                                About Me
                            </motion.div>
                        </Link>
                        <Link to="showcase" spy={true} smooth={true} offset={-80} duration={500} className="nav-item">
                            <motion.div variants={ navBarTitleAnimation } whileHover="hover">
                                    Showcases
                            </motion.div>
                        </Link>
                        <Link to="contacts" spy={true} smooth={true} offset={0} duration={500} className="nav-item">
                            <motion.div variants={ navBarTitleAnimation } whileHover="hover">
                                Contacts
                            </motion.div>
                        </Link>
                    </>
                }
                <div className="icon" onClick={ toggleNavPanelDisplay }>
                    <Icon path={ mdiMenu } />
                </div>
            </div>
            <AnimatePresence>
                {
                    showNavPanel &&
                    <div className="menu-container">
                        <motion.div variants={ navBarMenuAnimation } initial="begin" animate="enter" exit="exit">
                            <menu>
                                <div className="nav-item" onClick={ scrollToTop }>Home</div>
                                <Link to="about" spy={ true } smooth={ true } offset={ -80 } 
                                    duration={ 500 } className="nav-item">
                                    About Me
                                </Link>
                                <Link to="showcase" spy={ true } smooth={ true } offset={ -80 } 
                                    duration={ 500 } className="nav-item">
                                    Showcases
                                </Link>
                                <Link to="contacts" spy={ true } smooth={ true } offset={ -80 } 
                                    duration={ 500 } className="nav-item">
                                    Contacts
                                </Link>
                                <div className="icon" onClick={ toggleNavPanelDisplay }>
                                    <Icon path={ mdiClose } />
                                </div>
                            </menu>
                        </motion.div>
                    </div>
                }
            </AnimatePresence>
        </header>
    )
}

export default NavBar;