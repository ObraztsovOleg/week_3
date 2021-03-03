new Clicker(async e => {
    url = getElementById('inp').innerHTML;
    let response = await fetch(url);
    console.log(url);
}, caption = "ЩЁлкни")