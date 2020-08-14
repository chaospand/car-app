<template>
	<view class="row  ">
		<block v-for="(item,index) in resdata" :key="index">
		<view class="span-5 d-flex flex-column j-center a-center py-2"  @tap="event(item)">
			<image :src="item.src" 
			style="width: 60upx;height: 60upx;" mode="widthFix"></image>
			<text class="font-sm">{{item.text}}</text>
		</view>
		</block>
		<view class="span-5 d-flex flex-column j-center a-center py-2"  @tap="event(item)">
			<image src="/static/more.png" 
			style="width: 60upx;height: 60upx;" mode="widthFix"></image>
			<text class="font-sm"  style="color: #bfbfbf;">更多品牌</text>
		</view>
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
