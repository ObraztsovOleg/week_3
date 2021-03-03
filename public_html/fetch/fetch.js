function fetch() {
    var url = getElementById('inp').textContent;
    let response = await fetch(url);
    console.log(url);
}

var btn = getElementById('bt');
btn.addEventListener('click', fetch());
