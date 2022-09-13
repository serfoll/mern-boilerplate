import { ArrowForward, Person } from '@mui/icons-material'
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Typography
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { list } from './api-user'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    margin: theme.spacing(5)
  },
  title: {
    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  }
}))

export default () => {
  const classes = useStyles()
  const [users, setUsers] = useState([])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    list(signal).then(data => {
      if (data && data.error) {
        console.log(data.error)
      } else {
        setUsers(data)
      }
    })

    return function cleanUp() {
      abortController.abort()
    }
  }, [])

  return (
    <Paper className={classes.root} elevation={4}>
      <Typography className={classes.title} variant="h6">
        All Users
      </Typography>
      <List dense>
        {users.map((item, i) => {
          return (
            <Link to={'/user/' + item._id} key={i}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar>
                    <Person />
                  </Avatar>
                </ListItemAvatar>

                <ListItemText primary={item.name} />

                <ListItemSecondaryAction>
                  <IconButton>
                    <ArrowForward />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </Link>
          )
        })}
      </List>
    </Paper>
  )
}
