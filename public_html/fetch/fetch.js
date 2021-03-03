document.getElementById("bt").addEventListener('click', (async e => {
    let inp = document.getElementById("inp");
    let url = inp.value;
    await fetch(url).then(res => res.text()).then(x => inp.value = x);
}));