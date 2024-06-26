
- Throttle and debounce are two techniques used to control the rate at which a function is executed. They are especially useful for optimizing performance in scenarios like handling scroll events, window resizing, or keystroke events.

## Throttle
- Throttle ensures that a function is called at most once in a specified period. It prevents the function from being called repeatedly within a short span of time.


## Debounce
- Debounce ensures that a function is called only after a certain amount of time has passed since the last time it was invoked. It is useful for scenarios where you want to ensure that a function is not called too frequently.


## When to Use
- Throttle is suitable for scenarios where you want to ensure that a function executes at regular intervals. Common use cases include:

## Handling window resize events
- Handling scroll events
- Debounce is suitable for scenarios where you want to delay the execution of a function until a certain amount of time has passed without the event being triggered again. Common use cases include:
  
  1. Handling text input events (e.g., search boxes)
  2. Handling window resize events when resizing stops
  3. By applying throttle and debounce, you can significantly improve the performance and responsiveness of your web applications.
