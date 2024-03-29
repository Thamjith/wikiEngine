import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { userDetailsUpdate } from '../actions/userActions'

const ProfileUpdateScreen = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userDetails

    if(!userInfo){
        document.location.href = '/'
    }

    useEffect(() => {
        setName(userInfo.name)
        setEmail(userInfo.email)
    },[dispatch,userInfo.name,userInfo.email])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(userDetailsUpdate({ name, email }))
    }

    return (
        <>
            <FormContainer>
                <h1>Edit User</h1>
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
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

export default ProfileUpdateScreen
