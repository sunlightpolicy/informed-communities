---
---
// Workaround to fix the issue of usa-current not being applied correctly
var navs = $('nav').not('#toc, .footer-mobile, .footer-desktop');
var links = $('ul li a', navs);
links.removeClass('usa-current');
var baseurl = '{{ site.baseurl }}';
baseurl = baseurl.replace('/', '');
var pathname_split = window.location.pathname.split('/');
if (pathname_split[1] === baseurl) {
  var where = pathname_split[1] + '/' + pathname_split[2];
} else {
  var where = pathname_split[1];
}
var where_slash = '/' + where + '/';
var url_matches = links.filter( function (i) {
  return this.pathname === where_slash;
} );
url_matches.addClass('usa-current');
