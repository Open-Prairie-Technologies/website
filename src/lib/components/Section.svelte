<script lang="ts">
	export let classes: string;
	export let id: string = '';
</script>

<div {id} class={classes}>
	<div class="container mx-auto px-4">
		<slot>
			default section content this should span the entire screen width and should have nice
			background colors
		</slot>
	</div>
</div>
