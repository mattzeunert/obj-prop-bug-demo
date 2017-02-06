export function mapObject(obj, fn){
    var newObj = {}

    for (var key in obj){
        newObj[key] = fn(obj[key])
    }
    return newObj
}

export function forEachProperty(obj, fn){
    for (var key in obj){
        fn(key, obj[key])
    }
}
