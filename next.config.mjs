/** @type {import('next').NextConfig} */

const nextConfig = {
	async headers() {
		return [
			{
				source: "/:prefix/page-with-prefix",
				headers: [
					{
						key: "CDN-Cache-Control",
						value:
							"public, s-maxage=300, max-age=300, stale-while-revalidate=3600", // 5 minutes fresh, 1 hour stale
					},
				],
			},
			{
				source: "/cached-page-with-prefix",
				headers: [
					{
						key: "CDN-Cache-Control",
						value:
							"public, s-maxage=300, max-age=300, stale-while-revalidate=3600", // 5 minutes fresh, 1 hour stale
					},
				],
			},
		];
	},
};

export default nextConfig;
