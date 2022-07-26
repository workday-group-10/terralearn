import React from "react"
import axios from "axios";
import {useState, useEffect} from "react"
import "./InformationSlideshow.css"
import red from "@material-ui/core/colors/red";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

export default function InformationSlideshow(props) {

    //takes in input thats passed in from geoapify api
    const input = props.location

    //usestates
    const [errors, setErrors] = useState({})
    const [firstResponse, setFirstReponse] = useState()
    const [description, setDescription] = useState(["This is Paris", "Known as the city of love, it attracts millions of tourists a year",
                                                        "Located in Western Europe, it is few hours away by plane","And be sure to fill up on French cuisine!" ])
    const [image, setImage] = useState("")

    // takes in information 
    if (input === undefined){
        input = 0

    }
    
    
    
    const endpoints = "https://en.wikipedia.org/w/api.php?"
    
    const params = {
        origin: '*',
        format: 'json',
        action: 'query',
        prop: 'extracts|pageimages',
        exsentences: 5,
        exintro: true,
        explaintext: true,
        generator: 'search',
        gsrlimit:1,
        // prop: 'pageimages',
        piprop: 'thumbnail',
        pithumbsize: 1000,



    }


    const isInputEmpty = input => {
        if (!input || input === ''){
           return true; 
        } 
        return false;
    }

    
    // console.log(isInputEmpty(input), input)
    async function getData(){
        if(input != undefined){
            params.gsrsearch = input
            try{
                const response = await axios.get(endpoints, {params})
        //    console.log(response)
           if (response != undefined){
            // console.log(Object.values(response.data.query.pages)[0])
            setFirstReponse(Object.values(response.data.query.pages)[0])
           }
            } catch (err){
                setErrors(err)
            }
           
           
        }
    }
    useEffect(() => {
        if(input == 0){
            setDescription(["Unfortunately, this location does not have information available. :("])
            setImage("https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
        }
            
    }, []);

    
    useEffect(() => {
        if(input != undefined){
            getData();
            if (firstResponse != undefined){
                // console.log("print first resposnse", firstResponse)
                var result = firstResponse.extract.match( /[^\.!\?]+[\.!\?]+/g );
                // console.log(result)
                setDescription(result)
                setImage(firstResponse.thumbnail.source)
            }
            
        }
        if(input == 0){
            setDescription(["Unfortunately, this location does not have information available. :("])
        }
    }, [input]);
    useEffect(() => {
    
        if (firstResponse != undefined){
            // console.log("print first resposnse", firstResponse)
            var result = firstResponse.extract.match( /[^\.!\?]+[\.!\?]+/g );
            // console.log(result)
            setDescription(result)
            
            setImage(firstResponse.thumbnail.source)
        }
        if(input == 0){
        
            setImage("https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
            setDescription(["Unfortunately, this location does not have information available. :("])
        }

    }, [firstResponse]);


    //dummy data of location person guessed, will change to wiki data information
    const sliderData = [
    {image: "https://danaberez.com/wp-content/uploads/2018/11/paris-eiffel-tower.jpg", text: "This is Paris"},
    {image: "https://cdn.britannica.com/35/155335-050-D0C61BB7/Notre-Dame-de-Paris-France.jpg", text: "Known as the city of love, it attracts millions of tourists a year"},
    {image: "https://media.cntraveler.com/photos/57d87670fd86274a1db91acd/master/pass/most-beautiful-paris-pont-alexandre-iii-GettyImages-574883771.jpg", text: "Located in Western Europe, it is few hours away by plane"},
    {image: "https://www.parisdiscoveryguide.com/image-files/x800-louvre-at-night-woman-in-red.jpg.pagespeed.ic.D3YebUt2fD.jpg", text: "And be sure to fill up on French cuisine!"}]


    const [current, setCurrent] = useState(0)
    const length = description.length
    
    //functions that change the item of data user is looking at
    function nextSlide (){
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    function prevSlide (){
        setCurrent(current === 0 ? length - 1: current - 1)
    }
    
    //if theres no data nothing will render
    if(firstResponse === undefined){
        return null;
    }

    return (
    <div className="information-slideshow">
        <h1>Information Slideshow!</h1>
        <div className="slideshow">
            <div className="arrowbg">
                <ChevronLeftIcon className="left-arrow" onClick={prevSlide}/>
            </div>
            {/* maps through sliderdata array of objects, and renders a div that displays the info in the objects */}
            {description.map((item, index) => (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (<div class="moving-slide">
                        <img className="slide-pic" src={image} alt="img of effiel tower"/>
                        <div className="slide-paragraph">
                            <h2 className="paragraph-text">{item}</h2>
                        </div>
                    </div>)}
                    
                </div>
            ))}
            <div className="arrowbg">
                <ChevronRightIcon className="right-arrow" onClick={nextSlide} />
      
            </div>
        </div>
    </div>
  )
}


