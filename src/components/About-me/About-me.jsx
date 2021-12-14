import './About-me.scss';
import { outlet, Link, Outlet } from "react-router-dom";

export default function About () {
    const navOptions = {
        home: "Home",
        sum: "Summary",
        work: "Work History",
        tech: "Technologies I know"
     };
         return (
        <div className="about">
            <nav className="pages"> 
                <ul className="options">
                    <li><Link to="/" className="home">{navOptions.home}</Link></li>
                    <li><Link to="/Sum" className="sum">{navOptions.sum}</Link></li>
                    <li><Link to="/Work" className="work">{navOptions.work}</Link></li>
                    <li><Link to="/Tech" className="tech">{navOptions.tech}</Link></li>
                 </ul>
            </nav> 
            <Outlet />
        </div>
         );
    }