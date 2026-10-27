export function MoodBoardItem ({color, image, description}) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color}}>
      <img className="mood-board-image" src={image}/>
      <h3 className="mood-board-text">{description}</h3>
    </div>
  )
}

export function MoodBoard() {
  const moodBoardItems = [
    {
      id: 1,
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      color: "red",
      description: "Clear blue ocean water surrounding a rocky shore"
    },
    {
      id: 2,
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      color: "blue",
      description: "Green grass and red flowers growing beside the blue sea"
    },
    {
      id: 3,
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      color: "yellow",
      description: "Clear blue ocean water surrounding a rocky shore"
    },
  ]
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        {moodBoardItems.map(item => (
          <MoodBoardItem 
            key={item.id}
            color={item.color} 
            image={item.image} 
            description={item.description}
            />
        ))}
      </div>
    </div>
  )
}