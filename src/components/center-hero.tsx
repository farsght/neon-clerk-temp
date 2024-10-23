/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

export default function CenterHero() {
	return (
		<>
			<section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
				<div className="container flex max-w-5xl flex-col items-center gap-4 text-center">
					<Link
						href="/tools"
						className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
						<Icons.robotThree className="h-4 w-4" />
						<Separator className="mx-2 h-4" orientation="vertical" />{' '}
						<span className="sm:hidden">Build custom AI Agents. </span>
						<span className="hidden sm:inline">
							Build agents now, it's free{' '}
						</span>
						<ChevronRight className="ml-1 h-4 w-4" />
					</Link>

					<h1 className="font-heading text-3xl font-bold leading-tight tracking-tightser sm:text-5xl md:text-6xl lg:text-7xl">
						Bring your data to life with custom AI Agents.
					</h1>
					<p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
						Connect your data, build workflows, automate your business growth.
					</p>
					<div className="space-x-4">
						<Link
							href="/home"
							className={cn(buttonVariants({ size: 'lg' }), 'text-black')}>
							Get Started
						</Link>
						<Link
							href="/docs"
							className={cn(
								buttonVariants({ variant: 'outline', size: 'lg' })
							)}>
							Learn More
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
