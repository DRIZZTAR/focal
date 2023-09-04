//Tyson raisinAlarm
const raisinAlarm = function (cookie) {
	//We want to loop through cookie
	for (let i = 0; i < cookie.length; i++)
		//if cookie element has raisins
		if (cookie[i] === "🍇") {
			return "Raisin alert!";
		}
	return "All good!";
};
/*
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
*/

//Camillia
const raisinAlarmArray = function (cookies) {
	const results = [];
	for (let i = 0; i < cookies.length; i++) {
		//loop the cookie for raisins & chocolate chips
		const cookie = cookies[i];
		//we want to store the result of raisinAlarm
		const result = raisinAlarm(cookie);
		//push result into empty array
		results.push(result);
	}
	return results;
};

console.log(
	raisinAlarmArray([
		["🍫", "🍫", "🍇", "🍫"],
		["🍫", "🍇", "🍫", "🍫", "🍇"],
		["🍫", "🍫", "🍫"],
	])
);
65;
