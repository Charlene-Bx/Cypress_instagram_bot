# Cypress_instagram_bot

## Installation
Open a new terminal in the root project

Create your own credentials file
``` touch cypress.env.json ```

Add your personnal information
``` echo "{\n \"user\": \"planet_cbx\",\n \"pwd\":\"mypwd\" \n}" >> cypress.env.json ```

Install all dependencies
```npm install```

Launch Cypress 
```npm run cypress```

Choose your browser and click on "myInstaBot" for makes some magics tricks
*This test runs initially on Firefox for avoiding 'ResizeObserver loop limit exceeded' error*

## Devlopment
All tests are in /integrations/InstaBot.spec.js

## TO DO
The commands 'FindLikeButton'
For the moment i'm stuck because i can't retreive a concrete array of all "Likes" buttons,
so... The bot are not really a bot.
## Instagram don't like bots so, probally this simple one will have a small life duration


