import { Grid, Paper, Typography } from "@mui/material";
import { spacing } from "@mui/system";
import React from "react";
import SecurityIcon from "@mui/icons-material/Security";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Box } from "@mui/system";

{/***<Box sx={{ py: 2, pr: 2, width: 320 }}>
      <List
        aria-label="Sidebar"
        sx={{
          // ...applyRadiusOnEdges({ target: 'deepest' | 'nested' }),
          '--List-item-paddingLeft': '0px',
          '--List-decorator-size': '64px',
          '--List-decorator-color': (theme) => theme.vars.palette.text.secondary,
          '--List-item-minHeight': '32px',
          '--List-nestedInsetStart': '13px',
          [`& .${listItemDecoratorClasses.root}`]: {
            justifyContent: 'flex-end',
            pr: '18px',
          },
          '& [role="button"]': {
            borderRadius: '0 20px 20px 0',
          },
        }}
      >
        <ListItem>
          <ListItemButton
            selected={index === 0}
            variant={index === 0 ? 'soft' : 'plain'}
            color={index === 0 ? 'danger' : undefined}
            onClick={() => setIndex(0)}
          >
            <ListItemDecorator>
              <InboxIcon fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>Inbox</ListItemContent>
            <Typography level="body2" sx={{ fontWeight: 'bold', color: 'inherit' }}>
              1,950
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            selected={index === 1}
            variant={index === 1 ? 'soft' : 'plain'}
            color={index === 1 ? 'neutral' : undefined}
            onClick={() => setIndex(1)}
          >
            <ListItemDecorator>
              <Star fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>Starred</ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem nested>
          <ListItemButton
            selected={index === 2}
            variant={index === 2 ? 'soft' : 'plain'}
            color={index === 2 ? 'info' : undefined}
            onClick={() => setIndex(2)}
          >
            <ListItemDecorator>
              <ArrowDropDown fontSize="lg" />
              <Label fontSize="lg" />
            </ListItemDecorator>
            Categories
          </ListItemButton>
          <List>
            <ListItem>
              <ListItemButton
                selected={index === 3}
                variant={index === 3 ? 'soft' : 'plain'}
                color={index === 3 ? 'primary' : undefined}
                onClick={() => setIndex(3)}
              >
                <ListItemDecorator>
                  <People fontSize="lg" />
                </ListItemDecorator>
                <ListItemContent>Social</ListItemContent>
                <Typography level="body2">4,320</Typography>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={index === 4}
                variant={index === 4 ? 'soft' : 'plain'}
                color={index === 4 ? 'warning' : undefined}
                onClick={() => setIndex(4)}
              >
                <ListItemDecorator>
                  <Info fontSize="lg" />
                </ListItemDecorator>
                <ListItemContent>Updates</ListItemContent>
                <Typography level="body2">22,252</Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </Box> */}

function ProfileNav() {
  return (
    <Grid>
      <Grid item>
      <Paper>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <ManageAccountsIcon />
          </Grid>
          <Grid item xs>
            <Typography>Account</Typography>
            <Typography>Chnage Email</Typography>
          </Grid>
        </Grid>
      </Paper>
      </Grid>
      <Paper>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <SecurityIcon />
          </Grid>
          <Grid item xs>
            <Typography>Security</Typography>
            <Typography>Change Password, UserName</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default ProfileNav;
