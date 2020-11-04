import{
    ARTICLE_LIST_REQUEST,
    ARTICLE_LIST_SUCCESS,
    ARTICLE_LIST_FAIL,
    ARTICLE_LIST_COUNT_REQUEST, 
    ARTICLE_LIST_COUNT_SUCCESS, 
    ARTICLE_LIST_COUNT_FAIL
}from '../constants/articleConstants'

export const articleListReducer = (state = { articles: [] }, action) => {
    switch (action.type) {
        case ARTICLE_LIST_REQUEST:
            return { loading: true, articles: [] }
        case ARTICLE_LIST_SUCCESS:
            return {
                loading: false,
                articles: action.payload.articles,
                // pages: action.payload.pages,
                // page: action.payload.page,
            }
        case ARTICLE_LIST_FAIL:
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