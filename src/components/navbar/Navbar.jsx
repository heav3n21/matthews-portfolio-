import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { animate, motion } from "framer-motion"
const Navbar = () => {


    return (
        <div className="navbar">
            <Sidebar />
            {/* side bar */}
            <div className="wrapper">
                <motion.span initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >Matthew Dev</motion.span>
                <div>
                    <a href="#">  <img src="/facebook.png" alt=""></img>  </a>
                    <a href="#">  <img src="/instagram.png" alt=""></img>  </a>
                    <a href="#">  <img src="/youtube.png" alt=""></img>  </a>
                    <a href="#">  <img src="/Dribble.png" alt=""></img>  </a>
                </div>
            </div>
        </div>




    )
}

export default Navbar