function Calendar(year,month,day){
    this.year = year ? year : this.getFullYear();
    if(month==0){
         this.month=0;
    }else{
         this.month = month ? month : this.getMonth();
    }
    this.day=day ? day : this.getDate();
}

//获取当前年份
Calendar.prototype.getFullYear=function(){
     return new Date().getFullYear();
}
//获取当前月份
Calendar.prototype.getMonth=function(){
     return new Date().getMonth()+1;
}
//获取当前日
Calendar.prototype.getDate=function(){
     return new Date().getDate();
}
//获取一月中的星期几
Calendar.prototype.getDay=function(){
     return new Date().getDay();
}

//获取一个月的天数
Calendar.prototype.getMonthDays=function(){
     function isLeapyear(){   //闰年判断方法
           return this.year % 400 ==0 || (this.year %4 ==0 && this.year %100 != 0);
     }
     function getFebruaryDays(){  //获取闰年的天数
           return isLeapyear() ? 29 : 28;
     }
     var monthdays = [31,getFebruaryDays(),31,30,31,30,31,31,30,31,30,31];
     return monthdays[this.month-1];
     //return new Date().getDay();
}
//获取本月第一天的星期数
Calendar.prototype.getMonthFirstDays=function(){
     var firstweek = new Date(this.year,this.month-1,1).getDay();
     if(firstweek == 0){   //将0代表的礼拜天转化为7
          firstweek =7;
     }
     return firstweek;
}
//计算日历行数
Calendar.prototype.getRows=function(){
     return (this.getMonthFirstDays()-1+this.getMonthDays())/7;
}
//获取月名称
Calendar.prototype.getMonthName=function(language){
     this.monthn_en = ["January","February","March","April","may","June","July","August","September","October","November","December"];
     this.month_cn = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
     if(language=="en"){
          return this.monthn_en[this.month]
     }else{
          return this.month_cn[this.month]
     }
}
//获取日名称
Calendar.prototype.getWeekName=function(language){
     this.week_en = ["Mo","Tu","We","Th","Fr","Sa","Su"];
     this.week_cn = ["一","二","三","四","五","六","日"];
     if(language=="en"){
          return this.week_en[this.month]
     }else{
          return this.week_cn[this.month]
     }
}

var date = new Calendar();



