const useAnimations = () => {
    const pageAnimation = {
        begin: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
            transition: { ease: 'easeInOut', delay: 0.3, duration: 0.5, },
        },
        exit: {
            opacity: 0,
            transition: { ease: 'easeInOut', duration: 0.5, },
        }
    }

    const navBarTitleAnimation = {
        hoverHome: {
            scale: 1.1,
        },
        hover: {
            color: "#ffcc99",
            x: [0, -5, 0, -7, 0, -5, 0],
            transition: { duration: 0.5, },
        },
    }

    const navBarMenuAnimation = {
        begin: {
            x: "100vw",
        },
        enter: {
            x: 0,
        },
    }

    return {
        pageAnimation,
        navBarTitleAnimation,
        navBarMenuAnimation,
    };
}

export default useAnimations;