import avatarSrc from "../images/image-jeremy.png"
const UserInfo = () => {
  return (
    <section className="user-info">
      <div className="user-info__container">
        <img
          className="user-info__avatar"
          src={avatarSrc}
          alt="Jeremy Johnson"
        />
        <small>Report for</small>
        <h2 className="user-info__username">Jeremy Johnson</h2>
      </div>
    </section>
  )
}

export default UserInfo