//pc端日历调用方法
function CalendarPc(ele,obj){  //ele触发器，id元素
    this.trigger=$("#"+ele);
    if(obj){
          this.months_num = obj.months_num ? obj.months_num : 12;    //一次性绘制日历的个数
          this.display_num = obj.display_num ? obj.display_num : 2;  //默认显示个数
          this.data = obj.data ? obj.data : null;                    //传入数据
          this.initial_time = obj.initial_time ? obj.initial_time : null;         //初始化时间，第一次打开显示时间，格式必须为yy-mm-dd字符串
          this.direction = obj.direction ? obj.direction : null;                  //划分不可点击区域
          this.blackout = obj.blackout ? obj.blackout : null;                     //划分不可点击区域范围
          this.mode = obj.mode ? obj.mode : "single";
          this.selected = obj.selected ? obj.selected : null;
          this.offsetx = obj.offsetx ? obj.offsetx : 0;
          this.offsety = obj.offsety ? obj.offsety : 0;
    }else{
          this.months_num = 12;
          this.display_num = 2;
          this.data = null;
          this.initial_time = null;
          this.direction = null;   //affter向前，before之后
          this.blackout = null;
          this.mode = "single";    //single单个的，range区块选择，multiple多个的
          this.selected=null;
          this.offsetx=0;
          this.offsety=0;
    }

}
CalendarPc.prototype.arr=[];
CalendarPc.prototype.click_callback = null;
CalendarPc.prototype.current_num = 0;
CalendarPc.prototype.max_num = 100;
CalendarPc.prototype.style="style_1";  //默认样式风格
CalendarPc.prototype.update_flag=false;
CalendarPc.prototype.init=function(){
      var _this=this;
      if(!this.update_flag){
           this.panel=$("<div class='ui_calendar "+this.style+"'></div>").appendTo($("body"));
      }else{
           this.panel.empty();
      }
      if(this.initial_time){
          var initial_time_arr = this.initial_time.split("-");
          this.calendar = new Calendar(initial_time_arr[0],initial_time_arr[1],initial_time_arr[2]);
          //this.selected = this.initial_time;
      }else{
          this.calendar = new Calendar();
      }
      //console.log(this.panel);
      //console.log(this.calendar);
      this.direction_a = this.calendar.year+"-"+this.calendar.month+"-"+this.calendar.day;
      //console.log(this.direction_a);
      this.creat_calendar();

      //给输入框绑定事件
      this.trigger.on("click",function(event){
          $(".ui_calendar").hide();
           event.stopPropagation();
           var offsetx=_this.trigger.offset().left+_this.offsetx;
           var offsety=_this.trigger.offset().top+_this.trigger.height()+_this.offsety;
           _this.panel.css({top:offsety,left:offsetx});
           _this.show();
      });
      $(document).click(function(){
        _this.hide();
      })
      this.panel.on("mouseleave",function(){
            if(_this.mode=="single"){
                 setTimeout(function(){
                       _this.hide();
                  },200);
            }

      });
}
CalendarPc.prototype.update=function(){
      this.update_flag=true;
      this.init();
}
CalendarPc.prototype.num=0;
CalendarPc.prototype.creat_calendar=function(){
    var $div=$("<div class='calendar'></div>");
    var title= this.calendar.year+"年"+this.calendar.month + "月";
    var $title = $("<div class='title'>"+title+"</div>").appendTo($div);
    var $table = $("<table class='calendartables"+this.current_num+"'></table>").appendTo($div);
    $div.appendTo(this.panel);
    this.creat_th($table);
    this.creat_tr($table);
    this.num ++;
    this.current_num ++;
    if(this.num < this.display_num){
         this.creat_nextcalendar();
    }else{
         var _this=this;
         this.num = 0;
         this.panel.find(".calendar:last-child").css({marginRight:0});
         //创建点击按钮
         var $btn_prew = $("<a href='javascript:void(0)' class='prev_btn'><</a>").appendTo(this.panel);
         var $btn_next = $("<a href='javascript:void(0)' class='next_btn'>></a>").appendTo(this.panel);
         $btn_prew.click(function(event){
            event.stopPropagation();
             _this.panel.empty();
             _this.creat_prewcalendar();
         });
         $btn_next.click(function(event){
            event.stopPropagation();  
             _this.panel.empty();
             _this.creat_nextcalendar();
         });

         //给可点击的日期添加事件
        this.panel.find(".active").on("click",function(){
            var date=$(this).attr("data-date");
            _this.selected=date;
            if(_this.mode=="single"){
                 _this.panel.find(".active").removeClass("selected");
                 $(this).addClass("selected");
                 _this.trigger.val(date);
                 _this.hide();
                 if(_this.callback){
                      _this.callback(date);
                 }
            }

        });

    }


}
CalendarPc.prototype.creat_th=function($table){
    var $tr=$("<tr><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th><th>日</th></tr>");
    $tr.appendTo($table);
};
CalendarPc.prototype.creat_tr=function($table){
    var _this=this;
    var calendar=this.calendar;
    var rows = Math.ceil(calendar.getRows());
    var firstdays = calendar.getMonthFirstDays();
    var days = calendar.getMonthDays();
    var lastdays =rows*7 - (firstdays-1) - days;  //用于计算单月最后一行，多余的天数
    if(firstdays==0){firstdays=7}
    var str="";
    var len=rows*7;
    for(var m=0;m<rows;m++){
         var $tr = $("<tr></tr>");
         $tr.appendTo($table);
         for(var n=0;n<7;n++){
             var $td = $("<td><a href='javascript:void(0)'></a></td>").appendTo($tr);
             var $a = $td.find("a");
             var day_text=(m*7)+n-firstdays+2;
             var mo=calendar.month;
             var dt=day_text;
             var date =  calendar.year+"-"+mo+"-"+dt;
             if(mo<10){
            	 mo="0"+mo;
             }
             if(dt<10){
            	 dt="0"+dt;
             }
             //console.log(date);
             if(m==0){
                 if(n<firstdays-1){
                      //console.log("不绘画");
                      $a.addClass("disable");
                 }else{
                      $a.text(day_text);
                      this.painting($a,date);
                 }
             }else if(m==rows-1){
                 if(n >= 7-lastdays){
                      //console.log("不绘画");
                      $a.addClass("disable");
                 }else{
                      $a.text(day_text);
                      //this.creat_price(date,$a);
                      this.painting($a,date);
                 }
             }else{
                 $a.text(day_text);
                 //this.creat_price(date,$a);
                 this.painting($a,date);
             }


         }
    }
    
}
//绘画日历小元素，同时监听点击事件
CalendarPc.prototype.painting=function($a,time){
     var sortTime=Date.parse(new Date(time.replace(/\-/g,"/")));

     var sortDirection=Date.parse(new Date(this.direction_a.replace(/\-/g,"/")));
     if(this.selected){
          var sortSelected = Date.parse(new Date(this.selected.replace(/\-/g,"/")));
          if(sortSelected==sortTime){
               $a.addClass("selected");
          }
     }
     if(this.direction == "after"){
          if(sortDirection<=sortTime){
               $a.addClass("active");
               $a.attr("data-date",time);
          }else{
               $a.addClass("disable");
          }
          return ;
     }else if(this.direction == "before"){
          if(sortDirection>=sortTime){
               $a.addClass("active");
               $a.attr("data-date",time);
          }else{
               $a.addClass("disable");

          }
          return ;
     }
     if(this.blackout && $.isArray(this.blackout)){
          var sortBlackout_a=Date.parse(new Date(this.blackout[0].replace(/\-/g,"/")));
          var sortBlackout_b=Date.parse(new Date(this.blackout[1].replace(/\-/g,"/")));
          if(sortTime>=sortBlackout_a && sortTime<=sortBlackout_b){
               $a.addClass("active");
               $a.attr("data-date",time);
          }else{
               $a.addClass("disable");
          }
          return ;
     }
     $a.addClass("active");
}
//绘制下一个月的日历
CalendarPc.prototype.creat_nextcalendar=function(){
    var month = this.calendar.month;
    var year = this.calendar.year;
    month++;
    if(month > 12){
         month = 1;
         year++;
    }
    this.calendar = new Calendar(year,month);
    this.creat_calendar();
}
//绘制上一个月的日历
CalendarPc.prototype.creat_prewcalendar=function(){
    var month = this.calendar.month;
    var year = this.calendar.year;
    for(var i=0;i<this.display_num*2-1;i++){
         month--;
         if(month == 0){
             month = 12;
             year--;
         }
    }
    this.calendar = new Calendar(year,month);
    this.creat_calendar();
}
//删除与隐藏元素
CalendarPc.prototype.close=function(){
      this.panel.remove();
}
CalendarPc.prototype.hide=function(){
      this.panel.hide();
}
//显示元素
CalendarPc.prototype.show=function(){
      var _this=this;
      var offsetx=_this.trigger.offset().left+this.offsetx;
      var offsety=_this.trigger.offset().top+_this.trigger.height()+this.offsety;
      this.panel.css({top:offsety,left:offsetx})
      this.panel.show();
}



