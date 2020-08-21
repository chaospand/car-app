<template>
	<view class="d-flex main-text-color line-h">
		<text class="a-self-start font-sm"></text><slot/>
	</view>
</template>

<script>
	export default{
		
		methods:{
			format(price){
				if(price<10000){
					return price/10000+"万";
				}
				return price;
			}
		}
	}
</script>

<style>
</style>
