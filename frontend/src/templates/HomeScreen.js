import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { articleCount } from '../actions/articleActions'
import pluralize from 'pluralize'

const HomeScreen = () => {
    const dispatch = useDispatch()

    const Counts = useSelector((state) => state.articleCount)
    const { loading, count, error } = Counts
    console.log(loading)
    if(!loading){
        // const {premiumArticlesCount, freeArticlesCount} = count
        // console.log(premiumArticlesCount)
        console.log("loading complete...")
    }

    useEffect(() => {
        dispatch(articleCount())
    }, [dispatch])

    return (
        <div>
            <h1>Hi Netizen...Feeling Bored?</h1>
            <h1>We provide the best in class Articles for you to read.</h1>
            {count
            ? <h3>There {pluralize('is', count.freeArticlesCount)} {count.freeArticlesCount} <strong>Free</strong> {pluralize('Article', count.freeArticlesCount)} and {count.premiumArticlesCount} <b>Premium</b> {pluralize('Article', count.premiumArticlesCount)} waiting for you.</h3>
            : "LOADING..."
            }
            
            <p>First one month Free and then only $3.99 per month</p>
        </div>
    )
}

export default HomeScreen
