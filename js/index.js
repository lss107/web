// 对于swiper模块的初始化
(function(){
	var mySwiper = new Swiper ('.swiper-container-v', {
      on:{
        init: function(){
        	swiperAnimateCache(this); //隐藏动画元素 
        	swiperAnimate(this); //初始化完成开始动画
      	}, 
      	slideChangeTransitionEnd: function(){ 
      	  swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      	} 
      },
      direction: 'vertical',
      slidesPerView: 1,
      mousewheel: true,
	  pagination: {
	    el: '.swiper-pagination-v',
	    clickable: true,
	  }
  }) 
    var swiperH = new Swiper('.swiper-container-h', {
    	direction: 'horizontal',    
    	pagination: {
		    el: '.swiper-pagination-h',
		    clickable: true
	  	},
       spaceBetween: 50 ,
       slidesPerView: 1, 
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
   }); 
   
})();
// 添加第三页上的手动触摸事件,实现内容的修改
(function(){
	var datas={
		"1简单的自我介绍":['您好，我是李寿山','爱编程，爱前端，爱新技术,','爱运动，爱健身，爱旅行，','生活中活泼开朗、喜欢沟通交流，','工作上认真负责、热爱学习创新，','目前，自身技术还差很远，','但，路程虽远，仍要负重前行！！'],
		"2为什么想做前端工程师？":['可能就像这一句情话','You are the css to my html.','“我的生活索然无味，','直到遇见了你。”','为爱好而学，为看好这个行业而学','为一种“技术人员”的自尊而学'],
		"3为什么不从事本专业？":['工作，本应该是一件使人快乐的事','但，好像...只有编程才能使我感到真正的快乐！！！','那么..','放下从前，着眼未来','为心中所爱，直奔前端'],
		"4你有怎样的优势和不足？":['我的不足是：非计算机专业','导致很多非前端范畴的专业名词理解不深，改进ing!','我的优势是：非计算机专业','建筑工作的经历，铸就了我工作认真，不怕吃苦的作风！','如果您看好我，','那就选我吧！'],
		"5你的梦想是？":['有人说【IT是个青春饭】','但我 (ฅ´ω`ฅ)','会一直走下去','成为一名优秀的前端工程师','。','。','当然，得先有一个您给我发的offer！']
	}
	$("#section-3 .secNav p").on('mouseenter',function(){
		// console.log(this.innerHTML);
		var key=$(this)[0]['innerText'];
		var list=datas[key];
		var tag="";
		for (var i = 0; i < list.length; i++) {
			var txt=list[i];
			// $("#section-3 .secContent p")[i].innerHTML=txt;
			tag+='<p>'+txt+'</p>';
		};
		$("#section-3 .secContent ").html(tag);
	});
})();
(function(){
	var items=$(".swiper-container-v .section");
	// console.log(items)
	var arr=[];
	for (var i = 0; i < items.length; i++) {
		arr.push(items[i].offsetTop);
	};
	console.log(arr);
	$(".nav-right").on("click","li",function(event){
		var index=$(this).index();
		$(window).scroll(arr[index]);
		
			// console.log(items.eq(index));
	})
	
})()

