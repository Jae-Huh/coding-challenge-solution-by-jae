import React from 'react'
import PropTypes from 'prop-types'
import Dropdown from 'react-dropdown'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

import './AddNewTaskForm.css'

const AddNewTaskForm = (props) => {
  const documentNameArray = []
  const assigneeNameArray = []

  const getNames = (arrayName, list) => {
    for (const item of list) {
      arrayName.push(item.name)
    }
    return arrayName
  }

  return (
    <div className={props.className}>
      <p className="add-task-header-title">Add a new Task</p>
      <div className="add-task-inner-container">
        <p>TITLE</p>
        <input
          value={props.newTitle}
          onChange={props.onChange}
          name="newTitle"
          className="input"
        />
        <p>DESCRIPTION</p>
        <textarea
          value={props.newDescription}
          onChange={props.onChange}
          name="newDescription"
          className="input"
          style={{ height: '50px', padding: '5px 10px'}}
        />
        <p>DOCUMENT REFERENCE</p>
        <Dropdown
          placeholder="Please select"
          options={getNames(documentNameArray, props.documents)}
          className="input dropdown"
          onChange={props.handleDocumentReferenceChange}
          name="newDocumentReference"
          value={props.newDocumentReference}
        />
        <p>DUE DATE</p>
        <DayPickerInput
          name="newDueDate"
          placeholder="DD/MM/YYYY"
          format='YYYY-MM-DD'
          value={props.newDueDate}
          onDayChange={props.handleDateChange}
          className="input"
        />
        <p>ASSIGNEE</p>
        <Dropdown
          placeholder="Please select"
          options={getNames(assigneeNameArray, props.users)}
          className="input dropdown"
          onChange={props.handleAssigneeChange}
          name="newAssignee"
          value={props.newAssignee}
        />
        <button
          className="add-task-button"
          onClick={props.handleSubmitForm}
        >ADD TASK</button>
      </div>
    </div>
  )
}

AddNewTaskForm.propTypes = {
  className: PropTypes.string,
  documents: PropTypes.array,
  users: PropTypes.array,
  newTitle: PropTypes.string,
  newDescription: PropTypes.string,
  newDocumentReference: PropTypes.string,
  newDueDate: PropTypes.string,
  newAssignee: PropTypes.string,
  onChange: PropTypes.func,
  handleDateChange: PropTypes.func,
  handleSubmitForm: PropTypes.func,
}

export default AddNewTaskForm
