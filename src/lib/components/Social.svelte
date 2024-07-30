<script lang='ts'>
  import linkedin from '$lib/images/in.png';
  import mastodon from '$lib/images/mastodon.svg';
  import x from '$lib/images/x.png';
</script>


<div class='social'>
  <a href='https://linkedin.com'><img src={linkedin} alt='LinkeIn Logo' /></a>
  <a href='https://mastodon.social'><img src={mastodon} alt='Mastodon Logo' /></a>
  <a href='https://twitter.com'><img src={x} alt='Twitter Logo' /></a>
</div>

<style>
  .social {
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
  }
  .social a {
    flex-basis: 50px;
    width: 100%;
  }
</style>
