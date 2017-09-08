import React from 'react'

import './DashboardPage.css'
import { data } from '../../data'
import FaPlus from 'react-icons/lib/fa/plus'
import TaskCounter from '../../components/TaskCounter/TaskCounter'
import TaskCardContainer from '../../components/TaskCardContainer/TaskCardContainer'


class DashboardPage extends React.Component {
  state = {
    allTasks: data.tasks,
    tasks: data.tasks,
    sectionTitle: '',
    overdue: 0,
    upcoming: 0,
    completed: 0,
    overdueTasks: [],
    upcomingTasks: [],
    completedTasks: [],
  }

  componentDidMount () {
    this.filterTasks()
  }

  filterTasks = () => {
    for (const task of this.state.allTasks) {
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

  handleOverdueClick = () => {
    this.setState({ tasks: this.state.overdueTasks })
  }

  handleUpcomingClick = () => {
    this.setState({ tasks: this.state.upcomingTasks })
  }

  handleCompletedClick = () => {
    this.setState({ tasks: this.state.completedTasks })
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
            onClick = {this.handleOverdueClick}
            taskCount={this.state.overdue}
            taskStatus="OVERDUE TASKS"
            style={{ color: 'rgb(135,200,100)' }}
          />
          <TaskCounter
            onClick = {this.handleUpcomingClick}
            taskCount={this.state.upcoming}
            taskStatus="UPCOMING TASKS"
            style={{ color: 'rgb(62,151,214)' }}
          />
          <TaskCounter
            onClick = {this.handleCompletedClick}
            taskCount={this.state.completed}
            taskStatus="COMPLETED TASKS"
            style={{ color: 'rgb(188,192,224)' }}
          />
        </div>
        <div>
          <TaskCardContainer
            tasks={this.state.tasks}
          />
        </div>
      </div>
    )
  }
}

export default DashboardPage
