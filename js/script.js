var i = 0;
$(function () {

	$("#btnAdd").bind("click", function () {
		i++;
		var div = $("<div />");
		div[0].classList.add('active');
		div[0].id = "activeid" + i;
		div.html(createcard(""));
		$("#TextBoxContainer").append(div);
		$(".active").attr('draggable', 'true');
		$(".active").attr('ondragend', 'dragEnd()');
		$(".active").attr('ondragover', 'dragOver(event)');
		$(".active").attr('ondragstart', 'dragStart(event)');
	});
	$("body").on("click", ".remove", function () {
		$(this).closest(".active").remove();
	});
});

function createcard(value) {
	return '<div><span id="displayCount" class="listnumber">List ' + i + ' </span> ' + ' </div> ' + '<div><button type="button" class="btn remove"> Delete this list </button></div>  ' + ' <div> <ul class="txtinner" id="fooBar' + i + '"><li class="editable" id="id_' + i + '"  >Card title</li> </ul> </div> ' + '  <div><button class="indexTex' + i + '" id="btnAdd' + i + '" onclick="innerTxt(this)">Add new list..</button></div>  '
}

function editable() {
	$("body").on("click", "li", function () {
		console.log("ok");
		$(".editable").attr('contenteditable', 'true');
	});
}


let selected = null

function dragOver(e) {
	if (isBefore(selected, e.target)) {
		e.target.parentNode.insertBefore(selected, e.target)
	} else {
		e.target.parentNode.insertBefore(selected, e.target.nextSibling)
	}
}

function dragEnd() {
	selected = null
}

function dragStart(e) {
	e.dataTransfer.effectAllowed = 'move'
	e.dataTransfer.setData('text/plain', null)
	selected = e.target
}

function isBefore(el1, el2) {
	let cur
	if (el2.parentNode === el1.parentNode) {
		for (cur = el1.previousSibling; cur; cur = cur.previousSibling) {
			if (cur === el2) return true
		}
	}
	return false;
}

function innerTxt(element) {
	var element = document.createElement("li");
	var $slider = $('ul#fooBar' + i);
	var $current = $slider.find('li');
	var $next = $current.children();

	if (!$next.length) {
		$next = $slider.find('li ');
	}
	$current.addClass('editable');

	var propsLength = i;
	for (prop in element) {
		if (element.hasOwnProperty(prop)) {
			propsLength = propsLength + i;
		}
	}


	var fooBar = document.getElementById("fooBar") + i;
	$("#fooBar" + i).append(element);
	var textnode = document.createTextNode("Card title");
	element.appendChild(textnode);
	editable();

}


(function () {
	"use strict";

	var todoApp = (function () {
		document.addEventListener("DOMContentLoaded", function () {
			init();
		});

		var init = function () {
			document.getElementById("add-task").addEventListener("click", function () {
				var newTitle = document.getElementById("title").value,
					newContent = document.getElementById("content").value;
				if (validate(newTitle)) {
					addTodo(newTitle, newContent);
				}
			}, false);

			document.getElementById("todos").addEventListener("click", function (e) {
				if (e.target && e.target.nodeName == "BUTTON") {
					deleteTodo(e.target.parentNode);
				}
			}, false);
		};

		var validate = function (newTitle, newContent) {
			if (newTitle.length === 0) {
				var target = document.getElementById("title");
				target.className = target.className + " error";
				return false;
			} else {
				return true;
			}
		};


		var addTodo = function (title, content, time) {
			var newTodo = document.createElement("section"),
				h2 = document.createElement("h2"),
				newTitle = document.createTextNode(title),
				p = document.createElement("p"),
				newContent = document.createTextNode(content),

				button_1 = document.createElement("button"),
				deleteBtn = document.createTextNode("Delete Card");


			newTodo.id = "timepic";


			h2.appendChild(newTitle);
			newTodo.appendChild(h2);
			p.appendChild(newContent);
			newTodo.appendChild(p);
			button_1.appendChild(deleteBtn);
			newTodo.appendChild(button_1);


			var time = new Date();
			var curr_date = time.getDate();
			var curr_month = time.getMonth() + 1;
			var curr_year = time.getFullYear();


			console.log(curr_date + "-" + curr_month + "-" + curr_year);
			var dateTime = (curr_date + "-" + curr_month + "-" + curr_year);

			var h1 = document.createElement("h1"),
				newTime = document.createTextNode(dateTime);
			h1.appendChild(newTime);
			newTodo.appendChild(h1);

			document.getElementById("todos").appendChild(newTodo);
			document.getElementById("form").reset();
		};
		var deleteTodo = function (todo) {
			todo.parentNode.removeChild(todo);
		};
	}());
}());