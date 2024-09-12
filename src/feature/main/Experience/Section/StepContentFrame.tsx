import { FC } from "react";
import styles from "./section.module.scss";

type StepContentFrameProps = {
  projectName: string;
  summary: string;
  technicalLogoUrls: string[];
  description: string | React.ReactNode;
};

export const StepContentFrame: FC<StepContentFrameProps> = ({
  projectName,
  summary,
  technicalLogoUrls,
  description,
}) => {
  return (
    <div className={styles["step-content"]}>
      <div className={styles.field}>
        <label>
          <strong>Project name:</strong>
        </label>{" "}
        {projectName}
      </div>
      <div className={styles.field}>
        <label>
          <strong>Summary:</strong>
        </label>{" "}
        {summary}
      </div>
      <div className={styles.field}>
        <label>
          <strong>Technical:</strong>
        </label>
        <ul className={styles["technicals"]}>
          {technicalLogoUrls.map((logo) => (
            <li className={styles["technical-item"]}>
              <img src={logo} alt="" />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.field}>{description}</div>
    </div>
  );
};