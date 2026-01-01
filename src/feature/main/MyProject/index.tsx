import {FC, useRef} from "react";
import {SectionWrapper} from "../SectionWrapper";
import {ProjectItem} from "./ProjectItem";
import {projectData} from "./data";
import styles from "./myProject.module.scss";
import {useGSAP} from "@gsap/react";
import {timelineScroll} from "libs/gsap";
import {useTranslation} from "react-i18next";
import {isEvenNumber} from "common/util";

const MyProject: FC = () => {
	const {t} = useTranslation();
	const containerRef = useRef<HTMLDivElement | null>(null);
	const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

	const setRef = (index: number) => (element: HTMLDivElement | null) => {
		projectRefs.current[index] = element;
	};

	useGSAP(() => {
		const timeline = timelineScroll(containerRef.current);
		applyProjectTween(timeline);
	});

	const applyProjectTween = (timeline: GSAPTimeline) => {
		projectRefs.current.forEach((element, index) => {
			if (element) {
				timeline.fromTo(
					element,
					{
						opacity: 0,
						x: isEvenNumber(index) ? 100 : -100,
					},
					{
						opacity: 1,
						x: 0,
						duration: 0.8,
					}
				);
			}
		});
	};

	const data = projectData(t);

	return (
		<SectionWrapper
			sectionId="myProject"
			title={t("myProject.title")}
			className={styles.myProject}
		>
			<div ref={containerRef} className={styles["project-container"]}>
				{data.map((project, index) => {
					const setElement = setRef(index);
					return (
						<ProjectItem
							key={index}
							setRef={setElement}
							project={project}
							isEven={isEvenNumber(index)}
						/>
					);
				})}
			</div>
		</SectionWrapper>
	);
};

export default MyProject;

