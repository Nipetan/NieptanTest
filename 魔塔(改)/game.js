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
			[1,0,0,0,0,0,0,0,0,0,0,],
			[0,0,2,0,0,0,0,0,0,0,0,],
			[0,0,2,2,2,0,0,0,9,0,0,],
			[0,3,2,0,0,0,0,4,0,0,0,],
			[0,0,2,0,0,3,4,0,0,0,0,],
			[0,0,2,0,0,0,0,0,0,0,0,],
			[0,0,2,2,2,0,3,0,0,0,0,],
			[0,0,0,0,0,0,5,0,8,0,0,],
			[0,0,0,0,0,5,0,0,0,0,0,],
			[0,0,0,0,0,0,0,0,0,0,0,],
			[0,0,0,0,0,0,0,0,0,0,6,],
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
			[9,9,9,2,5,9,5,2,5,5,5,],
			[10,10,10,2,0,2,0,2,0,0,0,],
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
			[0,7,0,0,0,0,0,0,0,0,0,],
			[0,1,2,0,0,0,0,0,0,0,0,],
			[0,0,2,2,2,0,0,0,0,0,0,],
			[0,3,2,0,0,0,0,4,0,0,0,],
			[0,0,2,0,0,3,4,0,0,0,0,],
			[0,0,2,0,8,0,0,0,0,0,0,],
			[0,0,2,2,2,0,3,0,0,0,0,],
			[0,0,0,0,0,0,5,0,9,0,0,],
			[0,0,0,0,0,5,0,0,0,0,0,],
			[0,0,0,0,10,0,0,0,0,0,0,],
			[0,6,0,0,0,0,0,0,0,0,0,],
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
			[0,0,0,0,0,0,0,0,0,7,0,],
			[0,0,2,0,0,0,12,0,0,1,0,],
			[0,0,2,2,2,0,0,0,0,0,0,],
			[0,3,2,0,0,0,0,4,0,0,0,],
			[0,0,2,0,0,3,4,0,0,0,0,],
			[0,10,0,0,8,0,0,0,12,0,0,],
			[0,0,2,2,2,0,3,0,0,0,3,],
			[0,9,13,0,11,0,5,0,9,0,0,],
			[0,0,0,0,0,5,0,0,0,0,0,],
			[0,2,0,14,10,0,0,0,6,2,0,],
			[0,2,0,0,0,0,0,0,0,0,0,],
		],
		[
			[0,0,0,0,1,0,0,0,0,3,0,],
			[0,0,2,0,7,0,0,0,0,0,0,],
			[0,0,2,2,2,0,0,0,0,0,0,],
			[0,3,2,0,0,0,0,4,0,0,0,],
			[0,0,2,0,0,3,4,0,0,0,0,],
			[0,10,0,0,8,0,0,0,0,0,0,],
			[0,4,2,2,2,0,3,0,0,0,3,],
			[0,4,0,0,0,0,5,0,5,0,0,],
			[0,5,0,0,0,4,0,0,0,0,0,],
			[0,5,0,0,9,0,0,0,6,2,0,],
			[0,2,0,0,0,0,10,0,0,0,0,],
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
				//处理药代码
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				this.dy()
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
			else if(nowarray[movetoy][movetox]==10){
				//处理蓝宝石
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				this.sapphire(x,y,movetox,movetoy,nowarray)
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
	this.dy = function(){
		this.hero.hp+=100;
		document.getElementsByClassName('hp')[0].innerHTML = this.hero.hp
	}
	this.moster1 = function(x,y,movetox,movetoy,nowarray){
		var moster1Hp = 100;
		var moster1atk = 150;
		var moster1atkbg = 50;
		var hurtHero = this.hero.atk - moster1atkbg;
		var hurtMoster = moster1atk - this.hero.atkbg;
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
		if(this.hero.atk>moster2atkbg){
			while(this.hero.hp>0 && moster2Hp>0)
			{
				if(this.hero.hp<=0){
					/*alert("you dead")
					nowarray[y][x] = 0;
					nowarray[this.hero.floory][this.hero.floorx] = 1
					this.gamestart()*/
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
	this.sapphire = function(){
		this.hero.atkbg+=3;
		document.getElementsByClassName('atkbg')[0].innerHTML = this.hero.atkbg
	}
}
var game = new Game();
game.gamestart()
