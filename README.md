## Getting started

To begin using and developing this NLP app you must first clone this repo.

`cd` into your new folder and run:
- `npm install`

## Setting up the API

The Meaning Cloud API requires an API key in whicch you must register for to begin using this project.

### Step 1: Signup for an API key
You can find the API [here](https://www.meaningcloud.com/developer/sentiment-analysis). Once you create an account with MeaningCloud, you will be given a license key to start using the API. This API does not require an SDK, so you can skip ahead to step 4 in the instructions.

### Step 4: Environment Variables
Next we need to declare our API keys. This project is using `dotenv`, which means it will be looking for a `.env` file at the root of the project that will look like:
```
API_KEY="Your API key"
```

### Step 5: Running the app

We're ready to go! To start the server you may do the following:

```
# To run in development mode with webpack-dev-server
npm run build-dev

# To build production dist you may run
npm run build-prod

# To start the app you may run
npm run start
```

## Deploying

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.
