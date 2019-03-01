import React from "react";
import Page from "../components/Page";

export default function Contect() {
	return (
		<Page title="Kontakt">
			<form>
				<div>
					<label htmlFor="email">email</label>
					<input id="email" name="email" type="email" />
				</div>
				<div>
					<label htmlFor="message">nachricht</label>
					<textarea id="message" name="message" />
				</div>
			</form>
		</Page>
	);
}
