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

    const homeAvatarAnimation = {
        hover: {
            boxShadow: "0 0 2px 2px #cfe2f3, 0 0 4px 4px #ddeaf6, 0 0 5px 5px #e7f0f9",
        }
    }

    const homeProfileContactBtnAnimation = {
        hover: {
            scale: 1.1,
            cursor: "pointer",
        },
        tap: {
            scale: 0.9,
            cursor: "pointer",
        }
    }

    return {
        pageAnimation,
        navBarTitleAnimation,
        navBarMenuAnimation,
        homeAvatarAnimation,
        homeProfileContactBtnAnimation,
    };
}

export default useAnimations;