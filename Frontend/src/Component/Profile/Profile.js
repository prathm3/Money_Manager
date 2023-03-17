import { Paper } from "@mui/material";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import Account from "./Account";
import ProfileNav from "./ProfileNav";
import Demo from "./Demo";
import Security from "./Security";

function Profile() {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <Grid
        container
        spacing={5}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={2}>
          <Demo index={index} setIndex={setIndex} />
        </Grid>
        <Grid item xs={6}>
          {index == 0 && (
            <Paper>
              <Account />
            </Paper>
          )}
          {index == 1 && (
            <Paper>
              <Security />
            </Paper>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
