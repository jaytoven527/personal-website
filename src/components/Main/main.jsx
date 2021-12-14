import './main.scss'

const headers = {
    Spotlight: "Spotlight (2020 - 2021)",
    NIU: "NIU Recording Crew (2018 - 2020)",
    Summary: "Summary",
    Tech: "Technologies I Know"
};

export default function Summary () {
    const summary = "Multi-disciplinary artist, professional musician, recording arts technician, and front end engineer. Strong experience in using various audio and video software and equipment. Strong knowledge in HTML, CSS, and JavaScript as well as JS frameworks. Firm experience in working with teams and leading teams. Experience in event managing as well. Strong customer service experience. Strong experience with Microsoft Office and doing clerical work. Proficient in networking. Strong communication skills. Detail-oriented. Ability to quickly learn and expand knowledge base."

    return (
     <div className="app">
        <section>
            <h1>{headers.Summary}</h1>
            <p>{summary}</p>
        </section>
    </div>
    );
}

export function Work () {
    const spotlight = "	Oversaw the technical and production side of regional dance competitions. Led a team of 6 to 9 and worked directly with the Show Director and the Event Manager. Facilitated troubleshooting and handled all logistics associated with set up and break down of the production site. Constantly traveled all over the nation. Handled when the team would eat, where we would eat, how much we could spend on food, and how the team would get food (whether I had to pick it up or have it delivered.). Handled a budget and recorded how much we would spend throughout the entire weekend. Recorded any issues faced during the show and reported it in the debrief. Handled means of transportation for the team. Made sure teammates always had everything they needed pre-show to ensure for a successful event. Capable of working every position on the job in case a teammate became unavailable for any reason (illness, quick break from long shifts, issue with transportation, etc.)."
    const niu = " Ensured setup and strike for audio equipment and sound checks were completed in advance of the start of a production.	Worked with various audio and video software for different on-campus and off-campus events.	Handled rigging for the university’s new sound system.	Handled capturing, webcasting, and editing of audio/video content with the use of various software.	Recording engineer for live events and handled the mixing board. Work with a team to create an input list for the type of audio and video equipment that will be needed for an event and figure out how to set it up. Trained new employees."
   return(
    <div className="app">
        <section>
            <h1>{headers.Spotlight}</h1>
            <p>{spotlight}</p>
        </section>
        <section>
            <h1>{headers.NIU}</h1>
            <p>{niu}</p>
        </section>
    </div>
   );

}

export function Tech () {
const tech = ""
return (
<div className="app">
    <section>
        <h1>{headers.Tech}</h1>
        <p></p>
    </section>
</div>
);

}



