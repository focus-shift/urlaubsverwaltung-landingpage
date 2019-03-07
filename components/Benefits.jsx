import React from "react";
import "./benefit-list.css";

export default function BenefitList() {
	return (
		<dl title="Urlaubär Benefits" className="benefit-list">
			<BenefitListItem
				title="Benefit"
				text="Let's make some happy little clouds in our world. That's crazy. This is probably the greatest thing that's ever happened in my life. There comes a nice little fluffer. There we go."
			/>
			<BenefitListItem
				title="Benefit"
				text="This piece of canvas is your world. Look at them little rascals. Maybe there's a happy little waterfall happening over here. Let all these little things happen. Don't fight them. Learn to use them."
			/>
			<BenefitListItem
				title="Benefit"
				text="This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. It's a very cold picture, I may have to go get my coat. It’s about to freeze me to death. Just let these leaves jump off the brush A happy cloud. This is your world. With something so strong, a little bit can go a long way."
			/>
			<BenefitListItem
				title="Benefit"
				text="We don't have to be concerned about it. We just have to let it fall where it will. Just think about these things in your mind and drop em' on canvas. We don't want to set these clouds on fire."
			/>
			<BenefitListItem
				title="Benefit"
				text="Anything you want to do you can do here. We need dark in order to show light. A tree cannot be straight if it has a crooked trunk. Maybe, just to play a little, we'll put a little tree here."
			/>
			<BenefitListItem
				title="Benefit"
				text="See there how easy that is. And I will hypnotize that just a little bit. Everybody's different. Trees are different. Let them all be individuals."
			/>
		</dl>
	);
}

function BenefitListItem({ title, text }) {
	return (
		<>
			<dt>{title}</dt>
			<dd>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="128"
					height="128"
				>
					<circle cx="12" cy="12" r="12" fill="navy" />
				</svg>
				<p>{text}</p>
			</dd>
		</>
	);
}
