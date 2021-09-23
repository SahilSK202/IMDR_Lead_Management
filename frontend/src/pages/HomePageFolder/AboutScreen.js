import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
} from "@material-ui/core";

const paperStyle = {
  padding: 20,
  height: "80vh",
  width: 760,
  margin:"10px auto",
  
  backgroundColor:"",
};
const avatarstyle = { backgroundColor: "#26d6ca" };
const headerStyle = { margin: 0 };
const textstyle = { margin: "10px 0",textSize:"20px" };

const editStyle = { 
  backgroundColor:"#bb38e0",
  color: 'white',
  fontSize:"20px",
  padding: "10px 10px 10px 10px",
  marginLeft:"20px", 
  marginTop:"20px",
  width:"180px",
  
};

const saveStyle = { 
  backgroundColor:"#bb38e0",
  color: 'white',
  width:"180px",
  fontSize:"20px",
  padding: "10px 10px 10px 10px",
  marginLeft:"280px", 
  marginTop:"25px",
  };
  const birthStyle={
    width:300,
  }

const AboutScreen = () => {
 
 
   
    return (
      
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarstyle}>
              <PersonIcon />
            </Avatar>
            <h1 style={headerStyle}>User Profile</h1>
           
          </Grid>
         
          <form >
          <TextField
              label="Bio"
              style={textstyle}
              variant="outlined"
              placeholder="Enter Your Bio"
              fullWidth
             
            />
            <TextField
              label="Your Full Name"
              variant="outlined"
              style={textstyle}
              placeholder="Enter Your Name"
              fullWidth
             />
            
            <TextField
              label="Email"
              variant="outlined"
              placeholder="Enter Email"
              type="email"
              style={textstyle}
              fullWidth
              required
             
            />
             <TextField
              label="Phone Number"
              variant="outlined"
              style={textstyle}
              type='number'
              placeholder="Enter Your Phone number"
              fullWidth
             
            />
                   
                   <TextField
                    id="date"
                    variant="outlined"
                    label="Birthday date"
                    type="date"
                    style={birthStyle}
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                      shrink: true,
                    }}
     
      />

            <TextField
              label="Password"
              variant="outlined"
              placeholder="Enter Password"
              type="password"
              style={textstyle}
              fullWidth
              required
              
             />
            <TextField
              label="Confirm Password"
              variant="outlined"
              placeholder="Confirm Password"
              type="password"
              style={textstyle}
              fullWidth
              required
             
            />
            
            
            <Button
              type="submit"
              color="primary"
              variant="contained"
             style={editStyle}
          >
             Edit
            </Button>

            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={saveStyle}
            >
             Save
            </Button>

  
            
          </form>
        </Paper>
      </Grid>
    );
  };
  
  export default AboutScreen;