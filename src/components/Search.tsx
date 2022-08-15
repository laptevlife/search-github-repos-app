import React from 'react'
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';
import { useDispatch } from 'react-redux'
import { ActionTypes } from "../types";
import { fetchRepos } from '../store/actions'
import { typedUseSelector } from '../hooks/typedUseSelector'




const Search: React.FC = () => {

    const dispatch = useDispatch()

    const [inputValue, setInputValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const { loading, error } = typedUseSelector(state => state.appReducer)

    const submitForm = (e: any) => {
        e.preventDefault()
        if (inputValue === '') { return }
        dispatch({ type: ActionTypes.SET_ORG_NAME, payload: inputValue.trim() })
        dispatch<any>(fetchRepos())
        setInputValue('')
    }

    const clearError = () => {
        dispatch({ type: ActionTypes.FETCH_REPOS_ERROR, payload: null })
        dispatch({ type: ActionTypes.SET_ORG_NAME, payload: '' })
    }

    return (

        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Stack direction="row" spacing={2}>
                        <form onSubmit={submitForm}>
                            <TextField
                                label="Organization name"
                                placeholder='Search...'
                                size="small"
                                onChange={handleChange}
                                disabled={error ? true : false}
                            />
                        </form>
                        <LoadingButton loading={loading} variant="contained" onClick={submitForm}>
                            Submit
                        </LoadingButton>
                    </Stack>
                </Grid>
                {
                    error && (
                        <Grid item md={4} sm={12}>
                            <Stack sx={{ width: '100%' }} spacing={2}>
                                <Alert onClose={clearError} severity="error">{error}</Alert>
                            </Stack>
                        </Grid>
                    )
                }
            </Grid>


        </>

    )
}

export default Search

