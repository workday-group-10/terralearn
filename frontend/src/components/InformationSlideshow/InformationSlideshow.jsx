import React from "react"
import axios from "axios";
import {useState} from "react"
import "./InformationSlideshow.css"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

export default function InformationSlideshow(props) {
    const input = props.location
    const [errors, setErrors] = useState({})

    const endpoints = "https://en.wikipedia.org/w/api.php?"
    const params = {
        origin: '*',
        format: 'json',
        action: 'query',
        prop: 'extracts',
        exsentences: 5,
        exintro: true,
        generator: 'search',
        explaintext: true,
        prop: 'imageinfo',
        iiprop: 'url'|'size',
        imlimit: 5,

    }

    const isInputEmpty = input => {
        if (!input || input === ''){
           return true; 
        } 
        return false;
    }

    console.log(input)
    async function getData(){
        params.gsrsearch = input;
        if (isInputEmpty){
            try{
                const response = await axios.get(endpoints, {params})
                console.log(endpoints, {params})
                console.log(response.data.query)
                // console.log(Object.values(response.data.query.pages)[0])
            } catch (err) {
                setErrors({"error": err})
            }
            

            
        }
        
    }
    getData();

    


    //dummy data of location person guessed, will change to wiki data information
    const sliderData = [
    {image: "https://danaberez.com/wp-content/uploads/2018/11/paris-eiffel-tower.jpg", text: "This is Paris"},
    {image: "https://cdn.britannica.com/35/155335-050-D0C61BB7/Notre-Dame-de-Paris-France.jpg", text: "Known as the city of love, it attracts millions of tourists a year"},
    {image: "https://media.cntraveler.com/photos/57d87670fd86274a1db91acd/master/pass/most-beautiful-paris-pont-alexandre-iii-GettyImages-574883771.jpg", text: "Located in Western Europe, it is few hours away by plane"},
    {image: "https://www.parisdiscoveryguide.com/image-files/x800-louvre-at-night-woman-in-red.jpg.pagespeed.ic.D3YebUt2fD.jpg", text: "And be sure to fill up on French cuisine!"}]


    const [current, setCurrent] = useState(0)
    const length = sliderData.length
    
    //functions that change the item of data user is looking at
    function nextSlide (){
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    function prevSlide (){
        setCurrent(current === 0 ? length - 1: current - 1)
    }
    
    //if theres no data nothing will render
    if(sliderData.length <= 0){
        return null;
    }

    return (
    <div className="information-slideshow">
        <h1>Information Slideshow!</h1>
        <div className="slideshow">
            <ChevronLeftIcon className="left-arrow" onClick={prevSlide}/>
            {/* maps through sliderdata array of objects, and renders a div that displays the info in the objects */}
            {sliderData.map((item, index) => (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (<div class="moving-slide">
                        <img className="slide-pic" src={item.image} alt="img of effiel tower"/>
                        <div className="slide-paragraph">
                            <h2 className="paragraph-text">{item.text}</h2>
                        </div>
                    </div>)}
                    
                </div>
            ))}
            <ChevronRightIcon className="right-arrow" onClick={nextSlide} />
        </div>
    </div>
  )
}
