import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Router, Routes, useLocation, Route } from "react-router-dom";
import LineChart from "./Component/Reports/Charts/LineChart";
import PieChart from "./Component/Reports/Charts/PieChart";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { getRecordsByUser, getRecords } from "./Actions/recordAction.js";
import Profile from "./Component/Profile/Profile";
import Settings from "./Component/Settings/Settings";
import { getExpense, getExpensesByUser } from "./Actions/expenseAction";
import Report from "./Component/Reports/Report";
import Login from "./Component/Login/Login";
import LoginHome from "./Component/Login/LoginHome";
import { AddNewTransaction } from "./Component/Login/AddNewTransaction";
import Choice from "./Component/Login/Choice";
import ResetPass from "./Component/Login/ResetPass";
import BookKeeping from "./Component/BookKeeping/BookKeeping";

import Dashboard from "./Component/DashBoard/Dashboard";
import ErrorPage from "./Component/ErrorPages/ErrorPage";
import { ForgotPass } from "./Component/Login/ForgotPass";
import Register from "./Component/Login/Register";
import NavBar from "./Component/NavBar/NavBar";
import Nav from "./Component/NavBar/Nav";
function App() {
  const location = useLocation();
  //const history = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  let id = "7cf832d9-989c-484d-8236-41abad6d7155";
  if (user) id = user.userId;
  const dispatch = useDispatch();
  const { isLoading, records } = useSelector((state) => state.recordReducer);
  const { expenses } = useSelector((state) => state.expenseReducer);

  let payments = [];
  let incomeMonthWise = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let totalPayments = 0;
  for (let i = 0; i < records.length; i++) {
    if (records[i].recordAmount !== undefined) {
      if (records[i].recordCreatedAt !== null) {
        let month = records[i].recordCreatedAt.substring(5, 7);
        let numOfMonth = parseInt(month);
        incomeMonthWise[numOfMonth - 1] += records[i].recordAmount;
      }
      totalPayments += records[i].recordAmount;
      payments = [...payments, records[i].recordAmount];
    }
  }
  let expenseMonthWise = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let expensePayments = [];
  let totalExpensePayments = 0;
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].recordAmount !== undefined) {
      if (expenses[i].recordCreatedAt !== null) {
        let month = expenses[i].recordCreatedAt.substring(5, 7);
        let numOfMonth = parseInt(month);
        expenseMonthWise[numOfMonth - 1] -= expenses[i].recordAmount;
      }
      totalExpensePayments += expenses[i].recordAmount;
      expensePayments = [...expensePayments, expenses[i].recordAmount];
    }
  }
  let allRecords = [];
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i] !== undefined) {
      if (expenses[i].recordCreatedAt !== null) {
        allRecords.push(expenses[i]);
      }
    }
  }
  for (let i = 0; i < records.length; i++) {
    if (records[i] !== undefined) {
      if (records[i].recordCreatedAt !== null) {
        allRecords.push(records[i]);
      }
    }
  }
  const sortByDate = (arr) => {
    const sorter = (a, b) => {
      let diff =
        new Date(b.recordCreatedAt).getTime() -
        new Date(a.recordCreatedAt).getTime();
      //console.log(diff);
      return diff;
    };
    //arr.sort(sorter);
    arr.sort(sorter);
  };
  sortByDate(allRecords);

  useEffect(() => {
    dispatch(getRecordsByUser(id));
    dispatch(getExpensesByUser(id));
  }, [location, dispatch]);
  console.log(expenses, records);
  // useEffect(() => {
  //   dispatch(getRecordsByUser(id));
  //   console.log(records.length);
  //   console.log(records);
  // }, [location, dispatch]);
  return (
    <div className="App">
      {user && <NavBar />}
      <Routes>
        {/* <Route exact path="/" element={<Home />}></Route> */}
        <Route
          exact
          path="/dashboard"
          element={
            <Dashboard
              allRecords={allRecords}
              payments={payments}
              expensePayments={expensePayments}
              totalPayments={totalPayments}
              totalExpensePayments={totalExpensePayments}
            />
          }
        ></Route>
        <Route
          exact
          path="/bookkeeping"
          element={<BookKeeping allRecords={allRecords} />}
        ></Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Register />}></Route>
        <Route exact path="/reset" element={<ResetPass />}></Route>
        <Route exact path="/forgot" element={<ForgotPass />}></Route>
        <Route
          exact
          path="/reports"
          element={
            <Report
              expenses={expenses}
              records={records}
              expensePayments={expensePayments}
              payments={payments}
              incomeMonthWise={incomeMonthWise}
              expenseMonthWise={expenseMonthWise}
            />
          }
        ></Route>
        <Route exact path="/add" element={<Choice />}></Route>
        <Route exact path="/settings" element={<Settings />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      {/* {user && (
        <div>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Choice />
            <Grid item xs={6}>
              <Paper>
                <LineChart
                  payments={payments}
                  expensePayments={expensePayments}
                />
                <select>
                  <option>week</option>
                  <option>month</option>
                  <option>year</option>
                </select>
                <h4>Total Income</h4>
                <h2>{totalPayments}</h2>
                <h4>Total Expenses</h4>
                <h2>{totalExpensePayments}</h2>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <h5>Distribution</h5>
                <select>
                  <option>week</option>
                  <option>month</option>
                  <option>year</option>
                </select>
                <PieChart
                  totalPayments={totalPayments}
                  totalExpensePayments={totalExpensePayments}
                />
              </Paper>
            </Grid>
          </Grid>
          <Settings />
          <Report
            expenses={expenses}
            records={records}
            expensePayments={expensePayments}
            payments={payments}
            incomeMonthWise={incomeMonthWise}
            expenseMonthWise={expenseMonthWise}
          />
        </div>
      )}
      {!user && <LoginHome />}
      <BookKeeping allRecords={allRecords} />
      <ShortBookKeeping allRecords={allRecords} />
      <ResetPass /> */}
    </div>
  );
}

export default App;
