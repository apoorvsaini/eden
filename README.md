# Eden Health Code Challenge

Thank you for your interest in Eden. The following code challenge is designed to give you an opportunity to demonstrate your technical abilities and knowledge. Please read through the entire assignment before starting and email us with any questions you may have at: blee@edenhealth.com

We have set up a mock JSON server for your API calls for this exercise. It is accessible at https://eden-interview-api.herokuapp.com/. The API is read only, so you will be unable to change any data on the server. We recommend reading the documentation for the server here: https://github.com/typicode/json-server#routes. Take note of the filter and operator options available to you.

### Get Started

This app was created with `create-react-app` and customized from there. It uses React, Redux with Thunk middleware (https://github.com/gaearon/redux-thunk) for state management, and Immutable objects (https://facebook.github.io/immutable-js/docs/). Routing is handled through React Router (https://github.com/ReactTraining/react-router). It also supports action logging and hot reloading.

To run the app, simply enter `npm run start`.

The app has mocked login/logout functionality along with a few basic routes and example pages. For the purposes of this assignment, you will not have to implement authentication against an actual service.

### Task

We at Eden Health would like a UI be able to easily find patient data. Your task is to be able build a UI that meets acceptance criteria that will be defined below.

##### Technical Overview

The API has three collections: patients, appointments, and user actions.

Patients is a collection of Eden Health Members and some basic information about them.
```
{
  "id": (int) unique id,
  "name": (string) the patient's name,
  "company": (string) the name of the company the patient is affiliated with
}
```

Appointments stores all appointments that have either been booked through our mobile app or directly.
```
{
  "id": (int) unique id,
  "datetime": (string) ISO datetime string of the time of the appointment,
  "created_at": (string) ISO datetime string of the time the appointment was created,
  "patient_id": (int) id referencing an id in the "patients" collection,
  "note": (string) clinician's notes on the patient visit
}
```

User Actions is a collection of actions that have been tracked from our mobile application. There are four types of user actions that are currently tracked: login, logout, book_appointment, and message. Note that appointments that were booked directly through a care provider will not show up as a user action that is tracked in this collection.
```
{
  "id": (int) unique id,
  "patient_id": (int) id referencing an id in the "patients" collection,
  "action": (string) one of: login, logout, book_appointment, message
  "datetime": (string) ISO datetime string of when the action occurred
}
```

##### User Stories and Acceptance Criteria

As a clinician, I would like to be able to see a list of patients in our network and be able to see appointment and user action data associated with them.
- A clinician should have an overview page listing patients by name.
- Clicking on a patient should open up their details which includes a list of their appointments sorted by date.
- It should also display the total number of message user actions associated with that user.

As a clinician, I would like to be able to see a list of appointments.
- A clinician should have an overview page listing appointments sorted by date.
- Each appointment should display the date and patient name associated with it.
- Clicking on an appointment should display the note associated with it.

##### Optional
Feel free to expand upon the above requirements in any ways you would like to showcase your abilities.

### Task Requirements

* We have provided a boilerplate for you to base your work off of. You may choose to modify this in any way you wish, but we do require that you use React.
* Consider writing tests. We would like to see code that reflects production-level quality as much as possible.
* We should be able to run the app with `npm run start` but if not, provide instructions on how to do so
* Your code should be zipped and sent in a single file through Google Drive, or uploaded to Github in a public repository
* Included in the project is an ANSWERS.md file. Please provide answers to the questions in the file.

### Additional Notes

* It is not necessarily expected for you to be able to implement all the required features in a manner that represents production level quality. You should aim to complete the parts of the challenge that best highlight your abilities and give an explanation for the parts you do not complete.
* While the styling is relatively minimal and no UI framework has been selected for this project, feel free to use whatever framework you see fit for your needs. Or none at all. We use Semantic UI (https://react.semantic-ui.com/).
* You don't have to use our boilerplate. Feel free to use your own.

### Evaluation

To give you a sense of how we will be evaluating this challenge, we will provide you with a some general guidelines for how we will approach your submission:

- Does the code work?
- How easy is it to use the application? Is it relatively pleasant to look at?
- How is well is the code organized? Does the file structure make sense? Are classes and components organized in a clear and intuitive structure?
- How is application state organized?
- What additional frameworks and libraries, if any, were selected and what purpose do they serve?
- What kind of testing is implemented, and what is being tested?
- For things that weren't implemented, is a reasonable explanation given?
