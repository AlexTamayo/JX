### Option 8: Buy/Sell Listing Website

A where you can put different types of things up for sale. You can pick a specific niche of items to sell for th (a cars site, a shoes site, etc). This lets buyers find the items they are looking for quickly, and easily contact sellers.

<br>
***
***

### Requirements:

*  users can see featured items on a main feed
*  users can filter items by price,
*  users can favourite items to check up on them later
*  users can send messages to the user that is listing the item

### Admins can:

*  post items, which can be seen by others
*  remove items from the site
*  mark items as SOLD!,
*  send a message via app, email, or text back on negotiations in buying the said item

### NAME BRAINSTORM
* alosh

* aliba

* josh.ex

* joshex


https://bunz.com/explore?acceptBtz=true



<br>

***
***


### User Stories
A user story describes how users will interact with your application
They have the form: As a ______, I want to ______, because ______.
eg. As a user, I want to be able to save posts, because I want to review them later.
User stories can also be negated: As a _____, I shouldn't be able to ______, because _____.
eg. As a user, I shouldn't be able to edit other users posts, because I don't own those posts.

<br>

***

<br>

## **Buyer**

* As a buyer, I want to see all (featured) items for sale.

* As a buyer, I want to filter items by price.

* As a buyer, I want to favourite items to check up on them later.

* As a buyer, I want to send messages to the seller that is listing the item.

**STRETCH**

* As a buyer, I want be able to search for items.

* As a buyer, I want to be able do a checkout.

* As a buyer, I want to have a wishlist.

* As a buyer, I want to be able filter by category.

<br>

## **Seller**

* As an seller, I want to post items, which can be seen by others

* As an seller, I want to remove items from site.

* As an seller, I want to mark items as SOLD!

* As an seller, I want to send a message via app, or text back on negotiations in buying the said item.

**STRETCH**

* As an seller, I want to I want to be able to see when my items sell.

* As an seller, I want to be able to edit selling item.

<br>

***

<br>

### User Scenarios
A user scenario is a syntactic alternative to user stories
They have the form: Given _____, when ______, then ______.
eg. Given that I am logged in, when I click favourite on a post, then it is added to my favourites.
You can also chain on an and to user stories/scenarios
eg. Given that I am logged in, when I click favourite on a post, then it is added to my favourites and the save icon will change to indicate success.

### ERD
* The user stories provide you with nouns (eg. user, posts, favourites)
* Use these nouns/entities to build out your database (ie. tables are the nouns from the stories)



### Routes
Once you know the resources that you'll have, write out the routes that you'll need to perform BREAD operations on those resources
Remember RESTful conventions (they make it much easier)

### RESTful Routes Example
BREAD Verb	HTTP Method	Endpoint
Browse	GET	/users
Read	GET	/users/:id
Edit	POST	/users/:id
Add	POST	/users
Delete	POST	/users/:id/delete

* Using additional HTTP methods:
  * PUT - replace a resource completely
  PATCH - replace a piece of resource
  DELETE - deletes a resource

BREAD Verb	HTTP Method	Endpoint
Browse	GET	/users
Read	GET	/users/:id
Edit	PATCH	/users/:id
Add	POST	/users
Delete	DELETE	/users/:id

## MVP vs MVD
There is a concept in development of an MVP, the Minimum Viable Product
An MVP has just enough features to be useful to a user
This concept helps streamline the development process and help keep the team on target
For mid-terms, we want to focus on the MVD, the Minimum Viable Demo
If you aren't going to demo it, don't build it


# **ARE WE STILL CONNECTED?! <= IT'S ME ALEX ASKING. @22:25**


### Wireframes
Draw out the structure of your web pages
This will make it much easier to build out these pages later
This is also a great opportunity to get input from all of the team members
Design matters... however you are a developer, not a designer
Get inspiration from websites you visit

### User Login
* Don't do it
* Seriously, don't do it
* We know that you know how to register and login users

```js
// do this instead
app.get('/login/:id', (req, res) => {
  // using encrypted cookies
  req.session.user_id = req.params.id;

  // or using plain-text cookies
  res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/');
});
```







### Tech Choices
* We have made all the tech choices for you
* Back End: Node and Express
* Front End: HTML, CSS, JS, jQuery, Bootstrap

### The Mid-term Skeleton
* Use the provided node-skeleton as a template for your project
* This will get you up and running quickly

### SPA vs Multi-page App
* These concepts are not mutually exclusive
* You can choose one or the other or both

### Splitting up the Work
* Horizontally - each member working on a different piece of the stack (eg. frontend, backend)
* Vertically - each member working on a thin slice of the fullstack (database, backend, frontend)
* Pair Programming - working together on the same tasks

### Communication
* Make sure to communicate with your team members
* Use Slack, iMessage, Google Hangouts, whatever... just make sure that everyone is on the same page
