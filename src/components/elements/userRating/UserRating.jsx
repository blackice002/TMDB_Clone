import './progress.scss'

export const UserRating = ({userRating}) => {
    const rating = userRating*10
    return (
        <div className={`progress--circle progress--${rating}`}>
          <div className="progress__number">{rating}<sup style={{fontSize:".6rem"}}>%</sup></div>
        </div>
    )
}

export default UserRating;