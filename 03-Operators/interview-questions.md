# JavaScript Operator Tricky Questions

## 1. `+` with strings vs numbers

**Q.** What prints?

```js
console.log(1 + "2" + 3);
```

**A.** `"123"`
**Why:** `1 + "2"` → `"12"` (string). `"12" + 3` → `"123"` (string joins).

---

## 2. `-` forces number

**Q.**

```js
console.log("5" - 3 + 2);
```

**A.** `4`
**Why:** `"5" - 3` → `2` (number). `2 + 2` → `4`.

---

## 3. booleans in math

**Q.**

```js
console.log(true + false);
```

**A.** `1`
**Why:** `true → 1`, `false → 0`, so `1 + 0`.

---

## 4. objects with `+` (string conversion)

**Q.**

```js
console.log([] + {}); // "[object Object]"
console.log({} + []); // 0
```

**A.**

1. `"[object Object]"`
2. `0`
   **Why:** `{} is not an object here — at the start of a statement, JS treats it as an empty code block`.

   - {} // empty block
   - +[] // unary plus operator applied to []
   - +[] → [] → "" → 0 (number)
   - So the result is 0

> ## more examples for practise

```js
console.log([] + []); // ""        ("" + "" → "")
console.log([1, 2] + []); // "1,2"     ("1,2" + "" → "1,2")
console.log([] + [3, 4]); // "3,4"     ("" + "3,4" → "3,4")
console.log([1, 2] + [3]); // "1,23"    ("1,2" + "3" → "1,23")
console.log({} + {}); // 0 at top-level (block + unary plus) — use ({} + {})
console.log({} + {}); // "[object Object][object Object]"
console.log([] + 1); // "1"       ("" + "1")
console.log(1 + []); // "1"       ("1" + "")
```

---

## 5. `==` vs `===`

**Q.**

```js
console.log(0 == "0", 0 === "0");
```

**A.** `true false`
**Why:** `==` does type coercion; `===` does not.

---

## 6. sneaky: `[] == ![]`

**Q.**

```js
console.log([] == ![]);
```

**A.** `true`
**Why:** `![]` → `false`. `[] == false` → `"" == 0` → `0 == 0` → `true`.

---

## 7. `null` in comparisons

**Q.**

```js
console.log(null == 0); // A
console.log(null >= 0); // B
console.log(null > 0); // C
```

**A.** `false true false`
**Why:**

- `A:` `null` only loosely equals `undefined`.
- Relational compares convert `null` to `0`. So `0 >= 0` true; `0 > 0` false.

---

## 8. `undefined` in comparisons

**Q.**

```js
console.log(undefined == 0, undefined >= 0);
```

**A.** `false false`
**Why:** `undefined` becomes `NaN` in relational compare → always false.

---

## 9. `NaN` weirdness

**Q.**

```js
console.log(NaN === NaN, Object.is(NaN, NaN));
```

**A.** `false true`
**Why:** `NaN` is never equal to itself with `===`. `Object.is` handles `NaN`.

---

## 10. postfix vs prefix

**Q.**

```js
let x = 5;
console.log(x++ + ++x, x);
```

**A.** `12 7`
**Why:** `x++` returns `5` then `x=6`. `++x` makes `x=7` and returns `7`. Sum `12`. Final `x=7`.

---

## 11. chained assignment / compound precedence

**Q.**

```js
let a = 2,
  b = 3;
a += b *= 2;
console.log(a, b);
```

**A.** `8 6`
**Why:** Right-to-left: `b *= 2` → `6`. Then `a += 6` → `8`.

---

## 12. `&&` / `||` return **a value**, not just boolean

**Q.**

```js
console.log(true || "x");
console.log(false || "x");
console.log(0 && "x");
console.log("hi" && 42);
```

**A.**
`true`
`"x"`
`0`
`42`
**Why:**

- `||` returns first truthy, or last one.
- `&&` returns first falsy, or last one.

---

## 13. `??` vs `||`

**Q.**

```js
console.log(0 ?? 42, 0 || 42);
console.log("" ?? "x", "" || "x");
```

**A.** `0 42` and `"" "x"`
**Why:** `??` only uses right side when left is `null` or `undefined`.
`||` uses right side when left is **falsy** (`0`, `""`, `false`, `NaN`, `null`, `undefined`).

> Note: `??` cannot be mixed with `||`/`&&` without parentheses.

---

## 14. optional chaining call

**Q.**

```js
const user = {};
console.log(user.getName?.()); // A
console.log(user.getName()); // B
```

**A.** `A: undefined` then `B:` **TypeError**
**Why:** `?.()` only calls if function exists; else returns `undefined`. Plain call crashes.

---

## 15. ternary is right-associative

**Q.**

```js
console.log(false ? "a" : false ? "b" : "c");
```

**A.** `"c"`
**Why:** It’s `false ? "a" : (false ? "b" : "c")`.

---

## 16. comma operator

**Q.**

```js
let a = 1;
let r = ((a += 2), (a *= 3), a);
console.log(r);
```

**A.** `9`
**Why:** Runs left→right, returns **last** value: `a=3`, then `a=9`, returns `9`.

---

## 17. bitwise tricks

**Q.**

```js
console.log(~1); // A
console.log(~~3.7); // B
console.log(-1 >>> 0); // C
```

**A.** `A: -2`, `B: 3`, `C: 4294967295`
**Why:**

- `~n` = `-(n+1)`.
- `~~x` drops fraction (32-bit).
- `>>> 0` makes unsigned 32-bit.

---

## 18. exponentiation precedence

**Q.**

```js
// console.log(-2 ** 3);  // DANGER
console.log(-(2 ** 3));
```

**A.** `-8`
**Why:** `**` binds before unary `-`. `-2 ** 3` is a **SyntaxError**; use `-(2 ** 3)`.

---

## 19. `typeof` quirks

**Q.**

```js
console.log(typeof null); // A
console.log(typeof function () {}); // B
```

**A.** `"object"` and `"function"`
**Why:** historical bug for `null`; functions report `"function"`.

---

## 20. `in` checks property existence

**Q.**

```js
const arr = [10, 20, 30];
delete arr[1];
console.log(arr.length, 1 in arr, arr[1]);
```

**A.** `3 false undefined`
**Why:** `delete` makes a hole (doesn’t shrink length). `in` checks if index exists.

---

## 21. `delete` limits

**Q.**

```js
let obj = { a: 1 };
console.log(delete obj.a); // A
let x = 10;
// console.log(delete x);      // B (in strict modules)
```

**A.** `true`; `B:` deleting `let/const` variable is **false/TypeError** (not deletable).
**Why:** `delete` works on object properties, not on block-scoped vars.

---

## 22. `Object.is` vs `===` with zero

**Q.**

```js
console.log(+0 === -0, Object.is(+0, -0));
```

**A.** `true false`
**Why:** `===` treats them equal; `Object.is` can see the sign.

---

## 23. `instanceof` can fool you (different realms)

**Q.**

```js
const iframeArray = [].constructor; // pretend from another realm
console.log([] instanceof iframeArray);
```

**A.** `false` (often)
**Why:** `instanceof` checks prototype chain. Across iframes/windows, constructors differ.

---

## 24. exponent assignment

**Q.**

```js
let n = 3;
n **= 3;
console.log(n);
```

**A.** `27`
**Why:** `**=` is exponentiation assignment.

---

## 25. unary `+` converts to number

**Q.**

```js
console.log(+"", +"  12  ", +true, +null, +undefined);
```

**A.** `0 12 1 0 NaN`
**Why:** fast number conversion.

---
