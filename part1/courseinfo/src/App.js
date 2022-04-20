const Header = (props) => {
  console.log("Header component " + props)
  return (
      <h1>
        {props.course}
      </h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part[0]} />
      <Part part={props.part[1]} />
      <Part part={props.part[2]} />
      <Total exercises = {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  console.log("Part component" + props)
  return (
      <p>{props.part.name} {props.part.exercises}</p>
  )
}


const Total = (props) => {
  return (
    <p>{props.exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part={[part1, part2, part3]}/>
    </div>
  )
}

export default App