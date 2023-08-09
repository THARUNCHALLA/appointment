import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {name: '', date: '', final: [], isFilterActive: false}

  onAddContact = event => {
    event.preventDefault()
  }

  addButton = () => {
    const {name, date} = this.state
    if (name !== '' && date !== '') {
      const contact = {
        name,
        date,
        id: uuidv4(),
        isFav: false,
      }
      this.setState(prevState => ({
        final: [...prevState.final, contact],
        name: '',
        date: '',
      }))
    }
  }

  onchange = event => {
    this.setState({name: event.target.value})
  }

  onChange = event => {
    this.setState({date: event.target.value})
  }

  onStar = id => {
    this.setState(prevState => ({
      final: prevState.final.map(each => {
        if (each.id === id) {
          return {...each, isFav: !each.isFav}
        }
        return each
      }),
    }))
  }

  onFilter = () => {
    const {isFilterActive} = this.state

    this.setState({
      isFilterActive: !isFilterActive,
    })
  }

  getFilteredAppointmentsList = () => {
    const {final, isFilterActive} = this.state

    if (isFilterActive) {
      return final.filter(eachTransaction => eachTransaction.isFav === true)
    }
    return final
  }

  render() {
    const {name, date, isFilterActive} = this.state
    const bur = isFilterActive ? 'hk' : null
    const final1 = this.getFilteredAppointmentsList()
    return (
      <div className="container">
        <div className="secContainer">
          <div className="thirdContainer">
            <form onSubmit={this.onAddContact}>
              <h1 className="heading">Add Appointment</h1>
              <div className="input">
                <label htmlFor="unique" className="head">
                  TITLE
                </label>
                <input
                  type="text"
                  id="unique"
                  onChange={this.onchange}
                  value={name}
                />
              </div>

              <div className="input">
                <label htmlFor="unique12" className="head">
                  DATE
                </label>
                <input
                  type="date"
                  id="unique12"
                  onChange={this.onChange}
                  value={date}
                />
              </div>
              <button type="submit" className="button" onClick={this.addButton}>
                ADD
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
              alt="appointments"
              className="image"
            />
          </div>
          <hr className="line" />
          <div className="fourthContainer">
            <h1 className="fourthHead">Appointments</h1>
            <button
              type="button"
              className={`btn ${bur}`}
              onClick={this.onFilter}
            >
              Starred
            </button>
          </div>
          <ul>
            {final1.map(each => (
              <AppointmentItem user={each} key={each.id} onStar={this.onStar} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
