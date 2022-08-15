import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { typedUseSelector } from '../hooks/typedUseSelector'
import history from '../utils/historyUtils'



function createData(
    name: string,
    description: string,
    language: string | null,
    stars: number,
    html_url: string,
) {
    return { name, description, language, stars, html_url };
}

const NameColumn = styled('span')(({ theme }: { theme: any }) => ({
    cursor: "pointer"
}));

export default function DenseTable() {

    const { repos, orgName } = typedUseSelector(state => state.appReducer)
    const rows = repos.map(i => createData(i.name, i.description, i.language, i.stargazers_count, i.html_url));

    useEffect(()=>{
        !orgName && history.push('/search-github-repos-app')
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="left">Description</TableCell>
                        <TableCell align="right">Language</TableCell>
                        <TableCell align="right">Stars</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" onClick={() => window.open(row.html_url)}>
                                <NameColumn>
                                    {row.name}
                                </NameColumn>
                            </TableCell>
                            <TableCell align="left">{row.description}</TableCell>
                            <TableCell align="right">{row.language}</TableCell>
                            <TableCell align="right">{row.stars}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

