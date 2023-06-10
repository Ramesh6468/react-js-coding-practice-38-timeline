import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {Coursedetails} = props
  const {courseTitle, description, duration, tagsList} = Coursedetails
  return (
    <div>
      <div className="courseContainer">
        <h1 className="heading">{courseTitle}</h1>
        <div className="cardContainer">
          <AiFillClockCircle className="clock" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="para">{description}</p>
      <div className="listContainer">
        {tagsList.map(eachItem => (
          <p key={eachItem.id} className="item">
            {eachItem.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
