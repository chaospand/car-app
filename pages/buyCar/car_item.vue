<template>
	<view class="row my-3 mx-2 a-center" @click="click" >
	  
	  <image mode="widthFix" class="span24-8 mx-2" :src=item.pic ></image>
	  <view class="d-flex flex-column ">
	  		  <text>{{item.name}}</text>
	  		  <text class="font-md">{{item.type}}</text>
	  		  <view class="row font-sm">
	  			  <text>{{item.brandTime}}</text>
	  			  <text>{{item.mileage}}</text>
	  			  <text>{{item.place}}</text>
	  		  </view>
	  		  <view class="row font-sm a-center">
	  			  <text class="font-md" style="color: #F37B1D;">{{formatPrice(item.pprice)}}</text>
	  			  <text class="font text-light-dark mx-1">新车:</text>
	  			  <view class="font text-light-muted line-through "
	  			  >{{formatPrice(item.oprice)}}</view>
	  		  </view>
	  </view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default: function(e) {
					return {}
				}
			}
		},
		methods: {
			click() {
				console.log("click")
				this.$emit('click');
			},
			formatPrice(price,length){
				let me = this;
				return me.$commonFun.formatPrice(price,length);
				
			},
			close(e) {
				this.$emit('close');
			}
		}
	}
</script>

<style>
	
</style>
