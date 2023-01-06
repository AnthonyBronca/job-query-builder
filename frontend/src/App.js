import React, { useState, useEffect } from 'react';
import buildQuery from './helpers/query-builder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faSquareCheck } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [sites, setSites] = useState('');
  const [terms, setTerms] = useState('');
  const [locations, setLocations] = useState('');
  const [omit, setOmit] = useState('');
  const [boolean, setBoolean] = useState('');
  const [copied, setCopied] = useState(false)



  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = {
      sites,
      terms,
      locations,
      omit
    };

    let res = buildQuery(form);
    setBoolean(res);
    window.scrollTo(0, 0)
  }

  const handleCopy = async (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(boolean);
    setCopied(true)
    setTimeout(() => setCopied(false), 3000);

  }

  let siteSuggestions = 'Example: greenhouse.io,app.dover.io,lever.co,jobs.ashbyhq.com'
  let keyWordSuggestions = 'Example: javascript,python,react,front end developer,front-end developer,back end developer,back-end developer,full stack developer'
  let locationExample = 'Example: CA,California,Los Angeles,Remote';
  let omittedExample = 'Example: sr.,senior,java,jinja'

  //comment for deploy
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Job Seekers Boolean Query Builder</h1>
        <p>To use, please complete the forms below and press submit when you want to create a boolean!</p>
        <h3>Result</h3>
        {boolean.length > 0 ?
          <>
            <div style={{
              'border': '1px solid black',
              'fontSize': '14px',
              color: 'black',
              fontWeight: 'bold',
              width: '80%',
              padding: '15px'

            }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative', zIndex: '999', bottom: '10px' }}>
                {!copied ? <button
                  onClick={(e) => handleCopy(e)}
                  style={{ backgroundColor: 'white' }}>
                  <FontAwesomeIcon icon={faClipboard} className='user-icon' />
                </button> : <FontAwesomeIcon icon={faSquareCheck} className='user-icon' />}
              </div>
              <span>{boolean}</span>
            </div>
          </> : null
        }
        <div className="quiery-container">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h3>Sites</h3>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ margin: '5px' }}>Please type your Sites comma seperated.</span>
              <span style={{ margin: '5px' }}>Example: mysite.com,linkedin.com,angellist.io</span>
              <span style={{ margin: '5px' }}>{siteSuggestions}</span>
            </div>
            <input
              type='textarea'
              name='sites'
              className='sites-box'
              placeholder='Type sites you would like to search for here...'
              style={{ width: '40%', height: '100px', margin: '15px', fontSize: '14px', paddingLeft: '10px' }}
              onChange={(e) => setSites(e.target.value)}
            ></input>
            <h3>Key Words</h3>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ margin: '5px' }}>Please type your keywords comma seperated.</span>
              <span style={{ margin: '5px' }}>Example: javascript,python,react</span>
              <span style={{ margin: '5px' }}>{keyWordSuggestions}</span>
            </div>
            <input
              type='textarea'
              name='keywords'
              className='keywords-box'
              placeholder='Type keywords you would like to search for here...'
              style={{ width: '40%', height: '100px', margin: '15px', fontSize: '14px', paddingLeft: '10px' }}
              onChange={(e) => setTerms(e.target.value)}
            ></input>

            <h3>Location Preferences</h3>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ margin: '5px' }}>Please type your keywords comma seperated.</span>
              <span style={{ margin: '5px' }}>{locationExample}</span>
            </div>
            <input
              type='textarea'
              name='locations'
              className='locations-box'
              placeholder='Type locations you would like to search for here...'
              style={{ width: '40%', height: '100px', margin: '15px', fontSize: '14px', paddingLeft: '10px' }}
              onChange={(e) => setLocations(e.target.value)}
            ></input>

            <h3>Omitted Keywords</h3>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ margin: '5px' }}>Please type your omitted keywords comma seperated.</span>
              <span style={{ margin: '5px' }}>{omittedExample}</span>
            </div>
            <input
              type='textarea'
              name='omitted'
              className='omitted-box'
              placeholder='Type keywords you would like to omit for here...'
              style={{ width: '40%', height: '100px', margin: '15px', fontSize: '14px', paddingLeft: '10px' }}
              onChange={(e) => setOmit(e.target.value)}
            ></input>
          </div>
        </div>
        <button style={{
          margin: '20px',
          backgroundColor: 'blue',
          border: '1px solid black',
          borderRadius: '50rem',
          width: '10rem',
          height: '3rem',
          color: 'white',
          fontFamily: "sans-serif",
          fontWeight: 'bold'
        }}
          onClick={(e) => handleSubmit(e)}>Get My Query!</button>
      </div>
    </>
  );
}

export default App;
