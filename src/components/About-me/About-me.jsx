import { Outlet, Link } from "react-router-dom";

export default function About () {
    const navOptions = {
        home: "Home",
        sum: "Summary",
        work: "Work History",
        tech: "Technologies I know"
     };
         return (
            <nav> 
                <ul>
                    <li><Link to="/">{navOptions.home}</Link></li>
                    <li>{navOptions.sum}</li>
                    <li>{navOptions.work}</li>
                    <li>{navOptions.tech}</li>
                 </ul>
            </nav> 
         );
    }