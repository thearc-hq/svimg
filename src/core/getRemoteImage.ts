import { stringify } from "querystring";

async function getRemoteImage(src: string) {
	try {
		if (src.startsWith('//')) {
			src = `https:${src}`;
		}

		const req = new Request(src);
		const res = await fetch(req);

		if (!res.ok) {
			return undefined;
		}

		// calculate an expiration date based on the response's TTL

		// const policy = new CachePolicy(webToCachePolicyRequest(req), webToCachePolicyResponse(res));
		// const expires = policy.storable() ? policy.timeToLive() : 0;

		return {
			filename: src, // TODO: Think about what name the file should get.
			path: src, // TODO: Should there be a path specification - for folder structure
			           // in the static assets later?
			data: Buffer.from(await res.arrayBuffer()),
			// expires: Date.now() + expires,
		};
	} catch {
		return undefined;
	}
}