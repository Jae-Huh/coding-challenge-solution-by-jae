import React from 'react'

import './DashboardPage.css'
import { data } from '../../data'
import FaPlus from 'react-icons/lib/fa/plus'
import TaskCounter from '../../components/TaskCounter/TaskCounter'
import TaskCardContainer from '../../components/TaskCardContainer/TaskCardContainer'


class DashboardPage extends React.Component {
  state = {
    tasks: data.tasks,
    overdue: 0,
    upcoming: 0,
    completed: 0,
    sectionTitle: '',
    overdueTasks: [],
    upcomingTasks: [],
    completedTasks: [],
  }

  componentWillMount () {
    for (const task of this.state.tasks) {
      if (task.status === 1) {
        this.setState({
          completed: this.state.completed += 1,
          completedTasks: [...this.state.completedTasks, task]
        })
      } else if (new Date(task.dueDate) < new Date()) {
        this.setState({
          overdue: this.state.overdue += 1,
          overdueTasks: [...this.state.overdueTasks, task]
        })
      } else if (new Date(task.dueDate) > new Date()) {
        this.setState({
          upcoming: this.state.upcoming += 1,
          upcomingTasks: [...this.state.upcomingTasks, task]
        })
      }
    }
  }

  handleTaskCounterClick = () => {

  }

  render () {
    return (
      <div className="dashboard-page-container">
        <div className="dashboard-header">
          <p className="dashboard-title">Dashboard</p>
          <button className="add-new-task-button">ADD NEW TASK <FaPlus style={{marginLeft: 15}}/></button>
        </div>
        <div className="task-counters-container">
          <TaskCounter
            name="overdue"
            onClick = {this.handleTaskCounterClick}
            taskCount={this.state.overdue}
            taskStatus="OVERDUE TASKS"
            style={{ color: 'rgb(135,200,100)' }}
          />
          <TaskCounter
            taskCount={this.state.upcoming}
            taskStatus="UPCOMING TASKS"
            style={{ color: 'rgb(62,151,214)' }}
          />
          <TaskCounter
            taskCount={this.state.completed}
            taskStatus="COMPLETED TASKS"
            style={{ color: 'rgb(188,192,224)' }}
          />
        </div>
        <div>
          <TaskCardContainer/>
        </div>
      </div>
    )
  }
}

export default DashboardPage
