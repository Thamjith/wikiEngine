import axios from 'axios'
import {
    ARTICLE_LIST_REQUEST,
    ARTICLE_LIST_SUCCESS,
    ARTICLE_LIST_FAIL, 
    ARTICLE_LIST_COUNT_REQUEST, 
    ARTICLE_LIST_COUNT_SUCCESS, 
    ARTICLE_LIST_COUNT_FAIL,
    ARTICLE_CREATE_REQUEST,
    ARTICLE_CREATE_SUCCESS,
    ARTICLE_CREATE_FAIL, 
    ARTICLE_DETAILS_REQUEST, 
    ARTICLE_DETAILS_SUCCESS, 
    ARTICLE_DETAILS_FAIL
}from '../constants/articleConstants'

export const listArticles = () => async (
    dispatch
  ) => {
    try {
        dispatch({ type: ARTICLE_LIST_REQUEST })
            const { data } = await axios.get(`/api/articles`)
  
        dispatch({
            type: ARTICLE_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ARTICLE_LIST_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const articleCount = () => async (
    dispatch
  ) => {
    try {
        dispatch({ type: ARTICLE_LIST_COUNT_REQUEST })
            const {data} = await axios.get(`/api/articles/count`)
  
        dispatch({
            type: ARTICLE_LIST_COUNT_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ARTICLE_LIST_COUNT_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const createArticle = (user, title, body, premium) => async (
    dispatch
  ) => {
    try {
        dispatch({ type: ARTICLE_CREATE_REQUEST })
        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
        }
        const {data} = await axios.post(
            `/api/articles/create`,
            {user, title, body, premium},
            config
        )
        dispatch({
            type: ARTICLE_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ARTICLE_CREATE_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const articleDetails = (id) => async (
    dispatch
  ) => {
    try {
        dispatch({ type: ARTICLE_DETAILS_REQUEST })
            const { data } = await axios.get(`/api/articles/${id}`)
  
        dispatch({
            type: ARTICLE_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ARTICLE_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}