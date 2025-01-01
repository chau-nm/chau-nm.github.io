import {MoonOutline, SunOutline} from "assets/icons";
import {FABChild} from "component/FAB/FABChild";
import {FC, useContext, useMemo} from "react";
import {ThemeContext} from "../../../../theme/ThemeContext";
import {ThemeEnum} from "../../../../theme/themeEnum";

export const ThemeSetting: FC = () => {
    
    const {theme, setTheme} = useContext(ThemeContext);
    
    const handleSetTheme = () => {
        if (theme === ThemeEnum.DARK) {
            setTheme(ThemeEnum.LIGHT);
        } else {
            setTheme(ThemeEnum.DARK);
        }
    }
    
    const Icon = useMemo(() => {
        switch (theme) {
            case ThemeEnum.DARK:
                return <MoonOutline style={{width: 20, height: 20}}/>;
            case ThemeEnum.LIGHT:
                return <SunOutline style={{width: 20, height: 20, fill: "#FFFFFF"}}/>
            default:
                return <MoonOutline style={{width: 20, height: 20}}/>;
        }
    }, [theme])
    
    return (
        <FABChild icon={Icon} onClick={handleSetTheme}/>
    )
}