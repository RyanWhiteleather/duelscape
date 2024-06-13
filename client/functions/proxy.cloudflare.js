const API_HOST = process.env.API_URL // Change to "eu.i.posthog.com" for the EU region
const ASSET_HOST = process.env.ASSET_HOST// Change to "eu-assets.i.posthog.com" for the EU region

async function handleRequest(request, ctx) {
    const url = new URL(request.url)
    const pathname = url.pathname
    const search = url.search
    const pathWithParams = pathname + search

    if (pathname.startsWith("/api/")) {
        return forwardRequest(request, pathWithParams)
    }
}

async function forwardRequest(request, pathWithSearch) {
    const originRequest = new Request(request)
    originRequest.headers.delete("cookie")
    return await fetch(`https://${API_HOST}${pathWithSearch}`, originRequest)
}

export default {
    async fetch(request, env, ctx) {
        return handleRequest(request, ctx);
    }
};