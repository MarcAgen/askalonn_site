import { useEffect, useState } from "react";
import { HomeButton } from '../homeButton/homeButton'
import {CircleDot, Circle} from "lucide-react"
import './ImagesSlider.css'

type ImageSliderProps = {
    images: {url: string, alt: string}[]
};

const HOME_BUTTON = [
  {buttonName: "event", href: "../event.html", alt: "event page"},
  {buttonName: "about", href: "../about.html", alt: "about us page"},
  {buttonName: "sponsor", href: "../sponsor.html", alt: "sponsor page"}
]

export function ImagesSlider({images}: ImageSliderProps) {

    const [imageIndex, setImageIndex] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{showNextImage()}, 7000)
    })

    function showNextImage()
    {
        setImageIndex(index => {
            if (index === images.length - 1) return 0
            return index + 1
        })
    }

    return (
        <div style={{width: "100%", height: "100%", position: "relative", marginTop: "20px"}}>
            <div style={{width: "100%", height: "100%", display: "flex", overflow: "hidden"}}>
                {images.map(({ url, alt}) =>
                    <img aria-hidden key={url} alt={alt} src={url} className="img-slider-img" style={{translate: `${-100 * imageIndex}%`}}/>,
                )}
                <div className="btn">
                    
                </div>
            </div>
            <div style={{position: "absolute", bottom: ".5rem", left: "50%", translate: "-50%", display: "flex", gap: ".25rem"}}>
                {images.map((_, index) => (
                    <button key={index} className="img-slider-dot-btn" onClick={() => setImageIndex(index)} aria-label={`View Image ${index}`}>{index === imageIndex ? <CircleDot aria-hidden/> : <Circle aria-hidden/>}</button>
                ))}
            </div>
        </div>
    )
}