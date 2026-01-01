import { FABChild } from "component/FAB/FABChild"
import {useLanguage} from "../../../../hook/useLanguage";
import {useMemo} from "react";
import {GlobalOutline} from "assets/icons";
import styles from "./languageSetting.module.scss";

export const LanguageSetting = () => {
    
    const {language, setLanguage} = useLanguage();
    
    const LanguageIcon = useMemo(() => {
        return (
            <div className={styles["language-icon"]}>
                <GlobalOutline style={{width: 20, height: 20, fill: "#FFFFFF"}}/>
                <span className={styles["language-badge"]}>{language.toUpperCase()}</span>
            </div>
        );
    }, [language]);
    
    return (
        <FABChild 
            icon={LanguageIcon} 
            onClick={setLanguage}
            label="Language / Ngôn ngữ"
        />
    )
}