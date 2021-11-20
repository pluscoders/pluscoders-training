function describe(title) {
    console.log('%c' + title, 'font-weight: bold; font-size: 12px')
}

function TODO(desc) {
    console.log('%cTODO ' + desc, 'color: red; font-weight: bold; font-size: 12px; font-family: courier;')
}

function assert(condition, spec) {
    if (!condition)
        console.error(spec + ' ✖')
}