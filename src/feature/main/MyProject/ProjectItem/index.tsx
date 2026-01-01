import {FC, ReactNode} from "react";
import styles from "./projectItem.module.scss";
import classNames from "classnames";
import {useTranslation} from "react-i18next";

type ProjectItemProps = {
	setRef: (element: HTMLDivElement | null) => void;
	project: {
		image: string;
		title: string;
		description: ReactNode;
		technologies?: string[];
		link?: string;
	};
	isEven: boolean;
};

export const ProjectItem: FC<ProjectItemProps> = ({
	setRef,
	project,
	isEven,
}) => {
	const {t} = useTranslation();
	
	return (
		<div
			ref={setRef}
			className={classNames(styles["project-item"], {
				[styles["project-item--reverse"]]: isEven,
			})}
		>
			<div className={styles["project-image"]}>
				<img src={project.image} alt={project.title} />
			</div>
			<div className={styles["project-content"]}>
				<h3 className={styles["project-title"]}>{project.title}</h3>
				<div className={styles["project-description"]}>
					{project.description}
				</div>
				{project.technologies && project.technologies.length > 0 && (
					<div className={styles["project-technologies"]}>
						{project.technologies.map((tech, index) => (
							<img
								key={index}
								src={tech}
								alt=""
								height={30}
								className={styles["technology-icon"]}
							/>
						))}
					</div>
				)}
				{project.link && (
					<div className={styles["project-link"]}>
						<a href={project.link} target="_blank" rel="noopener noreferrer">
							{t("repository.view")} →
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

