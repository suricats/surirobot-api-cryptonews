# Crypto News API for Surirobot

## Overview
This API uses Coin Market Cap API to retrieve current cryptocurrencies values in €. It will return a text message containg the information in a sentence.

## Requirements
* NodeJs >= 8

## Setup
Run in the console:
```
git clone git@github.com:suricats/surirobot-api-cryptonews.git service-cryptonews
cd service-cryptonews
npm install
cp src/config.js.example src/config.js
```

Fill src/config.js with the server port or use the suri downloader:

```
cp .env.example .env
nano .env
tools/get-credentials.sh
```

### Running the server
To run the server, run:

```
npm start
```

### Documentation
To view the Swagger UI interface, open a browser and access:
```
https://cryptonews.api.surirobot.net/docs
```

You can also find the Swagger file at:
```
api/swagger.yaml
```
