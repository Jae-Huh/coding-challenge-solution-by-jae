import React from 'react'
import PropTypes from 'prop-types'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'

import './TaskCard.css'

class TaskCard extends React.Component {
  state = {
    taskCardDetailsClassNames: ['task-card-details-container'],
    isTaskOpen: false,
  }

  toggleCardDetails = () => {
    this.state.taskCardDetailsClassNames.length === 1 ? this.setState({ taskCardDetailsClassNames: [...this.state.taskCardDetailsClassNames, 'show-task-card-details-container'], isTaskOpen: !this.state.isTaskOpen }) : this.setState({ taskCardDetailsClassNames: ['task-card-details-container'], isTaskOpen: !this.state.isTaskOpen })
  }

  render() {
    return (
      <div className="task-card-container">
        <div className="task-card-top">
          <p className="task-card-title">{this.props.title}</p>
          <div className="task-card-labels">
            <p>{this.props.document}</p>
            <p>{this.props.dueDate}</p>
            <p>{this.props.assignee}</p>
            <div className="arrow-container" onClick={this.toggleCardDetails}>
              {this.state.isTaskOpen ? <FaChevronUp className="arrowIcon" /> : <FaChevronDown className="arrowIcon" />}
            </div>
          </div>
        </div>
        <div className={this.state.taskCardDetailsClassNames.join(' ')}>
          <p className="task-card-details-title">TASK DESCRIPTION</p>
          <div className="task-card-details">
            <p className="task-card-details-para">{this.props.details}</p>
            {this.props.status ? null: <button className="mark-as-complete-button" onClick={this.props.handleCompleteButtonClick}>MARK AS COMPLETE</button>}
          </div>
        </div>
      </div>
    )
  }
}

TaskCard.propTypes = {
  title: PropTypes.string,
  document: PropTypes.string,
  dueDate: PropTypes.string,
  assignee: PropTypes.string,
  details: PropTypes.string,
  status: PropTypes.number,
  handleCompleteButtonClick: PropTypes.func,
}

export default TaskCard
