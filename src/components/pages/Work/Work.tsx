import React from 'react';

export function Work () {
    const spotlight = 
        [
            'Oversaw the technical and production side of regional dance competitions.',
            'Led a team of around 10 people, working directly with the Show Director and the Event Manager to [].',
            'Facilitated troubleshooting and handled all logistics associated with set up and break down of the production site.',
            'Constantly traveled all over the nation.',
            'Handled when the team would eat, where we would eat, how much we could spend on food, and how the team would get food (whether I had to pick it up or have it delivered.).',
            'Handled a budget and recorded how much we would spend throughout the entire weekend.',
            'Recorded any issues faced during the show and reported it in the debrief.',
            'Handled means of transportation for the team.',
            'Made sure teammates always had everything they needed pre-show to ensure for a successful event.',
            'Capable of working every position on the job in case a teammate became unavailable for any reason (illness, quick break from long shifts, issue with transportation, etc.).'
        ];

    const niu = 
        [
            'Ensured setup and strike for audio equipment and sound checks were completed in advance of the start of a production.',
            'Worked with various audio and video software for different on-campus and off-campus events.',
            'Handled rigging for the university\'s new sound system.',
            'Handled capturing, webcasting, and editing of audio/video content with the use of various software.',
            'Recording engineer for live events and handled the mixing board.',
            'Work with a team to create an input list for the type of audio and video equipment that will be needed for an event and figure out how to set it up.',
            'Trained new employees.'
        ];
    return(
        <div className="app">
            <h1>Work History</h1>
            <section>
                <header>
                    <h2>Spotlight Events Inc</h2>
                    <span>(2020 - 2021)</span>
                </header>
                <ul className='duties'>
                    {
                        spotlight.map(
                            (jobs) => <li className="duty" key={jobs}>{jobs}</li>
                        )
                    }
                </ul>
            </section>
            <section>
                <h2>NIU Recording Crew (2018 - 2020)</h2>
                <ul className='duties'>
                    {
                        niu.map(
                            (duty) => <li className="duty" key={duty}>{duty}</li>
                        )
                    }
                </ul>
            </section>
        </div>
   );
}