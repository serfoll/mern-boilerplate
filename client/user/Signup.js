import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Icon,
  TextField,
  Typography
} from '@mui/material'
import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'

import { create } from './api-user'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2)
  },
  error: {
    verticalAlign: 'middle'
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  }
}))

export default () => {
  const classes = useStyles()

  const [values, setValues] = useState({
    name: '',
    email: '',
    error: '',
    open: false,
    password: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const clickSubmit = () => {
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined
    }

    create(user).then(data => {
      if (data.error) setValues({ ...values, error: data.error })
      else setValues({ ...values, error: '', open: true })
    })
  }

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} variant="h6">
            Sign Up
          </Typography>
          <TextField
            className={classes.textField}
            id="name"
            label="Name"
            value={values.name}
            onChange={handleChange('name')}
            margin="normal"
          />
          <br />

          <TextField
            className={classes.textField}
            id="email"
            label="Email"
            margin="normal"
            onChange={handleChange('email')}
            type="email"
            value={values.email}
          />
          <br />

          <TextField
            className={classes.textField}
            id="password"
            label="Password"
            margin="normal"
            onChange={handleChange('password')}
            type="password"
            value={values.password}
          />
          <br />

          {values.error && (
            <Typography component="p" color="error">
              <Icon className={classes.error} color="error">
                error
              </Icon>
              {values.error}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Button
            className={classes.submit}
            color="primary"
            onClick={clickSubmit}
            variant="contained"
          >
            Submit
          </Button>
        </CardActions>
      </Card>

      <Dialog disableBackdropClick={true} open={values.open}>
        <DialogTitle>New Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            New account successfully created.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Link to="/signin">
            <Button autoFocus="autoFocus" color="primary" variant="contained">
              Sign In
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  )
}
