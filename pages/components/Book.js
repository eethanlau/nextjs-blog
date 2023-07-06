import react from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'

//Create the table component using the passed in information
//Conceal the table unless search results begin to pop up
const Book = ({ item }) => {
      return (
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            {/* Head of the table */}
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="center">Subtitle</TableCell>
                <TableCell align="center">Author</TableCell>
                <TableCell align="center">Thumbnail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {item.map((individualBook) => (
              <TableRow
                key={individualBook.volumeInfo.titel}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{individualBook.volumeInfo.title}</TableCell>
                <TableCell align="center">{individualBook.volumeInfo.subtitle}</TableCell>
                <TableCell align="center">{individualBook.volumeInfo.authors}</TableCell>
                <TableCell align="center"><img src = {individualBook.volumeInfo.imageLinks.smallThumbnail} alt = "image"/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        
      )
}

export default Book;
