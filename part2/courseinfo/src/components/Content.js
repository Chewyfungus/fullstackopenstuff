const Content = ({part}) => {
    const name = part.name
    const exercises = part.exercises
    // const id = part.id
  
    return <div>{name} {exercises}</div>
}

export default Content
