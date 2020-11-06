import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { articleDetails } from '../actions/articleActions'
import { Row, Col } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'

const ArticleDetailsScreen = ({match}) => {
    const dispatch = useDispatch()

    const article = useSelector((state) => state.articleDetails)
    const { loading, detail, error } = article

    useEffect(() => {
        dispatch(articleDetails(match.params.id))
    }, [dispatch,match.params.id])

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Row>
                        <Col>
                            {detail && detail.title}
                            <br/>
                            <i>-by {detail && detail.user.name}</i>
                        </Col>
                    </Row>
                
                

                    <Row>
                        <Col>
                            {detail && detail.body}
                        </Col>
                    </Row>
                </>
            )}
        </>
    )
}

export default ArticleDetailsScreen
