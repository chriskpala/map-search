# Map Search Test

## The Tasks:

Create a user interface **that resembles the images below** as closely as possible and implements the following:

1. "Autocomplete" search field - Using the provided sample data in `sample-data.js`, allow users to search in an input field for results based on the data `name` value.
1. Results list - Show the results of the autocomplete search as a list of items that a user can select/click.
1. Locations/markers - When a user finds and clicks a search result, display the location on the map.
1. Details modal - When a user clicks a map location/marker, display a modal that contains additional information about that location. (see below)

**How the initial page should look:**

![The initial user interface](https://user-images.githubusercontent.com/69488977/190290359-2b438fb4-0807-4a05-99fa-b105a49b4f15.png?raw=true)

### Search Field

When entering a query into the search field the matching results should populate an area below the search **as a user types**. If no results are found, make sure to show a message letting a user know that :) _Nothing is worse than thinking it's trying to load forever!_

**How the search interface should look:**

![Search results](https://user-images.githubusercontent.com/69488977/190290402-3f05ee3c-2101-47cb-94c7-1cf09806c69c.png?raw=true)

### Details Modal

When clicking on a map location/marker you should display a modal that contains information about that specific location. **This modal should be both horizontally and vertically aligned.**

**How the modal should look - _(ignore the vertical line guides in your design)_:**

![Vertically and horizontally aligned modal](https://user-images.githubusercontent.com/69488977/190290506-1ec824e2-92ec-4ea8-9802-b7a009b13409.png?raw=true)

## Extra Credit

* We also implement _lots_ of charts using [Chart.js](http://chartjs.org/). We've included some data (see `avgStoreTraffic`) in the `sample-data.js` in case you want to spice up your modal with that.

For quick reference, some Google Maps documentation can be found at [https://developers.google.com/maps/documentation/javascript/](https://developers.google.com/maps/documentation/javascript)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
