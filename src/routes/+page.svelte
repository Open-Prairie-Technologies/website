<script>
	import { siteTitle } from '$lib/config';
  import me from '$lib/images/me.jpg';
  import Social from '$lib/components/Social.svelte';

	export let data;
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<div class='profile'>
  <figure>
    <img src={me} alt='Incredibly handsome man wears glasses and poses handomsly.'/>
    <!-- <figcaption>Incredibly handsome dude!</figcaption> -->
  </figure>
  <span>
    <svelte:component this={data.ReadMe} />
  </span>
</div>
<Social />

<style>
  .profile {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr;
    justify-content: center;
  }
  .profile figure {
    grid-row-start: 2;
    grid-row-end: 3;
    text-align: center;
  }
  .profile img {
    border-radius: 15rem;
    object-fit: cover;
    width: 100%;
    max-width: 200px;
  }
  /* .profile figcaption { */
  /*   text-align: center; */
  /* } */

  @media (min-width: 48rem) {
    .profile {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
      justify-content: start;
    }
    .profile figure {
      grid-row-start: 1;
      grid-row-end: 2;
    }
    .profile img {
      max-width: 400px;
    }
  }
</style>
