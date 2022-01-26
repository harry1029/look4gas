import { useState } from "react";
import axios from "axios";
//import "./LoginTest.scss";

import { getUser } from "../helpers/loginHelper";

import { useNavigate } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey } from "@mui/material/colors";

export default function LoginTest(props) {
  const { setState } = props;
  const [user, setUser] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);

    const email = user.email;
    const pass = user.password;

    const url = "http://localhost:3001/api/users";
    await axios
      .get(url)
      .then((res) => {
        const result = getUser(res.data, email, pass);
        console.log("Result: ", result);
        if (!result) {
          console.log("User does not exist!")
        } else {
          setUser(result);
          // User local storage to set key: user, with a user value if found
          localStorage.setItem("user", JSON.stringify(result));
          setState(prev => ({ ...prev, loggedIn: true, currentUser: result }));
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <Box
          sx={{
            marginTop: 27.5,
            width: 600,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 1,
            paddingLeft: 3,
            paddingRight: 3,
            paddingBottom: 3,
            paddingTop:3,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderColor: '#54a0ff',
            borderStyle: 'solid',
            borderWidth: 3,
            borderRadius: 5,
            backgroundColor: '#CEE2F3'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, zIndex: 2, }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: 5, borderStyle: 'solid', borderWidth: 3, borderColor: '#54a0ff', color: '#3c91f8', backgroundColor: '#accaee' }}
            >
              <strong>Sign In</strong>
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}
const theme = createTheme();

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}