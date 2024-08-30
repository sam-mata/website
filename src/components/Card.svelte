<script>
	export let title = 'Skeleton is Awesome!';
	export let coverPhoto =
		'https://images.unsplash.com/photo-1620562303747-ba21ca6f1530?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2MjR8&ixlib=rb-4.0.3&w=400&h=175&auto=format&fit=crop';
	export let subtitle = 'Announcements';
	export let descriptionText =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae laboriosam iure molestias cum expedita architecto itaque quae rem.';
	export let badges = [
		{ text: 'New', color: 'blue' },
		{ text: 'Featured', color: 'green' },
	];
	export let link = '/elements/cards';

	export let date = new Date().toLocaleDateString('en-GB');

	function getBadgeClasses(color) {
		const baseClasses = 'px-2 py-1 text-xs font-semibold rounded-full';
		switch (color) {
			case 'blue':
				return `${baseClasses} bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-300`;
			case 'green':
				return `${baseClasses} bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-300`;
			case 'purple':
				return `${baseClasses} bg-purple-200 text-purple-800 dark:bg-purple-900 dark:text-purple-300`;
			case 'yellow':
				return `${baseClasses} bg-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300`;
			default:
				return `${baseClasses} bg-gray-200 text-gray-800 dark:bg-gray-900 dark:text-gray-300`;
		}
	}
</script>

<a class="max-w-sm overflow-hidden card card-hover" href={link}>
	<header>
		<img
			src={coverPhoto}
			class="w-full bg-black/50 brightness-90 dark:brightness-[0.85] aspect-video"
			alt={title}
		/>
	</header>
	<div class="p-4 space-y-4 dark:bg-neutral-700">
		<h6
			class="font-semibold h6 text-surface-700 dark:text-surface-500"
			data-toc-ignore=""
		>
			{subtitle}
		</h6>
		<h3 class="font-bold h3 text-surface-900 dark:text-surface-50" data-toc-ignore="">{title}</h3>
		<article>
			<p
				class="text-base tracking-tight lg:text-lg text-surface-700 dark:text-surface-600"
			>
				{descriptionText}
			</p>
		</article>
	</div>
	<hr class="opacity-50 dark:brightness-0" />
	<footer class="flex items-center justify-between p-4 dark:bg-neutral-700">
		<div class="flex space-x-2">
			{#each badges as badge}
				<span class={getBadgeClasses(badge.color)}>{badge.text}</span>
			{/each}
		</div>
		<small class="text-sm font-bold text-surface-600 dark:text-surface-400"
			>{date}</small
		>
	</footer>
</a>