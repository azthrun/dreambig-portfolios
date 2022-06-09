import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiHomeOutline, mdiMenu, mdiClose } from "@mdi/js";
import { motion } from "framer-motion";
import "../styles/NavBar.css";
import useAnimations from "../hooks/useAnimations";

const NavBar = () => {
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
                    <Icon path={ mdiHomeOutline } size="20px" style={{ marginRight: "10px"}} />
                    <div>Home</div>
                </motion.div>
                {
                    !showNavPanel &&
                    <>
                        <motion.div className="nav-item" variants={ navBarTitleAnimation } whileHover="hover"
                            onClick={ () => navigateTo("showcase") }>
                            Showcases
                        </motion.div>
                        <motion.div className="nav-item" variants={ navBarTitleAnimation } whileHover="hover"
                            onClick={ () => navigateTo("about") }>
                            About
                        </motion.div>
                    </>
                }
                <div className="icon" onClick={ toggleNavPanelDisplay }>
                    <Icon path={ mdiMenu } />
                </div>
                {
                    showNavPanel &&
                    <div className="menu-container">
                        <motion.div variants={ navBarMenuAnimation } initial="begin" animate="enter">
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
            </header>
            <Outlet />
        </>
    )
}

export default NavBar;