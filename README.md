
# MyProjectManager
![](https://i.imgur.com/7CDeJsb.png)
MyProjectManager is my attempt at translating how my wife plans out her projects into a web application. A secondary purpose to this project was to gain a better understanding of Ember as a frontend framework, and gain more experience working with the base Javascript date object. A user can create a project that consists of a start and due date, and in later iterations, a list of tasks to be completed. There is computed logic to show the suggested start date and the amount of days left till the project's due date to the user. 

In future iterations, The tasks that make up a project will also have individual start and due dates. A task's start date cannot be before its parent project's start date, and the due date cannot be after its parent project's due date.

This is the frontend for MyProjectManager.

Deployed backend: https://agile-plains-89962.herokuapp.com/

Deployed frontend: https://rasyadiabdoellah.github.io/ember-project-manager/

Backend repo: https://github.com/RasyadiAbdoellah/project-manager-backend

## Tech Stack
- HTML5, CSS3, JavaScript ES6
- Ember frontend
- Ruby on Rails backend

## Dev Log

Before starting I created a rough action plan to follow. Since this was my first time using Ember I knew the frontend would give me the most issues, so I decided to build as simple of a backend as possible so that I had more time to focus on areas I knew would give me trouble, particularly computing manipulating dates, and building a UX/UI flow that was simple and clean. The action plan is as follows:

- **Day 1:** Deploy boilerplate Backend & Frontend, build single resource API to V1, curl test CRUD functions, then deploy V1 API
  
- **Day 2:** Define frontend routing, build projects list view, single project functionality + view, new project functionality + view, and delete project function
 
- **Day 3:** Work on date information display + manipulation, improve UX/UI flow, start styling
  
- **Day 4:** Bug fix, docs

My predictions on what problems I would face were correct; dates are hard. However I wanted to better understand how they work, so I opted out of using something like Moment.js or Ember Moments to manage date manipulation. 

I solved most of my date problems through experimentation and testing via curl scripts and the Node REPL. The evening of Day 2 was spent experimenting with Ruby's dateTime and JavaScript's/Embers Date data types. I found the rails backend can pretty much accept any string value that looks like a date format. I also learned that Ember stores dates retrieved from the backend as a standard JS date object.

Knowing Ember stores dates as a Date object, I used the Node REPL to figure out the methods and calculations I needed to do to get the values I want displayed. Day 3 was spent translating what I learned in the REPL to the actual date values in Ember, which pretty much meant going through the Ember docs.

The problems that I faced with Ember were more conceptual than technical; how data was passed down from route to template to component, how and where computed values and properties were stored, data binding from parent to child, etc. Solving these problems was easier in the sense that there was ample documentation, it was just figuring out which solution applied to my situation. The Ember docs were the most helpful in understanding how each part worked. Forum discussions and the GA issue queue were immensely helpful when I had a specific issue I was stuck with.

## User Stories
### V1
**- Epic: As a user, I want to save a project**
- As a user I want to make an account
- As a user I want to create a new project
- As a user I want to see all of my projects
- As a user I want to update a project
- As a user I want to delete a project

### V2
**- Epic: As a user, I want to set tasks for each project**
- As a user I want to create a new task for a project
- As a user I want to see all the tasks I've created
- As a user I want to update a task
- As a user I want to delete a task

### V3
**- Epic: As a user, I want to see tasks and projects sorted by importance and closest due date**
- As a user I want to set a priority for each project and task
- As a user I want to set a due date for each project and task
- As a user I want the information sorted by these two parameters

### Reach Goals
- As a user, I want to see this information on a calendar UI
- As a user I want to add other users to a project
- As a user I want to be reminded of project due dates
- As a user I want a summary of a project status


### ERD + Wireframes

[Link to ERD](https://www.lucidchart.com/invitations/accept/a00cd495-fe73-4f47-86d6-7921a5ae1631)
[Wireframes](https://i.imgur.com/4nNuqbL.jpg)

### Technical issues/improvements

No technical issues found so far. A few improvement ideas:
- Improve UX/UI
- Add ability to specify/modify time
- create tasks model, routing, and UX/UI
- look into implementing moments.js/ember-moments


