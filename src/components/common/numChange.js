function numChange(str) {
    return str.replace(/[０-９]/g, function(m) {
        return "０１２３４５６７８９".indexOf(m)
    })
}
export default { numChange }
