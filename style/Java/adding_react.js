const heading = React.createElement(
    'h1',
    { id: 'abc' },
    'This is a heading.'
  );
  
  ReactDOM.render(
    heading,
    document.getElementById('react-container')
  );
  //for paragraph
  const paragraph = React.createElement(
    'p',
    null,
    'This is a test paragraph which is created by React. This paragraph has no attribute and is contained inside a div which is also created by React.'
  );
  //create a new element
  const box = React.createElement(
    'div',
    { className: 'box'},
    //two arguments
    heading,
    paragraph,
  );
  
  ReactDOM.render(
    box,
  
    document.getElementById('react-container')
  );
  