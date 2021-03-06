'use strict';

var iconExtensionMap = {
	'audio': ['mp3', 'wav'],
	'pdf': ['pdf']
};

function getIconClassName(extension) {
	for (var className in iconExtensionMap) {
		if (iconExtensionMap[className].indexOf(extension) > -1) {
			return className;
		}
	}
	return 'unknown';
}

module.exports = getIconClassName;
