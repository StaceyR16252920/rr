<script>
function escapeUnicode(text)
{
  var regexp = "[^\u0001-\u007F\u00A0\u00A4\u00A6\u00A7\u00A9\u00AB-\u00AE\u00B0\u00B1\u00B5-\u00B7\u00BB\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u0490\u0491\u2013\u2014\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2026\u2030\u2039\u203A\u20AC\u2116\u2122]";
  var f = function(c){return '&&#' + c.charCodeAt(0) + '&&'};
  if ('a'.replace(/./, f) == '&&#97&&')
    text = text.replace(new RegExp(regexp, 'g'), f);
  else
  {
    regexp = new RegExp(regexp);
    var pos;
    while ((pos = text.search(regexp)) != -1)
      text = text.substr(0, pos) + f(text.substr(pos, 1)) + text.substr(pos + 1);
  }
  return text;
}
</script>
<form method="post" name="f" onSubmit="alert(escapeUnicode(document.f.t.value));return false;">
  <input type="text" name="t" size="40" maxlength="80">
  <input type="submit" value="Раскодировать">
</form>
