import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Users from "../../dummyData";
import { useState } from "react";

export default function Postbar() {
  const [like,setLike] = useState(Postbar.like)
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
   return (
        <div className="postpanel">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/person/3.png" alt=""/>
                    <span className="postUsername">Venasaur</span>
                    <span className="postData"> 5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postCenter">Just smashed Blastoise</span>
                <img className="postImg" src="assets/post/1.jpg" alt=""/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeicon" src="assets/like.png"  alt=""/>
                    <img className="likeicon" src="assets/heart.png"  alt=""/>
                    <span className="postLikeCounter">32</span>
                </div>
                <div className="postBottomRight">
                    <span classname="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    )

   /* return (
        <div className="post">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <img
                  className="postProfileImg"
                  src={Users.filter((u) => u.id === Postbar?.userID)[0].profilePicture}
                  alt=""
                />
                <span className="postUsername">
                  {Users.filter((u) => u.id === Postbar?.userId)[0].username}
                </span>
                <span className="postDate">{Postbar.date}</span>
              </div>
              <div className="postTopRight">
                <MoreVertIcon />
              </div>
            </div>
            <div className="postCenter">
              <span className="postText">{Postbar?.desc}</span>
              <img className="postImg" src={Postbar.photo} alt="" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
                <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
                <span className="postLikeCounter">{like} people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">{Postbar.comment} comments</span>
              </div>
            </div>
          </div>
        </div>
      );*/
    
}

//import { MoreVert } from "@material-ui/icons";

/*export default function Postbar({ post }) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}*/