import Header from './Header.js'
import Content from './Content.js'

const Course = ({course}) => {
    const name = course.name
    const parts = course.parts
    console.log("the parts ", parts)
    console.log(parts.length)
  
    const array1 = parts.map((parts) => parts.exercises)
    console.log(array1)
    console.log(array1.length)
  
    const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0);
  
  
  
    return <div>
      <Header name={name}/>
      { parts.map(parts => (<Content key={parts.id} part={parts}/>)) }
      <div>sum of exercises: {sumWithInitial}</div>
    </div>
  }

  export default Course