import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const ScrollManager = (props) => {

    const { section, onSectionChange } = props;

    const data = useScroll();
    const lastScroll = useRef(0);
    const isAnimating = useRef(false);

    data.fill.classList.add("top-0");
    data.fill.classList.add("absolute");

    console.log("current section: ", section);

    useEffect(() => {
        gsap.to(data.el, {
            duration: 1,
            scrollTop: section * data.el.clientHeight,
            onStart: () => {
                isAnimating.current = true;
            },
            onComplete: () => {
                isAnimating.current = false;
            }
        })
    }, [section]);

    useFrame(() => {
        if (isAnimating.current) {
            lastScroll.current = data.scroll.current;
            return;
        }

        const currentSection = Math.floor(data.scroll.current * data.pages);
        if (data.scroll.current > lastScroll.current && currentSection === 0) {
            onSectionChange(1);
        }
        if (data.scroll.current < lastScroll.current && data.scroll.current < 1 / (data.pages -1)) {
            onSectionChange(0);
        }

        lastScroll.current = data.scroll.current;
    });

    return null;
}