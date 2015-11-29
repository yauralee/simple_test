;(function(exports) {
	exports.choose_even = function(collection) {
		return _.filter(collection, function(num) {
			return num % 2 === 0;
		});
	};

})(this);