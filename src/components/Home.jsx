import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Col, Image, Button } from 'react-bootstrap';
import './Home.css';


export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
            <h2>Welcome to Dev Lanterns! Podcasts, articles, guides...take a look around, see what tickles your fancy!</h2>
            <p>Episodes of the Dev Lanterns podcast release every two weeks, while the 'Jargon to Sense' articles are on an irregular schedule.</p>
        </Jumbotron>
      </Grid>
    )
  }
}
