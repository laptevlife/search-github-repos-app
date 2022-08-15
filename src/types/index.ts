
export interface AppState {
    orgName: string;
    repos: any[];
    loading: boolean;
    error: null | string;
    pageNumber: number;
}
export enum ActionTypes {
    SET_ORG_NAME = 'ORG_NAME',
    SET_PAGE_NUMBER = 'SET_PAGE_NUMBER',
    FETCH_REPOS = 'FETCH_REPOS',
    FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS',
    FETCH_REPOS_ERROR = 'FETCH_REPOS_FETCH_REPOS_ERROR',
}
interface FetchAction {
    type: ActionTypes.FETCH_REPOS;
}
interface FetchSuccessAction {
    type: ActionTypes.FETCH_REPOS_SUCCESS;
    payload: any[]
}
interface FetchErrorAction {
    type: ActionTypes.FETCH_REPOS_ERROR;
    payload: string;
}
interface SetOrgName {
    type: ActionTypes.SET_ORG_NAME;
    payload: string;
}
interface SetPageNumber {
    type: ActionTypes.SET_PAGE_NUMBER;
    payload: number;
}
export type ReposAction = FetchAction | FetchErrorAction | FetchSuccessAction | SetOrgName | SetPageNumber