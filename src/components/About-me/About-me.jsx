import './About-me.scss';
import { Link } from "react-router-dom";

export default function About () {
    const navOptions = {
        home: "Home",
        sum: "Summary",
        work: "Work History",
        tech: "Technologies I know"
     };
         return (
        <div className="About">
            <nav className="Pages"> 
                <ul className="Options">
                    <li className="Links"><Link to="/" className="Home">{navOptions.home}</Link></li>
                    <li className="Links"><a className="Sum">{navOptions.sum}</a></li>
                    <li className="Links"><a className="Work">{navOptions.work}</a></li>
                    <li className="Links"><a className="Tech">{navOptions.tech}</a></li>
                 </ul>
            </nav> 
        </div>
         );
    }