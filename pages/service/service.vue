<template>
	<view>
		<HMfilterDropdown :filterData="filterData" :defaultSelected ="filterDropdownValue" @confirm="confirm"></HMfilterDropdown>
	</view>
</template>

<script>
	import HMfilterDropdown from '@/components/HM-filterDropdown/HM-filterDropdown.vue';

	export default {
		components: {
		    'HMfilterDropdown':HMfilterDropdown 
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
