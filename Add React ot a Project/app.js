const title = `React h1 element`;
const titleId = `main-title`;
const desc = `rendering this to the DOM`;
const name = `Liam`;

const header = (
    <header>
        <h1 id={titleId}>{name}'s test React Element</h1>
        <p className="main-desc">{desc}</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);