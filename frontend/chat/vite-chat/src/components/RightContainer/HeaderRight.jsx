function HeaderRight() {
  return (
    <div class="chat_header">
      <div class="current_user">
        <div class="current_user_logo">
          <img src="../assets/images/logo.jpg" alt="" />
        </div>
        <div class="current_user_name">
          <p>Home page</p>
        </div>
      </div>
      <div class="more_btn">
        <div class="more" id="deleteAllButton">
          Delete All
        </div>
        <img
          src="../assets/images/ellipsis-vertical-solid.svg"
          id="ellipsisIcon"
          alt=""
        />
      </div>
    </div>
  );
}
export default HeaderRight;
