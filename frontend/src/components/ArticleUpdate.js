import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import WordLimit from 'react-word-limit'
// import Rating from './Rating'

const ArticleUpdate = ({ article }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Body>
        <Link to={`/article/${article._id}`}>
          <Card.Title as='div'>
            <strong>{article.title}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='h3'><WordLimit limit={15}>{article.body}</WordLimit></Card.Text>
        <Link to={`/articleUpdate/${article._id}`}>
          <Button variant="primary">Edit Article</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default ArticleUpdate
