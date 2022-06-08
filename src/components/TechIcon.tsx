import Icon from "@mdi/react";
import { mdiLanguageTypescript, mdiDotNet, mdiMicrosoftAzure } from '@mdi/js';

const svgTechs : string[] = ["Firebase", "React", "Solidity", "Cosmos"];
const pngTechs : string[] = ["Flutter"];

const TechIcon = ({ tech } : { tech : string }) => {
    if (tech === "TypeScript") {
        return (
            <Icon path={ mdiLanguageTypescript } size={ 1.25 } color="#0073cf" title={ tech } />
        )
    } else if (tech === ".NET") {
        return (
            <div style={{ backgroundColor: "#8c198c", height: "30px" }}>
                <Icon path={ mdiDotNet } size={ 1.25 } color="#f3f3f3" title={ tech } />
            </div>
        )
    } else if (tech === "Azure") {
        return (
            <Icon path={ mdiMicrosoftAzure } size={ 1.25 } color="#3299ff" title={ tech } />
        )
    } else if (svgTechs.includes(tech)) {
        return (
            <img src={ `img/techicons/${tech}.svg`} alt={ tech } width={ 30 } height={ 30 } title={ tech } />
        );
    } else if (pngTechs.includes(tech)) {
        return (
            <img src={ `img/techicons/${tech}.png`} alt={ tech } width={ 30 } height={ 30 } title={ tech } />
        );
    }
    else {
        return (
            <div style={{ cursor: "default" }}>{ tech }</div>
        );
    }
}

export default TechIcon;