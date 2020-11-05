import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    articleListReducer,
    articleListCountReducer,
    articleCreateReducer,
    articleDetailsReducer,
    articleListByUserIdReducer
} from './reducers/articleReducers'

import {
    userLoginReducer,
    userRegisterReducer,
} from './reducers/userReducers'

const reducer = combineReducers({
    articleList         :   articleListReducer,
    userLogin           :   userLoginReducer,
    articleCount        :   articleListCountReducer,
    userRegister        :   userRegisterReducer,
    articleCreate       :   articleCreateReducer,
    articleDetails      :   articleDetailsReducer,
    articleListByUser   :   articleListByUserIdReducer
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