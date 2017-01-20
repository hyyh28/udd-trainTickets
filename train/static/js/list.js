$(function(){
	
	// 车型等选择
	$('.choose_no span').addClass('cur');
	$('.choose_no span').click(function(){
		$(this).addClass('cur');
		$(this).parents('.choose_no').siblings('.choose_cur').children('i').removeClass('icon-dot_1_cur');
	 });

	$('.choose_cur').click(function(){
		$(this).children('i').toggleClass('icon-dot_1_cur');
		if($(this).children('i').hasClass('icon-dot_1_cur') || $(this).siblings('.choose_cur').children('i').hasClass('icon-dot_1_cur')){
			$(this).siblings('.choose_no').children('span').removeClass('cur');
		}else{
			$(this).siblings('.choose_no').children('span').addClass('cur');
		};
	});

	$('.choose_more').click(function(){
		$('.search_choose_h').show();
		$(this).hide();
	});
	$('.choose_less').click(function(){
		$('.search_choose_h').hide();
		$('.choose_more').show();
	});
	// 只显示有票车次的切换
	$('.have').click(function(){
		$(this).children('i').toggleClass('icon-dot_1_cur');
	});
	// 经停站的切换
	$('.wanted p.stop_t').click(function(event){
		var e=window.event || event;  
	        if(e.stopPropagation){  
	            e.stopPropagation();  
	        }else{  
	            e.cancelBubble = true;  
	        }
		$(this).parents('.checi_1').siblings('.stop').toggle();
	});
	// 酒店筛选
	$('.jd_list .jd_list_a:last').css('border-bottom','none');
	$('.siftings_a').click(function(event){
		var e=window.event || event;  
	        if(e.stopPropagation){  
	            e.stopPropagation();  
	        }else{  
	            e.cancelBubble = true;  
	        } 
		$('.siftings_list').show();
		$('.siftings_a').removeClass('cur');
		$(this).addClass('cur');

	});
	

	$('.search_date .l_r').hover(function(){
		$(this).children('i').toggleClass('icon-arr_l_cur');
	});
	$('.search_date .r_l').hover(function(){
		$(this).children('i').toggleClass('icon-arr_r_cur');
	});
	$('.icon-list_huan').hover(function(){
		$(this).toggleClass('icon-list_huan_cur');
	});
	$('.search_date .l_r').css('border-right','1px solid #dddddd');
	document.onclick = function(){  
		$(".siftings_list").hide();
		$(".siftings_a").removeClass('cur');
		$('.search_wanted .checi .stop').hide();
	};

	//选择开始日期
	var starttime = new CalendarPc("starttime",
  	{
  		direction:"after",
  		offsety:6,
  		display_num:2
  	});
  	starttime.callback=function(data){
		var num = new Date(data).getDay();
		var week;
		if(num == 1){
			week = '星期一';
		}else if(num == 2){
			week = '星期二';
		}else if(num == 3){
			week = '星期三';
		}else if(num == 4){
			week = '星期四';
		}else if(num == 5){
			week = '星期五';
		}else if(num == 6){
			week = '星期六';
		}else if(num == 0){
			week = '星期日';
		}
		$('.train_ser .put .week').text(week);
  	}
  	starttime.init();


  	// 星期列表的切换
	$('.search_date .week_li').click(function(){
		$('.search_date .week_li').removeClass('cur');
		$(this).addClass('cur');
		var n=$(this).children('input').val()+$(this).children('.week_date').html();
		$('#starttime').val(n);
		var num = new Date(n).getDay();
		var week;
		if(num == 1){
			week = '星期一';
		}else if(num == 2){
			week = '星期二';
		}else if(num == 3){
			week = '星期三';
		}else if(num == 4){
			week = '星期四';
		}else if(num == 5){
			week = '星期五';
		}else if(num == 6){
			week = '星期六';
		}else if(num == 0){
			week = '星期日';
		}
		//console.log(num);
		$('.train_ser .put .week').text(week);
	});

  	//星期左右滑动
	function week(){
    	var num = 0;
        var scroll_state = true;
        var li_length = $(".week li").size();
        var ul_width = li_length * 96;
        $(".week ul").width(ul_width);
        $(".r_l i").click(function () {
            if (num < li_length - 7 && scroll_state == true) {
                num++;
                $(".week ul").animate({ left: "-" + 96 * num + "px" }, 1, function () {
                    scroll_state = true;
                });
                scroll_state = false;
            }
        });
        $(".l_r i").click(function () {
            if (num > 0 && scroll_state == true) {
                num--;
                $(".week ul").animate({ left: "-" + 96 * num + "px" }, 1, function () {
                    scroll_state = true;
                });
                scroll_state = false;
            }
        });
    }
    week();

    $('.p_price i.wo').hover(function(){
		$(this).parents('span').siblings('.zhu').toggle();
	});
    $('.yd .train_gq').click(function(){
     	$('.qr').show();
     	$('.qr_bg').show();
     });
    $('.qr .qr_button').click(function(){
    	$('.qr').hide();
    	$('.ts').show();
    });
    $('.ts .ts_main .ts_ok').click(function(){
    	$('.ts').hide();
    	$('.qr_bg').hide();
    });
    $('.qr_bg').click(function(){
    	$(this).hide();
    	$('.qr').hide();
    	$('.ts').hide();
    	$('.qr').hide();
    })
})