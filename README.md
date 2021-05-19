# NgrxTutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

Tutorial-1

Topic: Introduction to Angular NGRX State Management - #ngrx​ #Angular

-> NGRX: It is used for organizing and managing the state in the angular application.

-> NGRX inspired by Redux.

-> Redux is a popular pattern used to maintain three principles:

    -> Maintaining the state

    -> Actions

    -> Reducers

-> Use of NGRX:

    -> Proper structure of our application.

    -> Managing the state(data or store).

-> State: State means data that store in STORE.

Reference; https://www.youtube.com/watch?v=3WI5BEXVkmE&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=1

Tutorial-2

Topic: Understand Redux Pattern Structure. When to use and not to use NGRX in the application - Angular

Goto: https://ngrx.io/docs

Reference: https://www.youtube.com/watch?v=BneVl57pvGs&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=2

Tutorial-3

Topic: How Store State, Actions and Reducers will look like in NGRX Redux Pattern - Angular

Store: Store is state data.

Reference: https://www.youtube.com/watch?v=m0f8oDDHCO0&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=3

Tutorial-4

Topic: Implement Counter Application without NGRX and using Input Output Emitters - Angular NGRX

Reference: https://www.youtube.com/watch?v=Ak1kxUgmLUc&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=4

Tutorial-5

Topic: Implement the Counter Application using NGRX Store, Actions, and Reducers - Angular Ngrx.

npm install @ngrx/store

Reference: https://www.youtube.com/watch?v=hRD5Fy664io&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=5

Tutorial-6

Topic: Refactoring Store state. Using Async Pipe for selecting observable state data - Angular NGRX

Reference: https://www.youtube.com/watch?v=FWnv2YbCSlE&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=6

Tutorial-7

Topic: Pass Custom Data using Props in Actions. Update State Data in Reducer with Data - Angular NGRX.

Reference: https://www.youtube.com/watch?v=sfrLeTfa7fI&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=7

Tutorial-8

Topic: Disadvantages of not using create Selectors for selecting the store data in NGRX - Angular Ngrx

export interface CounterState {
   
    counter: number;
   
    channelName: string;

}

If I get counter and channelName using subscribe. If I change counter, channelName subscribe execute and I change channelName, counter subscribe execute.

Reference: https://www.youtube.com/watch?v=8zyyfb9_lEI&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=8

Tutorial-9

Topic: Using CreateFeatureSelector and createSelector for getting the store data - Angular ngrx

Reference: https://www.youtube.com/watch?v=U3Fw9xAKCT0&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=9

Tutorial-10

Topic: Implement Routing for the state management Ngrx application - Angular Ngrx

Reference: https://www.youtube.com/watch?v=PtG0aXJok34&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=10

Tutorial-11

Topic: Install Redux Chrome Extension and ngrx store dev tools for debugging Angular Ngrx Application.

For Debugging-

npm install @ngrx/store-devtools --save

Right Click Mouse -> Inspect -> click redux and see Redux store.

Reference: https://www.youtube.com/watch?v=GnREH8YOWjo&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=11


Tutorial-12

Topic: Combining all the different modules of the state into a single AppState - Angular Ngrx

Reference: https://www.youtube.com/watch?v=skbu7CUJNTk&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=12

Tutorial-13

Topic: Implement the AppState in the Angular NGRX Application by combining all the Feature states.

Reference: https://www.youtube.com/watch?v=wCvJ5uc-Pbo&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=13

Tutorial-14

Topic: Get Async Data from ngrx store using createSelector and display it in the table - Angular, NGRX

Reference: https://www.youtube.com/watch?v=N0frNz9OcB8&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=14

Tutorial-15

Topic: Create Reactive Form for adding Post and apply validations using child routing - Angular ngrx

Reference: https://www.youtube.com/watch?v=XUI9ki2dP9E&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=15

Tutorial-16

Topic: Adding Posts into the ngrx state submitted by the Form - Angular NGRX

Reference: https://www.youtube.com/watch?v=RCJPtZKcCuY&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=16

Tutorial-17

Topic: Props in Ngrx Selectors. Sending arguments to the state selectors for updating Post - Angular

Reference: https://www.youtube.com/watch?v=Xs9EMmucLeE&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=17

Tutorial-18

Topic: Update Post in Ngrx store immutable with actions in Angular Ngrx

Reference: https://www.youtube.com/watch?v=HN96QmxBRgI&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=18

Tutorial-19

Topic: Delete Post in the Ngrx store state in Angular Ngrx

Reference: https://www.youtube.com/watch?v=zcJFRRLvD78&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=19

Tutorial-20

Topic: Implement Lazyloading for the routes in the ngrx application - Angular NGRX

Reference: https://www.youtube.com/watch?v=-v7ub4Y8xtk&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=20

Tutorial-21

Topic: Lazy load the ngrx state using for Feature store Module in Angular NGRX

Reference: https://www.youtube.com/watch?v=iKfG4_e_IqM&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=21

Tutorial-22

Topic: Design Auth Login Module in Ngrx Angular Application

Reference: https://www.youtube.com/watch?v=mg9PQ5SL6YI&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=22

Tutorial-23

Topic: Ngrx Effects Library introduction. Manage HTTP calls with effects

Reference: https://www.youtube.com/watch?v=8gjFcENWfm8&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=23

Tutorial-24

Topic:  How to Define the Ngrx Effect file in Angular Ngrx Application

Reference: https://www.youtube.com/watch?v=HWNFb7yFHfg&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=24

Tutorial-25

Topic: Adding Auth Feature State for the Auth Module in the Angular Ngrx Application

Reference: https://www.youtube.com/watch?v=JKKydVTwTEc&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=25

Tutorial-26

Topic: Implement first Effects file in our Angular NGRX Application

Reference: https://www.youtube.com/watch?v=h6CuOo6SsZc&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=26

Tutorial-27

Topic: Save the User token data from Login in Ngrx State in Angular Ngrx Application

Reference: https://www.youtube.com/watch?v=VaUkAi14nKY&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=27

Tutorial-28

Topic: Implement Shared Loading Spinner Component in the Ngrx Shared State - Angular Ngrx

Reference: https://www.youtube.com/watch?v=EDvx8avc094&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=28

Tutorial-29

Topic: Implement Error handling in ngrx effects and show error message when API fails - Angular NGRX

Reference: https://www.youtube.com/watch?v=yaMHyj7pdmk&list=PL_euSNU_eLbdg0gKbR8zmVJb4xLgHR7BX&index=29

