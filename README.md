## What is React JS
React is an open source web framework used for developing UI components and is maintained by Facebook and a community of individual developers and companies. 

## Why React?
A common question that users may ask themselves before learning React. Well React is easy, simple and really powerful when it comes to developing web frameworks. We can see React taking over the entire Web Development in the long run. React is used to by more than 8000+ companies in their tech stacks including: 

* Airbnb
* Netflix
* Facebook
* Instagram
* Uber
* Amazon
* Twitter
* [and more](https://stackshare.io/react)

Another best reason to learn React is, that it is simply the **best**.

## Getting Started
Okay so, before getting started with React, the basic pre-requisite is to learn *HTML, CSS and JavaScript* because these are basic web development frameworks you'll need right before you dig into React. These don't take much time and are really super easy to learn and implement. 
Assuming that you already know the above basic Web Development Frameworks, let's begin!

#### Installation
Before you start working and developing web apps with React, you are going to need some tools and IDE's on your computer to work with.

* Install [Node.JS](https://nodejs.org/en/). The website will automatically detect your OS and provide you installer and steps for the same. Once NodeJS has been installed, go ahead and fire up your Terminal/Command Prompt and type ``` node --version ```. It will successfully show the version of Node installed. If you get any other error command, reboot your system and if the error still persists, reinstall Node. My current Node version is ```v12.19.0``` which is the latest one, as of October 2020.
<br/>

![image](https://user-images.githubusercontent.com/48415436/97050896-da778900-1586-11eb-92a8-1b6e1956c4f7.png)

* Choose an IDE of your choice. You can choose from Atom, VSCode or anyother prefferable IDE. I am using [Visual Studio Code IDE](https://code.visualstudio.com/), because I like its color theming and simple understandable UI. There are plenty of IDEs to choose from, VSCode is just my personal choice. Whichever IDE, you are done installing, go ahead and install the Babel and React Native Tools extensions. These would help you while writing your first react code.

* Now, just navigate to your desired folder where you would want to start your first React App. Fire up your terminal/command prompt on that folder and enter
```npx create-react-app myapp```
So, on entering this command you'll see some sort of package installations happening and please note that, this would take a little bit time for installation.
Meanwhile let's breakdown the command and understand what exactly is happening.
<br/>
Before understanding ```npx``` let's understand what ``npm`` is. NPM is a package manager that aids you install those packages and manage their versions and dependencies. There are hundreds of thousands of Node.js libraries and applications on npm and many more are added every day. Meanwhile ``npx`` is also a CLI tool whose purpose is to make it easy to install and manage dependencies hosted in the npm registry. So, what's the difference? Well, ``npx`` makes it really easy to install packages and to run any sort of Node.js based executable that you would normally install via ``npm``. ``create-react-app`` downloads the packages required to run and execute your first React App. ``myapp`` is the name of the app that I have given for my project, you can go ahead and change it to whatever you'd like. Now if everything went well and good enough, you'll see the below screen on your terminal.
<br/>

![image](https://user-images.githubusercontent.com/48415436/97052438-b23d5980-1589-11eb-8315-1e28c2c1672b.png)

* Now, close the terminal window and open your file ``myapp`` or whatever name you have provided in your terminal and run ``npm start``. This would deploy your Web App on a local host in your system on your default browser.
<br/>

![image](https://user-images.githubusercontent.com/48415436/97052699-28da5700-158a-11eb-92bb-669c469b4ae3.png)

**And that's it, you have created and deployed your first React App**

#### React JS

Now that your app has been deployed on your local host, open up your project in your installed IDE. Go ahead and delete the all the files from  **src** and **public** folders. Do not touch your **node_modules** folder, as the name suggests, it consists of your react components and files that you'll need in order to run your React app. Okay, now that all the files are wiped and clean. Go ahead and create the files **index.html** and **styles.css** inside your **public** folder, and similarly create an **index.js** file inside your **src** folder. These are your basic boilerplate files that you'll need for running any sort of web development script.
<br/>

Okay, now open up your entire project workspace in your IDE and open up **index.html**
Enter the following HTML boilerplate code into the file:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>React App</title>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <div id="root"></div>
    <script src="../src/index.js" type="text/jsx"></script>
  </body>
</html>
```
Over here, if you are familiar with HTML, you'll know that we linked our **styles.css** sheet to our HTML code as well as our **index.js** file but the type mentioned is not **js** but instead it's **jsx**. So what is **jsx**?

###### JSX

JSX is a syntax extension to JavaScript, but is used with React for better UI Components description, hence producing React elements with which we render them to the React DOM(Document Object Model). Don't worry if you did'nt understand theoritically what JSX is, you'll understand when I begin writing the code.
<br/>

Moving on, let's open up **index.js** and begin writing some fresh React code. First of all you need to begin by importing the React module into our app.
```
import React from "react";
import ReactDOM from "react-dom";
```
We have imported React and ReactDOM from the npm modules now onto our app. So, now let's begin rendering our first DOM element. For this, we can use ``ReactDOM`` which we imported from the node package and tap into the render functionality of our ``ReactDOM``package.
```
ReactDOM.render();
```
Inside our render function, let's declare display a ``<h1>`` element namely **"Hello World!"** on our webpage. So, let's go ahead and add the tag as follows in our ReactDOM:
```
ReactDOM.render(
  <h1> Hello World! </h1>
);
```
At this point if you go ahead and run ``npm start`` in your project root, it would launch our web page on our default browser with an error
<br/>

![image](https://user-images.githubusercontent.com/48415436/97116908-7e8d3b80-1711-11eb-89c9-e9dce01df216.png)

<br/>
Now what does this mean? Well we need to use ``document.getElementbyID`` in order to get began rendering HTML components. We can simply do that by tapping into our ``ReactDOM.render`` function and simply declaring the required render.

```
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <h1> Hello World! </h1>,
  document.getElementById("root")
);
```
The value ``root`` was our id for ``<div>`` tag in HTML, hence by accessing root we would be rendering the HTML as a DOM element. Now save the changes in your IDE and hit refresh on your website and **Hello World!** would be displayed loud and proud on the website.

Okay, now let's use a little bit Javascript inside our React App to get the current date and time from our system. Let's begin by getting the current date and time and print it out to the console. 

```
let time = new Date();
console.log(time);
```
###### P.S. Do not call the variable time inside our React DOM yet.
<br/>

Hit refresh on your browser and pop up Developer Tools and open up your console on the browser. You'll see the current time and date printed on your console. Now, imagine you want this to be printed instead of Hello World!. What would you do?
<br/>
Well in React, in order to display javascript objects inside our render DOM, we have to use ``{}`` and add the object name within it. In our case, we want to display the ``time`` instead of **Hello World!**. So, go ahead and remove **Hello World!** from our ``<h1>`` tag and instead add ``{time}``.

```
ReactDOM.render(
  <h1> {time} </h1>,
  document.getElementById("root")
);
```
Now, if you hit refresh, you'll see an error saying that ``Objects are'nt valid in the DOM``. So, how do we fix this now? Well the fix is simple, the const time is an object, hence we need to retrieve a String from it, and display it to the webpage. So, we can tap into the ``toString()`` property of the object to retrieve the string value from it.

```
ReactDOM.render(
  <h1> {time.toString()} </h1>,
  document.getElementById("root")
);
```
Now, if you hit refresh, you'll see that the time now appears on your webpage and everytime you hit refresh, it updates the time. But as an end-user you don't want to keep hitting refresh everytime to see the time updating, instead you would want to see it update dynamically as your clock updates as well. Let's do this as well. In order to begin with this we shall be learning a React concept called **Hooks**
<br/>
###### Hooks
Hooks are functions that let you “hook into” React state and lifecycle features from function components. Now, here we shall be using the ``State Hook`` as we shall be setting the state of the app to dynamically change, instead of the user having to change it constantly.
<br/>
Let's get started with using the **State Hook**. Let's begin by making our app a little clean first. Inside your **src** folder create a **components** folder and create a file named ``App.jsx``. Inside your App.jsx, import your React module. Now create a function called App and move your HTML renderings from ``index.js`` into our function by returning it and similarly let's move our JS Code as well. Your App.jsx should look like this now:

```
import React from "react";

let time = new Date();
console.log(time);

function App(){
return(
 <h1>
    {time.toString()}
    </h1>
)
}
```
Now, let's begin exporting this function for our **index.js** to render it. You can export this by calling ``export default App``. Here App is our function, which we shall be importing for rendering or to any other component which might want to use it. Call this at after the function at the end. At this point, if you have moved everything from our **index.js** file to **App.jsx**, the **index.js** file would look like this:

```
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  document.getElementById("root")
);
```
Now, since we have initiated export at our App, let's import it in our **index.js** file to use it for render. You can import it just like how we had imported our ``React`` module.
```
import App from "./components/App"
```
Here, you can skip the **.jsx** extension in the end of App, as React would automatically figure that out. Now, inside our ``ReactDOM.render`` we can add the render by simply calling
```
<App> <App/>
```
or simply 
```
<App />
```
Now, if you save your changes and refresh the browser, you'll see the same result as before, except now your program looks way cleaner and easily identifiable for other developers and yourself as well.
At, this point your **index.js** file should look like this:
```
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"


ReactDOM.render(
 <App />,
  document.getElementById("root")
);
```
And your **App.jsx** should look like:
```
import React from "react";

let time = new Date();
console.log(time);

function App(){
return (
    <h1>
    {time.toString()}
    </h1>
)
}
export default App;
```
