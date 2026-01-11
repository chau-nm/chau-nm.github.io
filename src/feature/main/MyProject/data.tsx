import KnowledgePortal from "assets/images/knowledge-portal.png";
import PosRetail from "assets/images/pos-retail.png";
import IllustrationCoder from "assets/images/illustration_coder.png";
import SocialTool from "assets/images/social-tool.png";
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
	{
		image: PosRetail,
		title: t("myProject.posRetail.title"),
		description: <p>{t("myProject.posRetail.description")}</p>,
		technologies: [
			"Flutter",
			"Cloudflare",
			"Symfony",
			"API Platform",
			"PostgreSQL",
			"Caddy",
			"Docker",
			"GitHub Actions",
			"Sentry",
			"OpenSearch",
			"DigitalOcean App Platform",
		],
	},
	{
		image: SocialTool,
		title: t("myProject.socialTool.title"),
		description: <p>{t("myProject.socialTool.description")}</p>,
		technologies: [
			"Vue.js",
			"Cloudflare",
			"Yii2",
			"MySQL",
			"Docker",
			"GitHub Actions",
			"Sentry",
			"OpenSearch",
			"DigitalOcean App Platform",
		],
	},
];

