import React from 'react';

function Issue(props) {
    return(
        <tr class="border_bottom">
            <td key={props.index}>
                <a href={props.url}><b>{props.title}</b></a><br/>
                <span class="subtitle">#{props.number} opened by {props.user}</span><br/>
                <p>{props.body}</p>
            </td>
        </tr> 
    )
}

export default Issue;