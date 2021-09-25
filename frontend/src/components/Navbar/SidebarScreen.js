import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import HelpIcon from "@material-ui/icons/Help";
import SettingsIcon from "@material-ui/icons/Settings";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
 

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <ListItem button component={Link} to="/" title="Home">
       <ListItemIcon>
          <HomeIcon style={{ fill: "purple" }} fontSize="large" />
        </ListItemIcon> 
        <ListItemText primary="Home" />
      </ListItem>

      <ListItem button component={Link} to="/Tasks" title="Tasks">
       <ListItemIcon>
          <GroupWorkIcon style={{ fill: "purple" }} fontSize="large" />
        </ListItemIcon> 
        <ListItemText primary="Tasks" />
      </ListItem>

      <ListItem button component={Link} to="/Dashboard" title="Dashboard">
       <ListItemIcon>
          <DashboardIcon style={{ fill: "purple" }} fontSize="large" />
        </ListItemIcon> 
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/Help" title="Help">
      <ListItemIcon>
          <HelpIcon style={{ fill: "purple" }} fontSize="large" />
        </ListItemIcon> 
        <ListItemText primary="Help" />
      </ListItem>

      <ListItem button component={Link} to="/Settings" title="Settings">
       <ListItemIcon>
          <SettingsIcon style={{ fill: "purple" }} fontSize="large" />
        </ListItemIcon> 
        <ListItemText primary="Settings" />
      </ListItem>
    </div>
  );
}

export default Sidebar;