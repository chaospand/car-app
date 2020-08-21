const commonFun = {
	formatPrice:(price,length)=> {
		console.log("price:"+price);
		if(price>=10000){
			if(length==undefined){
				return (Math.floor(price/100)/100)+"万";
			}
			
			//return price/1000+"万";
		}
		return price;	
	}
};
export default commonFun