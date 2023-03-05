// ==UserScript==
// @name         学学学
// @namespace    http://tampermonkey.net/
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAMSSURBVDhPbZNJaBRBFIarJ8lk0UmcJTFuKCJ6iIJGUIILirghoqBiDkLwEBQVXAhRQUUjuIAK6sHoRRF3CEQQURBBEDyIGxJxi2J6Jt3Ts3XPTHdnMun6fVWTnLSheI/u/r/313tVzGKhg0kWMjUWcnUWtHUWcv636LszyPwitzVfxE0qYVNoWYaFUwkWRpSF+CDFf1cIMVYHrW460q076b9yDDCFG75qWEp9igm6EEeVoBdVKMpcxKDMVV89V1mAD/ir+XD/b55q38OTm7d5ZudxrrHxrgDYopIQxRTphFYQMaWeYq2ohmhZLYyV61CMGxCPxzlPrN5I7sod6WAMUBKHSRwmIUMsPAXJ1jbkb90FLwzDGxkBJ8Dw934erQqAHIwCSpUJEKFYJ8Wptnbk7z4g8T1kL1xB9vxFeLkcigMqAX7y/OVucuAngBImB1RZiRBgHNSKGuTvPITd85iEV2GR2Dp5BubhEyi8/QhjzQYq4ONG81LoNY1jDiJQ2Xiu1tRi6N0H2Pd7YB47DfthDzIHOpG72o3cjVuwzl3AH3JXcltFWwiOOQgStZy7L19h6PUbJLe3YSQ6CGP9Zgy9fY/Mvg4UPn+BWhmQWxQAsW1RnGlKvaMS1Tx+SvQH8RXU7WgM6YOdyN++h9y1m7Af9SJ7pbtUvUxMp3RmJGCQVTr6rCahRf76TaR275d5vHk5vGwemY5OFPr6YJ0ete8bBYw5iDHm5M5fkiJjayvcZy9Q1DTozUvku8yBI3DIQeH9RzkdMWYBiFHjdYUAuj9kF7/9oBl7XJ/bIu0P06i0OQvlzJ2nz5HYtEXC0u17R5s4gRxESoDEghaXk9izsp42s5kXjYTshTZ/MXdfvJR5csdObnadlbl5oourZQFPZZV0lIMuy63dmMKvARQ+9XF96my4vU/AczbSbbuQWLUBnpFC8etPxOctgtVxFDyThdP7hJvL1iLNgmmW8TceSldOsvSqia6u0HUuCznxqkZHr5lCV3ico1eEHT0wzYlPmOGIfsUrIna8YbabmdxkWeUNh/4CLOKGDB5Kaf8AAAAASUVORK5CYII=
// @version      0.0.2
// @description  学学学学学学学学学学
// @author       H
// @match        https*://mooc1.chaoxing.com/mycourse/studentstudy*
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @downloadURL  https://raw.githubusercontent.com/X-ing-Ci/study-study/main/study.js
// @updateURL    https://raw.githubusercontent.com/X-ing-Ci/study-every-day/main/study.js
// @noframes
// ==/UserScript==


//==脚本系统操作==
function deleteAllVar(){
    while(GM_listValues().length > 0){
        GM_deleteValue(GM_listValues()[0]);
    }
    console.log("变量已清空！");
}
function deleteVar(varname){
    GM_deleteValue(varname);
    console.log("删除了一个变量：" + varname);
}
function setVar(varname, vardata){
    GM_setValue(varname, vardata);
    console.log("设置了一个变量：\n" + varname + " => " + vardata);
}
function showAllVar() {
    var all_value="";
    for (var i = -1; i <= GM_listValues().length; i++) {
        if (i == -1) {
            all_value += "\n=========这里是储存的变量=========\n\n";
        } else if (i == GM_listValues().length) {
            all_value += "\n=========/这里是储存的变量=========";
        } else {
            all_value += GM_listValues()[i]+"："+GM_getValue(GM_listValues()[i])+"\n";
        }
    }
    console.log(all_value);
}
//删除所有变量
//deleteAllVar();

//删除变量
//deleteVar("news_goals");

//设置变量
//setVar("date", "2022-12-25");

//输出所有储存的变量
showAllVar();

//绑定到控制台
unsafeWindow.deleteAllVar = deleteAllVar;
unsafeWindow.deleteVar = deleteVar;
unsafeWindow.setVar = setVar;
unsafeWindow.showAllVar = showAllVar;
//==/脚本系统操作==


//==变量区==
const currentUrl = window.location.href;
//==/变量区==


//==函数区==

//随机数
function random(min, max){
    return parseInt(Math.random()*(max-min+1)+min,10);
}

//等待执行
function justWait(min, max, log = true){
    var waitmsg,waittime;
    if (max == 0) {
        waittime = min;
        waitmsg = "==等待了："+(waittime / 1000)+" 秒==";
    } else {
        waittime = random(min, max);
        waitmsg = "==随机等待了："+(waittime / 1000)+" 秒==";
    }
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (log) {
                console.log(waitmsg);
            }
            resolve();
        }, waittime);
    });
}
//==/函数区==


