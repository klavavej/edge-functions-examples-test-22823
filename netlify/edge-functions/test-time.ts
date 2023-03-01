import { Config, Context } from "https://edge.netlify.com"

export default async (req: Request, context: Context) => {
	const res = await context.next()
	const text = await res.text()
	const body = `${new Date().toUTCString()} / ${text}`

	return new Response(body)
}

// We could set "cache" to "off", but that's the default
// setting so we can omit it.
export const config: Config = () => ({
	path: "/current-time"
})
