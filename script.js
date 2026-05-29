function calculatePeriod() {
	// Get the values from the HTML inputs
	const lastDateValue = document.getElementById('lastDate').value;
	const cycleLengthValue = document.getElementById('cycleLength').value;
	const resultDiv = document.getElementById('result');
	// Validation: Check if inputs are empty
	if (!lastDateValue || !cycleLengthValue) {
		alert("Please enter both the Last Period Date and Cycle Length.");
		return;
	}
	//  Create a Date object
	let nextDate = new Date(lastDateValue + 'T00:00:00');
	const cycleLength = parseInt(cycleLengthValue); // Convert string to integer
	nextDate.setDate(nextDate.getDate() + cycleLength);
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	const formattedDate = nextDate.toLocaleDateString('en-US', options);
	resultDiv.style.display = 'block';
	resultDiv.innerHTML = `Your next period is expected on:<br> ${formattedDate}`;
}
