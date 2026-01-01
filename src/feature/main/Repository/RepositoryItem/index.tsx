import {FC, ReactNode, useState} from "react";
import styles from "./repositoryItem.module.scss";
import {useTranslation} from "react-i18next";

type RepositoryItemProps = {
	name: string;
	description: ReactNode;
	technilogies: string[];
	link: string;
}

const MAX_VISIBLE_TECH = 2;

export const RepositoryItem: FC<RepositoryItemProps> = ({
	name,
	link,
	description,
	technilogies
}) => {
	const {t} = useTranslation();
	const [showPopover, setShowPopover] = useState(false);
	const visibleTechs = technilogies.slice(0, MAX_VISIBLE_TECH);
	const hiddenTechs = technilogies.slice(MAX_VISIBLE_TECH);
	const hasMore = technilogies.length > MAX_VISIBLE_TECH;
	
	return (
		<div className={styles["repository-item"]}>
			<div className={styles.name}>
				<h3>{name}</h3>
			</div>
			<div className={styles.description}>
				{description}
			</div>
			<div className={styles.bottom}>
				<div 
					className={styles.technologies}
					onMouseEnter={() => hasMore && setShowPopover(true)}
					onMouseLeave={() => setShowPopover(false)}
				>
					{
						visibleTechs.map((technology, index) => (
							<span key={index} className={styles["technology-item"]}>
								{technology}
							</span>
						))
					}
					{hasMore && (
						<>
							<span className={styles["technology-more"]}>
								+{hiddenTechs.length}
							</span>
							{showPopover && (
								<div className={styles["technology-popover"]}>
									{hiddenTechs.map((technology, index) => (
										<span key={index} className={styles["technology-item"]}>
											{technology}
										</span>
									))}
								</div>
							)}
						</>
					)}
				</div>
				<div className={styles["view-button"]}>
					<a href={link} target="_blank" rel="noopener noreferrer">
						{t("repository.view")} →
					</a>
				</div>
			</div>
		</div>
	)
}