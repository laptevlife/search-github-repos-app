import { ReposAction, ActionTypes } from "../../types";
import { Dispatch } from "redux";
import axios from "axios";
import { store } from '../../store/index'
import history from '../../utils/historyUtils'


// const ROOT_URL = 'https://api.github.com/'

export const fetchRepos = (pagination?: boolean) => {

    return async (dispatch: Dispatch<ReposAction>) => {
        try {
            const repos = store.getState().appReducer.repos
            const orgName = store.getState().appReducer.orgName
            const pageNumber = store.getState().appReducer.pageNumber
            dispatch({ type: ActionTypes.FETCH_REPOS })
            const response = await axios.get(`https://api.github.com/orgs/${orgName}/repos?per_page=10&page=${pageNumber}`)
            pagination
                ? dispatch({ type: ActionTypes.FETCH_REPOS_SUCCESS, payload: [...repos, ...response.data] })
                : dispatch({ type: ActionTypes.FETCH_REPOS_SUCCESS, payload: response.data })
            history.push('/search-github-repos-app/repos')
        } catch (e: any) {
            dispatch({
                type: ActionTypes.FETCH_REPOS_ERROR,
                payload: e.response.data.message
            })
        }
    }
}