
# Random Quote Machine

This project is a Random Quote Machine web application developed using React. It fetches quotes from the <a href="https://type.fit/api/quotes" target="_blank" rel="noopener noreferrer">Type.fit Quotes API</a> and allows users to generate new random quotes with a click of a button. Users can also tweet their favorite quotes directly from the application.

## Features

- Display a random quote on initial load.
- Fetch a new random quote by clicking the "New Quote" button.
- Display the author of each quote.
- Tweet the current quote by clicking the "Tweet" button, which opens Twitter in a new tab with a prefilled tweet.

## User Stories Implemented

1. I can see a wrapper element with a corresponding id="quote-box".
2. Within #quote-box, I can see an element with a corresponding id="text".
3. Within #quote-box, I can see an element with a corresponding id="author".
4. Within #quote-box, I can see a clickable element with a corresponding id="new-quote".
5. Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".
6. On first load, my quote machine displays a random quote in the element with id="text".
7. On first load, my quote machine displays the random quote's author in the element with id="author".
8. When the #new-quote button is clicked, my quote machine fetches a new quote and displays it in the #text element.
9. My quote machine fetches the new quote's author when the #new-quote button is clicked and displays it in the #author element.
10. I can tweet the current quote by clicking on the #tweet-quote a element. This a element includes the "twitter.com/intent/tweet" path in -its href attribute to tweet the current quote.
11. The #quote-box wrapper element is horizontally centered.

## Built With

- React: A JavaScript library for building user interfaces.
- Axios: A promise-based HTTP client for making requests to the Type.fit Quotes API.
- Font Awesome: For displaying icons, including the Twitter icon for the tweet functionality.

## Credits

- Quotes API: <a href="https://type.fit/api/quotes" target="_blank">Type.fit</a>
- Icons: <a href="https://fontawesome.com/" target="_blank">Font Awesome</a>

## License
This project is licensed under the MIT License - see the LICENSE file for details.
