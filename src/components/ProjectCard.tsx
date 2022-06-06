import Project from "../data/Projects";

const ProjectCard = ({ project } : { project : Project}) => {
    return (
        <div className="project">
            <img src={ `${project.imageFolder}/1.png` } alt={ project.title } />
            <div>{ project.title }</div>
            <div>{ project.description }</div>
        </div>
    );
}

export default ProjectCard;