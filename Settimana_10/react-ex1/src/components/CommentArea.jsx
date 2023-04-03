import { Component } from 'react'

const MY_API = 'https://striveschool-api.herokuapp.com/api/comments/'
const MY_AUTH = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhZDgzYjY4MzQzMTAwMTRkZWE3YWYiLCJpYXQiOjE2ODA1Mjk0NjcsImV4cCI6MTY4MTczOTA2N30.8xvOPXetviUGMwkheFU60zutIQjBejPMA3vw-s9iKXc"
class CommentArea extends Component {
    state = {
        comments: []
    }

    commentFunction = async () => {

        try {
            let response = await fetch(MY_API, {
                method: 'GET',
                headers: {
                    "Authorization": MY_AUTH
                }
            }
            )
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                this.setState(
                    { comments: data }
                )
            } else {
                console.log('errore nella chiamata')
            }
        } catch (error) {
            console.log('error')
        }
    }
    componentDidMount() {
        this.commentFunction()
    }
    render() {
        return (
            <ul>
                {
                    this.state.comments.map(singleComment => {
                        return console.log(singleComment)
                    })
                }
            </ul>



        )
    }
}

export default CommentArea
