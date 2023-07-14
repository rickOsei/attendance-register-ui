import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
/*
=============== 
Variables
===============
*/

:root {
  /* primary color*/
  --clr-primary-1: hsl(213, 97%, 25%);
  --clr-primary-2: hsl(213, 96%, 20%);
  --clr-primary-3: hsl(213, 97%, 15%);
  --clr-primary-4: hsl(212, 96%, 10%);
  /* secondary color*/
  --clr-secondary-1: hsl(203, 100%, 39%);
  --clr-secondary-2: hsl(203, 63%, 51%);
  --clr-secondary-3: hsl(203, 63%, 63%);
  --clr-secondary-4: hsl(203, 63%, 75%);

  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  --clr-white: #fff;
  --clr-button: hsl(43, 98%, 53%);
  --clr-button-hover:hsla(43, 98%, 53%, 0.822);
  --border-radius: 10px;
}
/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: var(--clr-white);
  line-height: 1.5;
  font-size: 0.875rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-5);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}

`;
