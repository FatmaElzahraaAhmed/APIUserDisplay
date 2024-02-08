# User Data Fetch and Display

This JavaScript code fetches user data from a dummy API, specifically from `https://dummyjson.com/users`, and then displays the user information on a webpage.

## How to Use

1. Clone or download the repository to your local machine.

    ```bash
    git clone https://github.com/FatmaElzahraaAhmed/APIUserDisplay
    ```

2. Open the project in Visual Studio Code.

3. Install the Live Server extension if not already installed. You can find it [here](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

4. Right-click on the `index.html` file and select "Open with Live Server."

5. The webpage will automatically open in your default web browser, displaying user information retrieved from the dummy API.

## Live Demo

You can also view a live demo of this project at [https://fatmaelzahraaahmed.github.io/APIUserDisplay/](https://fatmaelzahraaahmed.github.io/APIUserDisplay/).

## Code Overview

### `getData()` Function

- The `getData()` function is responsible for fetching user data from the dummy API using the `fetch` API.

- The API endpoint used is `https://dummyjson.com/users`.

- The fetched data is then converted to JSON format using `response.json()`.

- The user data is stored in the `users` array.

### `displayUsers()` Function

- The `displayUsers()` function generates HTML markup to display user information on the webpage.

- It iterates through the `users` array and creates a card for each user with their image and email.

- The email is linked with a `mailto` hyperlink, allowing users to easily compose an email to the provided address.

- The generated HTML is then injected into the element with the ID `rowData` on the webpage.

### Initialization

- The `getData()` function is called to initiate the data fetching and display process when the script is loaded.



