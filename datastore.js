var itemStore = (function() {

    var ITEMS_STORE_KEY = 'todoItems';

    //wrapper around local storage that does JSON parsing
    var dataStore = (function() {
        //either real or fake localStorage
        var basicStore = (function() {
            var test = 'test';

            try {
                localStorage.setItem(test, test);
                localStorage.removeItem(test);
                return {
                    setItem: function(key, val) {
                        return localStorage.setItem(key, val);
                    },

                    getItem: function(key) {
                        return localStorage.getItem(key);
                    }
                }
            } catch(e) {
                return {
                    setItem: $.noop,
                    getItem: $.noop
                };
            }
        })();

        return {
            setItem: function(key, val) {
                basicStore.setItem(key, JSON.stringify(val));
            },

            getItem: function(key) {
                return JSON.parse(basicStore.getItem(key));
            }
        };
    })();

    // wrapper that does stuff specifically with the TODO items
    return {
        getItems: function() {
            return dataStore.getItem(ITEMS_STORE_KEY) || [];
        },

        addItem: function(itemText) {
            var items = this.getItems();
            items.push(itemText);
            dataStore.setItem(ITEMS_STORE_KEY, items);
        },

        deleteItem: function(itemText) {
            var items = this.getItems();
            var indexToRemove = items.indexOf(itemText);

            if (indexToRemove >= 0) {
                items.splice(indexToRemove, 1);
                dataStore.setItem(ITEMS_STORE_KEY, items);
            }
        }
    };
})();