// Decision Tree Questions
const decisionTree = {
	q1: {
		question: "Do you need a solution with lower upfront costs?",
		yes: "q2",
		no: "q4",
	},
	q2: {
		question: "Is scalability a key factor for your business?",
		yes: "q3",
		no: "q5",
	},
	q3: {
		question:
			"Do you prefer the provider to manage security, updates, and maintenance?",
		yes: "saas",
		no: "q5",
	},
	q4: {
		question: "Do you need full control over the data and infrastructure?",
		yes: "onPremise",
		no: "q5",
	},
	q5: {
		question: "Does your business require significant software customization?",
		yes: "onPremise",
		no: "saas",
	},
};

// Initial Step
let currentQuestion = "q1";

// Start the decision tree
function startTree() {
	const questionElement = document.getElementById("question");
	questionElement.innerHTML = decisionTree[currentQuestion].question;
}

// Move to the next step based on the user's choice
function nextStep(choice) {
	const next = decisionTree[currentQuestion][choice];

	if (next === "saas") {
		displayResult(
			"SaaS (Software as a Service) is likely the best option for you!",
		);
	} else if (next === "onPremise") {
		displayResult("On-Premise solutions may be the best fit for your needs!");
	} else {
		currentQuestion = next;
		startTree(); // Update question
	}
}

// Display the final result
function displayResult(result) {
	document.getElementById("question").style.display = "none";
	document.getElementById("buttons").style.display = "none";
	document.getElementById("result").innerHTML = result;
}

// Initialize the decision tree on page load
window.onload = function () {
	startTree();
};
