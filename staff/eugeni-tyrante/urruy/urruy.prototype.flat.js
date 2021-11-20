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
        } else if (flatten.length > 0 && depth > 0) {
            depth--
            var temp = new Urruy()
            loop(flatten, temp)
        }

        if (temp != undefined) {
            flatten = temp
        }

        function loop(from, to) {
            for (var i = 0; i < from.length; i++) {
                var element = from[i]

                if (element instanceof Array || element instanceof Urruy) {
                    var iterable = element

                    for (var j = 0; j < iterable.length; j++) {
                        var element2 = iterable[j]
                        to[to.length] = element2
                        to.length++
                    }
                } else {
                    to[to.length] = element
                    to.length++
                }
            }
        }
    }

    return flatten
}