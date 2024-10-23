/** @type {import('next').NextConfig} */
const nextConfig = {
	workboxOpts: {
		exclude: [/\.(?:js|json|html)$/],
	},
	experimental: {
		staleTimes: {
			dynamic: 0,
		},
	},
};

export default nextConfig;
