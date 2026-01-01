import {
  AWSLogo,
  DockerLogo,
  MySQLLogo,
  ReactLogo,
  Yii2Logo
} from "assets/images/logo";
import KnowledgePortal from "assets/images/knowledge-portal.png";
import { TFunction } from "i18next";
import { ReactNode } from "react";

type ProjectType = {
	image: string;
	title: string;
	description: ReactNode;
	technologies?: string[];
	link?: string;
};

export const projectData = (t: TFunction): ProjectType[] => [
	{
		image: KnowledgePortal,
		title: t("myProject.knowledgePortal.title"),
		description: <p>{t("myProject.knowledgePortal.description")}</p>,
		technologies: [ReactLogo, Yii2Logo, MySQLLogo, DockerLogo, AWSLogo],
		link: "https://www.siba-service.jp/service/knowledge-portal/",
	},
];

