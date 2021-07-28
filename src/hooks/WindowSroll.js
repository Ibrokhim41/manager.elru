import { useState, useEffect } from "react";

function getWindowDimensions() {
    const { scrollY: height } = window;
    return {
        height,
    };
}

export function useWindowScrollDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("scroll", handleResize);
        return () => window.removeEventListener("scroll", handleResize);
    }, []);

    return windowDimensions.height;
}
