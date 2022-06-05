const useAnimations = () => {
    const pageAnimation = {
        begin: {
            rotateY: 180,
            opacity: 0,
        },
        enter: {
            rotateY: [180, 150, 120, 95, 85, 60, 30, 0],
            opacity: [0, 0, 0, 0, 1, 1, 1, 1],
            originX: "50%",
        },
        exit: {
            rotateY: [0, -30, -60, -85, -95, -120, -150, -180],
            opacity: [1, 1, 1, 1, 0, 0, 0, 0],
            originX: "50%",
        }
    }

    const navBarTitleAnimation = {
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
        exit: {
            opacity: 0,
        },
    }

    return {
        pageAnimation,
        navBarTitleAnimation,
        navBarMenuAnimation,
    };
}

export default useAnimations;