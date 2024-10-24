import http from "k6/http";
import { sleep, check } from "k6";

export let options = {
	stages: [
		{ duration: "10s", target: 50 }, // Ramp up to 50 users over 30 seconds
		{ duration: "1200s", target: 2000 }, // Stay at 50 users for 1 minute
		{ duration: "60s", target: 0 }, // Ramp down to 0 users
		{ duration: "10s", target: 5 }, // Ramp up to 50 users over 30 seconds
		{ duration: "1200s", target: 5000 },
		{ duration: "120s", target: 10000 },
	],
};

export default function () {
	const res = http.get("http://34.93.74.28:3001/api/monitor"); // Replace with your actual endpoint

	check(res, {
		"is status 200": (r) => r.status === 200,
	});

	sleep(1); // Wait for 1 second between requests
}
