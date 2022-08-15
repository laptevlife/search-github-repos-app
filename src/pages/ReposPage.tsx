import Table from '../components/Table'
import React from 'react'
import { typedUseSelector } from '../hooks/typedUseSelector'
import { styled } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import { useDispatch } from 'react-redux'
import { ActionTypes } from "../types";
import { fetchRepos } from '../store/actions'




const Headline = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  padding: theme.spacing(1),
  fontSize: '25px'
}));
const StyledLoadingButton = styled(LoadingButton)(({ theme }) => ({
  ...theme.typography.button,
  padding: theme.spacing(1),
  marginTop: "20px",
}));

const ReposPage: React.FC = () => {

  const dispatch = useDispatch()
  const { orgName, loading, pageNumber } = typedUseSelector(state => state.appReducer)

  const pagination = true

  const loadMore = () => {
    dispatch({ type: ActionTypes.SET_PAGE_NUMBER, payload: pageNumber + 1 })
    dispatch<any>(fetchRepos(pagination))
  }

  return (
    <>
      <Headline>
        {orgName}
      </Headline>
      <Table />
      <StyledLoadingButton
        loading={loading}
        variant="contained"
        onClick={loadMore}>
        Load more
      </StyledLoadingButton>
    </>
  )
}

export default ReposPage