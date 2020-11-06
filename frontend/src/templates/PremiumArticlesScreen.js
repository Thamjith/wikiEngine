import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { listArticles, listPremiumArticles } from '../actions/articleActions'
import Article from '../components/Article'
import Loader from '../components/Loader'
import Message from '../components/Message'

const PremiumArticlesScreen = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const articleList = useSelector((state) => state.premiumArticleList)
    const { loading, error, articles } = articleList

    useEffect(() => {
        dispatch(listPremiumArticles())
    }, [dispatch])

    return (
        <>
            <h1>Articles</h1>
            {loading ? (<Loader />): error ? (<Message variant='danger'>{error}</Message>) : (
                <>
                    <Row>
                        {articles.map((article) => (
                            <Col key={article._id}>
                                <Article article={article} />
                            </Col>
                        ))}
                    </Row>
                </>
            )
            }
        </>
    )
}

export default PremiumArticlesScreen
