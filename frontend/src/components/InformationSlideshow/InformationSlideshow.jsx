import React from "react"
import {useState} from "react"
import "./InformationSlideshow.css"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

export default function InformationSlideshow() {
    const sliderData = ["This is Paris", "Known as the city of love, it attracts millions of tourists a year",
                        "Located in Western Europe, it is few hours away by plane", "And be sure to fill up on French cuisine!"]

    const [current, setCurrent] = useState(0)
    const length = sliderData.length
    
    function nextSlide (){
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    function prevSlide (){
        setCurrent(current === 0 ? length - 1: current - 1)
    }
  
    if(sliderData.length <= 0){
        return null;
    }

    return (
    <div className="information-slideshow">
        <h1>Information Slideshow!</h1>
        <div className="slideshow">
            <ChevronLeftIcon className="left-arrow" onClick={prevSlide}/>
            {sliderData.map((paragraph, index) => (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (<div class="moving-slide">
                        <img className="slide-pic" src="https://danaberez.com/wp-content/uploads/2018/11/paris-eiffel-tower.jpg" alt="img of effiel tower"/>
                        <div className="slide-paragraph">
                            <h2 className="paragraph-text">{paragraph}</h2>
                        </div>
                    </div>)}
                    
                </div>
            ))}
            <ChevronRightIcon className="right-arrow" onClick={nextSlide} />
        </div>
    </div>
  )
}
