const voted = new Map();

function checkVoter(name){
    if(voted.get(name)) {
        console.log('Kick them out!')
    }
    else{
        voted.set(name, true)
        console.log('Let them vote!')
    }
}


const cache = new Map();

function getPage(url){
    if(cache.get(url)){
        return cache[url]
    } else{
        data = fetch(url)
        cache.set(url, data)
        return data
    }
}