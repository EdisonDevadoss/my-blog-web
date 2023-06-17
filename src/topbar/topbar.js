import './topbar.css';

export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-printerest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <i className="topListItem">Home</i>
          <i className="topListItem">About</i>
          <i className="topListItem">Contact</i>
          <i className="topListItem">Write</i>
          <i className="topListItem">Logout</i>
        </ul>
      </div>

      <div className="topRight">
        <img
          className="topImg"
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
