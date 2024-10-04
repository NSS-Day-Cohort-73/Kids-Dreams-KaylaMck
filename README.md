# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?

   > When you click on a child in the browser, the code that will be executed is found in the Kids.js module. Inside of the Kids.js module we've attached an .addEventListener() function to the main document that takes the arguments of "click" and (clickEvent) => {...}. "click" is the event we're 'listening' for and the (clickEvent) is the event object, in this case the element that was clicked, that we're going to perform some code on whenever it's clicked. Inside of that function we are going to store the element that was clicked, clickEvent.target, into a variable called childTarget. Next we are going to check to see if the element clicked, childTarget, has the data-type attribute, dataset.type, of "child" and if it does the child and their wish will be displayed in a window alert. 

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   
   > The findCelebrityMatch() function must be invoked inside of the for..of loop that iterates over the kids array in order to pair each child with their corresponding celebrity. The for..of loop takes the current kid and iterates over the array of celebrities to search for the celebrity object who's id matches the celebrityId of the current kid, and it saves that celebrity to the kidsStar variable. We can then use that variable, with the saved celebrity object, to create the dynamically generate HTML we need for the for the <article class="assignments"> section, where we create a list of each child ${kid.name}, their paired celebrity ${kidsStar.name}, their celebrity's sport ${kidsStar.sport} and their wish ${kid.wish}. 

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   
   > We were able to get the name of the sport that celebrity plays to display in the window alert through the use of data attributes. Each celebrity in our list of celebrities represents a <li> element in our HTML and each <li> element has several data attributes attached to it; data-id, data-type, data-sport, and data name. We also attached an eventListener to the document that is targeted to "listen" for a click on one of those celebrity <li> elements. Within the (clickEvent) => {} function we are checking to see if that clicked element's dataset has a type that is "celebrity" and if it does we are triggering a window alert that will display a dynamically constructed HTML string (`${celebrityTarget.dataset.name} is a ${celebrityTarget.dataset.sport} star`). The ${celebrityTarget.dataset.name} will take the celebrity element that was clicked, check its dataset for a name attribute, and will dynamically generate the celebrity's name. The ${celebrityTarget.dataset.sport} will take the celebrity element that was clicked, check its dataset for a sport attribute, and will dynamically generate the name of the sport the celebrity plays. So depending on which celebrity element is clicked, the window alert string will say "(celebrity) is a (sport) star".

4. Can you describe, in detail, the algorithm that is in the `main` module?
  
   >  The algorithm in the main module is dynamically constructing the HTML template that we are going to want to be displayed on our webpage. We start by importing the Pairings(), Celebrities(), and Kids() functions from their respective modules so that we can insert their content into our code later on. Then we select the element with the id="container" from the DOM using the document.querySelector() method, and save it's reference into a variable called mainContainer. Then we declare a variable for the HTML string to be stored in called applicationHTML. Inside of applicationHTML we begin the process of actually building our HTML structure by opening it up with template literals, allowing us to dynamically manipulate the HTML. Our HTML structure is broken down into sections starting with the heading, which is wrapped in a <h1> tag. Then we have an <article> section, with a class="details", that is broken down into two subsections, <section>, and is going to be used to display two columns. The first <section> is given a class="detail--column list details_kids", which will hold all of the information pertaining to the children. We give this subsection a subheading, wrapped in <h2> tags, and embed the list of ${Kids()} from the Kids() function, and then we close that </section>. The second <section> is given a class="detail--column details_celebrities", which holds all of the information pertaining to the celebrities. We give this subsection a subheading, wrapped in <h2> tags, and embed the list of ${Celebrities()} from the Celebrities() function, and then we close that </section>. Now that our two subsection are complete, we can close the </article> as well. Then we create a second <article> section with class="assignments" to hold all of the information pertaining to how the children and celebrities are paired. We give this article a heading, wrapped in <h2> tags, and embed the ${Pairings()} from the Pairing() function, and then we close that article. We finish the HTML structure with the closing backtick, signifying that we're done dynamically generating our HTML. Finally, we target the innerHTML of the mainContainer and insert our dynamically constructed HTML with mainContainer.innerHTML = applicationHTML. 
