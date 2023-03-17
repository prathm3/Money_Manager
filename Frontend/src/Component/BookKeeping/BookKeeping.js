import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  margin: 10,
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
function BookKeeping({ allRecords }) {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user === null) {
    window.location.href = "/login";
  }
  //const allRecords = [...expenses, ...records];
  const convert = (date) => {
    if (date === null || date === undefined) return "01-01-2001";
    let newDate = new Date(date);
    let res =
      newDate.getDate() +
      "-" +
      newDate.getMonth() +
      "-" +
      newDate.getFullYear();
    return res;
  };
  return (
    <div style={{ margin: 70 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Record Name</StyledTableCell>
              <StyledTableCell align="right">Record Details</StyledTableCell>
              <StyledTableCell align="right">Amount&nbsp;(Rs)</StyledTableCell>
              <StyledTableCell align="right">Payment Method</StyledTableCell>
              <StyledTableCell align="right">Category</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">remarks</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allRecords.map((entry) => (
              <StyledTableRow key={entry?.name}>
                <StyledTableCell component="th" scope="row">
                  {entry?.recordName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {entry?.recordDetails}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {entry?.recordAmount}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {entry?.paymentMethod}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {entry?.categories}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {convert(entry?.recordCreatedAt)}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {entry?.remarks}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default BookKeeping;
