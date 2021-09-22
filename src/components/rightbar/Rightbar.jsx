import "./rightbar.css"


export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                <img className="birthdayImg" src="assets/gift.png" alt=""/>
                <span className="birthdayText">
                    <b>Greninja</b> and <b>3 other friends </b> have a birthday today
                </span>
            </div>
            <img className="rightbarAd" src="assets/community.jpg" alt=""/>
        </div>
        </div>
    )
}
