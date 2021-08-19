import React from 'react'
import './history.scss';


function History(props) {
    function showHistoryData(result) {
        props.setHistory(result)
    }
    return (
        <>
           {props.history.map((element,idx)=>{
               return(
                  <div className='history'>
                    
                   <li key={idx} onClick={()=>{showHistoryData(element.result)}}>{element.method} {element.url}</li>
                   </div>
                   )
               })}  
        </>
    )
}

export default History