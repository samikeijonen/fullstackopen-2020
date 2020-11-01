function App() {

  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 10;

  function Header(props) {
    return (
      <h1>{props.course}</h1>
    );
  }

  function Part(props) {
    return (
      <p>
        {props.part} {props.exercises}
      </p>
    );
  }

  function Total(props) {
    return (
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    );
  }

  return (
    <main>
      <Header course={course} />
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
      <Total />
    </main>
  );
}

export default App;
