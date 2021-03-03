function task(x) {
    const checkAge = age => new Promice((res, rej) => x < 18 ? res('yes') : rej('no'));
    return checkAge(x).then(x => console.log(x)).catch(x => console.log(x));
}