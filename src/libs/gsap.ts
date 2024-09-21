import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

type DOMTarget = Element | string | null | Window | ArrayLike<Element | string | Window | null>

export const timelineScroll = (
  target: DOMTarget
): gsap.core.Timeline => 
  gsap.timeline({
    scrollTrigger: {
      trigger: target,
      start: "top 80%",
      end: "top: 20%",
      toggleActions: "play none none reverse",
    },
  });
