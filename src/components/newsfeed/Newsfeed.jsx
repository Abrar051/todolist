import "./newsfeed.css"
import Share from "../share/Share"
import Postbar from "../post/Postbar"
import Posts from "../../dummyData";

export default function Newsfeed() {
    return (
        <div className="newsfeed">
            <div className="feedWrapper">
                   <Share />
            </div> 
            <div className="postfeed">
                   <Postbar />
                   <Postbar />
                   <Postbar />
                   <Postbar />
                   <Postbar />
                   <Postbar />
                   </div>          
        </div>
        
    )
    /*return (
        <div className="feed">
          <div className="feedWrapper">
            <Share />
            {Posts.map((p) => (
              <Postbar key={p.id} post={p} />
            ))}
          </div>
        </div>
      );*/
}
