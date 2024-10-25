import http from "k6/http";
import { sleep, check } from "k6";

export let options = {
	stages: [
		{ duration: "10s", target: 50 }, // Ramp up to 50 users over 10 seconds
		{ duration: "600s", target: 50 }, // Stay at 50 users for 10 minutes
		{ duration: "60s", target: 2000 }, // Ramp up to 2000 users over 1 minute
		{ duration: "600s", target: 2000 }, // Stay at 2000 users for 10 minutes
		{ duration: "60s", target: 0 }, // Ramp down to 0 users over 1 minute
		{ duration: "600s", target: 0 }, // Stay at 50 users over 10 minutes
		{ duration: "60s", target: 5000 }, // Ramp up to 5000 users over 1 minute
		{ duration: "600s", target: 5000 }, // Stay at 5000 users for 10 minutes
		{ duration: "60s", target: 0 }, // Ramp down to 0 users over 1 minute
		{ duration: "600s", target: 0 }, // Stay at 0 users for 10 minutes
		{ duration: "60s", target: 10000 }, // Ramp up to 10000 users over 1 minute
		{ duration: "600s", target: 10000 }, // Stay at 10000 users for 10 minutes
		{ duration: "60s", target: 0 }, // Ramp down to 0 users over 1 minute
		{ duration: "600s", target: 0 }, // Stay at 0 users for 10 minutes
	],
};

export default function () {
	const res = http.get("http://34.93.74.28:3001/api/monitor"); // Replace with your actual endpoint

	check(res, {
		"is status 200": (r) => r.status === 200,
	});

	sleep(1); // Wait for 1 second between requests
}
