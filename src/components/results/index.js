import React from 'react';
import JSONPretty from 'react-json-pretty';
import Loading from '../loading/loading';
import 'react-json-pretty/themes/monikai.css';

function Results(props) {
console.log(props.data)
  return (
    <section>
     { props.data ?<><h2>Headers</h2><JSONPretty  data={props.data.headers}></JSONPretty><h2>Result</h2><JSONPretty  data={props.data}></JSONPretty></>  :  <Loading/>}
    </section>
  )
}

export default Results