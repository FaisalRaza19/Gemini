import React, { createContext, useState } from "react";
import runChat from '../config/gemini';

export const ContextApp = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState('');
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResault, setShowResault] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resaultData, setResaultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResaultData(prev => prev + nextWord);
        }, 75 * index);
    };

    const newChat = ()=>{
        setLoading(false);
        setShowResault(false)
    };

    const onSent = async (prompt) => {
        setResaultData("");
        setLoading(true);
        setShowResault(true);
        setInput(" ");
        let response;
        if (prompt !== undefined) {
            response = await runChat(prompt);
            setRecentPrompt(prompt);
        } else {
            setPrevPrompt(prev => [...prev, input]);
            response = await runChat(input);
            setRecentPrompt(input);
        }
        let responseArray = response.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            } else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>");
        let newResponseArray = newResponse2.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord + " ");
        }
        setLoading(false);
    };

    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResault,
        loading,
        resaultData,
        input,
        setInput,
        newChat
    };

    return (
        <ContextApp.Provider value={contextValue}>
            {props.children}
        </ContextApp.Provider>
    );
};

export default ContextProvider;