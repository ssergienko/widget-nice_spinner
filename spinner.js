window.widgets = window.widgets || {};
window.widgets.spinner = (function () {
	return {
		wait: function (options) {
			options = options || {};
			var $el = $(options.el || 'body');
			var $loader = $('<div class="loader-wrapper"><div class="loader"></div></div>');
			if (options.xhr) {
				var timeout = setTimeout(function () {
					$el.append($loader);
				}, 200);
				options.xhr.done(function () {
					clearTimeout(timeout);
					$loader.remove();
				});
			} else {				
				$el.append($loader);
			}
			return {
				destroy: function() {
					$loader.remove();
				},
				$el: $loader
			};
		}
	};
})();