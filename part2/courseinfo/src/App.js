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
  console.log("course, ", course)
  console.log("part, ", parts)
  console.log("parts, ", course.parts)
  return <div>
    <Header name={name}/>
    <Content part={parts[0]} />
    <Content part={parts[1]} />
    <Content part={parts[2]} />
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