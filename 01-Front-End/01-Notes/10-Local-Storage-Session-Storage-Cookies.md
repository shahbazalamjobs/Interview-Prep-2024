
In JavaScript, session storage, local storage, and cookies are all used to store data on the client-side. However, they have different use cases, storage capacities, and persistence behaviors. Here's a detailed comparison:

### 1. Session Storage

- **Scope**: Session storage is specific to a single tab or window. Data stored in session storage is only available for the duration of the page session.
- **Persistence**: Data is cleared when the page session ends (i.e., when the tab or window is closed).
- **Storage Capacity**: Typically up to 5-10 MB per origin (depends on the browser).
- **Accessibility**: Data can only be accessed by pages from the same origin opened in the same tab or window.
- **Use Case**: Suitable for storing temporary data that should not persist beyond the current session, such as form data or UI state.

```javascript
// Example of session storage
sessionStorage.setItem('key', 'value');
let data = sessionStorage.getItem('key');
console.log(data); // Output: 'value'
```

### 2. Local Storage

- **Scope**: Local storage is shared across all tabs and windows with the same origin.
- **Persistence**: Data persists until explicitly deleted by the user or the web application. It survives browser restarts.
- **Storage Capacity**: Typically up to 5-10 MB per origin (depends on the browser).
- **Accessibility**: Data can be accessed by any page from the same origin.
- **Use Case**: Suitable for storing data that should persist across sessions, such as user preferences, theme settings, or cached data.

```javascript
// Example of local storage
localStorage.setItem('key', 'value');
let data = localStorage.getItem('key');
console.log(data); // Output: 'value'
```

### 3. Cookies

- **Scope**: Cookies are sent with every HTTP request to the same origin and can be accessed by both client-side JavaScript and server-side scripts.
- **Persistence**: Cookies can have an expiration date. If not set, they are deleted when the browser is closed (session cookies). Persistent cookies remain until their expiration date is reached.
- **Storage Capacity**: Typically limited to around 4 KB per cookie.
- **Accessibility**: Cookies are accessible to both client-side scripts and server-side scripts. They are sent with every HTTP request to the same origin.
- **Use Case**: Suitable for storing small pieces of data that need to be sent to the server with each request, such as session identifiers, authentication tokens, or user tracking information.

```javascript
// Example of setting a cookie
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";

// Example of reading a cookie
let cookies = document.cookie;
console.log(cookies); // Output: 'username=JohnDoe'
```

### Comparison Summary

| Feature            | Session Storage                          | Local Storage                            | Cookies                                 |
|--------------------|------------------------------------------|------------------------------------------|-----------------------------------------|
| Scope              | Single tab or window                     | All tabs and windows of the same origin  | All tabs and windows of the same origin |
| Persistence        | Until tab/window is closed               | Until explicitly deleted                 | Depends on expiration date              |
| Storage Capacity   | 5-10 MB                                   | 5-10 MB                                   | ~4 KB per cookie                        |
| Accessibility      | Client-side only                         | Client-side only                         | Client-side and server-side             |
| Use Case           | Temporary data                           | Persistent data                          | Small data, sent with every HTTP request|
