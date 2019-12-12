# BSc (Hons.) Level 8 - Assignment 1 - Single Page app.

Name: David Byrne

## Overview.

Web API for for react app (https://github.com/D-Byrne/Web-App-Assignment1). Adds mongoDB integration to react app. Posts on react app read from mongoDB through express app.

## Routes

API Routes
-/api/posts  <br/><br/>
GET -> get all post  <br/><br/>
Post -> add a post

-/api/posts/:postid   <br/><br/>
GET -> get a post

-/api/posts/:postId/upvotes  <br/><br/>
POST -> upvote a post

-/api/post/:postId/comments  <br/><br/>
GET -> get comments for post