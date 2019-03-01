import React from "react";
import Page from "../components/Page";
import "isomorphic-unfetch";

import BlogPost from "../components/BlogPost";

export default function Blog({ posts }) {
	return (
		<Page title="My first Blog">
			{posts.map(p => (
				<BlogPost key={p.name} title={p.name} markdown={p.content} />
			))}
		</Page>
	);
}

Blog.getInitialProps = async ({ req }) => {
	const isServer = Boolean(req);
	if (isServer) {
		let postsResponse;
		try {
			postsResponse = await fetch(`${process.env.CONTENT_HOST}/api/posts`);
		} catch (o_O) {
			throw new Error(
				"seems you're building the homepage via 'next build/export' but the content server is not running. please start it and set the CONTENT_HOST environment variable.",
			);
		}
		const postsJson = await postsResponse.json();
		const posts = [];
		for (const post of postsJson.posts) {
			const postResponse = await fetch(
				`${process.env.CONTENT_HOST}/api/posts/${post.filename}`,
			);
			const content = await postResponse.text();
			posts.push({ name: post.filename, content });
		}
		return { posts };
	}
	// const error = await response.json();
	// throw new Error(error.message);
};
