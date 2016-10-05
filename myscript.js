//list item template
var ITEM_TEMPLATE =
    '<a href="#" class="list-group-item"> \
        <input type="checkbox" onclick="completeItem(this)" value=""> \
        <span class="badge">A</span> \
        <button class="delete-button" onclick="deleteItem(this)">Delete</button> \
        <span class="item-text"></span></a>';

//addItem function
function addItem() {
    var $list = $('#notCompletedItems');
    var userInput = $('#text-input').val();

    var $newItem = $(ITEM_TEMPLATE);

    $newItem.find('.item-text').text(userInput);
    $list.append($newItem);
    $('#text-input').val('');
};

function deleteItem(element) {
    $(element).parent().remove();
}

function completeItem(checked) {
    var $doneList = $('#completedItems');
    var $doneItem = $(checked).parent();
    $doneList.$append(doneItem);
}

