var data = $.parseJSON($.ajax({
	url: "data.json", //json文件位置，文件名
	dataType: "json", //返回数据格式为json
	async: false
}).responseText);
console.log(data);

data.date = new Date();

var vm = new Vue({
	el: '#vm',
	data: data,
	methods: {
		goBack() {
			window.location.href = "https://fate-prologue.41workroom.tk/";
		},
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