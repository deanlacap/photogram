# README

Photogram, an instagram clone, is a photo sharing application that allows users to publicly share their photos.  Users can upload and create posts with captions.  Users are also able to like other user's posts.  

## Technologies Used

Photogram is built with a Ruby on Rails backend with a React-Redux frontend.  

AWS S3 is used to store the uploaded posts 

## Features and Functionality 

User Authentication - Users are able to log in and have access to features

Posts - Authenticated users are able to create, edit, and delete their posts.  Users can create posts by uploading a photo with an optional caption.  

Likes - Authenticated users are able to like potss.  Users are able to like a posts once by clicking on the heart and remove that like by clicking on the heart button again.  

## . Future Implementations 

Comments - Users and the original poster of the image will be able to comment as many times as they'd like on the post.  

Notifications - Users will be able to receive notifications of when other users like and comment on their posts.  This feature will be implemented using websockets.  

Direct Messaging - Users will be able to receive direct messages from other users.  This feature will also be implemented using websockets.  
