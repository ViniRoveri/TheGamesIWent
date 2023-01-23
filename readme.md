![Homepage screenshot](./src/img/Capa-JQEJF.png)

# The Games I Went ([Website link](https://viniroveri.github.io/JogosQueEuJaFui/#/))


## What is this?

A website created using React, TypeScript and the React Router that works through a NoSQL API that I also created and control locally using Express and MongoDB.


## Why is this?

To serve as a personal archive and collection of all the information, data and statistics about all the football matches that I have ever attended in my life. In addition to exercising my CSS skills to have a product with good and intuitive design, I also got to practice React for dynamic content creation, and Back-End skills creating, managing and integrating the API that contains all the information for the website.


## What challenges did I overcome working on this?

- ### The searchs on the Homepage, Games page and Stats page

The first step I took was on the games page, because I knew that making it work there was a good starting point to derive the code on the other pages.

- ##### On the Games page

The path I took was to capture user input in the search bar via `useState` and with each new input run a `Function` that creates a `Regular Expression` with this input and uses `RegExp.test()` in all card text on the page to identify if there are any matches. After that, just hide the cards that do not contain matches and add a "No results found" message if all cards are hidden.

- ##### On the Homepage

Now the task was to take the Home user search to the Games page. For that I also capture the input via `useState` and add an `onSubmit` function that: Copies the user input to the `atom` of Recoil; Navigates the user to the Games page; Pastes the stored entry into the search bar and clears the `atom`; and lastly Runs the function that filters the cards using the newly acquired input.

- ##### On the Stats page

The logic of capturing the input remains the same, however the full process is facilitated by the `Function` now only searching for the team name and filtering in the table all `tr` referring to the search, as well as the logic of the "No results found" message also remains the same, this time looking at table rows instead of game cards.


- ### Page with all game's information

This logic is very similar to the dynamic creation logic of the Games and Statistics elements (both of which I will explain later on). The process was facilitated because I was careful to create the `objects` in the API with a `Schema` that contains all the necessary information for this dynamism, for that unique items are used for `strings` and `numbers`, and `Arrays` that I need to traverse using `.map` when it comes to display information like lineups and each goal's information like its minute and scorer.


- ### Automated Stats page

In the data received from the API, it was already possible to have all the information necessary for the table and the calculation of the page's totals, the biggest job was to do all this filling using as little code as possible to keep the project clean and efficient.

- ##### Create one row for each team

The first step was to create an array of teams, going through all the games and whenever a team wasn't there, adding it to this final array, and from there using `.map` to return a `tr` for each team, where their information would be placed.

- ##### Calculation of each team's games, results and goals.

Now for each team of that newly created `array`, an `object` was dynamically created that would contain the information to fill in the table, for that the API information comes back to the scene. Using the team name and scrolling through the API `array` it is possible to identify information such as if they participated in a game, if they were the home team, how many goals they scored and conceded, etc. And from that, all the information necessary to fill in the `object` of each team is calculated. After that, I just traverse this `object` and dynamically fill each `td` with its respective information.

- ##### Total stats calculation

With all the information filled in the table, the total calculation process is easier, I just look at the `length` of the API to know the number of games, the length of the `array` of teams to know the number of teams, and finally add all the goals scored by each team to get the total goals.

- ##### Setting the teams' position on the table

By default the table order was basically random. Just using the `.sort()` function left the teams in alphabetical order, but I didn't like this option either. So I created a function that analyzes the `objects` that contain the data of each team and from that makes several `.sort()` using as tiebreaker the team's data in the order they appear in the table (Number of games, at home , away, wins, draws, etc...) 


- ### Dynamic cards on Games page

Again, `.map` was used in the API data to return a `JSX element` that contains the display of basic information for each game. The most different was dealing with the images of each card that must be added dynamically, for which it was necessary to integrate with the `public` folder of React, and name each image file with the game's unique code defined by the start letters of the teams plus the year of the match.