import {ReposAction, ActionTypes, AppState} from "../../types";

const initialState: AppState = {
    orgName: '',
    repos: [],
    loading: false,
    error: null, 
    pageNumber: 1,
}

export const appReducer = (state = initialState, action: ReposAction): AppState => {
    switch (action.type) {
        case ActionTypes.FETCH_REPOS:
            return {...state, loading: true}
        case ActionTypes.FETCH_REPOS_SUCCESS:
            return {...state, loading: false, repos: action.payload}
        case ActionTypes.FETCH_REPOS_ERROR:
            return {...state, loading: false, error: action.payload, repos: []}
        case ActionTypes.SET_ORG_NAME:
            return {...state, orgName: action.payload }
        case ActionTypes.SET_PAGE_NUMBER:
            return {...state, pageNumber: action.payload }
        default:
            return state
    }
}