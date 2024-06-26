Here's a brief comparison of Session Storage, Local Storage, and Cookies in JavaScript:

### Session Storage
- **Scope:** Limited to the page session (tab or window).
- **Expiration:** Data is cleared when the page session ends (tab or window is closed).
- **Storage Capacity:** Up to 5MB.
- **Accessibility:** Accessible only within the same tab or window.
- **Usage:** Suitable for temporary data that should only be available during a single page session.

### Local Storage
- **Scope:** Persistent across browser sessions.
- **Expiration:** Data persists until explicitly deleted by the user or web application.
- **Storage Capacity:** Up to 5-10MB.
- **Accessibility:** Accessible from any window or tab within the same origin.
- **Usage:** Ideal for storing long-term data that needs to be available across sessions.

### Cookies
- **Scope:** Sent with every HTTP request to the same domain.
- **Expiration:** Can be set to expire at a specific time or when the session ends.
- **Storage Capacity:** Typically limited to around 4KB.
- **Accessibility:** Accessible both on the client-side (via JavaScript) and server-side (via HTTP headers).
- **Usage:** Best for small pieces of data that need to be sent to the server with each request, such as authentication tokens or user preferences.

### Summary Table

| Feature            | Session Storage            | Local Storage                | Cookies                           |
|--------------------|----------------------------|------------------------------|-----------------------------------|
| Scope              | Page session               | Persistent                   | Domain-wide                      |
| Expiration         | End of session             | Until deleted                | Set expiration date              |
| Storage Capacity   | ~5MB                       | ~5-10MB                      | ~4KB                             |
| Accessibility      | Same tab/window            | Any window/tab, same origin  | Client and server-side           |
| Usage              | Temporary session data     | Long-term data               | Data to be sent with each request|

These differences help determine the most suitable storage mechanism based on the specific needs of your web application.


---

### Session Storage:

```js
sessionStorage.setItem('key', 'value');
let data = sessionStorage.getItem('key');
console.log(data); // Output: 'value'
```

### Local Storage:

```js
localStorage.setItem('key', 'value');
let data = localStorage.getItem('key');
console.log(data); // Output: 'value'
```

### Cookies:

```js
// Setting a cookie
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23
```
