import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="projectContainer">
      <img src={imageUrl} alt="project" className="image1" />
      <div className="cardContaainer">
        <h1 className="heading">{projectTitle}</h1>
        <div className="timeCard">
          <AiFillCalendar className="calender" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="para">{description}</p>
      <a href={projectUrl} rel="noreferrer" target="_blank">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
