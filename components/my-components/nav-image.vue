<template>
	<view class="row  ">
		<block v-for="(item,index) in resdata" :key="index">
		<view class="span-5 d-flex flex-column j-center a-center py-2"  @tap="event(item)">
			<image :src="item.src" 
			style="width: 60upx;height: 60upx;" mode="widthFix"></image>
			<text class="font-sm">{{item.text}}</text>
		</view>
		</block>
	</view>
</template>

<script>
	export default{
		props: {
			resdata:Array
		},
		methods:{
			event(item){
				console.log("点击了图标")
			}
		}
	}
</script>

<style>
</style>
