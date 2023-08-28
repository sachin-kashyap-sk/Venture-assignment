import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import {
  selectedData,
  selectedRow,
  handleCheck,
  handleAllCheck,
} from "../../ReduxSection/RightSection/TableSection/TableSectionSlice";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";
import classes from "../../../StyleContainer/RightSection/BottomSection/BottomSection.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function EnhancedTableHead({ theme }) {
  const headCells = useSelector(selectedData);
  const dispatch = useDispatch();
  return (
    <TableHead
      sx={
        theme.palette.mode === "light"
          ? { backgroundColor: "#e1f5fe" }
          : { backgroundColor: "" }
      }
    >
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            onChange={(e) => {
              dispatch(handleAllCheck(e.target.checked));
            }}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((item) => (
          <TableCell
            key={item.id}
            align={item.numeric ? "right" : "left"}
            padding={item.disablePadding ? "none" : "normal"}
          >
            {item.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function TableSection({ theme }) {
  const rows = useSelector(selectedRow);
  // const headCells = useSelector(selectedRow);
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }}>
            <EnhancedTableHead theme={theme} dispatch={dispatch} />

            <TableBody>
              {rows.map((row, index) => {
                return (
                  <TableRow sx={{ cursor: "pointer" }}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={row.checked}
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch(handleCheck(row.id));
                        }}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row" padding="none">
                      {row.email}
                    </TableCell>
                    <TableCell align="right">{row.publishDate}</TableCell>
                    <TableCell align="right">{row.sent}</TableCell>
                    <TableCell align="right">{row.throughRate}</TableCell>
                    <TableCell align="right">{row.deliveryRate}</TableCell>
                    <TableCell align="right">{row.unsubscribed}</TableCell>
                    <TableCell align="right">{row.spam}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Box>
        <Box className={classes.bottomBtn}>
          <Button
            sx={
              theme.palette.mode === "light"
                ? { color: "#000", borderColor: "#000" }
                : { color: "#fff", borderColor: "#fff" }
            }
            startIcon={<ArrowBackIcon />}
            size="small"
            variant="outlined"
          >
            Previous
          </Button>
          <Pagination color="secondary" count={10} shape="rounded" />
          <Button
            size="small"
            variant="outlined"
            sx={
              theme.palette.mode === "light"
                ? { color: "#000", borderColor: "#000" }
                : { color: "#fff", borderColor: "#fff" }
            }
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
