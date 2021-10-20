class P { x = ""; go() { return utils.escapeHtml("oren"); } }
class S extends P { x = ""; go() { return "oren"; } }
var p = new S();
console.log(decodeURI(p.go()))
