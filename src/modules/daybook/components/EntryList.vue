import { defineAsyncComponent } from 'vue';
<template>
 <div class="entry-list-container">
	<div class="px-2 pt-2">
		<input 
			type="text" 
			class="form-control" 
			placeholder="Buscar entrada" 
		/>
	</div>
	<div class="entry-scrollarea">
		<Entry
			v-for="(item, index) in 100" :key="index"
		/>		
	</div>
 </div>
</template>

<script>
import {defineAsyncComponent} from 'vue'

export default {
	components:{
		Entry: defineAsyncComponent(()=> import('./Entry.vue')),
	}
}
</script>

<style lang="scss" scoped>

.entry-list-container {
	border-right: 1px solid #2c3e50;
	height: calc( 100vh - 56px);
}
.entry-scrollarea {
	height: calc(100vh - 100px); // Al 100% de la altura le quito 110
	overflow: scroll;
}
</style>