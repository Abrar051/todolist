import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Newsfeed from "../../components/newsfeed/Newsfeed"
import Rightbar from "../../components/rightbar/Rightbar"
import "./home.css"



export default function Home(){
    return (
        <>
        <Topbar/>
        <div className="homeContainer">
            <Sidebar />
            <Newsfeed/>
            <Rightbar/>
        </div>
        </>
    );
}