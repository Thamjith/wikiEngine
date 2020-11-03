import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { listArticles } from '../actions/articleActions'
import Article from '../components/Article'
import Loader from '../components/Loader'

const ArticlesScreen = () => {

    const dispatch = useDispatch()

    const articleList = useSelector((state) => state.articleList)
    const { loading, error, articles } = articleList

    useEffect(() => {
        dispatch(listArticles())
    }, [
        dispatch
    ])
    return (
        <>
            <h1>Articles</h1>
            {loading ? (<Loader />): error ? (<h2>{error}</h2>) : (
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

export default ArticlesScreen
