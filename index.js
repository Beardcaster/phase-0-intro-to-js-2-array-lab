const cats = ["Milo", "Otis", "Garfield"];
var allCats

function destructivelyAppendCat(name){
    cats.push("Ralph");
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name){
    cats.pop();
}

function destructivelyRemoveFirstCat(name){
    cats.shift();
}

function appendCat(name){
    const allCats = [...cats, "Broom"];
    return allCats
}

function prependCat(name){
    const allCats = ["Arnold", ...cats];
    return allCats
}

function removeLastCat(name){
    
    const allCats = cats.slice(0, -1);
    return allCats;
}

function removeFirstCat(name){
    
    const allCats = cats.slice(1);
    return allCats;
}



