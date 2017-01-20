// 出发城市和到达城市
var app=angular.module('train',[]);
app.controller('main',function($scope,$http){
  //出发城市
  $scope.a=[];
  $scope.b=[];
  $scope.c=[];
  $scope.d=[];
  $scope.e=[];
  $scope.f=[];
  $scope.g=[];
  $scope.h=[];
  $scope.i=[];
  $scope.j=[];
  $scope.k=[];
  $scope.l=[];
  $scope.m=[];
  $scope.n=[];
  $scope.o=[];
  $scope.p=[];
  $scope.q=[];
  $scope.r=[];
  $scope.s=[];
  $scope.t=[];
  $scope.u=[];
  $scope.v=[];
  $scope.w=[];
  $scope.x=[];
  $scope.y=[];
  $scope.z=[];
  $scope.tab_1_page=1;
  $scope.tab_2_page=1;
  $scope.tab_3_page=1;
  $scope.tab_4_page=1;
  $scope.tab_5_page=1;
  $scope.tab_6_page=1;
  $scope.cityindex=0;
  $scope.citytab=["热门","ABCD","EFGH","JKLM","NOPQR","STUWX","YZ"];
  $scope.city_cf = station_names.split('@');
  for(var i=1; i<$scope.city_cf.length; i++){   //数组分成26个字母开头的数组
    if($scope.city_cf[i].substr(0, 1) == 'a'){
      $scope.a.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 'b'){
      $scope.b.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 'c'){
      $scope.c.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 'd'){
      $scope.d.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 'e'){
      $scope.e.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 'f'){
      $scope.f.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 'g'){
      $scope.g.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 'h'){
      $scope.h.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 'i'){
      $scope.i.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 'j'){
      $scope.j.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 'k'){
      $scope.k.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 'l'){
      $scope.l.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 'm'){
      $scope.m.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 'n'){
      $scope.n.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 'o'){
      $scope.o.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 'p'){
      $scope.p.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 'q'){
      $scope.q.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 'r'){
      $scope.r.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 's'){
      $scope.s.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 't'){
      $scope.t.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 'u'){
      $scope.u.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 'v'){
      $scope.v.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 'w'){
      $scope.w.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 'x'){
      $scope.x.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 'y'){
      $scope.y.push($scope.city_cf[i]);
    }else if($scope.city_cf[i].substr(0, 1) == 'z'){
      $scope.z.push($scope.city_cf[i]);
    }
  };
  //ABCD分页
  $scope.prev_tab1page=function(){
    $scope.tab_1_page--;
    if($scope.tab_1_page<1){
      $scope.tab_1_page=1;
    };
  };
  $scope.next_tab1page=function(){
    $scope.tab_1_page++;
    if($scope.tab_1_page>14){
      $scope.tab_1_page=14;
    };
  };
  //EFGH分页
  $scope.prev_tab2page=function(){
    $scope.tab_2_page--;
    if($scope.tab_2_page<1){
      $scope.tab_2_page=1;
    };
  };
  $scope.next_tab2page=function(){
    $scope.tab_2_page++;
    if($scope.tab_2_page>17){
      $scope.tab_2_page=17;
    };
  };
  //JKLM分页
  $scope.prev_tab3page=function(){
    $scope.tab_3_page--;
    if($scope.tab_3_page<1){
      $scope.tab_3_page=1;
    };
  };
  $scope.next_tab3page=function(){
    $scope.tab_3_page++;
    if($scope.tab_3_page>18){
      $scope.tab_3_page=18;
    };
  };
  //NOPQR分页
  $scope.prev_tab4page=function(){
    $scope.tab_4_page--;
    if($scope.tab_4_page<1){
      $scope.tab_4_page=1;
    };
  };
  $scope.next_tab4page=function(){
    $scope.tab_4_page++;
    if($scope.tab_4_page>8){
      $scope.tab_4_page=8;
    };
  };
  //TUWX分页
  $scope.prev_tab5page=function(){
    $scope.tab_5_page--;
    if($scope.tab_5_page<1){
      $scope.tab_5_page=1;
    };
  };
  $scope.next_tab5page=function(){
    $scope.tab_5_page++;
    if($scope.tab_5_page>16){
      $scope.tab_5_page=16;
    };
  };
  //YZ分页
  $scope.prev_tab6page=function(){
    $scope.tab_6_page--;
    if($scope.tab_6_page<1){
      $scope.tab_6_page=1;
    };
  };
  $scope.next_tab6page=function(){
    $scope.tab_6_page++;
    if($scope.tab_6_page>18){
      $scope.tab_6_page=18;
    };
  };

  //城市搜素
  $scope.searchflag1=false; //搜索列表--出发
  $scope.cityfalse1=false; //城市列表--出发
  $scope.searchflagtrue1=true; //出发城市默认显示
  $scope.searchflagfalse1=false; //出发城市默认隐藏
  $scope.searchflag2=false; //搜索列表--到达
  $scope.cityfalse2=false; //城市列表--到达
  $scope.searchflagtrue2=true; //到达城市默认显示
  $scope.searchflagfalse2=false; //到达城市默认隐藏
  $scope.searchborder1=false; //input框--出发
  $scope.searchborder2=false; //input框--到达
  $scope.cityurl1='hot1.html';
  $scope.cityurl2='hot2.html';
  $scope.cf_value1="";
  $scope.cf_value2="";
  $scope.sercharr=[];
  $scope.pagenum=1; //页数
  $scope.searchtotal=1;
  $scope.serchkey1=$scope.cf_value1;
  $scope.serchkey2=$scope.cf_value2;
  $scope.upindex=0; //键盘事件

  //城市列表切换
  $scope.citytabck=function(num){
    $scope.cityindex = num;
    $scope.tab_1_page=1;
    $scope.tab_2_page=1;
    $scope.tab_3_page=1;
    $scope.tab_4_page=1;
    $scope.tab_5_page=1;
    $scope.tab_6_page=1;
    if(num == 0){
      $scope.cityurl1='hot1.html';
      $scope.cityurl2='hot2.html';
    }else if(num == 1){
      $scope.cityurl1='one1.html';
      $scope.cityurl2='one2.html';
    }else if(num == 2){
      $scope.cityurl1='two1.html';
      $scope.cityurl2='two2.html';
    }else if(num == 3){
      $scope.cityurl1='three1.html';
      $scope.cityurl2='three2.html';
    }else if(num == 4){
      $scope.cityurl1='four1.html';
      $scope.cityurl2='four2.html';
    }else if(num == 5){
      $scope.cityurl1='five1.html';
      $scope.cityurl2='five2.html';
    }else if(num == 6){
      $scope.cityurl1='six1.html';
      $scope.cityurl2='six2.html';
    }
  }

  //焦点重置元素
  $scope.resetfocus=function(){
    $scope.tab_1_page=1;
    $scope.tab_2_page=1;
    $scope.tab_3_page=1;
    $scope.tab_4_page=1;
    $scope.tab_5_page=1;
    $scope.tab_6_page=1;
    $scope.cityurl1='hot1.html';
    $scope.cityurl2='hot2.html';
    $scope.cityindex=0;
  }

  //获得焦点事件--出发城市
  $scope.searchfocus1=function(value){  

    $scope.resetfocus();

    $scope.searchborder1=true;
    $scope.searchborder2=false;

    $scope.searchflag2=false;
    $scope.cityfalse2=false;

    $scope.searchflagfalse1=true;
    $scope.searchflagtrue1=false;
    $scope.cityfalse1=true;

  };
  //获得焦点事件--到达城市
  $scope.searchfocus2=function(value){  

    $scope.resetfocus();

    $scope.searchborder2=true;
    $scope.searchborder1=false;

    $scope.searchflag1=false;
    $scope.cityfalse1=false;

    $scope.searchflagfalse2=true;
    $scope.searchflagtrue2=false;
    $scope.cityfalse2=true;

  };

  //失去焦点事件
  $scope.searchblur=function(value,$event){
    //console.log($event.target);
    if($event.target.nodeName=="SPAN" || $event.target.nodeName=="A" || $event.target.nodeName=="INPUT" || $event.target.nodeName=="I"){
      return false;
    }
    $scope.resetfocus();
    //--出发城市
    if($scope.cf_value1 != ''){
      $scope.searchflagtrue1=false;
      $scope.searchflagfalse1=true;
      $scope.cityfalse1=false;
      $scope.searchborder1=false;
    }else{
      $scope.cityfalse1=false;
      $scope.searchflag1=false;
      $scope.searchflagfalse1=false;
      $scope.searchborder1=false;
      $scope.searchflagtrue1=true;
    }
    //--到达城市
    if($scope.cf_value2 != ''){
      $scope.searchflagtrue2=false;
      $scope.searchflagfalse2=true;
      $scope.cityfalse2=false;
      $scope.searchborder2=false;
    }else{
      $scope.cityfalse2=false;
      $scope.searchflag2=false;
      $scope.searchflagfalse2=false;
      $scope.searchborder2=false;
      $scope.searchflagtrue2=true;
    }
  }

  //点击城市事件--出发城市
  $scope.searchcityclick1=function(value,data){
    $scope.curdata1=data;
    $scope.cf_value1=value;
    $scope.searchflag1=false;
    $scope.searchborder1=false;
    $scope.cityfalse1=false;
    document.getElementById("city_end").focus();
    $scope.searchfocus2();
  }

  //点击城市事件--到达城市
  $scope.searchcityclick2=function(value,data){
    $scope.curdata2=data;
    $scope.cf_value2=value;
    $scope.searchflag2=false;
    $scope.searchborder2=false;
    $scope.cityfalse2=false;
  }

  //城市列表关闭
  $scope.cityclose=function(){ 
    //出发城市
    if($scope.cf_value1 != ''){
      $scope.searchflagtrue1=false;
      $scope.searchflagfalse1=true;
      $scope.cityfalse1=false;
      $scope.searchborder1=false;
    }else{
      $scope.cityfalse1=false;
      $scope.searchflag1=false;
      $scope.searchflagfalse1=false;
      $scope.searchborder1=false;
      $scope.searchflagtrue1=true;
    }
    //到达城市
    if($scope.cf_value2 != ''){
      $scope.searchflagtrue2=false;
      $scope.searchflagfalse2=true;
      $scope.cityfalse2=false;
      $scope.searchborder2=false;
    }else{
      $scope.cityfalse2=false;
      $scope.searchflag2=false;
      $scope.searchflagfalse2=false;
      $scope.searchborder2=false;
      $scope.searchflagtrue2=true;
    }
  };

  //change事件--出发城市
  $scope.searchcity1=function(value){  
    $scope.pagenum=1;
    if(value != ''){
      $scope.cityfalse1=false;
      $scope.searchflag1=true;
      $scope.sercharr.length=0;
      $scope.upindex=0;
      var first=value.substr(0,1);
      $scope.serchkey=value;
      //console.log(value);
      for(var i=1; i<$scope.city_cf.length; i++){
        if($scope.city_cf[i].split("|")[0].indexOf(value)>=0 && $scope.city_cf[i].split("|")[0].indexOf(first)==0){
          $scope.sercharr.push($scope.city_cf[i]);
        }else if($scope.city_cf[i].split("|")[1].indexOf(value)>=0 && $scope.city_cf[i].split("|")[1].indexOf(first)==0){
          $scope.sercharr.push($scope.city_cf[i]);
        }else if($scope.city_cf[i].split("|")[3].indexOf(value)>=0 && $scope.city_cf[i].split("|")[3].indexOf(first)==0){
          $scope.sercharr.push($scope.city_cf[i]);
        }
      }
      //console.log($scope.sercharr);
      //计算分页总数
      $scope.searchtotal=Math.ceil($scope.sercharr.length/6);
      //console.log($scope.searchtotal);

      //城市搜索分页
      $scope.prev_serchpage=function(value){ //上一页
        $scope.pagenum--;
        if($scope.pagenum < 1){
          $scope.pagenum = 1;
        };
        $scope.upindex=($scope.pagenum-1)*6;
        if(value == "start"){
          document.getElementById("city_start").focus();
        }else if(value == "end"){
          document.getElementById("city_end").focus();
        }
      };
      $scope.next_serchpage=function(value){ //下一页
        $scope.pagenum++;
        if($scope.pagenum > $scope.searchtotal){
          $scope.pagenum = $scope.searchtotal;
        };
        $scope.upindex=($scope.pagenum-1)*6;
        //console.log($scope.pagenum);
        if(value == "start"){
          document.getElementById("city_start").focus();
        }else if(value == "end"){
          document.getElementById("city_end").focus();
        }
      };

      //鼠标经过事件
      $scope.citymousemove=function(index){
        $scope.upindex=index;
      }

      //键盘事件
      $scope.citykeydown=function($event){ 
        if($event.keyCode == 38){ //向上事件
          if($scope.upindex<=($scope.pagenum-1)*6){ //本页第一个
            $scope.upindex=6*$scope.pagenum-1; //本页最后一个
          }else{
            $scope.upindex=$scope.upindex-1;
          }
        }else if($event.keyCode == 40){ //向下事件
          if($scope.upindex>=6*$scope.pagenum-1){ 
            $scope.upindex=($scope.pagenum-1)*6; 
          }else{
            $scope.upindex=$scope.upindex+1;
          }
        }else if($event.keyCode == 13){ //回车事件
          //console.log($event.target);
          $scope.curmain=$scope.sercharr[$scope.upindex];
          $scope.curmain=$scope.curmain.split('|');
          $scope.curdata1=$scope.curmain[2];
          $scope.cf_value1=$scope.curmain[1];
          $scope.searchflag1=false;
          $scope.searchborder1=false;
          $scope.cityfalse1=false;
          document.getElementById("city_start").blur();
          document.getElementById("city_end").focus();
          $scope.searchfocus2();
        }
        //console.log($event.keyCode);
      };
    }else{
      $scope.upindex=0;
      $scope.cityfalse1=true;
      $scope.searchflag1=false;
    }
  };

  //change事件--到达城市
  $scope.searchcity2=function(value){  
    $scope.pagenum=1;
    if(value != ''){
      $scope.cityfalse2=false;
      $scope.searchflag2=true;
      $scope.sercharr.length=0;
      $scope.upindex=0;
      var first=value.substr(0,1);
      $scope.serchkey=value;
      //console.log(value);
      for(var i=1; i<$scope.city_cf.length; i++){
        if($scope.city_cf[i].split("|")[0].indexOf(value)>=0 && $scope.city_cf[i].split("|")[0].indexOf(first)==0){
          $scope.sercharr.push($scope.city_cf[i]);
        }else if($scope.city_cf[i].split("|")[1].indexOf(value)>=0 && $scope.city_cf[i].split("|")[1].indexOf(first)==0){
          $scope.sercharr.push($scope.city_cf[i]);
        }else if($scope.city_cf[i].split("|")[3].indexOf(value)>=0 && $scope.city_cf[i].split("|")[3].indexOf(first)==0){
          $scope.sercharr.push($scope.city_cf[i]);
        }
      }
      //console.log($scope.sercharr);
      //计算分页总数
      $scope.searchtotal=Math.ceil($scope.sercharr.length/6);
      //console.log($scope.searchtotal);

      //城市搜索分页
      $scope.prev_serchpage=function(value){ //上一页
        $scope.pagenum--;
        if($scope.pagenum < 1){
          $scope.pagenum = 1;
        };
        $scope.upindex=($scope.pagenum-1)*6;
        if(value == "start"){
          document.getElementById("city_start").focus();
        }else if(value == "end"){
          document.getElementById("city_end").focus();
        }
      };
      $scope.next_serchpage=function(value){ //下一页
        $scope.pagenum++;
        if($scope.pagenum > $scope.searchtotal){
          $scope.pagenum = $scope.searchtotal;
        };
        $scope.upindex=($scope.pagenum-1)*6;
        //console.log($scope.pagenum);
        if(value == "start"){
          document.getElementById("city_start").focus();
        }else if(value == "end"){
          document.getElementById("city_end").focus();
        }
      };

      //鼠标经过事件
      $scope.citymousemove=function(index){
        $scope.upindex=index;
      }

      //键盘事件
      $scope.citykeydown=function($event){ 
        if($event.keyCode == 38){ //向上事件
          if($scope.upindex<=($scope.pagenum-1)*6){ //本页第一个
            $scope.upindex=6*$scope.pagenum-1; //本页最后一个
          }else{
            $scope.upindex=$scope.upindex-1;
          }
        }else if($event.keyCode == 40){ //向下事件
          if($scope.upindex>=6*$scope.pagenum-1){ 
            $scope.upindex=($scope.pagenum-1)*6; 
          }else{
            $scope.upindex=$scope.upindex+1;
          }
        }else if($event.keyCode == 13){ //回车事件
          //console.log($event.target);
          $scope.curmain=$scope.sercharr[$scope.upindex];
          $scope.curmain=$scope.curmain.split('|');
          $scope.curdata2=$scope.curmain[2];
          $scope.cf_value2=$scope.curmain[1];
          $scope.searchflag2=false;
          $scope.searchborder2=false;
          $scope.cityfalse2=false;
          document.getElementById("city_end").blur();
        }
        //console.log($event.keyCode);
      };
    }else{
      $scope.upindex=0;
      $scope.cityfalse2=true;
      $scope.searchflag2=false;
    }
  };

  //出发和到达城市换一换
  $scope.citychange=function(){
    $scope.cityclose();
    if($scope.cf_value1 != '' && $scope.cf_value2 != ''){
      $scope.changedata1 = $scope.curdata1;
      $scope.changecity1 = $scope.cf_value1;
      $scope.changedata2 = $scope.curdata2;
      $scope.changecity2 = $scope.cf_value2;
      $scope.curdata1 = $scope.changedata2;
      $scope.cf_value1 = $scope.changecity2;
      $scope.curdata2 = $scope.changedata1;
      $scope.cf_value2 = $scope.changecity1;
    }
  }
})