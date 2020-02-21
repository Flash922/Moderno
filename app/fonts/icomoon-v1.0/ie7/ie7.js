/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-grid': '&#xe900;',
		'icon-icons': '&#xe900;',
		'icon-phone': '&#xe915;',
		'icon-chevron-right': '&#xe918;',
		'icon-map-marker': '&#xe917;',
		'icon-shopping-cart': '&#xe90b;',
		'icon-location-arrow': '&#xe914;',
		'icon-sort-asc': '&#xe913;',
		'icon-sort-up': '&#xe913;',
		'icon-edit': '&#xe916;',
		'icon-lock': '&#xe901;',
		'icon-case': '&#xe902;',
		'icon-users': '&#xe903;',
		'icon-user': '&#xe904;',
		'icon-comments': '&#xe905;',
		'icon-sort-down': '&#xe906;',
		'icon-copyright': '&#xe907;',
		'icon-reply': '&#xe908;',
		'icon-down': '&#xe909;',
		'icon-comment': '&#xe90a;',
		'icon-heart': '&#xe90c;',
		'icon-th-list': '&#xe90d;',
		'icon-sort': '&#xe90e;',
		'icon-unsorted': '&#xe90f;',
		'icon-bell': '&#xe910;',
		'icon-mail': '&#xe911;',
		'icon-flash': '&#xe912;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
