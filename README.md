<h1 align="center">
  <a href="">
    <img src="/src/assets/survey.svg" alt="Project Banner Image">
  </a>
</h1>

# Survey Project

we had to create a Typeform-like product in the form of a quiz using React and practicing react state and controlled forms

### The Problem


We had some issues with the header, as when making changes to the width, the changes were also reflected in the form, in the end we decided to leave the header attached to the top of the web page, which made the form stay behind the header once we scrolled. 

Another problem with the header is that when pressing the submit button, the form response and the header appeared (which was not required) The solution was to create a useState(false) to prevent it from not appearing once submit was clicked.

as Diego mentioned when talking about the useState, as long as the state is not change to true, the header is going to be rendered, but upon clicking submit, the state changes to true and the header is removed. 

### View it live

Every project should be deployed somewhere. Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
