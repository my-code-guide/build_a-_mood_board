export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  )
}

export function MoodBoard() {
  const moodBoardItems = [
    {
      id: 1,
      color: "green",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "Path Way"
    },
    {
      id: 2,
      color: "blue",
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "Shore"
    },
    {
      id: 3,
      color: "pink",
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "Grass"
    }
  ]

  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        {
          moodBoardItems.map(item => (
            <MoodBoardItem  key={item.id} color={item.color} image={item.image} description={item.description} />
          ))
        }
      </div>
    </div>
  )
}
