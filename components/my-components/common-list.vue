<template>
	<view style="width: 352.5upx;">
		<image :src="item.cover" mode="widthFix" lazy-load></image>
		<view class="p-2 pt-0">
			<view class="font-md font-weight">{{cutWord(item.title,9)}}</view>
			<text class="d-block font   ">{{cutWord(item.desc)}}</text>
			<view class="d-flex ">
			<text class="d-inline-block font line-h a-self-end text-light-muted" decode="">2019年06月 | 0.3万公里</text>
			</view>
			<view class="d-flex ">
				<price >{{format(item.pprice)}}</price>
				<view class="font text-light-muted px-1">新车:</view>
				<view class="font text-light-muted line-through " 
				>{{format(item.oprice)}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import price from "@/components/my-components/price.vue"
	
	export default{
		components:{
			price
		},
		props: {
			item:Object,
			index:Number
		},
		methods:{
			cutWord(word,length){
				if(length!=undefined){
					return word.slice(0,length)+"...";
				}
				// console.log("word:"+word);
				// let realLength = this.getlength(word);
				// console.log("realLength:"+realLength);
				// if(word.length*2>realLength){
				// 	return word.slice(0,length)+"...";
				// }
				return word;
				
			},
			getlength(word){
				let realLength = 0;
				for (var i = 0; i < word.length; i++) {  
					let charCode = word.charCodeAt(i);  
					if (charCode >= 0 && charCode <= 128)   
					realLength += 1;  
					else   
					realLength += 2;  
				}
				return realLength;
			},
			format(price,length){
				console.log("price:"+price);
				if(price>=10000){
					if(length==undefined){
						return (Math.floor(price/100)/100)+"万";
					}
					
					//return price/1000+"万";
				}
				return price;	
			}
		},
		
	}
	
</script>

<style>
</style>
