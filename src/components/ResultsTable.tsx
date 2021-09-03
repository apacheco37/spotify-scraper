import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Track from '../interfaces/track.interface';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
});

interface IProps {
  tracks: Track[];
}

export default function ResultsTable(props: IProps) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell align="right"><b>Artist</b></TableCell>
            <TableCell align="right"><b>Popularity</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tracks.map((track: Track) => (
            <TableRow key={track.id}>
              <TableCell component="th" scope="row">
                {track.name}
              </TableCell>
              <TableCell align="right">{track.artists[0].name}</TableCell>
              <TableCell align="right">{track.popularity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}