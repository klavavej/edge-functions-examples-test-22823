export default () => {
	console.log("Hello from a test");
	const body = new Date().toUTCString()
	const headers = {
		"cache-control": "public, s-maxage=60"
	}

	return new Response(body, { headers })
}

export const config = { cache: "manual", path: "/test" }
