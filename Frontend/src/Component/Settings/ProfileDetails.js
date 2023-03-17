import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import AccountBalanceWalletRoundedIcon from "@material-ui/icons/AccountBalanceWalletRounded";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 450,
    // backgroundColor: "#EEEEEE",
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

export default function ProfileDetail({ profiles }) {
  const classes = useStyles();
  

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "solid 1px #dddddd",
          paddingBottom: "20px",
        }}
      >
        <Avatar
          alt={profiles?.firstName}
          src={profiles?.logo}
          className={classes.large}
        />
      </div>
      <List className={classes.root}>
        <ListItem>
          <BusinessCenterIcon style={{ marginRight: "20px", color: "gray" }} />
          <ListItemText primary={profiles?.firstName} secondary="" />
        </ListItem>
        <ListItem>
          <BusinessCenterIcon style={{ marginRight: "20px", color: "gray" }} />
          <ListItemText primary={profiles?.lastName} secondary="" />
        </ListItem>
        <ListItem>
          <LocationOnIcon style={{ marginRight: "20px", color: "gray" }} />
          <ListItemText primary={profiles?.country} secondary="" />
        </ListItem>

        <ListItem>
          <PhoneInTalkIcon style={{ marginRight: "20px", color: "gray" }} />
          <ListItemText primary={profiles?.city} secondary="" />
        </ListItem>

        <ListItem>
          <AlternateEmailIcon style={{ marginRight: "20px", color: "gray" }} />
          <ListItemText primary={profiles?.emailID} secondary="" />
        </ListItem>
        <ListItem>
          <AlternateEmailIcon style={{ marginRight: "20px", color: "gray" }} />
          <ListItemText primary={profiles?.dateOfBirth} secondary="" />
        </ListItem>

        <ListItem>
          <AccountBalanceWalletRoundedIcon
            style={{ marginRight: "20px", color: "gray" }}
          />
          <ListItemText primary={profiles?.bio} secondary="" />
        </ListItem>
      </List>
    </>
  );
}
