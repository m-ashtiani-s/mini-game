/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
      colors:{
        "primary":"#4ade80",
        "secondary":"#cfcfcf",
        "bg":"#242424"
      },
      borderWidth:{
        "1":"1px"
      }
    },
	},
	plugins: [],
};
