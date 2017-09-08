import React from 'react'

import './DashboardPage.css'
import { data } from '../../data'
import FaPlus from 'react-icons/lib/fa/plus'
import TaskCounter from '../../components/TaskCounter/TaskCounter'
import TaskCardContainer from '../../components/TaskCardContainer/TaskCardContainer'

let overdue = 0
let upcoming = 0
let completed = 0

class DashboardPage extends React.Component {
  componentWillMount () {
    for (const task of data.tasks) {
      if (task.status === 1) {
        completed += 1
      } else if (new Date(task.dueDate) < new Date()) {
        overdue += 1
      } else if (new Date(task.dueDate) > new Date()) {
        upcoming += 1
      }
    }
  }

  render () {
    return (
      <div className="dashboard-page-container">
        <div className="dashboard-header">
          <p className="dashboard-title">Dashboard</p>
          <button className="add-new-task-button">ADD NEW TASK <FaPlus style={{marginLeft: 15}}/></button>
        </div>
        <div className="task-counters-container">
          <TaskCounter taskCount={overdue} taskStatus="OVERDUE TASKS" style={{ color: 'rgb(135,200,100)' }} />
          <TaskCounter taskCount={upcoming} taskStatus="UPCOMING TASKS" style={{ color: 'rgb(62,151,214)' }} />
          <TaskCounter taskCount={completed} taskStatus="COMPLETED TASKS" style={{ color: 'rgb(188,192,224)' }} />
        </div>
        <div>
          <TaskCardContainer/>
        </div>
      </div>
    )
  }
}

export default DashboardPage
