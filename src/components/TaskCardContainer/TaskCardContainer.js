import React from 'react'
import PropTypes from 'prop-types'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'

import './TaskCardContainer.css'
import TaskCard from '../TaskCard/TaskCard'

const TaskCardContainer = (props) => {

  const renderTaskCards = () => {
    return props.tasks.map(task => (
      <TaskCard
        title={getTitle(task.name)}
        details={task.description}
        document={getCategoryNames(task.documentId, props.documents)}
        dueDate={task.dueDate}
        assignee={getCategoryNames(task.assigneeId, props.users)}
        key={task.id}
        status={task.status}
        handleCompleteButtonClick={props.handleCompleteButtonClick}
      />
    ))
  }

  const getTitle = (title) => {
    if (title.length > 60) {
      return title.slice(0, 60) + '...'
    }
    return title
  }

  const getCategoryNames = (categoryId, category) => {
    for (const item of category) {
      if (categoryId === item.id) {
        return item.name
      }
    }
  }

  return (
    <div className="task-cards-container">
      <div className="task-cards-header-container">
        <div className="task-cards-title-container">
          <p style={{ fontSize: '20px', margin: '10px 0', fontWeight: 100 }}>{props.currentTitle}</p>
          <button className="filter-button">DOCUMENT <FaChevronDown /></button>
          <button className="filter-button">ASSIGNEE <FaChevronDown /></button>
        </div>
        <div className="task-cards-label-container">
          <p>DOCUMENT</p>
          <p>DUE DATE</p>
          <p>ASSIGNEE</p>
        </div>
      </div>
      <div>
        {renderTaskCards()}
      </div>
    </div>
  )
}

TaskCardContainer.propTypes = {
  tasks: PropTypes.array,
  documents: PropTypes.array,
  users: PropTypes.array,
  currentTitle: PropTypes.string,
  handleCompleteButtonClick: PropTypes.func,
}

export default TaskCardContainer
