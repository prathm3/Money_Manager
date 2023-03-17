import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createExpense } from "../../Actions/expenseAction";
import { createRecord } from "../../Actions/recordAction";
import { addExpense, addRecords } from "../../API";

const initialStage = {recordName:"", recordDetails:"", recordAmount:"",remarks:"",paymentMethod:"", categories:"", recordCreatedAt:""}
export const AddNewTransaction = ({income}) => {
  const [formData, setFormData] = useState(initialStage);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // if(income){
    //   dispatch(addRecords(formData));
    // }else{
    //   dispatch(addExpense(formData))
    // } 
    window.location.href ="/bookkeeping"
}
const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
}

  return (
    <Box
    alignItems="center"
    justifyContent="space-between"
    sx={{
      mx: "auto",
      width: 700,
      height: 800,
      p: 10,
      ml: 50,
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
      borderColor: 'error.main',
      fontSize: "0.875rem",
      fontWeight: "700",
    }}
  >
    <div className="container mt-4">
      <h2 className="mb-4">Add New Transaction : {income ? <h3>Income</h3> : <h3>Expense </h3>} </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="recordName"
            placeholder="Enter title"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            placeholder="Enter amount"
            name="recordAmount"
            onChange={handleChange}
          />
        </div>
      
        <div className="form-group">
          <label htmlFor="category">Category</label>
          {income ? <select
            className="form-control"
            id="category"
            name="categories"
            onChange={handleChange}
          >
            <option value="SALARY">Salary</option>
            <option value="INVESTMENT">Investment</option>
            <option value="RECURRING">Recurring</option>
            <option value="OTHER">Other</option>
          </select> :
          <select
          className="form-control"
          id="category"
          name="categories"
          onChange={handleChange}
        >
          <option value="BILLS">Bills</option>
          <option value="FOOD">Food</option>
          <option value="EMIS">EMIS</option>
          <option value="RENT">RENT</option>
          <option value="OTHER">Other</option>
        </select>}
        </div>
        <div className="form-group">
          <label htmlFor="category">Payment Method</label>
          <select
          className="form-control"
          id="paymentmethod"
          name="paymentMethod"
          onChange={handleChange}
        >
          <option value="UPI">UPI</option>
          <option value="CASH">Cash</option>
          <option value="CARD">Card</option>
          <option value="OTHER">Other</option>
        </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            placeholder="Enter date"
            name="recordCreatedAt"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder="Enter description"
            name="recordDetails"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="title">Remarks</label>
          <input
            type="text"
            className="form-control"
            id="remarks"
            placeholder="Enter Remarks"
            name="remarks"
            onChange={handleChange}
          />
        </div>
        <br/>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </Box>
  );
};
