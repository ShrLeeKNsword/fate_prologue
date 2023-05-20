var data = $.parseJSON($.ajax({
	url: "data.json", //json文件位置，文件名
	dataType: "json", //返回数据格式为json
	async: false
}).responseText);
console.log(data);

function getTimeState() {
	// 获取当前时间
	var timeNow = new Date();
	// 获取当前小时
	var hours = timeNow.getHours();
	// 设置默认文字
	var text = 0;
	// 判断当前时间段
	if (hours >= 0 && hours <= 10) {
		data["summary_background"] = "morning_background";
		text = 1;
	} else if (hours > 10 && hours <= 14) {
		data["summary_background"] = "morning_background";
		text = 2;
	} else if (hours > 14 && hours <= 18) {
		data["summary_background"] = "evening_background";
		text = 3;
	} else if (hours > 18 && hours <= 24) {
		data["summary_background"] = "night_background";
		text = 4;
	}
	// 返回当前时间段对应的状态
	return text;
};

getTimeState();

var vm = new Vue({
	el: '#vm',
	data: data,
	methods: {
		highlight_b() {
			// id 在当前页面必须唯一的，否则会导致定位不到具体内容
			const scrollDom = document.getElementById("note_1");
			scrollDom.scrollIntoView();
		},
		highlight_c() {
			// id 在当前页面必须唯一的，否则会导致定位不到具体内容
			const scrollDom = document.getElementById("note_2");
			scrollDom.scrollIntoView();
		},
		highlight_d() {
			// id 在当前页面必须唯一的，否则会导致定位不到具体内容
			const scrollDom = document.getElementById("note_3");
			scrollDom.scrollIntoView();
		},


		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		}
	}
});