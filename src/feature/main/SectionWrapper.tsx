import {useGSAP} from "@gsap/react";
import classNames from "classnames";
import {timelineScroll} from "libs/gsap";
import {FC, ReactNode, useRef} from "react";

type SectionWrapperProps = {
  sectionId: string;
  className?: string;
  title: string;
  children?: ReactNode;
};

export const SectionWrapper: FC<SectionWrapperProps> = ({
  sectionId,
  className,
  title,
  children,
}) => {
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!titleRef.current) return;
    const titleElement = titleRef.current;
    const questionBox = titleElement.querySelector(".question-box");
    const titleText = titleElement.querySelector(".title-text");
    const questionMark = titleElement.querySelector(".question-mark");
    const timeline = timelineScroll(titleElement);
    applyQuestionBoxTween(timeline, questionBox);
    applyTitleTextTween(timeline, titleText);
    applyQuestionMarkTween(timeline, questionMark);
  });

  const applyQuestionBoxTween = (
    timeline: GSAPTimeline,
    target: GSAPTweenTarget
  ) => {
    timeline.fromTo(
      target,
      {
        scale: 0.8,
        opacity: 0,
        y: 20,
      },
      { scale: 1, opacity: 1, y: 0, duration: 0.6 }
    );
  };

  const applyTitleTextTween = (
    timeline: GSAPTimeline,
    target: GSAPTweenTarget
  ) => {
    timeline.fromTo(
      target,
      {
        opacity: 0,
        y: 30,
      },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
    );
  };

  const applyQuestionMarkTween = (
    timeline: GSAPTimeline,
    target: GSAPTweenTarget
  ) => {
    timeline.fromTo(
      target,
      {
        scale: 0,
        rotation: -180,
        opacity: 0,
      },
      { scale: 1, rotation: 0, opacity: 1, duration: 0.6, delay: 0.1 }
    );
  };

  return (
    <div id={sectionId} className={classNames("section", className)}>
      <div ref={titleRef} className="title">
        <div className="question-box">
          <h3 className="title-text">{title}</h3>
        </div>
      </div>
      {children}
    </div>
  );
};
