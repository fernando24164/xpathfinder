#xpathFinder
------------

Class for get xPath of an element.

#Example

		var a = document.getElementById("elemento");
		var b = xpathFinder.getXPath(a);
		console.log(b);
		var referenceElement = xpathFinder.getNodeFromXpath(b);
