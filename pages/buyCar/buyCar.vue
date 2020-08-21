<template>
	<view class="uni-container">
<!-- 		  <list class="scroll-v list" enableBackToTop="true" scroll-y loadmoreoffset="15" @loadmore="loadMore">
		  	<cell v-for="(item,index2) in cars" :key="item.id">
				<car-item :item="item"></car-item>
		  	</cell>

		  </list> -->
		  <sl-filter :themeColor="themeColor" :menuList="menuList" @result="result"></sl-filter>
		  
		  <scroll-view class="scroll-v" enableBackToTop="true" scroll-y  @scrolltolower="loadMore">
		  	<view v-for="(item,index2) in cars" :key="item.id">
				<car-item :item="item" @click="xx"></car-item>
		  	</view>
		  	<view class="loading-more d-flex j-center" v-if="loading">
		  		<text class="loading-more-text">数据读取中</text>
		  	</view>
		  </scroll-view>
		  
	</view>
</template>

<script>
	import carItem from "./car_item.vue"
	import slFilter from '@/components/songlazy-sl-filter/sl-filter/sl-filter.vue';
	export default {
		components:{
			carItem,
			slFilter
		},
		data() {
			return {
				themeColor: '#c8731e',
				filterResult: '',
				menuList: [
					{
						'title': '默认排序',
						'key': 'sort',
						'isSort': true,
						'reflexTitle': true,
						'defaultSelectedIndex': 0,
						'detailList': [{
								'title': '最新上架',
								'value': ''
							},
							{
								'title': '价格最低',
								'value': 'add_time'
							},
							{
								'title': '价格最高',
								'value': 'wages_up'
							},
							{
								'title': '里程最短',
								'value': 'location'
							},
							{
								'title': '车龄最短',
								'value': 'location'
							}
						]
					},
				    {
				        'title': '价格',
				        'isMutiple': false,
				        'key': 'key_1',
						'reflexTitle':true,
				        'detailList': [
				            {
				                'title': '不限',
				                'value': ''
				            },
				            {
				                'title': '3万以内',
				                'value': '<3'
				            },
				            {
				                'title': '3-5万',
				                'value': '3-5'
				            },
							{
							    'title': '5-10万',
							    'value': '5-10'
							},
							{
							    'title': '10万以上',
							    'value': '>10'
							},
				        ]
				    }
				],
				dataList: [{id: "1", name: 'A'}, {id: "2", name: 'B'}, {id: "3", name: 'C'}],
				loading:false,
				cars:[
					{name:"长城C50",type:"2010款 1.5T 手动时尚型",brandTime:"2013年01月",mileage:"3.4万公里",place:"绵阳",pprice:28800,oprice:85500,pic:"../../static/golf.jpg"},
					{name:"长城C50",type:"2010款 1.5T 手动时尚型",brandTime:"2013年01月",mileage:"3.4万公里",place:"绵阳",pprice:28800,oprice:85500,pic:"../../static/golf.jpg"},
					{name:"长城C50",type:"2010款 1.5T 手动时尚型",brandTime:"2013年01月",mileage:"3.4万公里",place:"绵阳",pprice:28800,oprice:85500,pic:"../../static/golf.jpg"},
					{name:"长城C50",type:"2010款 1.5T 手动时尚型",brandTime:"2013年01月",mileage:"3.4万公里",place:"绵阳",pprice:28800,oprice:85500,pic:"../../static/golf.jpg"},
					{name:"长城C50",type:"2010款 1.5T 手动时尚型",brandTime:"2013年01月",mileage:"3.4万公里",place:"绵阳",pprice:28800,oprice:85500,pic:"../../static/golf.jpg"},
					{name:"长城C50",type:"2010款 1.5T 手动时尚型",brandTime:"2013年01月",mileage:"3.4万公里",place:"绵阳",pprice:28800,oprice:85500,pic:"../../static/golf.jpg"},
					{name:"长城C50",type:"2010款 1.5T 手动时尚型",brandTime:"2013年01月",mileage:"3.4万公里",place:"绵阳",pprice:28800,oprice:85500,pic:"../../static/golf.jpg"},
					],
				
			}
		},
		methods: {
			formatPrice(price,length){
				let me = this;
				return me.$commonFun.formatPrice(price,length);
				
			},
			// 重置 loadmore
			resetLoadMore() {
				this.$refs["list"].resetLoadmore();
			},
			loadMore() {
				console.log("loadMore")
				this.loading = true;
			    setTimeout(() => {
			        this.getList();
					this.loading = false;
			    }, 500)
			},
			xx(e){
				console.log("xx")
			},
			result(val) {
				console.log('filter_result:' + JSON.stringify(val));
				this.filterResult = JSON.stringify(val, null, 2)
			},
			getList() {
			    this.cars = this.cars.concat(this.cars);
			},
		},
		created() {
			 //设置
			  const list = this.$refs["list0"];
			  
		}
	}
</script>

<style>

	.tabs {
	    flex: 1;
	    flex-direction: column;
	    overflow: hidden;
	    background-color: #ffffff;
	    /* #ifdef MP-ALIPAY || MP-BAIDU */
	    height: 100vh;
	    /* #endif */
	}
	
	/* #ifndef APP-PLUS */
	page {
	    width: 100%;
	    min-height: 100%;
	    display: flex;
	}
	
	/* #endif */
.divider{
		height: 2upx;
		 background: #bfbfbf ;
	}
.scroll-v {
	flex: 1;
	/* #ifndef MP-ALIPAY */
	flex-direction: column;
	/* #endif */
	width: 750upx;
	height: 100%;
}
</style>
