import React, { useEffect, useState } from 'react';

function Slides({slides}) {

    let [slide,setSlide] = useState(slides[0])
    let [disablePev,setDisablePrev] = useState(true)
    let [disableNext,setDisableNext] = useState(false)
    let [disableRestart,setDisableRestart] = useState(true)
    
    const maxIndex= slides.length-1

    useEffect(()=>{
        let cIndex = slides.findIndex(item=>item.title === slide.title)

        if(cIndex === maxIndex ) {
            setDisableNext(true)
        } else if( cIndex === 0 ){
            setDisablePrev(true)
            setDisableRestart(true)
        }else if ( cIndex > 0  && maxIndex > cIndex )  {
            setDisableNext(false)
            setDisablePrev(false)
            setDisableRestart(false)
        }

    },[slide])

    const pass = (x) => {
        setSlide(slides[slides.findIndex(item=>item.title === slide.title)+x])
    }

    const restart = () => {
        setDisableNext(false)
        setDisableRestart(true)
        setSlide(slides[0])
    }


    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={restart} disabled={disableRestart}>Restart</button>
                <button data-testid="button-prev" className="small" disabled={disablePev} onClick={()=>{pass(-1)}}>Prev</button>
                <button data-testid="button-next" className="small" disabled={disableNext} onClick={()=>{pass(+1)}}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slide.title}</h1>
                <p data-testid="text">{slide.text}</p>
            </div>
        </div>
    );

}

export default Slides;
