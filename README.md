# Robin's final project

My final project will be a peanut butter honey sammich recipe app

## How to test with jest (the simple version)

Documentation:
 * https://facebook.github.io/jest/docs/tutorial-react.html
 * https://facebook.github.io/jest/docs/expect.html
 * https://facebook.github.io/react/docs/test-utils.html

Steps:
 1. `npm install --save-dev jest babel-jest babel-preset-es2015 babel-preset-react react-test-renderer`
 2. Create a .babelrc:
 ```
 {
   "presets": ["es2015", "react"]
 }
```
 3. Make sure package.json has a "test" script: `"test": "jest"`
 4. Create `__tests__` directory
 5. Put tests in it! Convention: `<Component>-test.js`
 6. Write some tests! (See docs and examples)
 7. `npm test`
