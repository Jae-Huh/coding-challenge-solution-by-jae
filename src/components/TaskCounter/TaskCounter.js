import React from 'react'
import PropTypes from 'prop-types'

import './TaskCounter.css'

const TaskCounter = (props) => {
  return (
    <div className="task-counter-container" onClick={props.onClick}>
      <p className="task-count" style={props.style}>{props.taskCount}</p>
      <p className="task-status">{props.taskStatus}</p>
    </div>
  )
}

TaskCounter.propTypes = {
  onClick: PropTypes.func,
  taskCount: PropTypes.number,
  taskStatus: PropTypes.string,
  style: PropTypes.object
}

export default TaskCounter
