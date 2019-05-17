function Game(){
	this.hero = {
		yellowkeynum:0,
		bluekeynum:0,
		redkeynum:0,
		hp:100,
		atk:100,
		atkbg:100,
		floor:1,
		floorx : null,
		floory : null
	}
	this.maparray = [
		[
			[6,0,15,16,15,0,0,0,3,0,0],
			[2,2,2,2,2,2,2,2,2,2,0],
			[21,0,0,8,0,2,9,3,0,2,0],
			[0,17,0,2,0,2,10,21,0,2,0],
			[2,8,2,2,0,2,2,2,8,2,0],
			[3,0,0,2,0,8,19,18,19,2,0],
			[0,5,0,2,0,2,2,2,2,2,0],
			[2,8,2,2,0,0,0,0,0,0,0],
			[0,0,0,2,2,8,2,2,2,8,2],
			[21,0,3,2,0,0,3,2,0,19,0],
			[21,0,3,2,0,1,0,2,15,4,15],
		],
		[
			[0,11,0,2,10,0,10,2,0,0,0,],
			[3,0,4,2,9,0,9,2,4,0,3,],
			[0,0,0,2,0,5,0,2,0,10,0,],
			[2,8,2,2,2,0,2,2,2,8,2,],
			[0,0,0,8,0,0,0,0,0,0,0,],
			[0,0,0,2,2,2,2,2,2,2,2,],
			[0,0,3,0,0,0,0,0,0,0,0,],
			[8,2,2,8,2,2,2,8,2,2,8,],
			[0,2,0,10,0,2,9,12,4,2,0,],
			[0,2,9,0,3,2,0,0,0,2,1,],
			[6,2,3,9,0,2,0,0,0,2,7,],
		],
		[
			[3,10,2,3,4,3,2,0,2,0,21],
			[0,21,2,4,3,4,2,0,8,19,0],
			[18,0,2,3,11,3,2,0,2,2,2],
			[8,2,2,2,0,2,2,0,2,0,0],
			[0,0,19,0,0,0,15,0,0,0,0],
			[8,2,2,0,0,0,2,0,2,2,2],
			[17,0,2,2,0,2,2,0,2,0,21],
			[0,3,2,0,0,0,2,0,8,18,3],
			[21,9,2,0,0,0,2,0,2,2,2],
			[2,2,2,2,0,2,2,16,2,0,0],
			[7,1,0,0,0,0,2,0,8,0,6]
		],
		[
			[0,11,0,2,0,0,0,2,0,0,0],
			[21,0,3,2,0,0,0,2,3,0,4],
			[0,0,0,2,0,0,0,2,0,5,0],
			[2,8,2,2,2,13,2,2,2,8,2],
			[0,18,0,8,0,16,0,0,17,0,0],
			[0,0,0,2,2,2,2,2,2,2,2],
			[16,0,15,0,0,0,0,0,0,0,0],
			[8,2,2,8,2,2,2,8,2,2,8],
			[0,2,0,19,0,2,0,18,0,2,0],
			[0,2,15,0,3,2,9,0,21,2,1],
			[6,2,3,15,3,2,0,15,0,2,7]
		],
		[
			[7,2,3,3,2,0,18,0,3,15,0],
			[1,2,3,3,2,0,2,2,2,2,8],
			[0,2,2,16,2,0,2,21,0,17,0],
			[0,8,8,0,8,0,2,4,0,0,19],
			[0,2,2,2,2,0,2,2,2,2,2],
			[0,0,16,18,0,3,0,17,5,0,0],
			[2,2,2,2,2,0,2,2,2,2,0],
			[18,0,0,9,2,0,8,8,0,8,0],
			[0,19,0,10,2,0,2,2,16,2,16],
			[8,2,2,2,2,0,2,0,0,2,0],
			[0,15,0,0,17,0,2,21,21,2,6]
		],
		[
			[9,9,9,2,5,9,5,2,5,5,5,],
			[10,10,10,2,0,0,0,2,0,0,0,],
			[0,0,0,2,28,0,27,2,0,0,25,],
			[8,2,2,2,2,8,2,2,2,2,8,],
			[0,0,0,8,0,27,0,2,5,0,0,],
			[8,2,2,2,0,0,27,8,0,10,0,],
			[3,3,0,2,0,0,0,2,3,0,9,],
			[3,11,28,2,2,2,2,2,13,2,8,],
			[2,2,8,2,2,2,2,2,26,0,27,],
			[2,2,8,2,5,3,5,2,2,0,2,],
			[6,0,0,10,0,0,0,10,0,1,7,],
		],
		[
			[10,10,10,2,0,0,8,5,0,3,11,],
			[10,10,10,2,0,0,2,0,0,0,5,],
			[28,28,28,2,8,2,2,2,2,2,0,],
			[2,14,2,2,0,0,2,0,0,2,0,],
			[0,0,0,2,0,0,8,0,0,2,0,],
			[0,0,0,2,2,2,2,0,0,2,0,],
			[0,26,0,0,0,0,8,0,0,2,0,],
			[2,13,2,2,2,2,2,2,2,2,0,],
			[5,5,5,10,8,0,0,0,0,10,0,],
			[3,9,5,10,2,1,2,2,8,2,0,],
			[4,3,5,10,2,7,2,5,0,2,6,],
		],
		[
			[7,0,8,8,0,6,0,2,3,0,3],
			[1,0,2,2,0,0,15,2,0,12,0],
			[8,2,2,2,2,8,2,2,4,0,21],
			[0,2,3,3,3,0,0,2,2,13,2],
			[21,2,2,2,2,2,18,2,0,20,0],
			[0,16,15,16,0,2,0,2,0,0,0],
			[2,2,2,2,8,2,19,2,2,8,2],
			[0,0,0,19,0,17,0,18,0,0,0],
			[8,2,2,2,2,2,2,2,2,2,8],
			[15,0,2,9,3,2,11,21,2,0,17],
			[0,19,13,3,10,2,3,0,8,5,0]
		],
		[
			[0,0,17,8,0,7,0,8,15,0,21],
			[0,3,0,2,0,1,0,2,0,15,0],
			[5,2,2,2,2,13,2,2,2,2,0],
			[0,3,0,2,3,0,3,8,8,0,0],
			[10,0,19,8,0,9,0,2,2,2,2],
			[2,2,2,2,2,2,16,2,0,0,5],
			[3,0,8,5,3,2,0,2,40,2,0],
			[5,0,2,0,0,2,0,2,2,2,8],
			[8,2,2,2,8,2,0,2,3,0,18],
			[0,21,2,0,17,2,19,2,0,17,0],
			[6,0,13,0,0,8,0,8,18,0,21]
		],
		[
			[0,0,0,0,0,33,0,0,0,0,0],
			[2,2,2,2,0,0,0,2,2,2,2,],
			[17,17,17,2,2,0,2,2,17,17,17],
			[0,5,0,13,30,31,32,13,0,5,0],
			[2,2,2,2,34,35,36,2,2,2,2],
			[17,10,17,2,0,0,0,2,17,9,17],
			[0,5,0,2,2,0,2,2,0,5,0],
			[0,0,0,2,2,0,2,2,0,0,0],
			[8,2,8,2,2,14,2,2,8,2,8],
			[1,2,0,2,0,0,0,2,0,2,0],
			[7,2,0,18,0,0,0,18,0,2,4]	
		]
	]
	
	this.createMap = function(arrayTwo){
		document.getElementsByClassName('gamebox')[0].innerHTML = ''
		for(var i =0;i<arrayTwo.length;i++){
			for(var k = 0;k<arrayTwo[i].length;k++){
				//动态创建节点
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
		else if(srcnum==18){
			src='imgs/18.png'
		}
		else if(srcnum==19){
			src='imgs/19.png'
		}
		else if(srcnum==20){
			src='imgs/20.png'
		}
		else if(srcnum==21){
			src='imgs/21.png'
		}
		else if(srcnum==26){
			src='imgs/26.png'
		}
		else if(srcnum==25){
			src='imgs/25.png'
		}
		else if(srcnum==27){
			src='imgs/27.png'
		}
		else if(srcnum==28){
			src='imgs/28.png'
		}
		else if(srcnum==30){
			src='imgs/30.png'
		}
		else if(srcnum==31){
			src='imgs/31.png'
		}
		else if(srcnum==32){
			src='imgs/32.png'
		}
		else if(srcnum==33){
			src='imgs/33.png'
		}
		else if(srcnum==34){
			src='imgs/34.png'
		}
		else if(srcnum==35){
			src='imgs/35.png'
		}
		else if(srcnum==36){
			src='imgs/36.png'
		}
		else if(srcnum==40){
			src='imgs/40.png'
		}
		else if(srcnum==41){
			src='imgs/41.png'
		}
		var dom = document.createElement('img');
		dom.src = src;
		dom.classList.add('box');
		dom.style.width = '50px'
		dom.style.height = '50px'
		dom.style.backgroundColor = "green"
		dom.style.float = 'left'
		//把创建的节点添加到body里面
		document.getElementsByClassName('gamebox')[0].appendChild(dom)
		
	}
	this.move = function(nowarray){
		var that = this;
		window.onkeydown = function(event){
			
			var x = that.getpersonposition(nowarray)[0];
			var y = that.getpersonposition(nowarray)[1]
			if(event.keyCode ==39){
				//向右移动
				that.moveP(x,y,x+1,y,nowarray) 
				if(srcnum==0){
					src='imgs/right.jpg'
				}
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
		
		this.createMap(this.maparray[this.hero.floor-1])
		this.move(this.maparray[this.hero.floor-1])
		this.hero.floorx = this.getpersonposition(this.maparray[this.hero.floor-1])[0]
		this.hero.floory = this.getpersonposition(this.maparray[this.hero.floor-1])[1]
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
	this.moveP = function(x,y,movetox,movetoy,nowarray){
		if(movetox>nowarray[0].length-1||movetoy>nowarray.length-1||movetox<0||movetoy<0){
			console.log("到达边界")
		}else {
			if(nowarray[movetoy][movetox]==2){
				console.log('这是墙')
			}else if(nowarray[movetoy][movetox]==3){
				//处理黄钥匙代码
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				this.yellowkeynumchange()
			}
			else if(nowarray[movetoy][movetox]==4){
				//处理蓝药代码
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				this.bluebottle()
			}
			else if(nowarray[movetoy][movetox]==21){
				//处理红药代码
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				this.redbottle()
			}
			else if(nowarray[movetoy][movetox]==5){
				//处理怪物1
				this.moster1(x,y,movetox,movetoy,nowarray)
			}
			else if(nowarray[movetoy][movetox]==25){
				//处理怪物2
				this.moster2(x,y,movetox,movetoy,nowarray)
			}
			else if(nowarray[movetoy][movetox]==26){
				//处理怪物3
				this.moster3(x,y,movetox,movetoy,nowarray)
			}
			else if(nowarray[movetoy][movetox]==27){
				//处理怪物4
				this.moster4(x,y,movetox,movetoy,nowarray)
			}
			else if(nowarray[movetoy][movetox]==28){
				//处理怪物5
				this.moster5(x,y,movetox,movetoy,nowarray)
			}
			else if(nowarray[movetoy][movetox]==15){
				//处理怪物6
				this.moster6(x,y,movetox,movetoy,nowarray)
			}
			else if(nowarray[movetoy][movetox]==16){
				//处理怪物7
				this.moster7(x,y,movetox,movetoy,nowarray)
			}
			else if(nowarray[movetoy][movetox]==17){
				//处理怪物8
				this.moster8(x,y,movetox,movetoy,nowarray)
			}
			else if(nowarray[movetoy][movetox]==18){
				//处理怪物9
				this.moster9(x,y,movetox,movetoy,nowarray)
			}
			else if(nowarray[movetoy][movetox]==19){
				//处理怪物10
				this.moster10(x,y,movetox,movetoy,nowarray)
			}
			else if(nowarray[movetoy][movetox]==20){
				//处理怪物11
				this.moster11(x,y,movetox,movetoy,nowarray)
			}
			else if(nowarray[movetoy][movetox]==35){
				//处理boss
				this.boss(x,y,movetox,movetoy,nowarray)
			}
			else if(nowarray[movetoy][movetox]==6){
				//处理上楼
				this.upstairs(x,y,movetox,movetoy,nowarray)
			}
			else if(nowarray[movetoy][movetox]==7){
				//处理下楼
				this.downstairs(x,y,movetox,movetoy,nowarray)
			}
			else if(nowarray[movetoy][movetox]==8){
				//处理黄门
				this.yellowdoors(x,y,movetox,movetoy,nowarray)
			}
			else if(nowarray[movetoy][movetox]==13){
				//处理蓝门
				this.bluedoors(x,y,movetox,movetoy,nowarray)
			}
			else if(nowarray[movetoy][movetox]==14){
				//处理红门
				this.reddoors(x,y,movetox,movetoy,nowarray)
			}
			else if(nowarray[movetoy][movetox]==9){
				//处理红宝石
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				this.ruby(x,y,movetox,movetoy,nowarray)
			}
			else if(nowarray[movetoy][movetox]==41){
				//处理武器
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				this.weapon(x,y,movetox,movetoy,nowarray)
			}
			else if(nowarray[movetoy][movetox]==10){
				//处理蓝宝石
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				this.sapphire(x,y,movetox,movetoy,nowarray)
			}
			else if(nowarray[movetoy][movetox]==40){
				//处理防具
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				this.armor(x,y,movetox,movetoy,nowarray)
			}
			else if(nowarray[movetoy][movetox]==11){
				//处理蓝钥匙代码
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				this.bluekeynumchange()
			}
			else if(nowarray[movetoy][movetox]==12){
				//处理红钥匙代码
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				this.redkeynumchange()
			}
			else if(nowarray[movetoy][movetox]==33){
				//处理公主代码
				alert("恭喜通关！")
			}
			else{
				this.changepositon(x,y,movetox,movetoy,nowarray)
			}
		}
		
	}
	this.changepositon = function(x,y,movetox,movetoy,nowarray){
		var a = nowarray[y][x];
		nowarray[y][x] = nowarray[movetoy][movetox];
		nowarray[movetoy][movetox] = a
		this.createMap(nowarray)
	}
	this.yellowkeynumchange = function(){
		this.hero.yellowkeynum++;
		document.getElementsByClassName('yellowkeynum')[0].innerHTML = this.hero.yellowkeynum
	}
	this.bluekeynumchange = function(){
		this.hero.bluekeynum++;
		document.getElementsByClassName('bluekeynum')[0].innerHTML = this.hero.bluekeynum
	}
	this.redkeynumchange = function(){
		this.hero.redkeynum++;
		document.getElementsByClassName('redkeynum')[0].innerHTML = this.hero.redkeynum
	}
	this.bluebottle = function(){
		this.hero.hp+=100;
		document.getElementsByClassName('hp')[0].innerHTML = this.hero.hp
	}
	this.redbottle = function(){
		this.hero.hp+=500;
		document.getElementsByClassName('hp')[0].innerHTML = this.hero.hp
	}
	this.moster1 = function(x,y,movetox,movetoy,nowarray){
		var moster1Hp = 100;
		var moster1atk = 150;
		var moster1atkbg = 50;
		var hurtHero = this.hero.atk - moster1atkbg;
		var hurtMoster = moster1atk - this.hero.atkbg;
		/*var hurtMoster;
		var flag = moster1atk - this.hero.atkbg;
		if((flag>0) {
			hurtMoster = flag;
		}
		esle {
			hurtMoster = 0;
		}*/
		if(this.hero.atk>moster1atkbg){
			while(this.hero.hp>0 && moster1Hp>0)
			{
				if(this.hero.hp<=0){
					/*alert("you dead")
					nowarray[y][x] = 0;
					nowarray[this.hero.floory][this.hero.floorx] = 1
					this.gamestart()*/
					break;
				}
				moster1Hp-=hurtHero;
				if(moster1Hp<=0){
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				document.getElementsByClassName('hp')[0].innerHTML = this.hero.hp
				break;
				}
				this.hero.hp-=hurtMoster;
			}
			
		}
		
	}
	this.moster2 = function(x,y,movetox,movetoy,nowarray){
		var moster2Hp = 150;
		var moster2atk = 50;
		var moster2atkbg = 50;
		var hurtHero = this.hero.atk - moster2atkbg;
		var hurtMoster = moster2atk - this.hero.atkbg;
		/*var hurtMoster;
		var flag = moster2atk - this.hero.atkbg;
		if((flag>0) {
			hurtMoster = flag;
		}
		esle {
			hurtMoster = 0;
		}*/
		if(this.hero.atk>moster2atkbg){
			while(this.hero.hp>0 && moster2Hp>0)
			{
				if(this.hero.hp<=0){
					break;
				}
				moster2Hp-=hurtHero;
				if(moster2Hp<=0){
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				document.getElementsByClassName('hp')[0].innerHTML = this.hero.hp
				break;
				}
				this.hero.hp-=hurtMoster;
			}
			
		}
		
	}
	this.moster3 = function(x,y,movetox,movetoy,nowarray){
		var moster3Hp = 300;
		var moster3atk = 110;
		var moster3atkbg = 70;
		var hurtHero = this.hero.atk - moster3atkbg;
		var hurtMoster = moster3atk - this.hero.atkbg;
		/*var hurtMoster;
		var flag = moster3atk - this.hero.atkbg;
		if((flag>0) {
			hurtMoster = flag;
		}
		esle {
			hurtMoster = 0;
		}*/
		if(this.hero.atk>moster3atkbg){
			while(this.hero.hp>0 && moster3Hp>0)
			{
				if(this.hero.hp<=0){
					/*alert("you dead")
					nowarray[y][x] = 0;
					nowarray[this.hero.floory][this.hero.floorx] = 1
					this.gamestart()*/
					break;
				}
				moster3Hp-=hurtHero;
				if(moster3Hp<=0){
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				document.getElementsByClassName('hp')[0].innerHTML = this.hero.hp
				break;
				}
				this.hero.hp-=hurtMoster;
			}
			
		}
		
	}
	this.moster4 = function(x,y,movetox,movetoy,nowarray){
		var moster4Hp = 400;
		var moster4atk = 210;
		var moster4atkbg = 80;
		var hurtHero = this.hero.atk - moster4atkbg;
		var hurtMoster = moster4atk - this.hero.atkbg;
		/*var hurtMoster;
		var flag = moster4atk - this.hero.atkbg;
		if((flag>0) {
			hurtMoster = flag;
		}
		esle {
			hurtMoster = 0;
		}*/
		if(this.hero.atk>moster4atkbg){
			while(this.hero.hp>0 && moster4Hp>0)
			{
				if(this.hero.hp<=0){
					/*alert("you dead")
					nowarray[y][x] = 0;
					nowarray[this.hero.floory][this.hero.floorx] = 1
					this.gamestart()*/
					break;
				}
				moster4Hp-=hurtHero;
				if(moster4Hp<=0){
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				document.getElementsByClassName('hp')[0].innerHTML = this.hero.hp
				break;
				}
				this.hero.hp-=hurtMoster;
			}
			
		}
		
	}
	this.moster5 = function(x,y,movetox,movetoy,nowarray){
		var moster5Hp = 1100;
		var moster5atk = 300;
		var moster5atkbg = 170;
		var hurtHero = this.hero.atk - moster5atkbg;
		var hurtMoster = moster5atk - this.hero.atkbg;
		/*var hurtMoster;
		var flag = moster5atk - this.hero.atkbg;
		if((flag>0) {
			hurtMoster = flag;
		}
		esle {
			hurtMoster = 0;
		}*/
		if(this.hero.atk>moster5atkbg){
			while(this.hero.hp>0 && moster5Hp>0)
			{
				if(this.hero.hp<=0){
					/*alert("you dead")
					nowarray[y][x] = 0;
					nowarray[this.hero.floory][this.hero.floorx] = 1
					this.gamestart()*/
					break;
				}
				moster5Hp-=hurtHero;
				if(moster5Hp<=0){
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				document.getElementsByClassName('hp')[0].innerHTML = this.hero.hp
				break;
				}
				this.hero.hp-=hurtMoster;
			}
			
		}
		
	}
	this.moster6 = function(x,y,movetox,movetoy,nowarray){
		var moster6Hp = 80;
		var moster6atk = 8;
		var moster6atkbg = 5;
		var hurtHero = this.hero.atk - moster6atkbg;
		var hurtMoster = moster6atk - this.hero.atkbg;
		/*var hurtMoster;
		var flag = moster6atk - this.hero.atkbg;
		if((flag>0) {
			hurtMoster = flag;
		}
		esle {
			hurtMoster = 0;
		}*/
		if(this.hero.atk>moster6atkbg){
			while(this.hero.hp>0 && moster6Hp>0)
			{
				if(this.hero.hp<=0){
					break;
				}
				moster6Hp-=hurtHero;
				if(moster6Hp<=0){
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				document.getElementsByClassName('hp')[0].innerHTML = this.hero.hp
				break;
				}
				this.hero.hp-=hurtMoster;
			}
			
		}
		
	}
	this.moster7 = function(x,y,movetox,movetoy,nowarray){
		var moster7Hp = 50;
		var moster7atk = 5;
		var moster7atkbg = 3;
		var hurtHero = this.hero.atk - moster7atkbg;
		var hurtMoster = moster7atk - this.hero.atkbg;	
		/*var hurtMoster;
		var flag = moster7atk - this.hero.atkbg;
		if((flag>0) {
			hurtMoster = flag;
		}
		esle {
			hurtMoster = 0;
		}*/
		if(this.hero.atk>moster7atkbg){
			while(this.hero.hp>0 && moster7Hp>0)
			{
				if(this.hero.hp<=0){
					break;
				}
				moster7Hp-=hurtHero;
				if(moster7Hp<=0){
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				document.getElementsByClassName('hp')[0].innerHTML = this.hero.hp
				break;
				}
				this.hero.hp-=hurtMoster;
			}
			
		}
		
	}
	this.moster8 = function(x,y,movetox,movetoy,nowarray){
		var moster8Hp = 200;
		var moster8atk = 25;
		var moster8atkbg = 20;
		var hurtHero = this.hero.atk - moster8atkbg;
		var hurtMoster = moster8atk - this.hero.atkbg;
		/*var hurtMoster;
		var flag = moster8atk - this.hero.atkbg;
		if((flag>0) {
			hurtMoster = flag;
		}
		esle {
			hurtMoster = 0;
		}*/
		if(this.hero.atk>moster8atkbg){
			while(this.hero.hp>0 && moster8Hp>0)
			{
				if(this.hero.hp<=0){
					break;
				}
				moster8Hp-=hurtHero;
				if(moster8Hp<=0){
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				document.getElementsByClassName('hp')[0].innerHTML = this.hero.hp
				break;
				}
				this.hero.hp-=hurtMoster;
			}
			
		}
		
	}
	this.moster9 = function(x,y,movetox,movetoy,nowarray){
		var moster9Hp = 150;
		var moster9atk = 20;
		var moster9atkbg = 10;
		var hurtHero = this.hero.atk - moster9atkbg;
		var hurtMoster = moster9atk - this.hero.atkbg;
		/*var hurtMoster;
		var flag = moster9atk - this.hero.atkbg;
		if((flag>0) {
			hurtMoster = flag;
		}
		esle {
			hurtMoster = 0;
		}*/
		if(this.hero.atk>moster9atkbg){
			while(this.hero.hp>0 && moster9Hp>0)
			{
				if(this.hero.hp<=0){
					break;
				}
				moster9Hp-=hurtHero;
				if(moster9Hp<=0){
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				document.getElementsByClassName('hp')[0].innerHTML = this.hero.hp
				break;
				}
				this.hero.hp-=hurtMoster;
			}
			
		}
		
	}
	this.moster10 = function(x,y,movetox,movetoy,nowarray){
		var moster10Hp = 100;
		var moster10atk = 20;
		var moster10atkbg = 5;
		var hurtHero = this.hero.atk - moster10atkbg;
		var hurtMoster = moster10atk - this.hero.atkbg;
		/*var hurtMoster;
		var flag = moster10atk - this.hero.atkbg;
		if((flag>0) {
			hurtMoster = flag;
		}
		esle {
			hurtMoster = 0;
		}*/
		if(this.hero.atk>moster10atkbg){
			while(this.hero.hp>0 && moster10Hp>0)
			{
				if(this.hero.hp<=0){
					break;
				}
				moster10Hp-=hurtHero;
				if(moster10Hp<=0){
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				document.getElementsByClassName('hp')[0].innerHTML = this.hero.hp
				break;
				}
				this.hero.hp-=hurtMoster;
			}
			
		}
		
	}
	this.moster11 = function(x,y,movetox,movetoy,nowarray){
		var moster11Hp = 2100;
		var moster11atk = 220;
		var moster11atkbg = 100;
		var hurtHero = this.hero.atk - moster11atkbg;
		var hurtMoster = moster11atk - this.hero.atkbg;
		/*var hurtMoster;
		var flag = moster11atk - this.hero.atkbg;
		if((flag>0) {
			hurtMoster = flag;
		}
		esle {
			hurtMoster = 0;
		}*/
		if(this.hero.atk>moster11atkbg){
			while(this.hero.hp>0 && moster11Hp>0)
			{
				if(this.hero.hp<=0){
					break;
				}
				moster11Hp-=hurtHero;
				if(moster11Hp<=0){
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				document.getElementsByClassName('hp')[0].innerHTML = this.hero.hp
				break;
				}
				this.hero.hp-=hurtMoster;
			}
			
		}
		
	}
	this.boss = function(x,y,movetox,movetoy,nowarray){
		var bossHp = 100;
		var bossatk = 40;
		var bossatkbg = 30;
		var hurtHero = this.hero.atk - bossatkbg;
		var hurtMoster = bossatk - this.hero.atkbg;
		/*var hurtMoster;
		var flag = bossatk - this.hero.atkbg;
		if((flag>0) {
			hurtMoster = flag;
		}
		esle {
			hurtMoster = 0;
		}*/
		if(this.hero.atk>bossatkbg){
			while(this.hero.hp>0 && bossHp>0)
			{
				if(this.hero.hp<=0){
					break;
				}
				bossHp-=hurtHero;
				if(bossHp<=0){
				nowarray[movetoy][movetox] = 0;
				nowarray[movetoy][movetox+1] = 0;
				nowarray[movetoy][movetox-1] = 0;
				nowarray[movetoy-1][movetox-1] = 0;
				nowarray[movetoy-1][movetox] = 0;
				nowarray[movetoy-1][movetox+1] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				document.getElementsByClassName('hp')[0].innerHTML = this.hero.hp
				break;
				}
				this.hero.hp-=hurtMoster;
			}
			
		}
		
	}
	this.upstairs = function(){
		this.hero.floor++
		this.gamestart()
		document.getElementsByClassName('floor')[0].innerHTML = this.hero.floor
	}
	this.downstairs = function(){
		this.hero.floor--
		this.gamestart()
		document.getElementsByClassName('floor')[0].innerHTML = this.hero.floor
	}
	this.yellowdoors = function(x,y,movetox,movetoy,nowarray){
		if(this.hero.yellowkeynum>0){
		nowarray[movetoy][movetox] = 0;
		this.changepositon(x,y,movetox,movetoy,nowarray)
		this.hero.yellowkeynum--;
		document.getElementsByClassName('yellowkeynum')[0].innerHTML = this.hero.yellowkeynum
		}
	}
	this.bluedoors = function(x,y,movetox,movetoy,nowarray){
		if(this.hero.bluekeynum>0){
		nowarray[movetoy][movetox] = 0;
		this.changepositon(x,y,movetox,movetoy,nowarray)
		this.hero.bluekeynum--;
		document.getElementsByClassName('bluekeynum')[0].innerHTML = this.hero.bluekeynum
		}
	}
	this.reddoors = function(x,y,movetox,movetoy,nowarray){
		if(this.hero.redkeynum>0){
		nowarray[movetoy][movetox] = 0;
		this.changepositon(x,y,movetox,movetoy,nowarray)
		this.hero.redkeynum--;
		document.getElementsByClassName('redkeynum')[0].innerHTML = this.hero.redkeynum
		}
	}
	this.ruby = function(){
		this.hero.atk+=3;
		document.getElementsByClassName('atk')[0].innerHTML = this.hero.atk
	}
	this.weapon = function(){
		this.hero.atk+=100;
		document.getElementsByClassName('atk')[0].innerHTML = this.hero.atk
	}
	this.sapphire = function(){
		this.hero.atkbg+=3;
		document.getElementsByClassName('atkbg')[0].innerHTML = this.hero.atkbg
	}
	this.armor = function(){
		this.hero.atkbg+=100;
		document.getElementsByClassName('atkbg')[0].innerHTML = this.hero.atkbg
	}
}
var game = new Game();
game.gamestart()
