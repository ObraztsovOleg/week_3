document.getElementById("bt").addEventListener('click', (async e => {
    let inp = document.getElementById("inp");
    let url = inp.value;
    let response = await fetch(url);
    if(response.ok) {
        let text = await response.text();
        inp.value = text;
    }
}));