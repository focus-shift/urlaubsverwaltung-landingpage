import React from "react";
import ReactMarkdown from "react-markdown";

export default function BlogPost({ title, markdown }) {
	return (
		<article>
			<h2>{title}</h2>
			<ReactMarkdown source={markdown} />
		</article>
	);
}
