# Questions

* How long did you spend on this code test? What would you improve if you had more time?

> Between preparing for my end-sem exams and taking time out for the coding test, it took around 4-5 hours to finish the test. If I had more time, I would have made more improvements to the UI (color schemes, layout) as well as overall refractoring.

* We realize that that it may be difficult to implement an ideal solution for the presented problem given time constraints. Where did you cut corners and how did you decide what to leave out?

> I had to cut corners on improving the UI. Although I did all that I could to make the UI look pleasing (took the color-pallete inspiration from Eden Health's website) and responsive. I believe I could have made the UI more pleasing. In terms of features I had to cut short on the second part. Instead of making user click on the apointment to see the note, I displayed the note along with the patient and the appointment date.

* We realize the API provided has some limitations that may not have been ideal. How would you change or improve the API if you could?

> Yes, the API had limitations esp. in the second part of the task. Since, the APIs do not provide the joins for collections it became a tedious task to get Patient's name from Patient collection after we get the patient_id from appointment data. So, instead of making another API call to Patient end-point, I chose to cache the patient data in the beginning from the server (while fetching Patient list, hence re-using the data). Although, my solution might be a problem when dealing with a bigger patient data, but it avoided making extra network calls for this problem.

> I would enable joins using foreign keys among collections as well as make pagination as a deafult for all end-points. The APIs have to be designed keeping the use-cases in mind as well as granuality and aggregation support have to be maintained e.g. just to get the number of messages in user_actions, I had to fetch the complete list of the actions (filtered) and calculate it's length on the client side. Sum, average operations should have been available for such cases.

* Was React a good framework for building this application? Why or why not? If not, what would you prefer instead and why?

> React is an amazing framework. For this application as well I believe React is perfect. It becomes very easy to manage states, events and behaviour of the UI. Testing is a breeze too.

* How enjoyable was this challenge? Do you have any feedback?

> I really enjoyed working on this challenge. The tasks were elaborate and the challenge being open-ended provided a lot of freedom in terms of implementation.
