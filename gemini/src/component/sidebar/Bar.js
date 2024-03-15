import React, { useContext, useState } from 'react';
import './style.css';
import { assets } from '../../assets/assets';
import { ContextApp } from '../../context/context';

const Bar = () => {
    const [extend, setExtend] = useState(false);
    const { onSent, prevPrompt, setRecentPrompt,newChat} = useContext(ContextApp);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    }

    return (
        <div className='sidebar'>
            <div className='top'>
                <img onClick={() => setExtend(prev => !prev)} className='menu' src={assets.menu_icon} alt="Menu icon" />
                <div className='new-chat' onClick={()=>newChat()}>
                    <img src={assets.plus_icon} alt="Plus icon" />
                    {extend ? <p className='my-3 mx-2'>New Chat</p> : null}
                </div>
                {extend && prevPrompt && Array.isArray(prevPrompt) && (
                    <div className='recent'>
                        <p className='recent-title'>Recent</p>
                        {prevPrompt.map((item, index) => (
                            <div key={index} onClick={() => loadPrompt(item)} className='recent-entry'>
                                <img src={assets.message_icon} alt="Message icon" />
                                <p>{item.slice(0, 18)} ...</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className='bottom'>
                <div className='bottom-item recent-entry'>
                    <img src={assets.question_icon} alt="Question icon" />
                    {extend ? <p>Help</p> : null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.setting_icon} alt="Setting icon" />
                    {extend ? <p>Setting</p> : null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.history_icon} alt="History icon" />
                    {extend ? <p>Activity</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Bar;














// import React, { useContext, useState } from 'react';
// import './style.css'
// import { assets } from '../../assets/assets'
// import { ContextApp } from '../../context/context';

// const Bar = () => {
//     const [extend, setExtend] = useState(true);
//     const { onsent, prevPrompt, setRecentPrompt } = useContext(ContextApp);

//     const loadPrompt = async (prompt) => {
//         setRecentPrompt(prompt);
//         await onsent(prompt);
//     }

//     return (
//         <div className='sidebar'>
//             <div className='top'>
//                 <img onClick={() => setExtend(prev => !prev)} className='menu' src={assets.menu_icon} />
//                 <div className='new-chat'>
//                     <img src={assets.plus_icon} />
//                     {extend ? <p className='my-3 mx-2'>New Chat</p> : null}
//                 </div>
//                 {extend && prevPrompt && Array.isArray(prevPrompt) && // Added condition here
//                     <div className='recent'>
//                         <p className='recent-title'>Recent</p>
//                         {prevPrompt.map((item, index) => (
//                             <div key={index} onClick={() => { loadPrompt(item) }} className='recent-entry'>
//                                 <img src={assets.message_icon} />
//                                 <p>{item.slice(0, 18)} ...</p>
//                             </div>
//                         ))}
//                     </div>
//                 }
//             </div>
//             <div className='bottom'>
//                 <div className='bottom-item recent-entry'>
//                     <img src={assets.question_icon} />
//                     {extend ? <p>Help</p> : null}
//                 </div>
//                 <div className='bottom-item recent-entry'>
//                     <img src={assets.setting_icon} />
//                     {extend ? <p>Setting</p> : null}
//                 </div>
//                 <div className='bottom-item recent-entry'>
//                     <img src={assets.history_icon} />
//                     {extend ? <p>Activity</p> : null}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Bar;