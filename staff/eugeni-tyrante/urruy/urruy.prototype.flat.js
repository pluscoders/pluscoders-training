Urruy.prototype.flat = function (depth) {
    var urr = this

    if (depth === undefined) {
        depth = 1
    }

    if (depth < 0) {
        depth = 0
    }

    var flatten = new Urruy

    for (depth; depth > 0; depth--) {
        iterate(depth)
    }

    function iterate(depth) {

        if (flatten.length === 0) {
            depth--
            loop(urr, flatten)
        }

        if (flatten.length > 0 && depth > 0) {
            depth--
            var temp = new Urruy()
            loop(flatten, temp)
        }

        if (temp != undefined) {
            flatten = temp
        }

        function loop(iterable, storage) {
            for (var i = 0; i < iterable.length; i++) {
                if (iterable[i] instanceof Array) {
                    var trurray = iterable[i]

                    for (var j = 0; j < trurray.length; j++) {
                        var curray = trurray[j]
                        storage[storage.length] = curray
                        storage.length++
                    }
                }
                else {
                    storage[storage.length] = iterable[i]
                    storage.length++
                }
            }
            depth--
            return depth
        }
    }
    return flatten
}