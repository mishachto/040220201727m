


let text = $("#text-review");
let textButton = $("#button-text-review");
let name;

let year = new Date().getFullYear();
let day = new Date().getDate();
let mounth = new Date().toLocaleString('ru', {
    month: 'long'
});;

$(document).ready(function () {
    name = prompt('Как тебя зову?')
});

text.keyup(function () {
    textValue = text.val();
    if (textValue.trim() != "") {
        textButton.removeAttr("disabled")
    } else {
        textButton.attr("disabled", 1)
    }
});

$('#text-review').keydown(function (e) {
    if (e.ctrlKey && e.keyCode == 13) {
        addPost()
    }
});

let addPost = () => {
    if (name == null) {
        name = "Инкогнито"
    }
    textValue = text.val();
    if (textValue.trim() != "") {
        $(".box-reviews-user-review").append(`
     <div class="comment">
        <div class="info">
            <span class="name">${name}</span><span class="date">${day} ${mounth} ${year}</span>
        </div>
        <div class="content"><span>${textValue}</span></div>
    </div>`);
        text.val('');
    }
}; 