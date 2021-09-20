import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import Search from "@mui/icons-material/Search";
import PetsIcon from '@mui/icons-material/Pets';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
    return (
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Pokemon Social</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input
              placeholder="Search for Pokemon, type or stats"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <PetsIcon />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <ChatIcon />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <NotificationsIcon />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src="/assets/person/1.png" alt="" className="topbarImg"/>
        </div>
      </div>
    );
  }