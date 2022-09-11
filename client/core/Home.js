import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

import mernStackImg from './../assets/images/mern-stack-min.jpg'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: auto,
    marginTop: theme.spacing(5)
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.openTitle
  },
  media: {
    minHeight400
  }
}))

export default Home => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <Typography variant="h6" className={classes.title}>
        Home Page
      </Typography>
      <CardMedia
        className={classes.media}
        image={mernStackImg}
        title="Mern Stack wallpaper"
      />
      <CardContent>
        <Typography variant="body2" component="p">
          Welcome to the MERN Boilerplate home page.
        </Typography>
      </CardContent>
    </Card>
  )
}
