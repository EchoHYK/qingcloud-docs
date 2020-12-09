function GetUrlRelativePath(){
	var url = document.location.toString();
	var arrUrl = url.split("//");

	var start = arrUrl[1].indexOf("/");
	var relUrl = arrUrl[1].substring(start);//stop省略，截取从start开始到结尾的所有字符

	if(relUrl.indexOf("?") != -1){
	  relUrl = relUrl.split("?")[0];
	}
	return relUrl;
}
function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); 
	return null; 
}

function download_pdf(url=''){
	if(url==''){
		url = window.location.pathname;
	}
	window.location.href='/download.php?url='+url;
}
$(function(){
	$('.product-learn-icon').click(function(){
		if($(this).attr('src')=='/images/icons/caret-down.svg'){
			$(this).attr('src','/images/icons/caret-up.svg');
		}else{
			$(this).attr('src','/images/icons/caret-down.svg');
		}
		$(this).parent().next('ul').toggle("normal");
	})

	var max_width = window.screen.width;
	$('.search-mobile-icon').click(function(){
		if(max_width<1023){
			$('#search-mobile-logo').hide();
			$(this).hide();
			$(this).prev('form').show();
		}
	})
	document.onmousedown = function(e){
	　　var ev = document.all ? window.event : e;
	　　var _con = $(".search-mobile-icon").prev('form'); // 设置目标区域
	　　if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
	　　　　if(!_con.is(":hidden") && max_width<1023){
	　　　　　　$('#search-mobile-logo').show();
				$('.search-mobile-icon').show();
				_con.hide();
	　　　　}
	　　}
	}
})