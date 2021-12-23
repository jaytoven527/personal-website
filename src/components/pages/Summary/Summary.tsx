export function Summary () {
    const summary = [
        "Multi-disciplinary artist, professional musician, recording arts technician, and front end engineer.",
        "Strong experience in using various audio and video software and equipment.",
        "Strong knowledge in HTML, CSS, and JavaScript as well as JS frameworks.",
        "Firm experience in working with teams and leading teams.",
        "Experience in event managing as well.",
        "Strong customer service experience.",
        "Strong experience with Microsoft Office and doing clerical work. Proficient in networking.",
        "Strong communication skills. Detail-oriented. Ability to quickly learn and expand knowledge base."
    ].join(' ');

    return (
        <div className="app">
            <section className='summary'>
            <h1>Summary</h1>
            <p className='article'>{summary}</p>
            </section>
        </div>
    );
}