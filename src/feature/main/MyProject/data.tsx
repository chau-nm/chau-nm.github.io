import KnowledgePortal from "assets/images/knowledge-portal.png";
import { TFunction } from "i18next";
import { ReactNode } from "react";

type ProjectType = {
	image: string;
	title: string;
	description: ReactNode;
	technologies?: string[];
};

export const projectData = (t: TFunction): ProjectType[] => [
	{
		image: KnowledgePortal,
		title: t("myProject.knowledgePortal.title"),
		description: <p>{t("myProject.knowledgePortal.description")}</p>,
		technologies: ["React", "Yii2", "MySQL", "Docker", "AWS"],
	},
];

