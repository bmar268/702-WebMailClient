# 702 Webmail Client

This project was created to test the different timing to invoke a chatbot within a webmail client to minimise annoyance, while maximising learning about phishing. It is created using React, Typescript, Vite, Redux-toolkit, and CSS3. The chatbot is implemented using BotPress, utilising their prebuilt react chatbot component.

**NOTE:** The close button on the chatbot window does not currently work, it is an issue with BotPress's component.

## Installation
1) Clone the repository and run ``npm install`` in the /702-WebMailClient directory
2) Run ``npm run dev`` to start the local server
3) Navigate to the URL given in the terminal
4) Start using the application 🎉

## Webmail Features
- Email listing
- Shows email body in master-slave layout
- Pagination
- Add to and remove from favorites
- Filters:
  - Read
  - Unread
  - Favorites
- Phishing-oriented chatbot

## Altering Chatbot Timings
The application includes multiple different options for controlling when the chatbot appears. These include:
- On Open
  - Displays the chatbot when opening an email
- On Hover
  - Displays the chatot when hovering over a link within an email
- Always On
  - Always has the chatbot visible
- On Delay
  - Displays the chatot 10 seconds after opening an email

To choose which timing condition you wish to use, simply click the 'Change Flag' button as seen below:

<img width="895" alt="image" src="https://github.com/user-attachments/assets/829b0015-0e66-4928-b012-e46cd813b256">


## Attributions
This repository is a fork. The original repository, created by [Raiee Gulhane](https://github.com/raieegulhane), can be found [here](https://github.com/raieegulhane/email-client-app)
