<template>
	<view>
		<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<block>
				
			</block>
			<swiper-item>
				<image src="../../static/car.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/car.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/car.jpg"></image>
			</swiper-item>
		</swiper>
		<view class=" px-2 py-2 bg-white">
			<text>{{car.name+" "+car.type}}</text>
			<view class="row font-sm">
				  <text>{{car.brandTime}}</text>
				  <text class="pl-2">{{car.mileage}}</text>
				  <text class="pl-2">{{car.place}}</text>
				  <text class="pl-2">{{car.environment}}</text>
			</view>
			<text class="font-lg text-price" >{{formatPrice(car.pprice)}}</text>
			<view class="row font-sm text-light-muted">
				<text >新车含税价：</text>
				<text >{{formatPrice(car.oprice)}}</text >
				<text class="pl-2">省</text >
				<text >{{save(car.oprice,car.pprice)}}</text >
			</view>
		</view>
		<view class="mt-2 px-2 py-2 bg-white">
			<text>贷款</text>
			<view class="row j-center py-2 bg-muted">
				<view class="d-flex flex-column j-center a-center span24-8   border-right border-muted " >
					<text class="font j-sb ">首付</text>
					<text class="j-sb text-center">首付</text>
				</view>
				<view class="span24-8  border-right border-muted">
					
				</view>
				<view class="span24-8 ">
					
				</view>

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
		data() {
			return {
				car:{
						name:"大众POLO",type:"2010款 1.5T 手动时尚型",brandTime:"2013年01月",mileage:"3.4万公里",
						place:"绵阳",pprice:28800,oprice:85500,environment:"国三",pics:["../../static/golf.jpg","../../static/golf.jpg"]
				},
				
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
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
			save(oprice,pprice){
				console.log("oprice:"+oprice+" pprice:"+pprice)
				return this.formatPrice(oprice-pprice);
			}
		}
	}
</script>

<style>
.swiper {
		height: 400rpx;
	}
</style>
