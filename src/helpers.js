function choice (items) {
    let randomIdx = Math.floor(Math.random() * items.length);
    return items[randomIdx]
}

function remove (items, item) {
    let filteredItems = items.filter(i => i !== item);

    return filteredItems
}
export { choice, remove } 
