import React, { useState, useEffect } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'

const ArticleUpdateScreen = () => {
    return (
        <>
        <h1>QWE</h1>
        </>
        // <Container>
        //     {error && <Message variant='danger'>{error}</Message>}
        //     {loading && <Loader />}
        //     <Row className='justify-content-md-center'>
        //         <Col xs={12} md={6}>
        //             <Form onSubmit={submitHandler}>

        //                 <Form.Group controlId='email'>
        //                     <Form.Label>Article Title</Form.Label>
        //                     <Form.Control
        //                         type='text'
        //                         placeholder='Enter Title of the Article'
        //                         value={title}
        //                         onChange={(e) => setTitle(e.target.value)}
        //                     ></Form.Control>
        //                 </Form.Group>

        //                 <Form.Group controlId='articleBody'>
        //                     <Form.Label>Body</Form.Label>
        //                     <Form.Control
        //                         as='textarea'
        //                         rows={3}
        //                         value={articleBody}
        //                         onChange={(e) => setArticleBody(e.target.value)}
        //                     ></Form.Control>
        //                 </Form.Group>

        //                 <Form.Group controlId='premiumarticle'>
        //                     <Form.Check 
        //                         type="checkbox"
        //                         id="default-checkbox"
        //                         label="Premium Article?"
        //                         checked={premium}
        //                         onChange={(e) => setPremium(!premium)}
        //                     />
        //                 </Form.Group>

        //                 <Button type='submit' variant='primary'>
        //                 Submit
        //                 </Button>
        //             </Form>
        //         </Col>
        //     </Row>
        // </Container>
    )
}

export default ArticleUpdateScreen
