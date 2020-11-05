import React, { useState, useEffect } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { createArticle } from '../actions/articleActions'
// import CKEditor from 'ckeditor4-react';

const CreateArtilcle = () => {
    const [title, setTitle] = useState('')
    const [articleBody, setArticleBody] = useState('')
    const [premium, setPremium] = useState(false)

    const dispatch = useDispatch()

    const loggedInUser = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = loggedInUser

    const articleCreate = useSelector((state) => state.userLogin)
    const { loading: articleLoaded, error: articleError, success } = articleCreate

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createArticle(userInfo._id, title, articleBody, premium))
    }

    return (
        <Container>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>
                    <Form onSubmit={submitHandler}>

                        <Form.Group controlId='email'>
                            <Form.Label>Article Title</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter Title of the Article'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='articleBody'>
                            <Form.Label>Body</Form.Label>
                            <Form.Control
                                as='textarea'
                                rows={3}
                                value={articleBody}
                                onChange={(e) => setArticleBody(e.target.value)}
                            ></Form.Control>
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
                        Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default CreateArtilcle