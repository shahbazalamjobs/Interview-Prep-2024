
In JavaScript, event propagation refers to the way events are handled as they move through the DOM (Document Object Model) hierarchy. There are two main phases of event propagation: **capturing phase** and **bubbling phase**.

1. **Capturing Phase**:
   - During this phase, the event starts from the outermost element and moves towards the target element.
   - Handlers specified using `addEventListener` with the third parameter set to `true` are executed during this phase.

2. **Target Phase**:
   - The event reaches the target element that triggered the event.

3. **Bubbling Phase**:
   - After reaching the target, the event then bubbles up from the target element back to the outermost element.
   - Handlers specified with `addEventListener` without specifying a capturing phase (or with the third parameter as `false`) are executed during this phase.

By default, most events in browsers use the **bubbling phase**, where the event starts from the target element and propagates upwards through its ancestors. If you want to handle events during the capturing phase, you can pass `true` as the third parameter to `addEventListener`.

For example:

```javascript
element.addEventListener('click', handler, true); // true indicates capturing phase
```

To stop the propagation of an event to further elements, you can use `event.stopPropagation()` within your event handler. This prevents the event from reaching other elements in the DOM tree.

Understanding event propagation is crucial for managing event handling and ensuring that events are handled correctly throughout your web application.


----

![image](https://github.com/shahbazalamjobs/Interview-Prep-2024/assets/125631878/5dc2b2e7-a842-48bb-9d88-672489de43bc)

---

## Bubbling Phase

- Example: In this example, we will create three div components and each component will have an event handler.
- Click div comp 1 : alert comp 1
- Click div comp 2 : alert comp 2 -> alert comp 1
- Click div comp 3 : alert comp 3 -> alert comp 2 -> alert comp 1
alert comp 3	

```html
<!DOCTYPE html> 
<html> 

<head> 
	<style> 
		#div1 { 
			background-color: lightgreen; 
			padding: 24px; 
			border: 1px solid black; 
		} 

		#div2 { 
			background-color: yellow; 
			padding: 18px; 
			border: 1px solid black; 

		} 

		#div3 { 
			background-color: orange; 
			border: 1px solid black; 
		} 
	</style> 
</head> 

<body> 
	<h1 style="color: green">GeeksForGeeks</h1> 
	<h3>What is Event propagation, capturing, bubbling?</h3> 

	<div id="div1"> 
		Component 1 
		<div id="div2"> 
			component 2 
			<div id="div3"> 
				component 3 
			</div> 
		</div> 
	</div> 

	<!-- Javascript code for event bubbling -->
	<script> 
		let div1 = document.querySelector("#div1"); 
		let div2 = document.querySelector("#div2"); 
		let div3 = document.querySelector("#div3"); 

		div1.addEventListener("click", function (event) { 
			alert("Component 1 event clicked"); 
		}); 

		div2.addEventListener("click", function (event) { 
			alert("Component 2 event clicked"); 
		}); 

		div3.addEventListener("click", function (event) { 
			alert("Component 3 event clicked"); 
		}); 
	</script> 
</body> 

</html>

```


## Capturing Phase

- Example: In this example, we will create three div components and each component will have an event handler.
- Click div comp 1 : alert comp 1	
- Click div comp 2 : alert comp 1 -> alert comp 2
- Click div comp 3 : alert comp 1 -> alert comp 2 -> alert comp 3

```html
<!DOCTYPE html> 
<html> 

<head> 
	<style> 
		#div1 { 
			background-color: lightgreen; 
			padding: 24px; 
			border: 1px solid black; 
		} 

		#div2 { 
			background-color: yellow; 
			padding: 18px; 
			border: 1px solid black; 

		} 

		#div3 { 
			background-color: orange; 
			border: 1px solid black; 
		} 
	</style> 
</head> 

<body> 
	<h1 style="color: green">GeeksForGeeks</h1> 
	<h3>What is Event propagation, capturing, bubbling?</h3> 

	<div id="div1"> 
		Component 1 
		<div id="div2"> 
			component 2 
			<div id="div3"> 
				component 3 
			</div> 
		</div> 
	</div> 

	<!-- Javascript code for event capturing -->
	<script> 
		let div1 = document.querySelector("#div1"); 
		let div2 = document.querySelector("#div2"); 
		let div3 = document.querySelector("#div3"); 

		div1.addEventListener("click", function (event) { 
			alert("Component 1 event clicked"); 
		}, true); 

		div2.addEventListener("click", function (event) { 
			alert("Component 2 event clicked"); 
		}, true); 

		div3.addEventListener("click", function (event) { 
			alert("Component 3 event clicked"); 
		}, true); 
	</script> 
</body> 

</html>


```
