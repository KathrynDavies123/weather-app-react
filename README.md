# This is a weather app using the [openweathermap](https://openweathermap.org/api) API. 

This project was made using React. I chose this as there were several small components to display that should have the same appearance, and this would be easy to achieve with mapping over the API data to display them. The live site can be found here: [Netlify site](https://main--glittering-pithivier-8e0578.netlify.app/).

I planned out a wireframe using Miro and made a plan of tasks using Trello.

## Details :

- API location data is for Cologne.
- Header background will turn dark when it is night time in the user's timezone, in daytime it will be sky blue.
- Location container background will show a random image of Kreuzberg/Tempelhof from Unsplash.
- User can select today's forecast or a week forecast.
    - Today will show up to 24 hours from now in 3 hour increments.
    - Week will show the next 5 days.
- Highlights shows more detailed information about the current weather conditions.
- Moment.js was used to display times and dates in different formats, from the unix data in the API.
- Font Awesome was used for the icons in the "Highlights" section, all other weather icons are from the API itself.
- Website is suited to all device widths, built with a mobile first design. 
- Website passes with a relatively high score in accessibility and performance tests.

## For next time :

- I chose to use degrees Celcius for the temperature measurements as I am in Europe, but I would have liked to add a button to change this to Fahrenheit. Didn't have enough time to do this for this task but it's something I may add later. 
- I would like to eventually add the ability to search for a location. The API does allow this, it would have just been time consuming to add this in and I did not think I would manage it in the timeframe I had. 

Overall this project was really fun to do and allowed me to test my React skills and challenge myself. I encountered some hiccups (infinite API calls - oops), but overall I knew what I wanted to do and managed it. Hope you like it too!
