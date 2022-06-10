import Project from "../data/Projects";
import TechIcon from "./TechIcon";
import "../styles/ProjectCard.css";

interface Images {
    path : string;
    alt : string;
    index : number;
}

const ProjectCard = ({ project } : { project : Project}) => {
    const images : Images[] = [];
    for (let i = 0; i < project.imageCount; i++) {
        images.push({
            path: `${project.imageFolder}/${i + 1}.png`,
            alt: `${project.title} image ${i + 1}`,
            index: i,
        });
    }

    let mediaClassName = "project-card-media";
    if (project.imageCount > 1) {
        mediaClassName += " multi";
    }

    return (
        <div className="project-card">
            <div className="project-card-header">
                <h2>{ project.title }</h2>
                <div className="tags">
                    {
                        project.tags.map(t => <TechIcon tech={ t } key={ t } />)
                    } 
                </div>
            </div>
            <div className="project-card-layout"> 
                {
                    project.imageFolder &&
                    <>
                        <div className="project-card-layout gallery">  
                            <div className={ mediaClassName }>
                                {
                                    images.map(i => (
                                        <img src={ i.path } alt={ i.alt } key={ i.index } />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="project-card-layout content">
                            <p className="project-card-content" 
                                dangerouslySetInnerHTML={{ __html: project.description }}>
                            </p>
                        </div>
                    </>
                }
                {
                    !project.imageFolder &&
                    <p className="project-card-content" 
                        dangerouslySetInnerHTML={{ __html: project.description }}>
                    </p>
                }
            </div>
            <div className="project-card-footer">
                {
                    project.website &&
                    <a className="site" href={ project.website } target="_blank" rel="noreferrer">Site</a>
                }
                {
                    project.github &&
                    <a className="github" href={ project.github } target="_blank" rel="noreferrer">GitHub</a>
                }
            </div>
        </div>
    )
}

export default ProjectCard;