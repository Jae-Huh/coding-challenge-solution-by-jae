import React from 'react'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'

import './TaskCard.css'

const TaskCard = (props) => {

  const toggleCardDetails = () => {
    this.state.cardDetailsClassNames.length === 1 ? this.setState({ cardDetailsClassNames: [...this.state.cardDetailsClassNames, 'show-card-text-container']}) : this.setState({ cardDetailsClassNames: ['card-text-container'] })
  }

  return (
    <div className="task-card-container">
      <div className="task-card-top">
        <p className="task-card-title">{props.title}</p>
        <div className="task-card-labels">
          <p></p>
          <p>{props.dueDate}</p>
          <p>Martin</p>
          <div className="arrow-container">
            <FaChevronDown style={{ color: 'rgb(88,151,208)'}} />
          </div>
        </div>
      </div>
      <div className="task-card-details-container">
        <p className="task-card-details-title">TASK DESCRIPTION</p>
        <div className="task-card-details">
          <p className="task-card-details-para">{props.details}</p>
          <button className="mark-as-complete-button">MARK AS COMPLETE</button>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
