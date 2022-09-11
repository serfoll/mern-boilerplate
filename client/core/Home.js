import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import React from 'react'

import mernStackImg from './../assets/images/mern-stack-min.jpg'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5)
  },
  title: {
    padding: `${theme.spacing(3)} ${theme.spacing(2.5)} ${theme.spacing(2)}`,
    color: theme.palette.openTitle
  },
  media: {
    minHeight: 400
  }
}))

const Home = () => {
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

export default Home
