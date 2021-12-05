import './App.scss';
import React from 'react'


const opening      = (<h1>Hello, visitor!</h1>);
const introduction = "My name is Jordan and welcome to my website! I  am a Front End Engineer with a background in PHP, MySQL, JavaScript, CSS, and HTML. Feel free to check out the options below:"


function App() {
    return (
        <div className="App">
            <div className="App-opener">
                {opening}
                <hr/>
                <p>{introduction}</p>
                <hr/>
            </div>
            <div className="Options">
                <div className="Github">
                    <p title="Jordan's Github Profile">
                        <a href="https://github.com/jaytoven527">Check out my Github!</a>
                    </p>
                </div>
                <div className="Linkedin">
                    <p title="Jordan's Linkedin Profile">
                        <a href="https://www.linkedin.com/in/jordan-norwood-a971b8186/">Hire me.</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;