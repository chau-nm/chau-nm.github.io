import {TFunction} from "i18next";

export const getData = (t: TFunction) => [
	{
		name: "TetrisGame",
		description: t("repository.tetrisGame"),
		technologies: ["Java"],
		link: "https://github.com/chau-nm/TetrisGame"
	},
	{
		name: "MinesweeperJava",
		description: t("repository.minesweeperJava"),
		technologies: ["Java"],
		link: "https://github.com/chau-nm/MinesweeperJava"
	},
	{
		name: "ui_problems",
		description: t("repository.uiProblems"),
		technologies: ["HTML", "CSS", "JavaScript"],
		link: "https://github.com/chau-nm/ui_problems"
	},
	{
		name: "leetcode_problems",
		description: t("repository.leetcodeProblems"),
		technologies: ["Java", "TypeScript"],
		link: "https://github.com/chau-nm/leetcode_problems"
	},
	{
		name: "algorithms",
		description: t("repository.algorithms"),
		technologies: ["Java", "TypeScript"],
		link: "https://github.com/chau-nm/algorithms"
	},
	{
		name: "kltn",
		description: t("repository.kltn"),
		technologies: ["React", "Spring", "MySQL"],
		link: "https://github.com/chau-nm/kltn"
	}
]