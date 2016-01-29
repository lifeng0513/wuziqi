window.onload = function(){
// 画线
var ROW = 20;
var sences = document.getElementById('sence');
var el,el2;
for(var i =0;i<ROW;i++){
el = document.createElement('div');
el.style.position ='absolute';
el.style.top = (600/ROW)/2 +(600/ROW)*i+'px';   
el.style.width = '600px';
el.style.height = '1px';
el.style.background = '#B2D426';
sences.appendChild(el);
el2 = document.createElement('div');
el2.style.position ='absolute';
el2.style.left = (600/ROW)/2 +(600/ROW)*i+'px'; 
el2.style.width = '1px';
el2.style.height = '600px';
el2.style.background = '#B2D426';
sences.appendChild(el2);
}
// 五子棋
var ROW = 20;
var width = Math.floor(600-ROW)/ROW+'px';
var sences = document.getElementById('sence');
for( var i = 0;i<ROW;i++){
	for( var j = 0;j<ROW;j++){
var d = document.createElement('div');
d.setAttribute('class','block');
d.setAttribute('id',i+'_'+j);
d.style.width=width;
d.style.height=width;
sences.appendChild(d);

    }
}

var panduan = function(id,dic){
  var x = Number( id.split('_')[0]);
  var y = Number( id.split('_')[1]);
  var hang =1;
  var tx,ty;
  tx = x; ty = y;
  while( dic[ tx +'_'+ (ty+1) ] ){
    hang++;
    ty++;
  }
    tx = x; ty = y;
    while( dic[ tx +'_'+(ty-1) ] ){
      hang++;
      ty--;
    }
    if(hang == 5) return true;
    var lie = 1;
    tx = x; ty = y;
    while( dic[ (tx-1) +'_'+ty ] ){
      lie++;
      tx--;
    }
      tx = x; ty = y;
    while( dic[ (tx+1) +'_'+ty ] ){
      lie++;
      tx++;
    }
    if(lie == 5) return true;
    var zx = 1;
    tx = x; ty = y;
    while( dic[ (tx-1) +'_'+(ty+1) ] ){
      zx++;
      tx--;
      ty++;
    
    }
       tx = x; ty = y;
    while( dic[ (tx+1) +'_'+(ty-1) ] ){
      zx++;
      tx++
      ty--;
    }
    if(zx == 5) return true;
    var yx = 1;
    tx = x; ty = y;
    while( dic[ (tx-1) +'_'+(ty-1) ] ){
      yx++;
      tx--;
      ty--;
    
    }
       tx = x; ty = y;
    while( dic[ (tx+1) +'_'+(ty+1) ] ){
      yx++;
      tx++
      ty++;
    }
    if(yx == 5) return true;

    return false;
};

// var blocks = document.getElementsByClassName('block');
// var kaiguan = true;
// var dict1 = {};
// var dict2 = {};
// for( var i = 0;i<blocks.length;i++){
// 	blocks[i].onclick = function(){
// 		if(this.hasAttribute( 'hasColor')){
//           return ;
// 		}
// 		var id = this.getAttribute('id');
// 		if( kaiguan ){
//       this.style.background='url(./img/bai.png)';
// 		   // this.style.background='white';
//        	kaiguan= false;
//            // this.style.boxShadow='0 3px 13px black';
//            dict1 [ id ] = true;
//            if(panduan(id,dict1)){
//            	alert('白棋赢了!');
//            }
// 		}else{
// 	    this.style.background='url(./img/hei.png)';
//       kaiguan = true;
//         // this.style.boxShadow='0 3px 10px black';
//            dict2 [ id ] = true;
//            if(panduan(id,dict2)){
//            	alert('黑棋赢了!');
//            }  
//          }
//         this.setAttribute('hasColor','true');
// 	};
// }



var blocks = document.getElementsByClassName('block');
var baifang = document.getElementById('baifang');
var heifang = document.getElementById('heifang');
var tu1 = document.getElementById('tu1');
var tu2 = document.getElementById('tu2');
var reset = document.getElementById('reset');

var kaiguan = true;
var dict1 = {};
var dict2 = {};

 baifang.onclick = function(){
   tu1.style.background ='url(./img/gaoxin.gif)';
   tu2.style.background ='url(./img/sikao.gif)';
  for( var i = 0;i<blocks.length;i++){
    blocks[i].onclick = function(){
      if(this.hasAttribute( 'hasColor')){
            return ;
      }
      var id = this.getAttribute('id');
      if( kaiguan ){
        this.style.background='url(./img/bai.png)';
           kaiguan= false;
             dict1 [ id ] = true;
             if(panduan(id,dict1)){
               alert('白棋赢了!');
               // $(".xiao").css({"display":"block"});
             }
      }
        this.setAttribute('hasColor','true');
    }
  }
}

heifang.onclick = function(){
 tu2.style.background ='url(./img/gaoxin.gif)'; 
 tu1.style.background ='url(./img/sikao.gif)';
  for( var i = 0;i<blocks.length;i++){
      blocks[i].onclick = function(){
          if(this.hasAttribute( 'hasColor')){
              return ;
          }
      var id = this.getAttribute('id');
      if( !kaiguan ){
        this.style.background='url(./img/hei.png)';
           kaiguan= true;
             dict2 [ id ] = true;
             if(panduan(id,dict2)){
               alert('黑棋赢了!');
             }
      }
       this.setAttribute('hasColor','true');
    }
  }
}


reset.onclick=function(){
   location.reload();
};





}; 