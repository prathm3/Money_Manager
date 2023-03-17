import React from "react";
import { Avatar, Button, TextField } from "@mui/material";

function Security() {
  return (
    <div>
      <form>
        <div class="d-flex justify-content-between align-items-center">
          <div class="row p-2 justify-content-start">
            <div class="col p-2 md-2">
              <Avatar />
            </div>
            <div class="col md-12">
              <Button variant="outlined" color="primary">
                Change Photo
              </Button>
            </div>
          </div>
        </div>
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

export default Security;
