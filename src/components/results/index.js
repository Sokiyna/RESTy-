import React from 'react';
import Loading from '../loading/loading';




function Results(props) {
  return (
    <section>
      <pre data-testid="results">{props.data ? JSON.stringify(props.data, undefined, 2) : <Loading /> }</pre>
    </section>
  );
}

export default Results