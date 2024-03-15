import React from 'react'
import './style.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react';
import { ContextApp } from '../../context/context';

const Main = () => {
  const { onSent, recentPrompt, showResault, loading, resaultData, input, setInput, } = useContext(ContextApp)
  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon}/>
      </div>
      {!showResault ?
        <>
          <div className='main-container'>
            <div className='greet'>
              <p><span>Hello, Faisal.</span></p>
              <p className='help'>How can I help you today?</p>
            </div>
            <div className='cards'>
              <div className='card'>
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} />
              </div>
              <div className='card'>
                <p>Briefly summarize this concept Urban planing</p>
                <img src={assets.bulb_icon} />
              </div>
              <div className='card'>
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} />
              </div>
              <div className='card'>
                <p>Imporve the readability of the following code</p>
                <img src={assets.code_icon} />
              </div>
            </div>
          </div>
        </> : <div className='resault'>
          <div className='resault-title'>
            <img src={assets.user_icon}></img>
            <p className='my-1'>{recentPrompt}</p>
          </div>
          <div className='resault-data'>
            <img src={assets.gemini_icon}></img>
            {loading ? <div className='loader'>
              <hr />
              <hr />
              <hr />
            </div>
              : <p dangerouslySetInnerHTML={{ __html: resaultData }}></p>}
          </div>
        </div>}
      <div className='main-bottom'>
        <div className='search-box'>
          <input type='text' onChange={(e) => setInput(e.target.value)} value={input} placeholder='Enter a prompt here' />
          <div>
            <img src={assets.gallery_icon} />
            <img src={assets.mic_icon} />
            <img src={assets.send_icon} onClick={() => onSent()} />
          </div>
        </div>
        <p className='bottom-info'>
          Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
        </p>
      </div>

    </div>
  )
}

export default Main
