# Get My Location

Something is wrong with our login form. We want to save our new user's location when they input their name and display a message to them.

Usually it works just fine, but some users are experiencing a problem.

Find the problem and fix it.

---
Notes:
- Async operations: getLocation is asynchronous so need a callback / promise / etc to guarantee completion
- Logging to the console: location will appear on the console.log if you wait sufficient time, despite displaying undefined in the message. Two points:
  - The log is evaluated when the arrow is clicked
  - Objects are passed by reference, not value
