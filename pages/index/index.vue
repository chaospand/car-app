<template>
	<view class="">
		
		<view class="banner_box">
			<view class="banner_bg"></view>
			<!-- <view class="banner_content">
				<view>
				<image class="banner_logo" src="../../static/uni.png"></image>
				</view>
				<view>
					 <text style="color: #000000;">XXXX车行</text>
				</view>
			</view> -->
		</view>
		
		<view  class="mt-3">
			<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="button" active-color="#ffaa7f"></uni-segmented-control>
			<view class="content" style="background-color: #FFFFFF;">
				<view v-if="current === 0" >
					<index-nav   :resdata="brands"></index-nav>
				</view>
				<view v-if="current === 1">
					<nav-text   :resdata="brands"></nav-text>
				</view>
				<view v-if="current === 2">
					<navImage   :resdata="brands"></navImage>
				</view>
			</view>
		</view>

		<view  class="mt-3 p-2" style="background-color: #FFFFFF;">
			<text>最新上架</text>
			<!-- 公共列表组件 750 - 5 -40 = 705 352.5 -->
			<view class="row j-sb">
				
				<block v-for="(item2,index2) in cars" :key="index2">
				<common-list :item="item2" :index="index2"></common-list>
				
				</block>
				
			</view>
		</view>
		<view class="text-center p-2"  style="background-color: #FFFFFF; border-top: 1rpx solid #eeeeee;" >
			<text style="color: #bfbfbf;">查看全部</text>
		</view>
		
		<view  class="mt-3 p-2" style="background-color: #FFFFFF;">
			<text>购车保障</text>
			<!-- 公共列表组件 750 - 5 -40 = 705 352.5 -->
			<view class="row j-sb">
				<view class="span-5 d-flex flex-column j-center a-center py-2" >
					<image src="/static/saveProtect.png" 
					style="width: 100upx;height: 100upx;" mode="widthFix"></image>
					<text class="font-sm  mt-1 text-center"  style="color: #535353;">无事故，无火烧，无水泡</text>
				</view>
				
				<view class="span-5 d-flex flex-column j-center a-center py-2" >
					<image src="/static/carSituation.png" 
					style="width: 100upx;height: 100upx;" mode="widthFix"></image>
					<text class="font-sm j-sb mt-1 text-center"  style="color: #535353;">车况无忧，支持第三方到店检测</text>
				</view>
				
				<view class="span-5 d-flex flex-column j-center a-center py-2" >
					<image src="/static/shopProtect.png" 
					style="width: 100upx;height: 100upx;" mode="widthFix"></image>
					<text class="font-sm j-sb mt-1 text-center "  style="color: #535353;">门店担保，服务有保障</text>
				</view>
			</view>
		</view>
		
		<view  class="mt-3 p-2" style="background-color: #FFFFFF;">
			<text>特色服务</text>
			<!-- 公共列表组件 750 -40 = 710  -->
			<view class="row a-center j-start" >
				<block v-for="(item,index) in service" :key="index">
				<view class=" py-2 d-flex" style="width: 33.33%;align-items: center;" >
					<image src="/static/right.png"  class=""
					style="width: 40rpx;height: 40rpx;"></image>
					<text class="font-lg   "  style="color: #535353;">{{item.title}}</text>
				</view>
				</block>
			</view>
		</view>
		
	<!-- 	<view style="margin-bottom: 150rpx;">
			
		</view> -->
		
		
	</view>
</template>

<script>
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	import indexNav from "@/components/my-components/index-nav.vue"
	import navText from "@/components/my-components/nav-text.vue"
	import navImage from "@/components/my-components/nav-image.vue"
	import commonList from "@/components/my-components/common-list.vue"
	export default {
		components: {uniSegmentedControl,indexNav,navText,navImage,commonList},
		data() {
			return {
				items: ['品牌','价格','车型'],
				current: 0,
				href: 'https://uniapp.dcloud.io/collocation/pages?id=easycom',
				brands:[
					{src:"../../static/logo.png",text:"新品发布"},
					{src:"../../static/logo.png",text:"小米众筹"},
					{src:"../../static/logo.png",text:"以旧换新"},
					{src:"../../static/logo.png",text:"新品发布"},
					{src:"../../static/logo.png",text:"新品发布"},
				],
				cars:[
					{
						cover:"/static/golf.jpg",
						title:"米家空调米家空调米家空调",
						desc:"2020款 挚爱版 200TSI DSG舒适型进取版",
						oprice:2699,
						pprice:1399
					},{
						cover:"/static/golf.jpg",
						title:"米家空调",
						desc:"2020款 挚爱版 200TSI DSG舒适型进取版",
						oprice:126199,
						pprice:13999
					},{
						cover:"/static/golf.jpg",
						title:"米家空调",
						desc:"1.5匹变频空调",
						oprice:2699,
						pprice:1399
					},{
						cover:"/static/golf.jpg",
						title:"米家空调",
						desc:"1.5匹变频空调",
						oprice:2699,
						pprice:1399
					}
				],
				service:[
					{title:"高价置换"},
					{title:"分期贷款"},
					{title:"全程代办"},
					{title:"车辆寄售"},
					{title:"价格评估"},
					{title:"延长质保"},
					{title:"整备翻新"},
					{title:"试乘试驾"}
				]
			}
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			}
		}
	}
</script>

<style>

	.banner_bg{
		filter:blur(0.1rem) ;
		background-image: url(../../static/car.jpg);
		background-position: center;
		width: 100%;
		height: 300rpx;
	}
	.banner_content{
		padding-top: 50rpx;
		padding-left: 50rpx;
		float: left;
	}
	.banner_logo{
		width: 180rpx;
		height: 180rpx;
		display: inline-block;
	}
	
	.segmented-control{
		background-color: #FFFFFF;
		color: #000000 !important;
		border-bottom: 1rpx solid #ffaa7f!important;
	}
</style>
