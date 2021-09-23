import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
  const [seenIndexs, setSeenIndexs] = useState([]);
  const [values, setValues] = useState<{[key: string]: string}>({});
  const [value, setValue] = useState('');

  const fetchSeenIndexs = async () => {
    const indexs = await axios.get('/api/values/all');
    setSeenIndexs(indexs.data);
  }
  const fetchValues = async () => {
    const values = await axios.get('/api/values/current');
    setValues(values.data);
  };

  useEffect(() => {
    fetchValues();
    fetchSeenIndexs();
  }, []);

  return <div>
    <h1>Fibonacci Calculator</h1>
    <form onSubmit={evt => {
      evt.preventDefault();
      axios.post('/api/values', {
        index: value
      });
      setValue('');
    }}>
      <label>Input index:</label>
      <input value={value} onChange={evt => setValue(evt.target.value)}></input>
      <input type='submit'>Submit</input>
    </form>

    <h3>The index have been calculated</h3>
    <p>{seenIndexs.map(({number}) => number).join(', ')}</p>
    <h3>The values have been calculated</h3>
    <div>
      {Object.keys(values).map(key => <p key={key}>Index: {key}, fibonacci value is {values[key]}</p>)}
    </div>
  </div>
}
