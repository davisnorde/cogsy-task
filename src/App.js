import './App.css'
import Card from './components/Card'
import CardDescription from './components/CardDescription'
import CardEditMenu from './components/CardEditMenu'
import CardFooter from './components/CardFooter'
import CardHeading from './components/CardHeading'
import CardSvg from './assets/card-svg.svg'
import CardTimestamp from './components/CardTimestamp'
import CardThumbnail from './components/CardThumbnail'
import CardToggle from './components/CardToggle'

const App = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-12 container mx-auto">
      <Card>
        <CardThumbnail />
        <CardHeading>Countdown Announcement That is Very Long</CardHeading>
        <CardTimestamp datetime="2021-02-28T19:15" />
        <CardFooter>
          <CardToggle />
          <CardEditMenu />
        </CardFooter>
      </Card>

      <Card>
        <CardThumbnail src={CardSvg} type="svg"/>
        <CardHeading>Countdown Announcement</CardHeading>
        <CardTimestamp datetime="2021-02-27T19:15" />
        <CardFooter>
          <CardToggle />
          <CardEditMenu />
        </CardFooter>
      </Card>

      <Card>
        <CardThumbnail src="http://i3.ytimg.com/vi/DthREKWW7dQ/maxresdefault.jpg" type="image" alt="A generic thumbnail" />
        <CardHeading>Countdown Announcement</CardHeading>
        <CardTimestamp datetime="2021-02-27T19:15" />
        <CardFooter>
          <CardToggle />
          <CardEditMenu />
        </CardFooter>
      </Card>

      <Card>
        <CardThumbnail src="https://cdn.shopify.com/videos/c/vp/8e73fdd463694259be519f06e181e5dc/8e73fdd463694259be519f06e181e5dc.SD-480p-1.5Mbps.mp4" type="video" autoPlay muted />
        <CardHeading>Countdown Announcement</CardHeading>
        <CardTimestamp datetime="2021-02-27T19:15" />
        <CardFooter>
          <CardToggle />
          <CardEditMenu />
        </CardFooter>
      </Card>

      <Card>
        <CardHeading>Countdown Announcement</CardHeading>
        <CardTimestamp datetime="2021-02-27T19:15" />
        <CardDescription>
          A card is a flexible and extensible content container. It includes a wide variety of content, thumbnails, video, images, subheadings, actions, and content.
        </CardDescription>
        <CardFooter>
          <CardToggle />
          <CardEditMenu />
        </CardFooter>
      </Card>

      <Card>
        <CardHeading>Countdown Announcement</CardHeading>
        <CardTimestamp datetime="2021-02-27T19:15" />
        <CardFooter>
          <CardEditMenu />
        </CardFooter>
      </Card>

      <Card>
        <CardHeading>Countdown Announcement</CardHeading>
        <CardTimestamp datetime="2021-02-27T19:15" />
      </Card>
    </main>
  )
}

export default App
