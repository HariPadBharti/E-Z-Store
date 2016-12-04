(function () {
	window.Favorites = {
		show: function() {
			window.Spaces.data.filter({ field: "is_favorite", operator: "eq", value: true });
		},
		hide: function() {
			window.Spaces.data.filter([]);
		}
	};
}());
