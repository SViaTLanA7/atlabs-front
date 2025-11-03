"use client";

import { useEffect } from "react";

/**
 * Лёгкий параллакс для элементов с атрибутом data-parallax="коэффициент"
 * и плавный scroll-behavior для якорей.
 */
export default function ScrollFX() {
    useEffect(() => {
        // smooth scroll для якорей
        if (typeof document !== "undefined") {
            document.documentElement.style.scrollBehavior = "smooth";
        }

        // parallax
        let raf = 0;
        const els = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));

        const loop = () => {
            const y = window.scrollY || 0;
            els.forEach(el => {
                const k = Number(el.dataset.parallax || "0.12"); // дефолт
                // translate по оси Y, лёгкое затухание
                el.style.transform = `translate3d(0, ${y * k}px, 0)`;
            });
            raf = requestAnimationFrame(loop);
        };

        raf = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(raf);
    }, []);

    return null;
}
