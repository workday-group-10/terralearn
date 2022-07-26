import React from "react"
import axios from "axios";
import {useState, useEffect} from "react"
import "./InformationSlideshow.css"
import red from "@material-ui/core/colors/red";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


export default function InformationSlideshow(props) {
    const input = props.location
    if (input === undefined){
        input = "Page not found"
    }
    const [errors, setErrors] = useState({})
    const [firstResponse, setFirstReponse] = useState()
    const [description, setDescription] = useState(["This is Paris", "Known as the city of love, it attracts millions of tourists a year",
                                                    "Located in Western Europe, it is few hours away by plane","And be sure to fill up on French cuisine!" ])

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

           const response = await axios.get(endpoints, {params})
        //    console.log(response)
           if (response != undefined){
            // console.log(Object.values(response.data.query.pages)[0])
            setFirstReponse(Object.values(response.data.query.pages)[0])
           }
           
        }
    }

    
    useEffect(() => {
        if(input != undefined){
            getData();
            if (firstResponse != undefined){
                // console.log("print first resposnse", firstResponse)
                var result = firstResponse.extract.match( /[^\.!\?]+[\.!\?]+/g );
                // console.log(result)
                setDescription(result)
            }
            
        }
    }, [input]);
    useEffect(() => {
    
        if (firstResponse != undefined){
            // console.log("print first resposnse", firstResponse)
            var result = firstResponse.extract.match( /[^\.!\?]+[\.!\?]+/g );
            // console.log(result)
            setDescription(result)
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
                        <img className="slide-pic" src={firstResponse.thumbnail.source} alt="img of effiel tower"/>
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




    // async function getData(){
    //     params.gsrsearch = input;
    //     if (isInputEmpty){
    //         try{
    //             console.log("in first try")
    //             const response = await axios.get(endpoints, {params})
    //             // console.log(endpoints, {params})
    //             // console.log(response.data.query)
    //             setFirstReponse(Object.values(response.data.query.pages)[0])
    //             //.images[0]).title
    //             console.log("first response", firstResponse)
    //             // console.log(Object.values(response.data.query.pages)[0])
    //         } catch (err) {
    //             setErrors({"error": err})
    //         }
            // try{
            //     console.log("in second try", response)
            //     params_two = {
            //         action: "query",
            //         format: "json",
            //         prop: "imageinfo",
            //         titles: (Object.values(response.data.query.pages)[0].images[0]).title,
            //         iiprop: "url",
            //     };
            //     const imageResponse = await axios.get(endpoints, {params_two})
            //     console.log("image response", imageResponse)

            // } catch (err){
            //     setErrors({"error": err})
            // }
            

            
    //     }
        
    // }
    // params.gsrsearch = input;
    // async function getData(){
    //     params.gsrsearch = input;
    //     if (isInputEmpty){
    //         try{
    //             console.log("in first try")
                
    //             const response = await axios.get(endpoints, {params})
    //             console.log("first response", response.data)
    //             setFirstReponse(response.data.query.pages)
                
                
    //         } catch (err) {
    //             setErrors({"error": err})
    //         }
            
    //     }
        
    // }
    // useEffect(() => {
       
    //     getData();
    //     console.log("first error", firstResponse)
    //   }, [input]);


      
    //   console.log("usestate", Object.values(firstResponse)[0])
    //   useEffect(() => {
    //     async function getImages(){
    //         const tempImg = ("image arra", Object.values(firstResponse)[0].images)[0]
    //         console.log("title of image", tempImg.title)
    //         // const params_two = {
    //         //     origin: '*',
    //         //     format: 'json',
    //         //     action: 'query',
    //         //     prop: 'imageinfo',
    //         //     titles: tempImg.title,
    //         //     iiprop: "url",
    //         // };
    //         // params.gsrsearch = input;
    //         // try{
                
    //         //     console.log("in second try")
                
    //         //     const imageResponse = await axios.get(endpoints, {params_two})
    //         //     console.log("image response", imageResponse)

    //         // } catch (err){
    //         //     setErrors({"error": err})
    //         // }


    //         var url = "https://en.wikipedia.org/w/api.php"; 

    //         var params2 = {
    //             action: "query",
    //             format: "json",
    //             prop: "imageinfo",
    //             titles: tempImg
    //         };
            
    //         url = url + "?origin=*";
    //         Object.keys(params2).forEach(function(key){url += "&" + key + "=" + params2[key];});
            
    //         fetch(url)
    //             .then(function(response){return response.json();})
    //             .then(function(response) {
    //                 var pages = response.query.pages;
    //                 console.log(pages)
    //                 for (var p in pages) {
    //                     console.log(pages[p].title);
    //                 }
    //             })
    //             .catch(function(error){console.log(error);});





      // const params = {
    //     origin: '*',
    //     format: 'json',
    //     action: 'query',
    //     prop: 'extracts|pageimages',
    //     exsentences: 5,
    //     exintro: true,
    //     generator: 'search',
    //     explaintext: true,
    //     pilimit: 1,

    // }      
                
            
            
    //     }
    //     getImages();
    //   }, [firstResponse]);

