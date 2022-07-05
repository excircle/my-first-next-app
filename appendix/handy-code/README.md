# Handy Code Snippets

This section of the repository contains handy code snippets that assist developers to accomplish small tasks.

# Table of Contents

#### Determine if Server-side or Client-side

```jsx
function IndexPage() {
  const side = process.browser ? 'client' : 'server';
  return <div>You're currently on the {side}-side.</div>;
}
export default IndexPage;
```