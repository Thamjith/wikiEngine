import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { articleUpdate, articleDetails } from '../actions/articleActions'

const ArticleUpdateScreen = ({match}) => {

    const [title, setTitle] = useState('')
    const [articleBody, setArticleBody] = useState('')
    const [premium, setPremium] = useState(false)

    const dispatch = useDispatch()
    
    const articleDetail = useSelector((state) => state.articleDetails)
    const { loading, error, detail } = articleDetail
    
    useEffect(() => {
        if(detail){
            setTitle(detail.title)
            setArticleBody(detail.body)
            setPremium(detail.premium)
        }
        else{
            dispatch(articleDetails(match.params.id))
        }
    },[dispatch,articleDetails,detail,match.params.id])

    const submitHandler = (e) => {
        e.preventDefault()
        const articleID = detail._id
        dispatch(articleUpdate( articleID , { title, articleBody, premium }))
        document.location.href = `/article/${articleID}`
    }

    return (
        <>
            <FormContainer>
                <h1>Update Article</h1>
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='title'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='body'>
                    <Form.Label>Body</Form.Label>
                    <Form.Control
                        as='textarea'
                        rows={3}
                        value={articleBody}
                        onChange={(e) => setArticleBody(e.target.value)}
                    >{articleBody}</Form.Control>
                    </Form.Group>

                    <Form.Group controlId='premiumarticle'>
                        <Form.Check 
                            type="checkbox"
                            id="default-checkbox"
                            label="Premium Article?"
                            checked={premium}
                            onChange={(e) => setPremium(!premium)}
                        />
                    </Form.Group>
                    <Button type='submit' variant='primary'>
                    Update
                    </Button>
                </Form>
                )}
            </FormContainer>
        </>
    )
}

export default ArticleUpdateScreen
