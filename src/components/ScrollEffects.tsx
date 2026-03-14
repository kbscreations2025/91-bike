"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    // Particles
    const container = document.getElementById("heroParticles");
    if (container) {
      for (let i = 0; i < 20; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        p.style.left = `${Math.random() * 100}%`;
        p.style.width = `${Math.random() * 6 + 2}px`;
        p.style.height = p.style.width;
        p.style.animationDuration = `${Math.random() * 15 + 10}s`;
        p.style.animationDelay = `${Math.random() * 10}s`;
        container.appendChild(p);
      }
    }

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up, .section-reveal").forEach((el) => {
      observer.observe(el);
    });

    // Scroll to top button
    const handleScroll = () => {
      const btn = document.getElementById("scrollTop");
      if (btn) {
        if (window.scrollY > 400) {
          btn.classList.add("visible");
        } else {
          btn.classList.remove("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
