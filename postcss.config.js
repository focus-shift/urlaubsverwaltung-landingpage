import nesting from "tailwindcss/nesting/index.js";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

const prod = process.env.NODE_ENV === "production";

export default {
	plugins: [nesting, tailwindcss, autoprefixer, prod && cssnano].filter(
		Boolean,
	),
};
