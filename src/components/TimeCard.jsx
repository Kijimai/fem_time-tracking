import React from "react"

// {
//   "title": "Work",
//   "timeframes": {
//     "daily": {
//       "current": 5,
//       "previous": 7
//     },
//     "weekly": {
//       "current": 32,
//       "previous": 36
//     },
//     "monthly": {
//       "current": 103,
//       "previous": 128
//     }
//   }
// },

const TimeCard = ({ props }) => {
  const { title, timeframes, daily, weekly, monthly } = props
  return (
    <div className="timeCard">
      <div className="timeCard__inner-container">
        <h2 className="timeCard__name">{title}</h2>
        <p className="timeCard__hours">{timeframes.weekly.current} Hrs</p>
        <p className="timeCard__previous-week">
          Last Week - {timeframes.weekly.previous} Hrs
        </p>
      </div>
    </div>
  )
}

export default TimeCard
