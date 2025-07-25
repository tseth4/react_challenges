# Generics
Type safety without sacrificing flexibility — so you can catch bugs at compile time instead of crashing at runtime.
### Without Generics

```ts
function logValue(value: any) {
  console.log(value.toUpperCase());
}

logValue(123); // 💥 Runtime error: value.toUpperCase is not a function
```

### With Generics
```ts
function logValue<T extends string>(value: T) {
  console.log(value.toUpperCase()); // ✅ Safe
}

logValue("hello"); // OK
logValue(123);     // ❌ Compile-time error: number doesn't have toUpperCase

```