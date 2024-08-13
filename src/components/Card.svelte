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
				return `${baseClasses} bg-blue-200 border border-blue-300 text-blue-800`;
			case 'green':
				return `${baseClasses} bg-green-200 border border-green-300 text-green-800`;
			case 'purple':
				return `${baseClasses} bg-purple-200 border border-purple-300 text-purple-800`;
			case 'yellow':
				return `${baseClasses} bg-yellow-200 border border-yellow-300 text-yellow-800`;
			default:
				return `${baseClasses} bg-gray-200 border border-gray-300 text-gray-800`;
		}
	}
</script>

<a class="overflow-hidden card bg-initial dark:brightness-90 hover:brightness-100 card-hover" href={link}>
	<header>
		<img
			src={coverPhoto}
			class="w-full bg-black/50 aspect-video"
			alt="Post"
		/>
	</header>
	<div class="p-4 space-y-4">
		<h6 class="font-semibold h6 text-surface-600-300-token" data-toc-ignore="">{subtitle}</h6>
		<h3 class="font-bold h3" data-toc-ignore="">{title}</h3>
		<article>
			<p class="text-lg tracking-tight text-surface-500-400-token">{descriptionText}</p>
		</article>
	</div>
	<hr class="opacity-50" />
	<footer class="flex items-center justify-between p-4">
		<div class="flex space-x-2">
			{#each badges as badge}
				<span class={getBadgeClasses(badge.color)}>{badge.text}</span>
			{/each}
		</div>
		<small class="text-sm font-bold">{date}</small>
	</footer>
</a>
