import Image from 'next/image';

import CenterHero from '@/components/center-hero';

export default async function MarketingHome() {
	return (
		<div>
			<CenterHero />

			<section className="mb-6 space-y-8 overflow-hidden rounded-lg border-2 border-foreground dark:border-muted md:hidden"></section>
			<section className="hidden md:block">
				<div className="overflow-hidden rounded-lg border bg-background shadow"></div>
			</section>
			<section className="my-4 space-y-8 overflow-hidden"></section>
		</div>
	);
}
