import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="bgContainer">
      <h1 className="title">
        MY JOURNEY OF
        <br />
        <span className="title2">CCBP 4.0</span>
      </h1>
      <div className="chronoContainer">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            primary: '#0967d2',
            secondary: '#ffffff',
            cardBgColor: '#ffffff',
            cardForeColor: 'violet',
            titleColor: '#0967d2',
          }}
        >
          {timelineItemsList.map(eachItem =>
            eachItem.categoryId === 'COURSE' ? (
              <CourseTimelineCard Coursedetails={eachItem} key={eachItem.id} />
            ) : (
              <ProjectTimelineCard
                projectDetails={eachItem}
                key={eachItem.id}
              />
            ),
          )}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
