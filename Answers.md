1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.filter, .map, and .reduce do not produce side-effects when used properly. Use Object.assign() to create a new object while extending properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

combining two data sources into one so that there is only one place to look for the most up to date data. 

Reducers: reduce” a collection of actions and an initial state (of the store) on which to perform these actions to get the resulting final state .

Actions: functions that create returns an actions. 

Store:  Redux is a state container for JavaScript apps, often called a Redux store. It stores the whole state of the app in an immutable object tree.



1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Your application state is global, and your component state is local.  libraries like Redux, use what they call “stores” to hold application state. That means any component, anywhere in the app can access it (kind of like a database) so long as they hook into it.

Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.



1.  What is middleware?

 Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. 

1.  Which `react-redux` method links up our `components` with our `redux store`? connect
