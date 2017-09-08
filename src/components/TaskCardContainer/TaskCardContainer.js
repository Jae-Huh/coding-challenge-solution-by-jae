import React from 'react'

import './TaskCardContainer.css'

const TaskCardContainer = () => {
  return (
    <div>
      <div>
        <p className="overdue">Overdue Tasks</p>
        <p>DOCUMENT</p>
        <p>ASSIGNEE</p>
      </div>
      <div>
        <p>DOCUMENT</p>
        <p>DUE DATE</p>
        <p>ASSIGNEE</p>
      </div>
    </div>
  )
}

export default TaskCardContainer
