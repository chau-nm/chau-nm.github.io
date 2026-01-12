import {FC} from "react";
import styles from "./technicalSlider.module.scss";

type TechnicalBlockProps = {
	imageUrl: string;
	caption: string;
}

export const TechnicalBlock: FC<TechnicalBlockProps> = ({
  imageUrl,
  caption
}) => {
	const isDarkLogo = caption === "GitHub" || caption === "Symfony";
	
	return (
		<div className={styles.block}>
			<div className={styles["img-wrapper"]}>
				<img 
					src={imageUrl} 
					alt={caption}
					className={isDarkLogo ? styles["dark-logo"] : ""}
				/>
			</div>
			<span>{caption}</span>
		</div>
	)
}