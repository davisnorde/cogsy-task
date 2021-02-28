import './App.css'
import Card from './components/Card'

const data = [
  {
    id: 1,
    heading: 'Countdown Announcement Longer Heading',
    timestamp: 'Last edited 2 days ago',
    description: 'test',
    thumbnail: true,
    hasToggleFavorite: true,
    hasMenuTrigger: true,
  },
  {
    id: 2,
    heading: 'Countdown Announcement',
    timestamp: 'Last edited 3 days ago',
    description: '',
    thumbnail: true,
    hasToggleFavorite: true,
    hasMenuTrigger: true,
  },
  {
    id: 3,
    heading: 'Countdown Announcement',
    timestamp: 'Last edited 2 days ago',
    description: 'A card is a flexible and extensible content container. It includes a wide variety of content, thumbnails, video, images, subheadings, actions, and content.',
    thumbnail: false,
    hasToggleFavorite: true,
    hasMenuTrigger: true,
  },
  {
    id: 4,
    heading: 'Countdown Announcement',
    timestamp: 'Last edited 2 days ago',
    description: '',
    thumbnail: false,
    hasToggleFavorite: false,
    hasMenuTrigger: false,
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
          hasMenuTrigger={item.hasMenuTrigger}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default App
