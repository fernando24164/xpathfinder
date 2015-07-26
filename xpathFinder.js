//Class for get Xpath from Node

var xpathFinder = (function () {

    return {

        checkBrothersNodes: function (node) {

            var answer = '';

            parent = node.parentNode;

            if (parent !== undefined) {
                lengthChildren = parent.children.length;
                if (lengthChildren > 0) {
                    answer = true;
                } else {
                    answer = false;
                }
            } else {
                answer = false;
            }

            return answer;
        },

        getXPath: function (Nodo) {
            var XPath = '';

            while (Nodo.tagName != 'BODY') {

                var referencia = Nodo.parentNode.childNodes;
                var posicion = 0;
                var i;
                for (i = 0; i < referencia.length; i++) {
                    if (referencia[i] === Nodo) {
                        posicion = i;
                        break;
                    }
                }
                if (posicion > 1) {
                    posicion = posicion - 1;
                    posicion = '[' + posicion + ']';
                } else {
                    posicion = '';
                }
                XPath = '/' + Nodo.tagName.toLowerCase() + posicion + XPath;
                Nodo = Nodo.parentNode;
            }
            return XPath.toLowerCase();

        },

        getNodeFromXpath: function (XPath) {
            var ruta = XPath.slice(1).split('/');
            var Nodo = document.body;
            for (var i = 0; i < ruta.length; ++i) {
                var posicion = 1;

                if (ruta[i].indexOf('[') != -1) {
                    posicion = ruta[i].split('[')[1].split(']')[0];
                    ruta[i] = ruta[i].split('[')[0];
                }

                Nodo = Nodo.getElementsByTagName(ruta[i])[posicion - 1]
            }
            return Nodo;
        }
    };
})();
