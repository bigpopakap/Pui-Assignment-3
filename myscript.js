//list item template
var ITEM_TEMPLATE =
    '<a href="#" class="list-group-item"> \
        <input type="checkbox" onclick="completeItem(this)" value=""> \
        <span class="badge">A</span> \
        <button class="delete-button" onclick="deleteItem(this)">Delete</button> \
        <span class="item-text"></span></a>';

function addItem() {
    var userInput = $('#text-input').val();
    addItemUI(userInput);
    $('#text-input').val('');

    itemStore.addItem(userInput);
};

function addItemUI(itemText) {
    var $list = $('#notCompletedItems');

    var $newItem = $(ITEM_TEMPLATE);
    $newItem.find('.item-text').text(itemText);

    $list.append($newItem);
}

function deleteItem(element) {
    var $item = $(element).parent();
    itemStore.deleteItem($item.find('.item-text').text());
    $item.remove();
}

function completeItem(checked) {
    var $doneList = $('#completedItems');
    var $doneItem = $(checked).parent();
    $doneList.$append(doneItem);
}

$(document).ready(function() {
    itemStore.getItems().forEach(function(itemText) {
        addItemUI(itemText);
    });
});