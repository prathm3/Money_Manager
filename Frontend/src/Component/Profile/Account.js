import { Avatar, Button, Grid, TextField } from "@mui/material";
import React from "react";

function Account() {
  return (
    <div>
      <form>
        <Grid>
          <Grid item xs={4} md={4} />
          <Grid item xs={4} md={4}>
            <div class="p-2 mt-2">
              <Avatar />
            </div>
          </Grid>
          <Grid item xs={4} md={4}>
            <Button variant="outlined" color="primary">
              Change Photo
            </Button>
          </Grid>
        </Grid>

        <div class="d-flex justify-content-between align-items-center">
          <div class="row p-3 justify-content-start">
            <div class="col pl-2 md-2">
              <TextField
                id="outlined-secondary"
                label="First Name"
                variant="outlined"
                color="secondary"
              />
            </div>
            <div class="col md-12">
              <TextField
                id="outlined-secondary"
                label="Last Name"
                variant="outlined"
                color="secondary"
              />
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div class="row p-3 justify-content-start">
            <div class="col pl-2 md-2">
              <TextField
                id="outlined-secondary"
                label="Email"
                variant="outlined"
                color="secondary"
              />
            </div>
            <div class="col md-12">
              <TextField
                id="outlined-secondary"
                label="Phone Number"
                variant="outlined"
                color="secondary"
              />
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div class="row p-3 justify-content-start">
            <div class="col px-md-2">
              <Button variant="outlined" color="primary">
                Log Out
              </Button>
            </div>
            <div class="col px-md-2">
              <Button variant="outlined" color="primary">
                Discard Changes
              </Button>
            </div>
            <div class="col px-md-2">
              <Button variant="contained" color="secondary">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Account;
