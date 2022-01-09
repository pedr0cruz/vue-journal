<template>
  <div class="entry-container mb-3 pointer"
		@click="$router.push( {name:'entry', params:{ id:10 }} )"
  >
	<!-- titulo	 -->
	<div class="entry-title d-flex">
	<span class="text-success fs-5 fw-bold">jueves, 08/</span>
	<span class="mx-1 fs-5">Enero/</span>
	<span class="mx-2 fw-light">2022</span>
	</div>

	<div class="entry-description">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quisquam similique tempora animi voluptas, harum nesciunt deleniti aspernatur quas, iure ullam. Quasi impedit unde earum magni natus minus iste reprehenderit!
	</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.pointer {
	cursor:pointer;
}

.entry-container {
	border-bottom: 1px solid #2c3e50;
	transition: 0.2s all ease-in;

	&:hover{
		background-color: lighten($color: gray, $amount: 45);
		transition: 0.2s all ease-in;
	}
	.entry-description{
		font-size: 12px;
	}
}

</style>