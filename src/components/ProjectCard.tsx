import Project from "../data/Projects";
import TechIcon from "./TechIcon";
import "../styles/ProjectCard.css";

const ProjectCard = ({ project } : { project : Project}) => {
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
                            <div className="project-card-media">
                                <img src={ `${project.imageFolder}/1.png` } alt={ project.title } />
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