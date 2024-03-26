# Jenio-CodeDir-Template


## Directory Structure

```
.
├── src
│ ├── components/ # Components library of the app
│ ├── config/ # Configuration files of the app, such as instances
│ ├── languages/ # Language files for supporting multiple languages
│ ├── models/ # Data models or interfaces that define the shape of your data
│ └── routing/ # Routing configuration, possibly using libraries like React Router
├── temp/ # Temporary components for use with react-native-for-web
└── web/ # Static HTML and CSS files for the web app
```

## How to run the template app

1. Run `yarn`
2. Run `PORT=9030 ROUTING_ID="routingName" API_ENDPOINT="test" API_APP_ID="test" API_APP_KEY="test" ENVIRONMENT="production" yarn run:web`
3. Access to http://localhost:9030/

You can check the routingName as /src/routing/{routingName}
