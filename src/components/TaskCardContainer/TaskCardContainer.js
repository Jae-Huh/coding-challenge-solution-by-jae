import React from 'react'

import './TaskCardContainer.css'
import TaskCard from '../TaskCard/TaskCard'

const TaskCardContainer = () => {
  return (
    <div className="task-cards-container">
      <div className="task-cards-header-container">
        <div className="task-cards-title-container">
          <p className="overdue">Overdue Tasks</p>
          <p>DOCUMENT</p>
          <p>ASSIGNEE</p>
        </div>
        <div className="task-cards-label-container">
          <p>DOCUMENT</p>
          <p>DUE DATE</p>
          <p>ASSIGNEE</p>
        </div>
      </div>
      <div>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  )
}

export default TaskCardContainer
