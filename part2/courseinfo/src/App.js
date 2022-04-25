const Header = props => <h1>{props.name}</h1>

const Content = ({part}) => {
  const name = part.name
  const exercises = part.exercises
  const id = part.id

  return <div>{name} {exercises}</div>
}

const Course = ({course}) => {
  const name = course.name
  const parts = course.parts
  let sum = 0
  let array1 = []
  
  // for (let i = 0; i < parts.length; i++) {
  //   sum += parts[i].exercises
  // } // works fine btw

  for (let i = 0; i < parts.length; i++) {
    array1.push(parts[i].exercises)
  }

  const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0);

  return <div>
    <Header name={name}/>
    <Content part={parts[0]} />
    <Content part={parts[1]} />
    <Content part={parts[2]} />
    <div>sum of exercises: {sumWithInitial}</div>
  </div>
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App