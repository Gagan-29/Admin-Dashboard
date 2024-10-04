import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://www.google.com/imgres?q=karnam%20gagan&imgurl=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FD5603AQF8BWpLW51FAA%2Fprofile-displayphoto-shrink_200_200%2F0%2F1710058311209%3Fe%3D2147483647%26v%3Dbeta%26t%3DfwYO4Dj2Ae5YoMxciGjfnV8oSbjqA-gfWLs1eT6mHtw&imgrefurl=https%3A%2F%2Fin.linkedin.com%2Fin%2Fkarnam-gagan-2aa787217&docid=RK8WmimWSCEygM&tbnid=r_kH2inG6fJpFM&vet=12ahUKEwjX4rKlxvSIAxUzrVYBHVvgOqUQM3oECBgQAA..i&w=200&h=200&hcb=2&ved=2ahUKEwjX4rKlxvSIAxUzrVYBHVvgOqUQM3oECBgQAA"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
