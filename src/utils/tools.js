function getQueryStringArgs() {
  var qs = location.search.length ? location.search.substring(1) : "";
  var args = {};
  var items = qs.length ? qs.split("&") : [];
  var item = null,
    name = null,
    value = null,
    len = items.length;
  for (var i = 0; i < len; i++) {
    item = items[i].split("=");
    if (item[0].length) {
      name = decodeURIComponent(item[0]);
      value = decodeURIComponent(item[1]);
      args[name] = value;
    }
  }
  return args;
}
