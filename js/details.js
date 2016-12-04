(function () {
    var currentSpace;
    window.StorageDetail = {
        show: function () {
            var location = window.location.toString();

            currentSpace = window.Spaces.data.view()[0];
            // Create a model for the page and bind it to the view
            var listing = {
                title: currentSpace.name + " near " + currentSpace.university,
                image_url: currentSpace.image_url,
                is_favorite: currentSpace.is_favorite
            };
            kendo.bind($('#storageContent'), listing, kendo.mobile.ui);
            // If the current listing is a favorited item, toggle the switch on the view
            if (currentSpace.is_favorite) {
                $('#favorite').data('kendoMobileSwitch').toggle();
            }

        },
        hide: function () {
            // When the user navigates away from the page, remove the filter
            window.Spaces.data.filter([]);
        },
        setIsFavorite: function () {
            Spaces.data.fetch(function () {
                var dataItem = currentSpace;

                dataItem.set("is_favorite", !dataItem.get("is_favorite"));
                Spaces.data.sync();
            });
        }
    };
} ());
