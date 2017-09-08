import React from 'react'

import './TaskCounter.css'

const TaskCounter = (props) => {
  return (
    <div className="task-counter-container" onClick={props.onClick}>
      <p className="task-count" style={props.style}>{props.taskCount}</p>
      <p className="task-status">{props.taskStatus}</p>
    </div>
  )
}

export default TaskCounter
