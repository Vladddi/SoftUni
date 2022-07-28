function test(...c) {
    console.log(c);
}

test("a","b","c","d","e");

// html > button

const button = document.createElement("button");
button.addEventListener('click', test());

function test() {
    this.name = "asdasd";
}