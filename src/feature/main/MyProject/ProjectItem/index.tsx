import {FC, ReactNode, useState} from "react";
import styles from "./projectItem.module.scss";
import classNames from "classnames";

type ProjectItemProps = {
	setRef: (element: HTMLDivElement | null) => void;
	project: {
		image: string;
		title: string;
		description: ReactNode;
		technologies?: string[];
	};
	isEven: boolean;
};

const MAX_VISIBLE_TECH = 3;

export const ProjectItem: FC<ProjectItemProps> = ({
	setRef,
	project,
	isEven,
}) => {
	const [showPopover, setShowPopover] = useState(false);
	
	const visibleTechs = project.technologies?.slice(0, MAX_VISIBLE_TECH) || [];
	const hiddenTechs = project.technologies?.slice(MAX_VISIBLE_TECH) || [];
	const hasMore = (project.technologies?.length || 0) > MAX_VISIBLE_TECH;
	
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
						{visibleTechs.map((tech, index) => (
							<span
								key={index}
								className={styles["technology-item"]}
							>
								{tech}
							</span>
						))}
						{hasMore && (
							<span 
								className={styles["technology-more"]}
								onMouseEnter={() => setShowPopover(true)}
								onMouseLeave={() => setShowPopover(false)}
							>
								+{hiddenTechs.length}
								{showPopover && (
									<div className={styles["technology-popover"]}>
										{hiddenTechs.map((tech, index) => (
											<span key={index} className={styles["technology-item"]}>
												{tech}
											</span>
										))}
									</div>
								)}
							</span>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

