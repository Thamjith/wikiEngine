import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    articleListReducer,
    articleListCountReducer,
    articleCreateReducer,
    articleDetailsReducer,
    articleListByUserIdReducer,
    articleUpdateReducer,
    premiumArticleListReducer
} from './reducers/articleReducers'

import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsUpdateReducer
} from './reducers/userReducers'

const reducer = combineReducers({
    articleList         :   articleListReducer,
    premiumArticleList  :   premiumArticleListReducer,
    userLogin           :   userLoginReducer,
    articleCount        :   articleListCountReducer,
    userRegister        :   userRegisterReducer,
    articleCreate       :   articleCreateReducer,
    articleDetails      :   articleDetailsReducer,
    articleListByUser   :   articleListByUserIdReducer,
    userDetailsUpdate   :   userDetailsUpdateReducer,
    updatedArticle      :   articleUpdateReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
  
export default store