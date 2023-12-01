import React from 'react'
import { Typography } from '@mui/material'


function About() {
  return (<>
    <Typography variant="body1" align="center" m={5} margin={10}>  
    <div className="about-page">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Welcome to our Food Blog!
        Hello! My name is Aditi. It’s so very nice to meet you.

I happily share my passion for all things salted; sweet and savory, in hope that you too will find pleasure, joy and sustenance in good food. Your kitchen is a place to be creative and productive. Meals are meant to be savored and enjoyed. Good food is simple, fresh, seasonal and delicious. Not Without Salt is a tool for helping you eat well and enjoy the process of cooking and baking real, good food.

Thank you for visiting. It is my joy to teach, share and cook with you.
        </p>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            We are passionate foodies who love to explore and share delicious
            recipes and culinary experiences from around the world.

            Simply Recipes is here to help you cook delicious meals with less stress and more joy. We offer recipes and cooking advice for home cooks, by home cooks. Helping create “kitchen wins” is what we’re all about.

Simply Recipes was founded in 2003 by Elise Bauer as a home cooking blog to record her favorite family recipes. Today, Simply Recipes has grown into a trusted resource for home cooks with more than 3,000 tested recipes, guides, and meal plans, drawing over 15 million readers each month from around the world. We’re supported by a diverse group of recipe developers, food writers, recipe and product testers, photographers, and other creative professionals.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://orangette.net/wp-content/uploads/2018/11/000324850011-662x409.jpg"
            alt="Food Blog Team"
          />
        </div>
      </div>
      <div className="about-details">
        <h2>Our Mission</h2>
        <p>
          Our mission is to inspire and help others discover the joy of cooking
          and enjoying great food. We believe that food is a universal language
          that brings people together, and we're here to celebrate that.
        </p>
      </div>
    </div>
    </Typography></>
    
  )
}

export default About