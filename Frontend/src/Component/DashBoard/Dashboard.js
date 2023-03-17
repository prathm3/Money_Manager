import IdealBreakDown from "./StatOverview.mjs";
import ShortBookKeeping from "./ShortBookKeeping";
import LineChart from "../Reports/Charts/LineChart.js";
import PieChart from "../Reports/Charts/PieChart.js";
import { Box } from "@mui/system";
export default function Dashboard({
  allRecords,
  totalPayments,
  expensePayments,
  payments,
  totalExpensePayments,
}) {
  return (
    <div className="container-fluid">
      <div>
        <Box
          alignItems="left"
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
          <LineChart payments={payments} expensePayments={expensePayments} />
        </Box>
        <Box
          alignItems="right"
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
          <PieChart
            totalPayments={totalPayments}
            totalExpensePayments={totalExpensePayments}
          />
        </Box>
      </div>

      <Box
        alignItems="left"
        sx={{
          mx: "auto",
          width: 1000,
          height: 400,
          p: 0,
          ml: 20,
          mb: 0,
          mt: 0,
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
        <div>
          <ShortBookKeeping allRecords={allRecords} />
        </div>
      </Box>

      <div>
        <IdealBreakDown />
      </div>

      {/* Pass the attribute with the attribute name of "entry" that takes an object with the following fields:
                    desc -> Description
                    cod -> credit or debit
                    amount 
                    date  
                    we if we dont pass the object it will show no-object found in the entry
                    */}
    </div>
  );
}
