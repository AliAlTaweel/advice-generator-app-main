# advice-generator-app

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).



- Solution URL: https://github.com/AliAlTaweel/advice-generator-app-main.git .

- Live Site URL: https://alialtaweel.github.io/advice-generator-app-main/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JS
- JS API

### What I learned

Main new part that i learned during doing this project was how to write api code and how to fetch data from other website using js api, And also i got more knowledge about async function and "await" and "throw" statments and how they works. finaly the try catch statments.

```js
async function func(event) {
  try {
    let response = await fetch("https://api.adviceslip.com/advice");
  
    if (!response.ok) {
      throw new Error("Website API response notOk");
    }
    `````
  } catch (error) {
    console.error("error catch");
  }
}
``


## Author

- Ali Al-Taweel
- engalihaitham@gmail.com
