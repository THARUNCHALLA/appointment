import './index.css'

import {format} from 'date-fns'

const AppointmentItem = props => {
  const {user, onStar} = props
  const {name, date, id, isFav} = user
  const Date12 = format(new Date(date), 'dd MMMM yyyy, EEEE')
  const initially = () => {
    onStar(id)
  }
  const istrue = isFav
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="list">
      <div>
        <p className="listHead">{name}</p>
        <p>{`Date ${Date12}`}</p>
      </div>
      <button
        type="button"
        className="btn2"
        data-testid="star"
        onClick={initially}
      >
        <img src={istrue} alt="star" className="listimage" />
      </button>
    </li>
  )
}

export default AppointmentItem
