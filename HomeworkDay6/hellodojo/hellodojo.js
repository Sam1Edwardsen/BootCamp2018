const container =
React.createElement('div', {},
  React.createElement('h1', null, 'Hello Dojo!'),
  React.createElement('h2', null, 'Things I need to do:'),
  React.createElement('ul', {},
    [
      React.createElement('li', { key: 'entry1' }, 'Learn React'),
      React.createElement('li', { key: 'entry2' }, 'Climb Mt. Everest'),
      React.createElement('li', { key: 'entry3' }, 'Run a marathon'),
      React.createElement('li', { key: 'entry4' }, 'Feed the dogs')
    ]
  )
);
ReactDOM.render(
    container,
    document.getElementById('root')
  );