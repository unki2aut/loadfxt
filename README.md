# loadfxt
Javascript library to load fixtures of different formats

## Examples

1. **Binary data**
```js
loadfxt('<path/to/fixture>').toArrayBuffer();
```

1. **Binary string**  
   Each byte is represented as one character in the resulting string.
```js
loadfxt('<path/to/fixture>').toBinaryString();
```

1. **UTF-8 string**  
   The loaded data will be represented in UTF-8 encoding.
```js
loadfxt('<path/to/fixture>').toJson();
```

1. **JSON**
```js
loadfxt('<path/to/fixture>').toJson();
```
