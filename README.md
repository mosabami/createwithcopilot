# Create an ecommerce website using GitHub Copilot Chat
In this example, i will demonstrate how you can use github copilot to build the frontend of a multipage e-commerce website, deploy it to gh pages and containerize it without writing a single line of code yourself.

This process was used to create this app: https://github.com/mosabami/simpleecom which you can currently test online here: https://simpleeconcont.orangedesert-68da496d.eastus.azurecontainerapps.io/ or check out this preliminary version of the website running in this repo on GitHub pages: http://mosabami.github.io/createwithcopilot.

## About React
React is perhaps the most popular front end development library in the world written in JavaScript. It is an excellent library allowing you to break your UI into components that can be worked on independently. 

## About GitHub Copilot Chat
GitHub copilot chat uses AI to answer questions related to software development. You can send it prompts describing what you are trying to build or even your errors and it can answer them fairly accurately. 

## Prerequisites
* Visual studio code
* GitHub copilot license
* GitHub copilot chat expension installed
* npm npx
* Some experience with the React library for debugging
* Docker desktop (optional)

## Execution
Enter the following prompts in the chat to get the chatbot to respond to you with the code you need to build the app. Paste the code in the appropriate files/folder and test the changes on your browser as you go. If you run into errors, ask the chatbot to help you debut and fix them.

```bash
what is the npx command to create a react app
```

```bash
what is the npx command to start a react app in dev mode?
```
```bash
in this folder i have created a basic react app using the npx create-react-app command. now i need to turn  this basic app into a very simple ecommerce website. lets start with the home page. it should display the 9 products with 3 products per row. i want the product id in string form of numbers. can you help with that?
```
```bash
great. how do i modify my App.js file to use these components?
```
```bash
how do i update the styling of the images so that they are always a reasonable size?
```
```bash
going forward id like my components to be in separate files
```
```bash
help me add a simple nagivation bar at the top and replace it with a simple navigation bar that shows a home button and an order button. remember, components should be in separate files 
```
```bash
ok can you help me make the navbar look a little nicer? like a real navbar. include the css part as well that i can use for styling
```

```bash
perfect. now i want to add a new page called product details. i also want to update the app so that when i click on a product, it goes to the product details page that shows the same information as the home page but just for that product
```

```bash
i got an error...
```

```bash
perfect. now i see that the links are appropriately setup. however i want the link to only apply to the product name, not the product name description and price
```

```bash
great. now i want clicking on Home in the navbar to return back to the home screen
```

```bash
i want to pages to look nicer. can we update css so that the page (not including navbar) is wrapped around a container that has some margin on the left and right and the components are centered
```

```bash
ok now i want to add a new state called order initiallized as an empty dictionary. i also want to add a "cart quantity" under price in the product details and product components. under that i want to add a "Add to cart" button. when the add to cart button is clicked the product id is taken as a key and value increases by 1 and stored in the order state
```

```bash
actually i need the state to come from the App component because it needs to feed the Product component as well. make sure these new props are being passed on from the app component to the product component via the homepage component
```


```bash
i want to add a new page called cart. for every product that has an item in addtocart, i want to show the product name, the price and the quantity and the price * quantity
```

```bash
great. now i want that cart page to display as a table with each product forming a new row. at the bottom of the table should be a grand total that adds up all totals
```

```bash
great. can you make this table look nice?
```

```bash
ok perfect. now add a button at the bottom "Place order". once that button is clicked, it clears the order state. make sure that the setorder function is passed as a prop from the App component
```

```bash
how do i deploy my multipage react app to github pages?
```

```bash
create a dockerfile using node v18 to run this react app
```