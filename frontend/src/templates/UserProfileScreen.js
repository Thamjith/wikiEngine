import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Button, Row, Col } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import ArticleUpdate from '../components/ArticleUpdate'
import { articleListByUser } from '../actions/articleActions'

const UserProfileScreen = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const userArticles = useSelector((state) => state.articleListByUser)
    const { loading:articleLoading, error:articleError, articles } = userArticles

    useEffect(() => {
        dispatch(articleListByUser(userInfo._id))
    },[dispatch])

    return (
        <>
        {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{userInfo.name}</Card.Title>
                        <Card.Text>Email : {userInfo.email}</Card.Text>
                        <Link to={'/profileUpdate'}>
                            <Button variant="primary">Edit Profile</Button>
                        </Link>
                    </Card.Body>
                </Card>
            )}
            <hr/>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                <h1>Your Articles</h1>
                <Row>
                        {articles.map((article) => (
                            <Col key={article._id}>
                                <ArticleUpdate article={article} />
                            </Col>
                        ))}
                </Row>
                </>
            )}
        </>
    )
}

export default UserProfileScreen
