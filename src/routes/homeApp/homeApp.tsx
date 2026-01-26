//slide import for slidshow
import slide1 from '../../../assets/slides/bingo.svg'
import slide2 from '../../../assets/slides/casto_mania.svg'
import slide3 from '../../../assets/slides/suce.svg'
import slide4 from '../../../assets/slides/strange.svg'
import slide5 from '../../../assets/slides/sfg.svg'

//import apps
import { ImagesSlider } from '../../componnent/imagesSlider/ImagesSlider'
import { HomePres } from '../../componnent/homePres/homePres'
import './homeApp.css'

const IMAGES = [
  {url: slide1, alt: "SmashMania Bingo"},
  {url: slide2, alt: "CastoMania Paper"},
  {url: slide3, alt: "Twitch comment"},
  {url: slide4, alt: "Eyes of the big boss"},
  {url: slide5, alt: "super fort gayant anouncement"}
]

function HomeApp() {
  return (
    <div>
      <div style={{height: "100%", left: 0, top: 0}}>
        <div style={{position: "relative", marginTop: "90px", marginBottom: "90px"}}>
          <ImagesSlider images={IMAGES} />
          <HomePres />
        </div>
      </div>
    </div>
  )
}

export default HomeApp
