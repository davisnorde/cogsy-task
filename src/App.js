import './App.css'
import Card from './components/Card'

const data = [
  {
    id: 1,
    heading: 'Countdown Announcement Longer Heading',
    timestamp: 'Last edited 2 days ago',
    description: 'test',
    thumbnail: true,
    hasToggleFavorite: true
  },
  {
    id: 2,
    heading: 'Countdown Announcement',
    timestamp: 'Last edited 3 days ago',
    description: '',
    thumbnail: true,
    hasToggleFavorite: true
  },
]

const App = () => {
  return (
    <div className="App">
      {data.map(item => (
        <Card
          heading={item.heading}
          timestamp={item.timestamp}
          description={item.description}
          hasThumbnail={item.thumbnail}
          hasToggleFavorite={item.hasToggleFavorite}
          key={item.id}
        />
      ))}
      {/* <Card
        heading="Countdown Announcement Longer Heading"
        hasThumbnail={true}
        hasToggleFavorite={true}
      />
      <Card
        heading="Countdown Announcement"
        hasThumbnail={true}
        hasToggleFavorite={true}
      /> */}
    </div>
  );
}

export default App
