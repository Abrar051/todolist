import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';

export default function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <OndemandVideoIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Video</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupsIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Group</span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarkIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Bookamarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <QuestionAnswerIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Question</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <EmojiEventsIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Event</span>
                    </li>
                    <li className="sidebarListItem">
                        <CastForEducationIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Event</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show more</button>
                <hr className="sidebarhr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.png" alt=""/>
                        <span className="sidebarFriendName">Blastoise</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