//==开始==
if (currentUrl.indexOf("/studentstudy") != -1) {
    console.log("视频页");
    while (true) {
        if (document.querySelector("div.posCatalog_select")) {
            break;
        }
        await justWait(1000, 0);
    }
    GM_setValue("watching", "false");
    GM_addStyle(`
    	.startcard {
			z-index:9999;
			position:fixed;
			top:50px;
			left:20px;
			width: 150px;
			height: 60px;
			background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
			border-radius: 20px;
			transition: all .3s;
		}

		.startcard2 {
			width: 150px;
			height: inherit;
			background-color: #e8e8e8;
			border-radius: 20px;
			transition: all .2s;
		}

		.startcard2:hover {
			transform: scale(0.93);
			border-radius: 20px;
		}

		.startcard:hover {
			box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
		}

        .startbutton {
		    height: 40px;
		    padding: 8px 15px;
		    border: unset;
		    border-radius: 15px;
		    color: #e8e8e8;
		    z-index: 1;
		    background: #e8e8e8;
		    position: relative;
		    font-weight: 1000;
		    font-size: 17px;
		    -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
		    box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
		    transition: all 250ms;
		    overflow: hidden;
		}

		.startbutton::before {
		    content: "";
	   	    position: absolute;
		    top: 0;
		    left: 0;
		    height: 100%;
		    width: 100%;
		    border-radius: 15px;
		    background-image: url("https://www.xuexi.cn/lgpage/images/c1ebf079ca4a317d80c059903d7cbb4f.jpg");
		    z-index: -1;
		    -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
		    box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
		    transition: all 250ms
		}

		.startbutton:hover {
		    color: #212121;
		}

		.startbutton:hover::before {
		    width: 0%;
		}

    `);
    var div = document.createElement("div");
    div.setAttribute("class", "startcard");
    div.innerHTML = `
        <div class="startcard2">
			<div style="height: 100%;width:150px;display: flex;justify-content: center;align-items: center;">
				<button class="startbutton">开始学习</button>
			</div>
		</div>
    `;
    document.querySelector("body").appendChild(div);
    //绑定开关事件
    let button = document.querySelector(".startbutton");
    try {
        // Chrome、FireFox、Opera、Safari、IE9.0及其以上版本
        button.addEventListener("click", function(){
            stopButton();
            watchVideo();
        }, false);
    } catch (error) {
        try {
            // IE8.0及其以下版本
            button.attachEvent("onclick", function(){
                stopButton();
                watchVideo();
            }, false);
        } catch (error) {
            // 早期浏览器

        }
    }
}

function stopButton() {
    let button = document.querySelector(".startbutton");
    button.innerHTML = "停止学习";
    try {
        // Chrome、FireFox、Opera、Safari、IE9.0及其以上版本
        button.addEventListener("click", function(){
            location.reload();
        }, false);
    } catch (error) {
        try {
            // IE8.0及其以下版本
            button.attachEvent("onclick", function(){
                location.reload();
            }, false);
        } catch (error) {
            // 早期浏览器

        }
    }
}

async function watchVideo() {
    var video_list = document.querySelectorAll("div.posCatalog_select");
    //console.log(video_list);
    var current_item;
    for (let i = 0; i < video_list.length; i++) {
        //console.log(i);
        while (true) {
            if (GM_getValue("watching") != "true") {
                break;
            }
            await justWait(2000, 0);
        }
        //console.log(video_list[i]);
        if (GM_getValue("watching") == "pause") {
            console.log("暂停，重新播放");
            GM_setValue("watching", "true");
            document.querySelector("iframe#iframe").contentWindow.document.querySelector(".ans-attach-online").contentWindow.document.querySelector('button.vjs-play-control').click();
            await justWait(1000, 0);
            i--;
            continue;
        }
        if (!video_list[i].querySelector("span.posCatalog_name")) {
            continue;
        }
        if (video_list[i].querySelector("span.icon_Completed") || (video_list[i].querySelector("span.orangeNew") && video_list[i].querySelector("span.orangeNew").innerHTML != "2")) {
            console.log(video_list[i].querySelector("span.posCatalog_name").querySelector("em").innerHTML + " 已完成");
            continue;
        }
        GM_setValue("watching", "true");
        video_list[i].querySelector("span.posCatalog_name").click();
        await justWait(2000, 5000);
        var video_iframe = document.querySelector("iframe#iframe").contentWindow.document.querySelector(".ans-attach-online").contentWindow;
        while (true) {
            if (video_iframe.document.querySelector('.vjs-big-play-button')) {
                break;
            }
            await justWait(1000, 0);
        }
        var video = video_iframe.document.querySelector('video');
        video.addEventListener('pause', async function(video) {
            if (video.ended) {
                return;
            }
            console.log("播放被暂停");
            await justWait(1000, 2000);
            GM_setValue("watching", "pause");
        });
        video.addEventListener('ended', async function () {
            console.log("播放完毕");
            await justWait(1000, 2000);
            GM_setValue("watching", "false");
        });
        video_iframe.document.querySelector('.vjs-big-play-button').click();
    }
}

