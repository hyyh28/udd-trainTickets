$(function(){
     // 等待占位进度条
    var vd=$("#vader").ProgressBarWars({porcentaje:100,estilo:"vader",});
    // 作为类型切换
	$('.wanted_type').click(function(){
		$('.wanted_type').removeClass('cur');
		$(this).addClass('cur');
		$('.wanted_type').children('.type_choose').removeClass('cur_a');
		$(this).children('.type_choose').addClass('cur_a');
	});

	$('.zuo_choose p').click(function(){
		$(this).children('i').toggleClass('cur');
	});
	$('.trave_r li').click(function(){
		$(this).children('i').toggleClass('icon-trave_check_cur');
	});
    //添加常用联系人
    $('.passenger_infor').on("click",".ck_contact",function(){
		$(this).children('i').toggleClass('icon-ck_checked_cur');
	});
	$('.vip span.icon').click(function(){
		$(this).children('i').toggleClass('cur');
	});
    $('.yf').click(function(){
        $(this).children('i').toggleClass('cur');
    });
    $('.sub_order_l i').click(function(){
        $(this).toggleClass('cur');
    });
     $('.sub_order_l span').click(function(){
        $('.js-detail').toggle();
    });
    $('.gz_children').click(function(){
        $(this).siblings('.children_gz_cont').toggle();
    })
    $('.bind_12306 i').click(function(){
        $('.entry_bg').show();
        $('.dl_12306').show();
    });
    $('.entry').click(function(){
        $('.entry_bg').show();
        $('.udd_entry').show();
    });
    $('.entry_bg').click(function(){
        $(this).hide();
        $('.dl_12306').hide();
        $('.udd_entry').hide();
    });
    $('.type_cont h4').click(function(){
        $('.type_cont h4').children('i').removeClass('icon-type_radio_cur');
        $('.type_cont h4').siblings('.ck_name').hide();
        $(this).children('i').addClass('icon-type_radio_cur');
        $(this).siblings('.ck_name').show();
    });
    // 年月日
   function addtime(e) {
        $.ms_DatePicker({
            YearSelector: e+" .sel_year",
            MonthSelector: e+" .sel_month",
            DaySelector: e+" .sel_day"
        });
    };
    // 年月日结束
    //$.ms_DatePicker('#add_passenger0');
    addtime('#add_passenger0')
    //新增成人票
    var crpiao=$('.add_passenger').prop("outerHTML");
    var index=0;
    $('.add_button').click(function(){
        index++;
        var len1 = $('.adult_ck').length;
        var len2 = $('.children_ck.children_cur').length;
        var len = len1 + len2 + 1;
        var i=0;
        //console.log('新增成人票'+len);
        if(len <= 5){
            $('.add_passenger:last').after(crpiao);
            //添加id`
            $('.add_passenger:last').attr('id','add_passenger'+index);
            //addtime('#add_passenger'+index);
        }
        if(len > 4){
            $(this).css("background","#ccc");
        }
        for(i;i<=len;i++){
            $(".children_cur .ck_contact_p span").eq(i).text(i+1);
        }
    });
    //添加儿童票
    $('.passenger_infor').on("click","span.icon",function(){
        //$.ms_DatePicker();
        var len1 = $('.adult_ck').length;
        var len2 = $('.children_ck.children_cur').length;
        var len = len1 + len2;
        var i=0;
        //console.log('新增儿童票'+len);
        if(len > 4){
            $('.add_button').css("background","#ccc");
        }
        if(len < 5){
            $(this).parents('.adult_ck').siblings('.children_ck').addClass('children_cur');
        }
        for(i;i<=len;i++){
            $(".children_cur .ck_contact_p span").eq(i).text(i+1);
        }
    });
    //儿童票删除
    $('.passenger_infor').on("click",".ck_et_delete",function(){
        $(this).parents('.children_ck').removeClass('children_cur');
        var len1 = $('.adult_ck').length;
        var len2 = $('.children_ck.children_cur').length;
        var len = len1 + len2 - 1;
        var i=0;
        //console.log('儿童票删除'+len);
        for(i;i<=len;i++){
            $(".children_cur .ck_contact_p span").eq(i).text(i+1);
        }
        if(len <5){
            $('.add_button').css("background","#009fe8");
        }
    });
    //成人票删除
    $('.passenger_infor').on("click",".ck_delete",function(){
        var len1 = $('.adult_ck').length;
        var len2 = $('.children_ck.children_cur').length;
        var len = len1 + len2 - 1;
        var i=0;
        //console.log('成人票删除'+len);
        if(len1>1){
           $(this).parents('.add_passenger').remove(); 
        }
        for(i;i<=len;i++){
            $(".children_cur .ck_contact_p span").eq(i).text(i+1);
        }
        if(len <5){
            $('.add_button').css("background","#009fe8");
        }
    });

    

})