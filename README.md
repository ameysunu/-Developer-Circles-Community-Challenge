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
Before understanding ```npx``` let's understand what ```npm``` is. ```npm``` is a package manager that aids you install those packages and manage their versions and dependencies. There are hundreds of thousands of Node.js libraries and applications on npm and many more are added every day. Meanwhile ```npx``` is also a CLI tool whose purpose is to make it easy to install and manage dependencies hosted in the npm registry. So, what's the difference? Well, ```npx``` makes it really easy to install packages and to run any sort of Node.js based executable that you would normally install via ``npm``. ``create-react-app`` downloads the packages required to run and execute your first React App. ``myapp`` is the name of the app that I have given for my project, you can go ahead and change it to whatever you'd like. Now if everything went well and good enough, you'll see the below screen on your terminal.
<br/>

![image](https://user-images.githubusercontent.com/48415436/97052438-b23d5980-1589-11eb-8315-1e28c2c1672b.png)

* Now, close the terminal window and open your file ``myapp`` or whatever name you have provided in your terminal and run ``npm start``. This would deploy your Web App on a local host in your system on your default browser.
<br/>

![image](https://user-images.githubusercontent.com/48415436/97052699-28da5700-158a-11eb-92bb-669c469b4ae3.png)

**And that's it, you have created and deployed your first React App**

#### React JS

Now that your app has been deployed on your local host, open up your project in your installed IDE. Go ahead and delete the all the files from  **src** and **public** folders. Do not touch your **node_modules** folder, as the name suggests, it consists of your react components and files that you'll need in order to run your React app. Okay, now that all the files are wiped and clean. Go ahead and create the files **index.html** and **styles.css** inside your **public** folder, and similarly create an **index.js** file inside your **src** folder. These are your basic boilerplate files that you'll need for running any sort of web development script.





