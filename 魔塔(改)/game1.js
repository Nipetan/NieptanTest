function Game(){
	var keynum=00;
	var keynum1=0;
	
	var floor=1;
	var life=500;
	var attack=50;
	var defense=100;
	var gold=100;
	 document.getElementsByClassName('floor')[0].innerHTML=floor;

	this.maparray = [
		//1
		[
			[5,0,22,20,0,3,7,8,0,0,0,],
			[2,2,2,2,2,2,2,2,2,2,0,],
			[3,3,23,4,0,2,0,10,9,2,0,],
			[3,0,0,2,0,2,0,0,24,2,0,],
			[2,4,2,2,0,2,2,2,4,2,0,],
			[0,24,0,2,0,4,22,10,22,2,0,],
			[8,9,0,2,0,2,2,2,2,2,0,],
			[2,4,2,2,0,0,0,0,0,0,0,],
			[0,25,0,2,2,0,2,2,2,4,2,],
			[0,9,9,2,0,0,0,2,22,23,22,],
			[8,9,10,2,0,0,0,2,0,8,0,],
		],
		//2
		[
			[6,0,0,0,0,0,0,0,0,0,0,],
			[2,23,2,2,2,20,21,2,2,2,22,],
			[7,0,0,4,0,2,2,2,2,2,3,],
			[22,0,22,2,0,4,22,3,7,2,3,],
			[2,4,2,2,23,2,2,2,24,2,3,],
			[0,0,0,4,0,4,23,3,10,2,4,],
			[22,0,22,2,0,2,2,2,2,2,0,],
			[2,4,2,2,0,0,0,0,0,0,0,],
			[0,0,0,2,2,23,2,2,2,4,2,],
			[0,0,0,2,3,3,3,2,9,21,10,],
			[5,0,0,2,0,7,0,2,7,3,3,],
		],
		//3
		[
			[6,0,0,2,15,16,17,2,0,0,0,],
			[0,0,0,2,0,0,0,2,2,2,0,],
			[0,0,0,2,2,4,2,2,28,2,0,],
			[0,0,0,0,0,24,0,0,0,2,0,],
			[0,0,0,2,0,2,2,2,4,2,0,],
			[0,0,0,2,0,4,9,9,10,2,0,],
			[2,2,2,2,0,2,2,2,2,2,0,],
			[0,0,23,22,0,0,0,0,0,0,0,],
			[9,9,22,2,2,0,2,2,2,4,2,],
			[0,0,0,2,0,0,0,0,0,0,0,],
			[3,3,8,2,0,0,0,0,0,0,5,],
		],
		//4
		[
			[3,3,7,20,21,0,0,0,0,0,0,],
			[2,2,2,2,2,2,2,24,2,2,0,],
			[8,0,10,24,0,2,0,0,0,2,0,],
			[8,9,0,2,0,2,8,6,0,2,0,],
			[2,2,2,2,0,2,2,2,4,2,0,],
			[0,0,0,0,0,4,22,23,22,2,0,],
			[0,0,0,2,0,2,2,2,2,2,0,],
			[2,4,2,2,0,0,0,0,0,0,0,],
			[0,0,0,2,2,23,2,2,2,4,2,],
			[0,0,0,2,0,3,3,2,0,24,0,],
			[5,0,0,2,9,3,7,2,7,7,11,],
		],
		//5
		[
			[0,0,0,0,0,0,0,0,0,0,0,],
			[0,2,2,2,0,0,0,0,0,0,0,],
			[0,2,7,4,0,2,2,2,2,2,0,],
			[0,2,7,2,0,2,3,2,7,2,0,],
			[0,25,2,2,0,2,3,2,10,2,0,],
			[0,2,0,0,0,0,23,0,22,2,0,],
			[0,25,2,2,2,2,2,2,2,2,0,],
			[0,2,0,0,5,0,0,0,0,0,0,],
			[0,25,2,0,2,0,2,2,2,4,2,],
			[0,2,0,0,0,0,0,2,0,0,6,],
			[0,0,0,0,0,0,0,2,0,0,0,],
		],
		//6
		[
			[0,0,2,9,2,8,2,10,2,24,12,],
			[0,0,0,0,0,0,0,0,0,7,24,],
			[0,2,2,2,2,2,2,2,0,0,0,],
			[0,2,3,3,23,0,0,2,0,2,0,],
			[4,2,23,23,0,6,0,2,0,2,0,],
			[4,2,0,2,2,2,2,2,0,2,0,],
			[4,2,0,0,0,0,0,0,0,2,0,],
			[7,2,9,2,20,2,8,2,23,2,0,],
			[7,2,10,2,21,2,8,2,8,2,0,],
			[0,2,2,2,2,2,2,2,2,2,0,],
			[5,0,0,10,0,24,24,20,22,0,0,],
		],
		//7
		[
			[0,21,22,23,0,5,0,2,8,13,10,],
			[7,2,2,2,2,2,2,2,2,27,2,],
			[0,0,0,4,0,2,7,2,2,27,2,],
			[0,0,9,2,0,2,3,2,2,4,2,],
			[2,4,2,2,0,2,23,0,4,0,0,],
			[0,0,0,24,0,4,0,0,2,2,0,],
			[0,0,0,2,0,2,2,2,2,2,0,],
			[2,4,2,2,0,0,25,25,0,0,0,],
			[0,24,0,2,2,4,2,2,2,4,2,],
			[0,10,0,2,3,23,3,2,6,0,0,],
			[7,8,9,2,3,3,3,2,0,0,10,],
		],
		//8
		[
			[8,8,8,2,0,5,0,2,8,8,8,],
			[9,9,9,2,0,26,0,2,10,10,10,],
			[0,0,0,2,2,25,2,2,0,0,0,],
			[0,27,0,2,2,25,2,2,0,27,0,],
			[2,4,2,2,2,25,2,2,2,4,2,],
			[0,0,0,2,2,14,2,2,0,0,0,],
			[0,0,0,23,0,0,0,23,0,0,0,],
			[2,4,2,2,0,0,0,2,2,4,2,],
			[0,25,0,2,2,0,2,2,0,25,0,],
			[8,24,8,2,7,0,6,2,8,23,0,],
			[24,9,24,2,8,0,0,2,23,10,23,],
		],
		//9
		[
			[0,0,0,0,0,0,0,0,0,0,0,],
			[0,0,0,0,0,0,0,0,0,0,0,],
			[0,0,0,0,0,0,0,0,0,0,0,],
			[0,0,0,0,0,0,0,0,0,0,0,],
			[0,0,0,0,0,0,0,0,0,0,0,],
			[0,0,0,0,0,101,0,0,0,0,0,],
			[0,0,0,0,0,0,0,0,0,0,0,],
			[0,0,0,0,0,0,0,0,0,0,0,],
			[0,0,0,0,0,0,0,0,0,0,0,],
			[0,0,0,0,0,6,0,0,0,0,0,],
			[0,0,0,0,0,0,0,0,0,0,0,],
		],
	]
	this.createMap = function(arrayTwo){
		document.getElementsByClassName('gamebox')[0].innerHTML = ''
		for(var i =0;i<arrayTwo.length;i++){
			for(var k = 0;k<arrayTwo[i].length;k++){
				this.createdom(arrayTwo[i][k])
			}
		}
	}
	this.createdom = function(srcnum){
		
		var src = '';
		//创建节点
		if(srcnum==0){
			src='imgs/0.png'
		}
		else if(srcnum==1){
			src='imgs/1.png'
		}
		else if(srcnum==2){
			src='imgs/2.png'
		}
		else if(srcnum==3){
			src='imgs/3.png'
		}
		else if(srcnum==3){
			src='imgs/3.png'
		}
		else if(srcnum==4){
			src='imgs/4.png'
		}
		else if(srcnum==5){
			src='imgs/5.png'
		}
		else if(srcnum==6){
			src='imgs/6.png'
		}
		else if(srcnum==7){
			src='imgs/7.png'
		}
		else if(srcnum==8){
			src='imgs/8.png'
		}
		else if(srcnum==9){
			src='imgs/9.png'
		}
		else if(srcnum==10){
			src='imgs/10.png'
		}
		else if(srcnum==11){
			src='imgs/11.png'
		}
		else if(srcnum==12){
			src='imgs/12.png'
		}
		else if(srcnum==13){
			src='imgs/13.png'
		}
		else if(srcnum==14){
			src='imgs/14.png'
		}
		else if(srcnum==15){
			src='imgs/15.png'
		}
		else if(srcnum==16){
			src='imgs/16.png'
		}
		else if(srcnum==17){
			src='imgs/17.png'
		}
		else if(srcnum==20){
			src='imgs/20.png'
		}
		else if(srcnum==21){
			src='imgs/21.png'
		}
		else if(srcnum==22){
			src='imgs/22.png'
		}
		else if(srcnum==23){
			src='imgs/23.png'
		}
		else if(srcnum==24){
			src='imgs/24.png'
		}
		else if(srcnum==25){
			src='imgs/25.png'
		}
		else if(srcnum==26){
			src='imgs/26.png'
		}
		else if(srcnum==27){
			src='imgs/27.png'
		}
		else if(srcnum==28){
			src='imgs/28.png'
		}
		else if(srcnum==101){
			src='imgs/101.png'
		}
		var dom = document.createElement('img');
		dom.src = src;
		//给节点添加类名
		dom.classList.add('box');
	
		//给节点设置宽度
		dom.style.width = '50px'
		//给节点设置高度
		dom.style.height = '50px'
		//给节点设置背景颜色
		dom.style.backgroundColor = "green"
		//给节点添加浮动元素
		dom.style.float = 'left'
		//把创建的节点添加到body里面
		document.getElementsByClassName('gamebox')[0].appendChild(dom)
		
	}
	this.move = function(nowarray){
		var that = this;
		window.onkeydown = function(event){
			console.log(event)
			console.log(that.getpersonposition(nowarray)) 
			var x = that.getpersonposition(nowarray)[0];
			var y = that.getpersonposition(nowarray)[1];
			if(event.keyCode ==39){
				//向右移动
				that.moveP(x,y,x+1,y,nowarray)
			}else if(event.keyCode ==40){
				//向下移动
				that.moveP(x,y,x,y+1,nowarray)
			}else if(event.keyCode ==37){
				//向左移动
				that.moveP(x,y,x-1,y,nowarray)
			}
			else if(event.keyCode ==38){
				//向上移动
				that.moveP(x,y,x,y-1,nowarray)
			}
		}
	}
	this.gamestart = function(){
		this.createMap(this.maparray[floor-1])
		this.move(this.maparray[floor-1])
		
	}
	this.getpersonposition = function(nowarray){
		for(var i= 0;i<nowarray.length;i++){
			for(var k = 0;k<nowarray[i].length;k++){
				if(nowarray[i][k]==1){
					var position = [k,i];
					return position
				}
			}
		}
	}
	this.getupfloor = function(nowarray){
		for(var i= 0;i<nowarray.length;i++){
			for(var k = 0;k<nowarray[i].length;k++){
				if(nowarray[i][k]==6){
					var position = [k,i];
					return position
				}
			}
		}
	}
	this.getdownfloor = function(nowarray){
		for(var i= 0;i<nowarray.length;i++){
			for(var k = 0;k<nowarray[i].length;k++){
				if(nowarray[i][k]==5){
					var position = [k,i];
					return position
				}
			}
		}
	}
	
	this.setperson=function(){
		
		var floory = this.getupfloor(this.maparray[floor-1])[0];
			var floorx = this.getupfloor(this.maparray[floor-1])[1];
			var nowmap=this.maparray[floor-1];
			
			
			 if(nowmap[floorx+1][floory]==0){
			 	nowmap[floorx+1][floory]=1;
			
			 	
	          }
			 else if(nowmap[floorx][floory+1]==0){
			 	nowmap[floorx][floory+1]=1;
			 	
			 }
			 else if(nowmap[floorx-1][floory]==0){
			 	nowmap[floorx-1][floory]=1;
			 	
			 }
			 else if(nowmap[floorx][floory-1]==0){
			 	nowmap[floorx][floory-1]=1;
			 
			 }
			 
			 else{
				alert("报错");
			 }
			 
		
	}
	
	this.clearperson=function(){
		var floory = this.getpersonposition(this.maparray[floor-1])[0];
		var floorx = this.getpersonposition(this.maparray[floor-1])[1];
		var nowmap=this.maparray[floor-1];
		nowmap[floorx][floory]=0;
		//nowmap[floory+1][floorx]=4;
		
	}
	
	this.gethurt=function(monster){
		var life1;
	    var attack1;
	    var defense1;
		var hurt=0;
		
		if (monster==20){
			//小蓝怪
			life1=50;
	        attack1=120;
	        defense1=20;
			gold1=5;
			
		}else if(monster==21){
			//小红怪
			life1=60;
			attack1=130;
			defense1=30;
			gold1=10;
			
		}
		else if(monster==22){
			//小蝙蝠
			life1=70;
			attack1=140;
			defense1=40;
			gold1=20;
			
		}
		else if(monster==23){
			//巫师
			life1=80;
			attack1=150;
			defense1=50;
			gold1=40;
			
		}
		else if(monster==24){
			//小骷髅
			life1=100;
			attack1=155;
			defense1=55;
			gold1=70;
			
		}
		else if(monster==25){
			//大骷髅
			life1=120;
			attack1=160;
			defense1=55;
			gold1=100;
			
		}
		else if(monster==26){
			//骷髅老大
			alert("打赢我，公主就是你的了")
			life1=200;
			attack1=180;
			defense1=70;
			gold1=200;
			
		}
		else if(monster==27){
			//卫士
			life1=150;
			attack1=170;
			defense1=60;
			gold1=200;
			
		}
		
		
		
		while(1){
		if(attack-defense1>0){
			
			
			
			life1=life1-(attack-defense1)
			if(life1>0){
				hurt=hurt+(attack1-defense);
				if(hurt<=0){
					return 0;
				}
				
				
			}else{
				gold=gold+gold1;
				
				return hurt;
				break;
				
			}
			
			
			
		}else{
			
			return -1;
			break;
			
		}
		}
		
		
	}
	
	this.moveP = function(x,y,movetox,movetoy,nowarray){
		if(movetox>nowarray[0].length-1||movetoy>nowarray.length-1||movetox<0||movetoy<0 ){
			
		}else{
			
		
		
		if(nowarray[movetoy][movetox]==2){
			console.log('这是墙')
		}
		else if(nowarray[movetoy][movetox]==3){
			//吃钥匙
			var a = nowarray[y][x];
			nowarray[y][x] = 0;
			nowarray[movetoy][movetox] = a
			this.createMap(nowarray)
			
			keynum++;
			document.getElementsByClassName('key')[0].innerHTML=keynum;
		}
		else if(nowarray[movetoy][movetox]==4){
			//开门
			
			if(keynum==0){
				alert("小老弟，钥匙不够哇");
			}else{
			
			var a = nowarray[y][x];
			nowarray[y][x] = 0;
			nowarray[movetoy][movetox] = a
			this.createMap(nowarray)
			keynum--;	
			document.getElementsByClassName('key')[0].innerHTML=keynum;
			}
		}
		else if(nowarray[movetoy][movetox]==5){
			//上楼
			//this.clearperson();
			floor++;
          this.setperson();
           
			var game = this.gamestart()
            game;
            document.getElementsByClassName('floor')[0].innerHTML=floor;
            
			
		}
		else if(nowarray[movetoy][movetox]==6){
			//下楼
			this.clearperson();
			floor--;
			//this.setperson();
			var game = this.gamestart()
            game;
            document.getElementsByClassName('floor')[0].innerHTML=floor;
			
		}
		else if(nowarray[movetoy][movetox]==7){
			//加红血
			var a = nowarray[y][x];
			nowarray[y][x] = 0;
			nowarray[movetoy][movetox] = a
			this.createMap(nowarray)
			
			life=life+100;
			document.getElementsByClassName('life')[0].innerHTML=life;
		}
		
		else if(nowarray[movetoy][movetox]==8){
			//加蓝血
			var a = nowarray[y][x];
			nowarray[y][x] = 0;
			nowarray[movetoy][movetox] = a
			this.createMap(nowarray)
			
			life=life+200;
			document.getElementsByClassName('life')[0].innerHTML=life;
		}
		else if(nowarray[movetoy][movetox]==9){
			//红宝石
			var a = nowarray[y][x];
			nowarray[y][x] = 0;
			nowarray[movetoy][movetox] = a
			this.createMap(nowarray)
			
			attack=attack+5;
			document.getElementsByClassName('attack')[0].innerHTML=attack;
		}
		else if(nowarray[movetoy][movetox]==10){
			//蓝宝石
			var a = nowarray[y][x];
			nowarray[y][x] = 0;
			nowarray[movetoy][movetox] = a
			this.createMap(nowarray)
			
			defense=defense+6;
			document.getElementsByClassName('defense')[0].innerHTML=defense;
		}
		else if(nowarray[movetoy][movetox]==11){
			//剑
			var a = nowarray[y][x];
			nowarray[y][x] = 0;
			nowarray[movetoy][movetox] = a
			this.createMap(nowarray)
			
			attack=dattack+60;
			document.getElementsByClassName('attack')[0].innerHTML=attack;
		}
		else if(nowarray[movetoy][movetox]==12){
			//盾
			var a = nowarray[y][x];
			nowarray[y][x] = 0;
			nowarray[movetoy][movetox] = a
			this.createMap(nowarray)
			
			defense=defense+100;
			document.getElementsByClassName('defense')[0].innerHTML=defense;
		}
		else if(nowarray[movetoy][movetox]==13){
			//红钥匙
			var a = nowarray[y][x];
			nowarray[y][x] = 0;
			nowarray[movetoy][movetox] = a
			this.createMap(nowarray)
			
			keynum1=keynum1+1;
			document.getElementsByClassName('life')[0].innerHTML=keynum1;
		}
		else if(nowarray[movetoy][movetox]==14){
			//红门
			var a = nowarray[y][x];
			nowarray[y][x] = 0;
			nowarray[movetoy][movetox] = a
			this.createMap(nowarray)
			
			keynum1=keynum1-1;
			document.getElementsByClassName('life')[0].innerHTML=keynum1;
		}
		else if(nowarray[movetoy][movetox]==20||
		nowarray[movetoy][movetox]==21||
		nowarray[movetoy][movetox]==22||
		nowarray[movetoy][movetox]==23||
		nowarray[movetoy][movetox]==24||
		nowarray[movetoy][movetox]==25||
		nowarray[movetoy][movetox]==26||
		nowarray[movetoy][movetox]==27
		
		
		){
			//打小绿怪
			var hurt=this.gethurt(nowarray[movetoy][movetox]);
			alert(hurt);
			
			if(life-hurt>0 && hurt!=-1){
				life=life-hurt;								
			var a = nowarray[y][x];
			nowarray[y][x] = 0;
			nowarray[movetoy][movetox] = a
			
			this.createMap(nowarray)	
			
			document.getElementsByClassName('life')[0].innerHTML=life;
			document.getElementsByClassName('gold')[0].innerHTML=gold;
			}
			else{
				alert("小老弟打不赢呀");
			}
		}
		else if(nowarray[movetoy][movetox]==15){
			//加攻击
			var con;			
            con=confirm("这里有三个窗口，第一个加攻击力，第二个加防御力，第三个加血量。你要加攻击力+20么，花费50金币?"); //在页面上弹出对话框
            if(con==true)
			{
				if(gold>=50){
					gold=gold-50;
					attack=attack+20;				
				}else{
					alert("金币不够哦!");				
				}		
			}			            
			document.getElementsByClassName('attack')[0].innerHTML=attack;
			document.getElementsByClassName('gold')[0].innerHTML=gold;			
		}
		else if(nowarray[movetoy][movetox]==16){
			//加攻击
			var con;			
		    con=confirm("这里有三个窗口，第一个加攻击力，第二个加防御力，第三个加血量。你要加防御力+25么，花费50金币?"); //在页面上弹出对话框
		    if(con==true)
			{
				if(gold>=50){
					gold=gold-50;
					defense=defense+20;				
				}else{
					alert("金币不够哦!");				
				}		
			}			            
			document.getElementsByClassName('attack')[0].innerHTML=defense;
			document.getElementsByClassName('gold')[0].innerHTML=gold;			
		}
		else if(nowarray[movetoy][movetox]==17){
			//加攻击
			var con;			
		    con=confirm("这里有三个窗口，第一个加攻击力，第二个加防御力，第三个加血量。你要加生命值+500么，花费50金币?"); //在页面上弹出对话框
		    if(con==true)
			{
				if(gold>=50){
					gold=gold-50;
					life=life+500;				
				}else{
					alert("金币不够哦!");				
				}		
			}			            
			document.getElementsByClassName('attack')[0].innerHTML=life;
			document.getElementsByClassName('gold')[0].innerHTML=gold;			
		}
		else if(nowarray[movetoy][movetox]==101){
			//公主
					alert("我亲爱的勇士！")
					alert("你终于来到了我的身边！")
					alert("谢谢你！")
		}
			
			
		else{
			var a = nowarray[y][x];
			nowarray[y][x] = nowarray[movetoy][movetox];
			nowarray[movetoy][movetox] = a
			this.createMap(nowarray)
		}
		
		
		}
		
		
	}
}

var game = new Game();
var newperson;
newperson=game.maparray[0];
newperson[10][5]=1;//初始化任务位置
game.gamestart()

