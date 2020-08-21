<template>
	<view class="content">
		<sl-filter :themeColor="themeColor" :menuList="menuList" @result="result"></sl-filter>
	</view>
</template>

<script>
	import slFilter from '@/components/songlazy-sl-filter/sl-filter/sl-filter.vue';
	export default {
		components:{
			slFilter
		},
		data() {
			return {
				themeColor: '#000000',
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
				        'title': '菜单1',
				        'isMutiple': false,
				        'key': 'key_1',
						'reflexTitle':true,
				        'detailList': [
				            {
				                'title': '不限',
				                'value': ''
				            },
				            {
				                'title': '条件_1_1',
				                'value': 'val_1_1'
				            },
				            {
				                'title': '条件1_2',
				                'value': 'val_1_2'
				            }
				        ]
				    }
				]
			}
		},
		methods: {
			result(val) {
				console.log('filter_result:' + JSON.stringify(val));
				this.filterResult = JSON.stringify(val, null, 2)
			}
		}
	}
</script>

<style>

</style>
