import React from 'react'
import moment from 'moment'

import './DashboardPage.css'
import { data } from '../../data'
import FaPlus from 'react-icons/lib/fa/plus'
import TaskCounter from '../../components/TaskCounter/TaskCounter'
import TaskCardContainer from '../../components/TaskCardContainer/TaskCardContainer'
import AddNewTaskForm from '../../components/AddNewTaskForm/AddNewTaskForm'


class DashboardPage extends React.Component {
  constructor() {
    super()
    this.state = {
      allTasks: data.tasks,
      tasks: data.tasks,
      currentTasksTitle: 'All Tasks',
      overdue: 0,
      upcoming: 0,
      completed: 0,
      overdueTasks: [],
      upcomingTasks: [],
      completedTasks: [],
      documents: data.documents,
      users: data.users,
      showAddFormClassNames: ['add-new-task-container'],
      newTitle: '',
      newDescription: '',
      newDocumentReference: '',
      newDueDate:'',
      newAssignee: '',
    }
  }

  componentDidMount() {
    this.filterTasks()
  }

  filterTasks = () => {
    const tasksAndCounts = {
      overdue: 0,
      upcoming: 0,
      completed: 0,
      overdueTasks: [],
      upcomingTasks: [],
      completedTasks: [],
    }

    let { overdue, upcoming, completed, overdueTasks, upcomingTasks, completedTasks } = tasksAndCounts

    for (const task of this.state.allTasks) {
      if (task.status === 1) {
        completed += 1
        completedTasks.push(task)
      } else if (new Date(task.dueDate) < new Date()) {
        overdue += 1
        overdueTasks.push(task)
      } else if (new Date(task.dueDate) > new Date()) {
        upcoming += 1
        upcomingTasks.push(task)
      }
    }

    let currentTasks = [...this.state.allTasks]

    switch (this.state.currentTasksTitle) {
      case 'Overdue Tasks':
        currentTasks = this.state.overdueTasks
        break
      case 'Upcoming Tasks':
        currentTasks = this.state.upcomingTasks
        break
      case 'Completed Tasks':
        currentTasks = this.state.completedTasks
        break
      case 'All Tasks':
        currentTasks = this.state.allTasks
        break
    }

    this.setState({
      tasks: currentTasks,
      overdue,
      upcoming,
      completed,
      overdueTasks,
      upcomingTasks,
      completedTasks
    })

  }

  handleOverdueClick = () => {
    this.setState({ tasks: this.state.overdueTasks, currentTasksTitle: 'Overdue Tasks' })
  }

  handleUpcomingClick = () => {
    this.setState({ tasks: this.state.upcomingTasks, currentTasksTitle: 'Upcoming Tasks' })
  }

  handleCompletedClick = () => {
    this.setState({ tasks: this.state.completedTasks, currentTasksTitle: 'Completed Tasks' })
  }

  handleCompleteButtonClick = () => {
    console.log('complete task button pressed')
  }

  toggleAddForm = () => {
    this.state.showAddFormClassNames.length === 1 ? this.setState({ showAddFormClassNames: [...this.state.showAddFormClassNames, 'show-add-new-task-container']}) : this.setState({ showAddFormClassNames: ['add-new-task-container'] })
  }

  handleInputChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    this.setState({ [name]: value})
  }

  handleDateChange = (selectedDate) => {
    this.setState({ newDueDate: moment(selectedDate).format("YYYY-MM-DD")})
  }

  handleDocumentReferenceChange = (option) => {
    this.setState({ newDocumentReference: option.value})
  }

  handleAssigneeChange = (option) => {
    this.setState({ newAssignee: option.value})
  }

  handleSubmitForm = () => {
    this.setState({
      allTasks: [...this.state.allTasks, {
        name: this.state.newTitle,
        description: this.state.newDescription,
        documentId: this.findIds(this.state.newDocumentReference, this.state.documents),
        dueDate: this.state.newDueDate,
        assigneeId: this.findIds(this.state.newAssignee, this.state.users),
        status: 0,
        id: this.state.allTasks.length + 1
      }],
      newTitle: '',
      newDescription: '',
      newDocumentReference: '',
      newDueDate:'',
      newAssignee: ''
    }, this.filterTasks())
  }

  findIds = (name, list) => {
    for (const item of list) {
      if (item.name === name) {
        return item.id
      }
    }
  }

  render () {
    console.log(this.state)
    return (
      <div className="dashboard-page-container">
        <div className="dashboard-header">
          <p
            className="dashboard-title"
            onClick={() => this.setState({ tasks: this.state.allTasks, currentTasksTitle: 'All Tasks' })}
          >
            Dashboard
          </p>
          <button className="add-new-task-button" onClick={this.toggleAddForm}>
            ADD NEW TASK <FaPlus style={{marginLeft: 15}}/>
          </button>
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
            currentTitle={this.state.currentTasksTitle}
            documents={this.state.documents}
            users={this.state.users}
            handleCompleteButtonClick={this.handleCompleteButtonClick}
          />
        </div>
        <AddNewTaskForm
          className={this.state.showAddFormClassNames.join(' ')}
          documents={this.state.documents}
          users={this.state.users}
          newTitle={this.state.newTitle}
          newDescription={this.state.newDescription}
          newDocumentReference={this.state.newDocumentReference}
          newDueDate={this.state.newDueDate}
          newAssignee={this.state.newAssignee}
          onChange={this.handleInputChange}
          handleDateChange={this.handleDateChange}
          handleDocumentReferenceChange={this.handleDocumentReferenceChange}
          handleAssigneeChange={this.handleAssigneeChange}
          handleSubmitForm={this.handleSubmitForm}
        />
      </div>
    )
  }
}

export default DashboardPage
