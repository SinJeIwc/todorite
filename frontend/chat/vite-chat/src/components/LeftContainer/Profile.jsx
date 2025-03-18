function Profile() {
  return (
    <div className="profile_container">
      <div className="profile_btn">
        <img id="profile_logo" src="../assets/images/we.jpg" alt="profile" />
        <span className="nickname">Anonymous</span>
      </div>
      <button className="sign_out_btn js-sign_out_btn">
        <img
          id="sign_out_logo"
          src="../assets/images/sign_out.png"
          alt="sign out"
        />
      </button>
    </div>
  );
}
export default Profile;
