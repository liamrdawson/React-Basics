const title = React.createElement(
    'h1',
    {
        id: 'main-title', 
        title: 'This is a title.'
    },
    'Initial React element'
);

const desc = React.createElement(
    'p',
    null, 
    'Check this out'
);

const header = React.createElement(
    'heaer',
    null,
    title, 
    desc
);

ReactDOM.render(
    header,
    document.getElementById('root')
);