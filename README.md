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

