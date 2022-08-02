import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@font-face {
   font-family: Montserrat;
   src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
}

:root {
   --gray: rgb(235, 235, 235);
   --blue:  rgb(33, 110, 255);
   --green: #39c039;
   --light-gray: #faf7f7;

   --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
   --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
   --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.1);

   margin: 0 auto;
}

* {
	margin: 0;
	padding: 0;
	outline: 0;
	box-sizing: border-box;
	font-family: 'Oswald', sans-serif;
}
`
