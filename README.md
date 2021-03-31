# Gear Closet
An inventory management system for personal outdoor gear. This is my Module 5 capstone project for Flatiron School.

Users can upload items to their virtual gear closet, including a photo and details about the item's brand, model, category, condition and rating. Items can be sorted by category, and an algorithm recommends gear in most need of immediate replacement based on age, rating and condition. Clicking on any item expands the card to full screen and offers delete and edit functionality.

This app uses Django as a backend, Firebase for image storage and React for the frontend. Additional libraries include Material-UI and React Router.

[Link to backend repo](https://github.com/gjeffgolden/gear_closet_backend)

## Features
1. Full authentication using simplejwt, with private routes established through React Router.
2. Upload items with detailed attributes, including an image, and sort in many ways based on those attributes.
3. Delete, add and edit any item.
4. Launch a detailed display card of any item with a full-screen image.

## Lessons and Challenges
1. **NEW TECH:** Prior to this project, I had zero experience with Django, Material-UI or React Router. In fact, I'd never even coded a single line in Python. Standing up a Django backend in 2.5 days was the highest hurdle, but implementing those advanced React libraries also had a moderate learning curve. It was a lot to undertake in a little over two weeks. I discovered the myriad pros and cons between Rails and Django, how to build a Private Route with React Router, and how to combine Material-UI's templates with customized styling. My biggest takeaway is that I'm excited to learn more about ALL of these technologies!
2. **IMAGE HOSTING:** Like chat functionality, figuring out how to upload and recall images is a rite of passage for any student developer. It was my first time using Firebase, and it took about a day to understand the flow behind uploading an image, sending the URL as a string to the backend, and then rendering the image again on the frontend. It was definitely one of those "run around the basement fist-pumping and whooping" moments when I got it working.
3. **BEAUTIFUL REACT:** I can't emphasize enough how much I've loved learning React. We had to use it for our [Mod 4 projects at Flatiron School](https://github.com/gjeffgolden/singletrack-frontend), and I enjoyed it so much I chose to make it the focus of my capstone as well. It's an incredibly fun framework, and I'm thrilled to dive deeper as I transition from bootcamp to the workforce.

## Future Goals
1. Assign a group of items to a Kit, such as "14er Dayhike" or "Morning Bike Ride" or "5-day Backpacking Trip." That way a user can further organize their gear based on the intended situational uses and display a readymade packing list for any adventure.
2. Deployment!

## Gratitude
Thank you to the Flatiron School Denver staff for an excellent 15 weeks of instruction, in particular Damon Chivers, Ahmed Gaber, Kyle Coberly, Kristine Du, Brian Firooz, Marc Majcher and Jon Higger. I couldn't have come this far in such a short time without each of you.
