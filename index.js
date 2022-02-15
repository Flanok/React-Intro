function MyComponent() {
    return (
        <div className="start">
            <a className="rick-roll" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">CLICK ME!</a>
            <button className="list" type="button" data-toggle="collapse" data-target="#troll" aria-controls="troll"
            aria-expanded="false" aria-label="Toggle troll">
                <span className="troll-icon"></span>
            </button>

            <div className="collapse troll-collapse" id="troll">
                <ul className="troll-lyrics mr-auto">
                    <li className="troll-item active">
                        <a className="troll-link" href="#">We've known each other <span className="sr-only">(current)
                        </span></a>
                    </li>
                    <li className="troll-item">
                        <a className="troll-link" href="#">For so long</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

function Random() {
    return (
        <h1>NEVER GONNA GIVE YOU UP!</h1>
    )
}

ReactDOM.render(
    <div>
        <MyComponent />
        <Random />
    </div>,
    document.getElementById("root")
)