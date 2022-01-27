import React from 'react';


function emojiMinutes(minutes){
    let interval = 5
    let emoji = "☕"
    let emojis = ""

    if (minutes >= 30){
        interval = 10
        emoji = "🍱"
    }

    for (let i = 0; i < minutes; i += interval){
        emojis += emoji
    }

    return emojis
}


function Article({minutes, title, date = "January 1, 1970", preview}){
    return (
        <article>
            <h3>{title}</h3>
            <small>
                {date}
                {emojiMinutes(minutes)}
                {minutes} minute read
                </small>
            <p>{preview}</p>
        </article>
    )
}


export default Article;