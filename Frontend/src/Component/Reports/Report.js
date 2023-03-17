import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import DoughnutChart from "./Charts/DoughnutChart";
import RadarExpenseChart from "./Charts/RadarExpenseChart";
import RadarIncomeChart from "./Charts/RadarIncomeChart";
import HorizontalChart from "./Charts/HorizontalChart";
import HorizontalChartWeekly from "./Charts/HorizontalChartWeekly";
import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";
import { Box, Button, Chip, Divider } from "@mui/material";
function Report({
  expenses,
  records,
  expensePayments,
  payments,
  incomeMonthWise,
  expenseMonthWise,
}) {
  // let user = JSON.parse(localStorage.getItem("user"));
  // if (user === null) {
  //   window.location.href = "/login";
  // }
  const [lineChart, setLineChart] = useState(0);
  const [pieChart, setPieChart] = useState(0);
  const [doghChart, setDoghChart] = useState(0);
  const [horiChart, setHoriChart] = useState(0);
  const [radarChart, setRadarChart] = useState(0);

  let expensesPaymentMethod = [0, 0, 0, 0];
  for (let i = 0; i < expenses.length; i++) {
    let method = expenses[i].paymentMethod;
    if (method !== undefined) {
      if (method === "UPI") {
        expensesPaymentMethod[0] += expenses[i].recordAmount;
      } else if (method === "CASH") {
        expensesPaymentMethod[1] += expenses[i].recordAmount;
      } else if (method === "CARD") {
        expensesPaymentMethod[2] += expenses[i].recordAmount;
      } else {
        expensesPaymentMethod[3] += expenses[i].recordAmount;
      }
    }
  }
  let incomePaymentMethod = [0, 0, 0, 0];
  for (let i = 0; i < records.length; i++) {
    let method = records[i].paymentMethod;
    if (method !== undefined) {
      if (method === "UPI") {
        incomePaymentMethod[0] += records[i].recordAmount;
      } else if (method === "CASH") {
        incomePaymentMethod[1] += records[i].recordAmount;
      } else if (method === "CARD") {
        incomePaymentMethod[2] += records[i].recordAmount;
      } else {
        incomePaymentMethod[3] += records[i].recordAmount;
      }
    }
  }
  let incomeCategories = [0, 0, 0, 0];
  for (let i = 0; i < records.length; i++) {
    let method = records[i].categories;
    if (method !== undefined) {
      if (method === "SALARY") {
        incomeCategories[0] += records[i].recordAmount;
      } else if (method === "RECURRING") {
        incomeCategories[1] += records[i].recordAmount;
      } else if (method === "INVESTMENT") {
        incomeCategories[2] += records[i].recordAmount;
      } else {
        incomeCategories[3] += records[i].recordAmount;
      }
    }
  }
  let expenseCategories = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < expenses.length; i++) {
    let method = expenses[i].categories;
    if (method !== undefined) {
      if (method === "EMIS") {
        expenseCategories[0] += expenses[i].recordAmount;
      } else if (method === "FOOD") {
        expenseCategories[1] += expenses[i].recordAmount;
      } else if (method === "TRAVEL") {
        expenseCategories[2] += expenses[i].recordAmount;
      } else if (method === "BILLS") {
        expenseCategories[3] += expenses[i].recordAmount;
      } else if (method === "RENT") {
        expenseCategories[4] += expenses[i].recordAmount;
      } else {
        expenseCategories[5] += expenses[i].recordAmount;
      }
    }
  }
  //weekly
  let today = new Date();
  let weeklyIncome = [0, 0, 0, 0, 0, 0, 0];
  let weeklyTotalIncome = 0;
  let monthlyTotalIncome = 0;
  let yearlyTotalIncome = 0;
  for (let i = 0; i < records.length; i++) {
    let date = records[i].recordCreatedAt;
    if (date !== null) {
      let dateStr =
        date.substring(0, 4) +
        "/" +
        date.substring(5, 8) +
        "/" +
        date.substring(8, 10);

      date = new Date(dateStr);
      let diff = today.getTime() - date.getTime();
      var daydiff = Math.floor(diff / (1000 * 60 * 60 * 24));

      if (daydiff >= 0 && daydiff <= 31) {
        monthlyTotalIncome += records[i].recordAmount;
      }
      if (daydiff >= 0 && daydiff <= 365) {
        yearlyTotalIncome += records[i].recordAmount;
      }
      if (daydiff <= 6 && daydiff >= 0) {
        weeklyTotalIncome += records[i].recordAmount;
        weeklyIncome[daydiff] += records[i].recordAmount;
      }
    }
  }
  let weeklyTotalExpense = 0;
  let monthlyTotalExpense = 0;
  let yearlyTotalExpense = 0;
  let weeklyExpense = [0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].recordCreatedAt !== undefined) {
      let date = expenses[i].recordCreatedAt;
      if (date !== null) {
        let dateStr =
          date.substring(0, 4) +
          "/" +
          date.substring(5, 8) +
          "/" +
          date.substring(8, 10);

        date = new Date(dateStr);
        let diff = today.getTime() - date.getTime();
        var daydiff = Math.floor(diff / (1000 * 60 * 60 * 24));

        if (daydiff >= 0 && daydiff <= 31) {
          monthlyTotalExpense += expenses[i].recordAmount;
        }
        if (daydiff >= 0 && daydiff <= 365) {
          yearlyTotalExpense += expenses[i].recordAmount;
        }
        if (daydiff <= 6 && daydiff >= 0) {
          weeklyTotalExpense += expenses[i].recordAmount;
          weeklyExpense[daydiff] -= expenses[i].recordAmount;
        }
      }
    }
  }

  return (
    <div>
      <Box
        alignItems="center"
        sx={{
          mx: "auto",
          width: 1000,
          height: 400,
          p: 10,
          ml: 20,
          mb: 10,
          mt: 20,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "grey.50",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          borderRadius: 2,
          textAlign: "center",
          fontSize: "0.875rem",
          fontWeight: "700",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ ml: 10, mr: 10 }}
        >
          <Button variant="outlined" onClick={() => setLineChart(0)}>
            Line Chart Weekly
          </Button>

          <Button variant="outlined" onClick={() => setLineChart(1)}>
            Line Chart{" "}
          </Button>
        </Box>
        <Divider />
        {lineChart === 0 && (
          <LineChart payments={weeklyIncome} expensePayments={weeklyExpense} />
        )}
        {lineChart === 1 && (
          <LineChart payments={weeklyIncome} expensePayments={weeklyExpense} />
        )}
      </Box>

      <Divider light>
        <Chip label="Income And Expense" />
      </Divider>
      <Box
        alignItems="center"
        sx={{
          mx: "auto",
          width: 1000,
          height: 500,
          p: 5,
          ml: 20,
          mb: 10,
          mt: 10,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "grey.50",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          borderRadius: 2,
          textAlign: "center",
          fontSize: "0.875rem",
          fontWeight: "700",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ ml: 10, mr: 10, p: 5 }}
        >
          <Button variant="outlined" onClick={() => setPieChart(0)}>
            Pie Chart Weekly
          </Button>
          <Button variant="outlined" onClick={() => setPieChart(1)}>
            Pie Chart Monthly
          </Button>
          <Button variant="outlined" onClick={() => setPieChart(2)}>
            Pie Chart Yearly
          </Button>
        </Box>
        {pieChart === 0 && (
          <PieChart
            totalPayments={weeklyTotalIncome}
            totalExpensePayments={weeklyTotalExpense}
          />
        )}
        {pieChart === 1 && (
          <PieChart
            totalPayments={monthlyTotalIncome}
            totalExpensePayments={monthlyTotalExpense}
          />
        )}
        {pieChart === 2 && (
          <PieChart
            totalPayments={yearlyTotalIncome}
            totalExpensePayments={yearlyTotalExpense}
          />
        )}
      </Box>
      <Divider light>
        <Chip label="Payment Method" />
      </Divider>
      <Box
        justifyContent="center"
        sx={{
          mx: "auto",
          width: 1000,
          height: 500,
          p: 5,
          pb: 10,
          ml: 20,
          mb: 10,
          mt: 10,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "grey.50",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          borderRadius: 2,
          textAlign: "center",
          fontSize: "0.875rem",
          fontWeight: "700",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ ml: 10, mr: 10, pb: 5 }}
        >
          <Button variant="outlined" onClick={() => setDoghChart(0)}>
            DoghNut Chart For Income Payment Method{" "}
          </Button>
          <Button variant="outlined" onClick={() => setDoghChart(1)}>
            DoghNut Chart For Expense Payment Method{" "}
          </Button>
        </Box>
        {doghChart === 0 && (
          <DoughnutChart expensesPaymentMethod={expensesPaymentMethod} />
        )}
        {doghChart === 1 && (
          <DoughnutChart expensesPaymentMethod={incomePaymentMethod} />
        )}
      </Box>
      <Divider light>
        <Chip label="Categories" />
      </Divider>
      <Box
        justifyContent="center"
        sx={{
          mx: "auto",
          width: 1000,
          height: 500,
          p: 5,
          pb: 10,
          ml: 20,
          mb: 10,
          mt: 10,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "grey.50",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          borderRadius: 2,
          textAlign: "center",
          fontSize: "0.875rem",
          fontWeight: "700",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ ml: 10, mr: 10, pb: 5 }}
        >
          <Button variant="outlined" onClick={() => setRadarChart(0)}>
            Radar Chart For Income Categories{" "}
          </Button>
          <Button variant="outlined" onClick={() => setRadarChart(1)}>
            Radar Chart For Expense Categories{" "}
          </Button>
        </Box>
        {radarChart === 0 && (
          <RadarIncomeChart incomeCategories={incomeCategories} />
        )}
        {radarChart === 1 && (
          <RadarExpenseChart expenseCategories={expenseCategories} />
        )}
      </Box>
      <Divider light>
        <Chip label="Income and Expense" />
      </Divider>
      <Box
        alignItems="center"
        sx={{
          mx: "auto",
          width: 1000,
          height: 700,
          p: 10,
          ml: 20,
          mb: 10,
          mt: 10,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "grey.50",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          borderRadius: 2,
          textAlign: "center",
          fontSize: "0.875rem",
          fontWeight: "700",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ ml: 10, mr: 10, pb: 5 }}
        >
          <Button variant="outlined" onClick={() => setHoriChart(0)}>
            Horizontal Chart For Income and Expense Monthly{" "}
          </Button>
          <Button variant="outlined" onClick={() => setHoriChart(1)}>
            Horizontal Chart For Income and Expense Weekly{" "}
          </Button>
        </Box>
        {horiChart === 0 && (
          <HorizontalChart
            expensePayments={expenseMonthWise}
            payments={incomeMonthWise}
          />
        )}
        {horiChart === 1 && (
          <HorizontalChartWeekly
            weeklyIncome={weeklyIncome}
            weeklyExpense={weeklyExpense}
          />
        )}
      </Box>
    </div>
  );
}

export default Report;
