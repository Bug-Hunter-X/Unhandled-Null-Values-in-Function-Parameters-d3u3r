function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null inputs by returning a default value
  }
  return a + b; // ... rest of the function
}