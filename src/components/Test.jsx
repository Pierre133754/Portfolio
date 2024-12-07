import { useEffect, useState } from 'react'

export default function Test() {
    const [comments, setComments] = useState()
    
    useEffect(() => {
        fetch('https://sqltestbackend-production.up.railway.app/comments').then(res => res.json()).then(data => setComments(data))
    },[])

    return (
        <>
            <div className="input">
                <form className="inputForm" onSubmit={async (e) => {
                    e.preventDefault()
                    const user = document.getElementById('user').value
                    const comment = document.getElementById('comment').value
                    await fetch('https://sqltestbackend-production.up.railway.app/comments', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            user: user,
                            comment: comment
                        })
                    })
                    fetch('https://sqltestbackend-production.up.railway.app/comments').then(res => res.json()).then(data => setComments(data))
                }}>
                    <input type="text" id="user" name="user" placeholder="Username"></input>
                    <textarea id="comment" name="comment" placeholder="Message" rows={5} cols={50}></textarea>
                    <input type="submit"></input>
                </form>
            </div>
            <div className="comments">
                {
                    comments?.map((comment) => {
                        return (
                            <div className="commentsWhole" key={comment.id}>
                                <p className="commentsWholeUser">{comment.user}</p>
                                <p className="commentsWholeComment">{comment.comment}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}