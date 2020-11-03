import{
    ARTICLE_LIST_REQUEST,
    ARTICLE_LIST_SUCCESS,
    ARTICLE_LIST_FAIL,
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