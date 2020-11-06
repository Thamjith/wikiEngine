import{
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
    ARTICLE_DETAILS_FAIL, 
    ARTICLE_LIST_BY_USERID_REQUEST, 
    ARTICLE_LIST_BY_USERID_SUCCESS, 
    ARTICLE_LIST_BY_USERID_FAIL, 
    ARTICLE_UPDATE_BY_ID_REQUEST, 
    ARTICLE_UPDATE_BY_ID_SUCCESS, 
    ARTICLE_UPDATE_BY_ID_FAIL, 
    ARTICLE_PREMIUM_LIST_REQUEST, 
    ARTICLE_PREMIUM_LIST_SUCCESS, 
    ARTICLE_PREMIUM_LIST_FAIL
}from '../constants/articleConstants'

export const articleListReducer = (state = { articles: [] }, action) => {
    switch (action.type) {
        case ARTICLE_LIST_REQUEST:
            return { loading: true, articles: [] }
        case ARTICLE_LIST_SUCCESS:
            return {
                loading: false,
                articles: action.payload.articles,
            }
        case ARTICLE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const premiumArticleListReducer = (state = { articles: [] }, action) => {
    switch (action.type) {
        case ARTICLE_PREMIUM_LIST_REQUEST:
            return { loading: true, articles: [] }
        case ARTICLE_PREMIUM_LIST_SUCCESS:
            return {
                loading: false,
                articles: action.payload.articles
            }
        case ARTICLE_PREMIUM_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const articleListCountReducer = (state = {}, action) => {
    switch (action.type) {
        case ARTICLE_LIST_COUNT_REQUEST:
            return { loading: true }
        case ARTICLE_LIST_COUNT_SUCCESS:
            return {
                loading: false,
                count: action.payload,
            }
        case ARTICLE_LIST_COUNT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const articleCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ARTICLE_CREATE_REQUEST:
            return { loading: true, success: false }
        case ARTICLE_CREATE_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case ARTICLE_CREATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const articleDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case ARTICLE_DETAILS_REQUEST:
            return { loading: true }
        case ARTICLE_DETAILS_SUCCESS:
            return {
                loading: false,
                detail: action.payload,
            }
        case ARTICLE_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const articleListByUserIdReducer = (state = { articles: [] }, action) => {
    switch (action.type) {
        case ARTICLE_LIST_BY_USERID_REQUEST:
            return { loading: true, articles: [] }
        case ARTICLE_LIST_BY_USERID_SUCCESS:
            return {
                loading: false,
                articles: action.payload,
            }
        case ARTICLE_LIST_BY_USERID_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const articleUpdateReducer = (state = { }, action) => {
    switch (action.type) {
        case ARTICLE_UPDATE_BY_ID_REQUEST:
            return { loading: true }
        case ARTICLE_UPDATE_BY_ID_SUCCESS:
            return {
                loading: false,
                article: action.payload,
            }
        case ARTICLE_UPDATE_BY_ID_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}