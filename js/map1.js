  /*!
 *  GMAP3 Plugin for jQuery
 *  Version   : 6.0.0
 *  Date      : 2014-04-25
 *  Author    : DEMONTE Jean-Baptiste
 *  Contact   : jbdemonte@gmail.com
 *  Web site  : http://gmap3.net
 *  Licence   : GPL v3 : http://www.gnu.org/licenses/gpl.html
 *  
 *  Copyright (c) 2010-2014 Jean-Baptiste DEMONTE
 *  All rights reserved.
 */
!function(t,n){function e(t){return"object"==typeof t}function o(t){return"string"==typeof t}function i(t){return"number"==typeof t}function a(t){return t===n}function r(){q=google.maps,A||(A={verbose:!1,queryLimit:{attempt:5,delay:250,random:250},classes:function(){var n={};return t.each("Map Marker InfoWindow Circle Rectangle OverlayView StreetViewPanorama KmlLayer TrafficLayer BicyclingLayer GroundOverlay StyledMapType ImageMapType".split(" "),function(t,e){n[e]=q[e]}),n}(),map:{mapTypeId:q.MapTypeId.ROADMAP,center:[46.578498,2.457275],zoom:2},overlay:{pane:"floatPane",content:"",offset:{x:0,y:0}},geoloc:{getCurrentPosition:{maximumAge:6e4,timeout:5e3}}})}function s(t,n){return a(t)?"gmap3_"+(n?Z+1:++Z):t}function u(t){var n,e=q.version.split(".");for(t=t.split("."),n=0;n<e.length;n++)e[n]=parseInt(e[n],10);for(n=0;n<t.length;n++){if(t[n]=parseInt(t[n],10),!e.hasOwnProperty(n))return!1;if(e[n]<t[n])return!1}return!0}function l(n,e,o,i,a){function r(e,i){e&&t.each(e,function(t,e){var r=n,s=e;R(e)&&(r=e[0],s=e[1]),i(o,t,function(t){s.apply(r,[a||o,t,u])})})}var s=e.td||{},u={id:i,data:s.data,tag:s.tag};r(s.events,q.event.addListener),r(s.onces,q.event.addListenerOnce)}function d(t){var n,e=[];for(n in t)t.hasOwnProperty(n)&&e.push(n);return e}function c(t,n){var e,o=arguments;for(e=2;e<o.length;e++)if(n in o[e]&&o[e].hasOwnProperty(n))return void(t[n]=o[e][n])}function p(n,e){var o,i,a=["data","tag","id","events","onces"],r={};if(n.td)for(o in n.td)n.td.hasOwnProperty(o)&&"options"!==o&&"values"!==o&&(r[o]=n.td[o]);for(i=0;i<a.length;i++)c(r,a[i],e,n.td);return r.options=t.extend({},n.opts||{},e.options||{}),r}function f(){if(A.verbose){var t,n=[];if(window.console&&z(console.error)){for(t=0;t<arguments.length;t++)n.push(arguments[t]);console.error.apply(console,n)}else{for(n="",t=0;t<arguments.length;t++)n+=arguments[t].toString()+" ";alert(n)}}}function g(t){return(i(t)||o(t))&&""!==t&&!isNaN(t)}function h(t){var n,o=[];if(!a(t))if(e(t))if(i(t.length))o=t;else for(n in t)o.push(t[n]);else o.push(t);return o}function v(n){return n?z(n)?n:(n=h(n),function(o){var i;if(a(o))return!1;if(e(o)){for(i=0;i<o.length;i++)if(t.inArray(o[i],n)>=0)return!0;return!1}return t.inArray(o,n)>=0}):void 0}function m(t,n,e){var i=n?t:null;return!t||o(t)?i:t.latLng?m(t.latLng):t instanceof q.LatLng?t:g(t.lat)?new q.LatLng(t.lat,t.lng):!e&&R(t)&&g(t[0])&&g(t[1])?new q.LatLng(t[0],t[1]):i}function y(t){var n,e;return!t||t instanceof q.LatLngBounds?t||null:(R(t)?2===t.length?(n=m(t[0]),e=m(t[1])):4===t.length&&(n=m([t[0],t[1]]),e=m([t[2],t[3]])):"ne"in t&&"sw"in t?(n=m(t.ne),e=m(t.sw)):"n"in t&&"e"in t&&"s"in t&&"w"in t&&(n=m([t.n,t.e]),e=m([t.s,t.w])),n&&e?new q.LatLngBounds(e,n):null)}function w(t,n,e,i,a){var r=e?m(i.td,!1,!0):!1,s=r?{latLng:r}:i.td.address?o(i.td.address)?{address:i.td.address}:i.td.address:!1,u=s?G.get(s):!1,l=this;s?(a=a||0,u?(i.latLng=u.results[0].geometry.location,i.results=u.results,i.status=u.status,n.apply(t,[i])):(s.location&&(s.location=m(s.location)),s.bounds&&(s.bounds=y(s.bounds)),M().geocode(s,function(o,r){r===q.GeocoderStatus.OK?(G.store(s,{results:o,status:r}),i.latLng=o[0].geometry.location,i.results=o,i.status=r,n.apply(t,[i])):r===q.GeocoderStatus.OVER_QUERY_LIMIT&&a<A.queryLimit.attempt?setTimeout(function(){w.apply(l,[t,n,e,i,a+1])},A.queryLimit.delay+Math.floor(Math.random()*A.queryLimit.random)):(f("geocode failed",r,s),i.latLng=i.results=!1,i.status=r,n.apply(t,[i]))}))):(i.latLng=m(i.td,!1,!0),n.apply(t,[i]))}function L(n,e,o,i){function a(){do s++;while(s<n.length&&!("address"in n[s]));return s>=n.length?void o.apply(e,[i]):void w(r,function(e){delete e.td,t.extend(n[s],e),a.apply(r,[])},!0,{td:n[s]})}var r=this,s=-1;a()}function b(t,n,e){var o=!1;navigator&&navigator.geolocation?navigator.geolocation.getCurrentPosition(function(i){o||(o=!0,e.latLng=new q.LatLng(i.coords.latitude,i.coords.longitude),n.apply(t,[e]))},function(){o||(o=!0,e.latLng=!1,n.apply(t,[e]))},e.opts.getCurrentPosition):(e.latLng=!1,n.apply(t,[e]))}function x(t){var n,o=!1;if(e(t)&&t.hasOwnProperty("get")){for(n in t)if("get"!==n)return!1;o=!t.get.hasOwnProperty("callback")}return o}function M(){return V.geocoder||(V.geocoder=new q.Geocoder),V.geocoder}function I(){var t=[];this.get=function(n){if(t.length){var o,i,a,r,s,u=d(n);for(o=0;o<t.length;o++){for(r=t[o],s=u.length===r.keys.length,i=0;i<u.length&&s;i++)a=u[i],s=a in r.request,s&&(s=e(n[a])&&"equals"in n[a]&&z(n[a])?n[a].equals(r.request[a]):n[a]===r.request[a]);if(s)return r.results}}},this.store=function(n,e){t.push({request:n,keys:d(n),results:e})}}function P(){var t=[],n=this;n.empty=function(){return!t.length},n.add=function(n){t.push(n)},n.get=function(){return t.length?t[0]:!1},n.ack=function(){t.shift()}}function k(){function n(t){return{id:t.id,name:t.name,object:t.obj,tag:t.tag,data:t.data}}function e(t){z(t.setMap)&&t.setMap(null),z(t.remove)&&t.remove(),z(t.free)&&t.free(),t=null}var o={},i={},r=this;r.add=function(t,n,e,a){var u=t.td||{},l=s(u.id);return o[n]||(o[n]=[]),l in i&&r.clearById(l),i[l]={obj:e,sub:a,name:n,id:l,tag:u.tag,data:u.data},o[n].push(l),l},r.getById=function(t,e,o){var a=!1;return t in i&&(a=e?i[t].sub:o?n(i[t]):i[t].obj),a},r.get=function(t,e,a,r){var s,u,l=v(a);if(!o[t]||!o[t].length)return null;for(s=o[t].length;s;)if(s--,u=o[t][e?s:o[t].length-s-1],u&&i[u]){if(l&&!l(i[u].tag))continue;return r?n(i[u]):i[u].obj}return null},r.all=function(t,e,r){var s=[],u=v(e),l=function(t){var e,a;for(e=0;e<o[t].length;e++)if(a=o[t][e],a&&i[a]){if(u&&!u(i[a].tag))continue;s.push(r?n(i[a]):i[a].obj)}};if(t in o)l(t);else if(a(t))for(t in o)l(t);return s},r.rm=function(t,n,e){var a,s;if(!o[t])return!1;if(n)if(e)for(a=o[t].length-1;a>=0&&(s=o[t][a],!n(i[s].tag));a--);else for(a=0;a<o[t].length&&(s=o[t][a],!n(i[s].tag));a++);else a=e?o[t].length-1:0;return a in o[t]?r.clearById(o[t][a],a):!1},r.clearById=function(t,n){if(t in i){var r,s=i[t].name;for(r=0;a(n)&&r<o[s].length;r++)t===o[s][r]&&(n=r);return e(i[t].obj),i[t].sub&&e(i[t].sub),delete i[t],o[s].splice(n,1),!0}return!1},r.objGetById=function(t){var n,e;if(o.clusterer)for(e in o.clusterer)if((n=i[o.clusterer[e]].obj.getById(t))!==!1)return n;return!1},r.objClearById=function(t){var n;if(o.clusterer)for(n in o.clusterer)if(i[o.clusterer[n]].obj.clearById(t))return!0;return null},r.clear=function(t,n,e,i){var a,s,u,l=v(i);if(t&&t.length)t=h(t);else{t=[];for(a in o)t.push(a)}for(s=0;s<t.length;s++)if(u=t[s],n)r.rm(u,l,!0);else if(e)r.rm(u,l,!1);else for(;r.rm(u,l,!1););},r.objClear=function(n,e,a,r){var s;if(o.clusterer&&(t.inArray("marker",n)>=0||!n.length))for(s in o.clusterer)i[o.clusterer[s]].obj.clear(e,a,r)}}function B(n,e,i){function a(t){var n={};return n[t]={},n}function r(){var t;for(t in i)if(i.hasOwnProperty(t)&&!u.hasOwnProperty(t))return t}var s,u={},l=this,d={latLng:{map:!1,marker:!1,infowindow:!1,circle:!1,overlay:!1,getlatlng:!1,getmaxzoom:!1,getelevation:!1,streetviewpanorama:!1,getaddress:!0},geoloc:{getgeoloc:!0}};o(i)&&(i=a(i)),l.run=function(){for(var o,a;o=r();){if(z(n[o]))return s=o,a=t.extend(!0,{},A[o]||{},i[o].options||{}),void(o in d.latLng?i[o].values?L(i[o].values,n,n[o],{td:i[o],opts:a,session:u}):w(n,n[o],d.latLng[o],{td:i[o],opts:a,session:u}):o in d.geoloc?b(n,n[o],{td:i[o],opts:a,session:u}):n[o].apply(n,[{td:i[o],opts:a,session:u}]));u[o]=null}e.apply(n,[i,u])},l.ack=function(t){u[s]=t,l.run.apply(l,[])}}function j(){return V.ds||(V.ds=new q.DirectionsService),V.ds}function O(){return V.dms||(V.dms=new q.DistanceMatrixService),V.dms}function C(){return V.mzs||(V.mzs=new q.MaxZoomService),V.mzs}function E(){return V.es||(V.es=new q.ElevationService),V.es}function S(t){function n(){var t=this;return t.onAdd=function(){},t.onRemove=function(){},t.draw=function(){},A.classes.OverlayView.apply(t,[])}n.prototype=A.classes.OverlayView.prototype;var e=new n;return e.setMap(t),e}function T(n,o,i){function a(t){T[t]||(delete _[t].options.map,T[t]=new A.classes.Marker(_[t].options),l(n,{td:_[t]},T[t],_[t].id))}function r(){return(y=U.getProjection())?(P=!0,j.push(q.event.addListener(o,"zoom_changed",f)),j.push(q.event.addListener(o,"bounds_changed",f)),void h()):void setTimeout(function(){r.apply(B,[])},25)}function u(t){e(O[t])?(z(O[t].obj.setMap)&&O[t].obj.setMap(null),z(O[t].obj.remove)&&O[t].obj.remove(),z(O[t].shadow.remove)&&O[t].obj.remove(),z(O[t].shadow.setMap)&&O[t].shadow.setMap(null),delete O[t].obj,delete O[t].shadow):T[t]&&T[t].setMap(null),delete O[t]}function d(){var t,n,e,o,i,a,r,s,u=Math.cos,l=Math.sin,d=arguments;return d[0]instanceof q.LatLng?(t=d[0].lat(),e=d[0].lng(),d[1]instanceof q.LatLng?(n=d[1].lat(),o=d[1].lng()):(n=d[1],o=d[2])):(t=d[0],e=d[1],d[2]instanceof q.LatLng?(n=d[2].lat(),o=d[2].lng()):(n=d[2],o=d[3])),i=Math.PI*t/180,a=Math.PI*e/180,r=Math.PI*n/180,s=Math.PI*o/180,6371e3*Math.acos(Math.min(u(i)*u(r)*u(a)*u(s)+u(i)*l(a)*u(r)*l(s)+l(i)*l(r),1))}function c(){var t=d(o.getCenter(),o.getBounds().getNorthEast()),n=new q.Circle({center:o.getCenter(),radius:1.25*t});return n.getBounds()}function p(){var t,n={};for(t in O)n[t]=!0;return n}function f(){clearTimeout(m),m=setTimeout(h,25)}function g(t){var n=y.fromLatLngToDivPixel(t),e=y.fromDivPixelToLatLng(new q.Point(n.x+i.radius,n.y-i.radius)),o=y.fromDivPixelToLatLng(new q.Point(n.x-i.radius,n.y+i.radius));return new q.LatLngBounds(o,e)}function h(){if(!x&&!I&&P){var n,e,a,r,s,l,d,f,h,v,m,y=!1,b=[],B={},j=o.getZoom(),C="maxZoom"in i&&j>i.maxZoom,E=p();for(M=!1,j>3&&(s=c(),y=s.getSouthWest().lng()<s.getNorthEast().lng()),n=0;n<_.length;n++)!_[n]||y&&!s.contains(_[n].options.position)||w&&!w(D[n])||b.push(n);for(;;){for(n=0;B[n]&&n<b.length;)n++;if(n===b.length)break;if(r=[],k&&!C){m=10;do
for(f=r,r=[],m--,d=f.length?s.getCenter():_[b[n]].options.position,s=g(d),e=n;e<b.length;e++)B[e]||s.contains(_[b[e]].options.position)&&r.push(e);while(f.length<r.length&&r.length>1&&m)}else for(e=n;e<b.length;e++)if(!B[e]){r.push(e);break}for(l={indexes:[],ref:[]},h=v=0,a=0;a<r.length;a++)B[r[a]]=!0,l.indexes.push(b[r[a]]),l.ref.push(b[r[a]]),h+=_[b[r[a]]].options.position.lat(),v+=_[b[r[a]]].options.position.lng();h/=r.length,v/=r.length,l.latLng=new q.LatLng(h,v),l.ref=l.ref.join("-"),l.ref in E?delete E[l.ref]:(1===r.length&&(O[l.ref]=!0),L(l))}t.each(E,function(t){u(t)}),I=!1}}var m,y,w,L,b,x=!1,M=!1,I=!1,P=!1,k=!0,B=this,j=[],O={},C={},E={},T=[],_=[],D=[],U=S(o,i.radius);r(),B.getById=function(t){return t in C?(a(C[t]),T[C[t]]):!1},B.rm=function(t){var n=C[t];T[n]&&T[n].setMap(null),delete T[n],T[n]=!1,delete _[n],_[n]=!1,delete D[n],D[n]=!1,delete C[t],delete E[n],M=!0},B.clearById=function(t){return t in C?(B.rm(t),!0):void 0},B.clear=function(t,n,e){var o,i,a,r,s,u=[],l=v(e);for(t?(o=_.length-1,i=-1,a=-1):(o=0,i=_.length,a=1),r=o;r!==i&&(!_[r]||l&&!l(_[r].tag)||(u.push(E[r]),!n&&!t));r+=a);for(s=0;s<u.length;s++)B.rm(u[s])},B.add=function(t,n){t.id=s(t.id),B.clearById(t.id),C[t.id]=T.length,E[T.length]=t.id,T.push(null),_.push(t),D.push(n),M=!0},B.addMarker=function(t,e){e=e||{},e.id=s(e.id),B.clearById(e.id),e.options||(e.options={}),e.options.position=t.getPosition(),l(n,{td:e},t,e.id),C[e.id]=T.length,E[T.length]=e.id,T.push(t),_.push(e),D.push(e.data||{}),M=!0},B.td=function(t){return _[t]},B.value=function(t){return D[t]},B.marker=function(t){return t in T?(a(t),T[t]):!1},B.markerIsSet=function(t){return Boolean(T[t])},B.setMarker=function(t,n){T[t]=n},B.store=function(t,n,e){O[t.ref]={obj:n,shadow:e}},B.free=function(){var n;for(n=0;n<j.length;n++)q.event.removeListener(j[n]);j=[],t.each(O,function(t){u(t)}),O={},t.each(_,function(t){_[t]=null}),_=[],t.each(T,function(t){T[t]&&(T[t].setMap(null),delete T[t])}),T=[],t.each(D,function(t){delete D[t]}),D=[],C={},E={}},B.filter=function(t){w=t,h()},B.enable=function(t){k!==t&&(k=t,h())},B.display=function(t){L=t},B.error=function(t){b=t},B.beginUpdate=function(){x=!0},B.endUpdate=function(){x=!1,M&&h()},B.autofit=function(t){var n;for(n=0;n<_.length;n++)_[n]&&t.extend(_[n].options.position)}}function _(t,n){var e=this;e.id=function(){return t},e.filter=function(t){n.filter(t)},e.enable=function(){n.enable(!0)},e.disable=function(){n.enable(!1)},e.add=function(t,e,o){o||n.beginUpdate(),n.addMarker(t,e),o||n.endUpdate()},e.getById=function(t){return n.getById(t)},e.clearById=function(t,e){var o;return e||n.beginUpdate(),o=n.clearById(t),e||n.endUpdate(),o},e.clear=function(t,e,o,i){i||n.beginUpdate(),n.clear(t,e,o),i||n.endUpdate()}}function D(n,e,o,i){var a=this,r=[];A.classes.OverlayView.call(a),a.setMap(n),a.onAdd=function(){var n=a.getPanes();e.pane in n&&t(n[e.pane]).append(i),t.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "),function(n,e){r.push(q.event.addDomListener(i[0],e,function(n){t.Event(n).stopPropagation(),q.event.trigger(a,e,[n]),a.draw()}))}),r.push(q.event.addDomListener(i[0],"contextmenu",function(n){t.Event(n).stopPropagation(),q.event.trigger(a,"rightclick",[n]),a.draw()}))},a.getPosition=function(){return o},a.setPosition=function(t){o=t,a.draw()},a.draw=function(){var t=a.getProjection().fromLatLngToDivPixel(o);i.css("left",t.x+e.offset.x+"px").css("top",t.y+e.offset.y+"px")},a.onRemove=function(){var t;for(t=0;t<r.length;t++)q.event.removeListener(r[t]);i.remove()},a.hide=function(){i.hide()},a.show=function(){i.show()},a.toggle=function(){i&&(i.is(":visible")?a.show():a.hide())},a.toggleDOM=function(){a.setMap(a.getMap()?null:n)},a.getDOMElement=function(){return i[0]}}function U(i){function r(){!b&&(b=M.get())&&b.run()}function d(){b=null,M.ack(),r.call(x)}function c(t){var n,e=t.td.callback;e&&(n=Array.prototype.slice.call(arguments,1),z(e)?e.apply(i,n):R(e)&&z(e[1])&&e[1].apply(e[0],n))}function g(t,n,e){e&&l(i,t,n,e),c(t,n),b.ack(n)}function v(n,e){e=e||{};var o=e.td&&e.td.options?e.td.options:0;S?o&&(o.center&&(o.center=m(o.center)),S.setOptions(o)):(o=e.opts||t.extend(!0,{},A.map,o||{}),o.center=n||m(o.center),S=new A.classes.Map(i.get(0),o))}function w(e){var o,a,r=new T(i,S,e),s={},u={},d=[],c=/^[0-9]+$/;for(a in e)c.test(a)?(d.push(1*a),u[a]=e[a],u[a].width=u[a].width||0,u[a].height=u[a].height||0):s[a]=e[a];return d.sort(function(t,n){return t>n}),o=s.calculator?function(n){var e=[];return t.each(n,function(t,n){e.push(r.value(n))}),s.calculator.apply(i,[e])}:function(t){return t.length},r.error(function(){f.apply(x,arguments)}),r.display(function(a){var c,p,f,g,h,v,y=o(a.indexes);if(e.force||y>1)for(c=0;c<d.length;c++)d[c]<=y&&(p=u[d[c]]);p?(h=p.offset||[-p.width/2,-p.height/2],f=t.extend({},s),f.options=t.extend({pane:"overlayLayer",content:p.content?p.content.replace("CLUSTER_COUNT",y):"",offset:{x:("x"in h?h.x:h[0])||0,y:("y"in h?h.y:h[1])||0}},s.options||{}),g=x.overlay({td:f,opts:f.options,latLng:m(a)},!0),f.options.pane="floatShadow",f.options.content=t(document.createElement("div")).width(p.width+"px").height(p.height+"px").css({cursor:"pointer"}),v=x.overlay({td:f,opts:f.options,latLng:m(a)},!0),s.data={latLng:m(a),markers:[]},t.each(a.indexes,function(t,n){s.data.markers.push(r.value(n)),r.markerIsSet(n)&&r.marker(n).setMap(null)}),l(i,{td:s},v,n,{main:g,shadow:v}),r.store(a,g,v)):t.each(a.indexes,function(t,n){r.marker(n).setMap(S)})}),r}function L(n,e,o){var a=[],r="values"in n.td;return r||(n.td.values=[{options:n.opts}]),n.td.values.length?(v(),t.each(n.td.values,function(t,r){var s,u,d,c,f=p(n,r);if(f.options[o])if(f.options[o][0][0]&&R(f.options[o][0][0]))for(u=0;u<f.options[o].length;u++)for(d=0;d<f.options[o][u].length;d++)f.options[o][u][d]=m(f.options[o][u][d]);else for(u=0;u<f.options[o].length;u++)f.options[o][u]=m(f.options[o][u]);f.options.map=S,c=new q[e](f.options),a.push(c),s=I.add({td:f},e.toLowerCase(),c),l(i,{td:f},c,s)}),void g(n,r?a:a[0])):void g(n,!1)}var b,x=this,M=new P,I=new k,S=null;x._plan=function(t){var n;for(n=0;n<t.length;n++)M.add(new B(x,d,t[n]));r()},x.map=function(t){v(t.latLng,t),l(i,t,S),g(t,S)},x.destroy=function(t){I.clear(),i.empty(),S&&(S=null),g(t,!0)},x.overlay=function(n,e){var o=[],a="values"in n.td;return a||(n.td.values=[{latLng:n.latLng,options:n.opts}]),n.td.values.length?(D.__initialised||(D.prototype=new A.classes.OverlayView,D.__initialised=!0),t.each(n.td.values,function(a,r){var s,u,d=p(n,r),c=t(document.createElement("div")).css({border:"none",borderWidth:0,position:"absolute"});c.append(d.options.content),u=new D(S,d.options,m(d)||m(r),c),o.push(u),c=null,e||(s=I.add(n,"overlay",u),l(i,{td:d},u,s))}),e?o[0]:void g(n,a?o:o[0])):void g(n,!1)},x.marker=function(n){var e,o,a,r="values"in n.td,u=!S;return r||(n.opts.position=n.latLng||m(n.opts.position),n.td.values=[{options:n.opts}]),n.td.values.length?(u&&v(),n.td.cluster&&!S.getBounds()?void q.event.addListenerOnce(S,"bounds_changed",function(){x.marker.apply(x,[n])}):void(n.td.cluster?(n.td.cluster instanceof _?(o=n.td.cluster,a=I.getById(o.id(),!0)):(a=w(n.td.cluster),o=new _(s(n.td.id,!0),a),I.add(n,"clusterer",o,a)),a.beginUpdate(),t.each(n.td.values,function(t,e){var o=p(n,e);o.options.position=m(o.options.position?o.options.position:e),o.options.position&&(o.options.map=S,u&&(S.setCenter(o.options.position),u=!1),a.add(o,e))}),a.endUpdate(),g(n,o)):(e=[],t.each(n.td.values,function(t,o){var a,r,s=p(n,o);s.options.position=m(s.options.position?s.options.position:o),s.options.position&&(s.options.map=S,u&&(S.setCenter(s.options.position),u=!1),r=new A.classes.Marker(s.options),e.push(r),a=I.add({td:s},"marker",r),l(i,{td:s},r,a))}),g(n,r?e:e[0])))):void g(n,!1)},x.getroute=function(t){t.opts.origin=m(t.opts.origin,!0),t.opts.destination=m(t.opts.destination,!0),j().route(t.opts,function(n,e){c(t,e===q.DirectionsStatus.OK?n:!1,e),b.ack()})},x.getdistance=function(t){var n;for(t.opts.origins=h(t.opts.origins),n=0;n<t.opts.origins.length;n++)t.opts.origins[n]=m(t.opts.origins[n],!0);for(t.opts.destinations=h(t.opts.destinations),n=0;n<t.opts.destinations.length;n++)t.opts.destinations[n]=m(t.opts.destinations[n],!0);O().getDistanceMatrix(t.opts,function(n,e){c(t,e===q.DistanceMatrixStatus.OK?n:!1,e),b.ack()})},x.infowindow=function(e){var o=[],r="values"in e.td;r||(e.latLng&&(e.opts.position=e.latLng),e.td.values=[{options:e.opts}]),t.each(e.td.values,function(t,s){var u,d,c=p(e,s);c.options.position=m(c.options.position?c.options.position:s.latLng),S||v(c.options.position),d=new A.classes.InfoWindow(c.options),d&&(a(c.open)||c.open)&&(r?d.open(S,c.anchor||n):d.open(S,c.anchor||(e.latLng?n:e.session.marker?e.session.marker:n))),o.push(d),u=I.add({td:c},"infowindow",d),l(i,{td:c},d,u)}),g(e,r?o:o[0])},x.circle=function(n){var e=[],o="values"in n.td;return o||(n.opts.center=n.latLng||m(n.opts.center),n.td.values=[{options:n.opts}]),n.td.values.length?(t.each(n.td.values,function(t,o){var a,r,s=p(n,o);s.options.center=m(s.options.center?s.options.center:o),S||v(s.options.center),s.options.map=S,r=new A.classes.Circle(s.options),e.push(r),a=I.add({td:s},"circle",r),l(i,{td:s},r,a)}),void g(n,o?e:e[0])):void g(n,!1)},x.getaddress=function(t){c(t,t.results,t.status),b.ack()},x.getlatlng=function(t){c(t,t.results,t.status),b.ack()},x.getmaxzoom=function(t){C().getMaxZoomAtLatLng(t.latLng,function(n){c(t,n.status===q.MaxZoomStatus.OK?n.zoom:!1,status),b.ack()})},x.getelevation=function(t){var
n,e=[],o=function(n,e){c(t,e===q.ElevationStatus.OK?n:!1,e),b.ack()};if(t.latLng)e.push(t.latLng);else for(e=h(t.td.locations||[]),n=0;n<e.length;n++)e[n]=m(e[n]);if(e.length)E().getElevationForLocations({locations:e},o);else{if(t.td.path&&t.td.path.length)for(n=0;n<t.td.path.length;n++)e.push(m(t.td.path[n]));e.length?E().getElevationAlongPath({path:e,samples:t.td.samples},o):b.ack()}},x.defaults=function(n){t.each(n.td,function(n,o){A[n]=e(A[n])?t.extend({},A[n],o):o}),b.ack(!0)},x.rectangle=function(n){var e=[],o="values"in n.td;return o||(n.td.values=[{options:n.opts}]),n.td.values.length?(t.each(n.td.values,function(t,o){var a,r,s=p(n,o);s.options.bounds=y(s.options.bounds?s.options.bounds:o),S||v(s.options.bounds.getCenter()),s.options.map=S,r=new A.classes.Rectangle(s.options),e.push(r),a=I.add({td:s},"rectangle",r),l(i,{td:s},r,a)}),void g(n,o?e:e[0])):void g(n,!1)},x.polyline=function(t){L(t,"Polyline","path")},x.polygon=function(t){L(t,"Polygon","paths")},x.trafficlayer=function(t){v();var n=I.get("trafficlayer");n||(n=new A.classes.TrafficLayer,n.setMap(S),I.add(t,"trafficlayer",n)),g(t,n)},x.bicyclinglayer=function(t){v();var n=I.get("bicyclinglayer");n||(n=new A.classes.BicyclingLayer,n.setMap(S),I.add(t,"bicyclinglayer",n)),g(t,n)},x.groundoverlay=function(t){t.opts.bounds=y(t.opts.bounds),t.opts.bounds&&v(t.opts.bounds.getCenter());var n,e=new A.classes.GroundOverlay(t.opts.url,t.opts.bounds,t.opts.opts);e.setMap(S),n=I.add(t,"groundoverlay",e),g(t,e,n)},x.streetviewpanorama=function(n){n.opts.opts||(n.opts.opts={}),n.latLng?n.opts.opts.position=n.latLng:n.opts.opts.position&&(n.opts.opts.position=m(n.opts.opts.position)),n.td.divId?n.opts.container=document.getElementById(n.td.divId):n.opts.container&&(n.opts.container=t(n.opts.container).get(0));var e,o=new A.classes.StreetViewPanorama(n.opts.container,n.opts.opts);o&&S.setStreetView(o),e=I.add(n,"streetviewpanorama",o),g(n,o,e)},x.kmllayer=function(n){var e=[],o="values"in n.td;return o||(n.td.values=[{options:n.opts}]),n.td.values.length?(t.each(n.td.values,function(t,o){var a,r,s,d=p(n,o);S||v(),s=d.options,d.options.opts&&(s=d.options.opts,d.options.url&&(s.url=d.options.url)),s.map=S,r=u("3.10")?new A.classes.KmlLayer(s):new A.classes.KmlLayer(s.url,s),e.push(r),a=I.add({td:d},"kmllayer",r),l(i,{td:d},r,a)}),void g(n,o?e:e[0])):void g(n,!1)},x.panel=function(n){v();var e,o,r=0,s=0,u=t(document.createElement("div"));u.css({position:"absolute",zIndex:1e3,visibility:"hidden"}),n.opts.content&&(o=t(n.opts.content),u.append(o),i.first().prepend(u),a(n.opts.left)?a(n.opts.right)?n.opts.center&&(r=(i.width()-o.width())/2):r=i.width()-o.width()-n.opts.right:r=n.opts.left,a(n.opts.top)?a(n.opts.bottom)?n.opts.middle&&(s=(i.height()-o.height())/2):s=i.height()-o.height()-n.opts.bottom:s=n.opts.top,u.css({top:s,left:r,visibility:"visible"})),e=I.add(n,"panel",u),g(n,u,e),u=null},x.directionsrenderer=function(n){n.opts.map=S;var e,o=new q.DirectionsRenderer(n.opts);n.td.divId?o.setPanel(document.getElementById(n.td.divId)):n.td.container&&o.setPanel(t(n.td.container).get(0)),e=I.add(n,"directionsrenderer",o),g(n,o,e)},x.getgeoloc=function(t){g(t,t.latLng)},x.styledmaptype=function(t){v();var n=new A.classes.StyledMapType(t.td.styles,t.opts);S.mapTypes.set(t.td.id,n),g(t,n)},x.imagemaptype=function(t){v();var n=new A.classes.ImageMapType(t.opts);S.mapTypes.set(t.td.id,n),g(t,n)},x.autofit=function(n){var e=new q.LatLngBounds;t.each(I.all(),function(t,n){n.getPosition?e.extend(n.getPosition()):n.getBounds?(e.extend(n.getBounds().getNorthEast()),e.extend(n.getBounds().getSouthWest())):n.getPaths?n.getPaths().forEach(function(t){t.forEach(function(t){e.extend(t)})}):n.getPath?n.getPath().forEach(function(t){e.extend(t)}):n.getCenter?e.extend(n.getCenter()):"function"==typeof _&&n instanceof _&&(n=I.getById(n.id(),!0),n&&n.autofit(e))}),e.isEmpty()||S.getBounds()&&S.getBounds().equals(e)||("maxZoom"in n.td&&q.event.addListenerOnce(S,"bounds_changed",function(){this.getZoom()>n.td.maxZoom&&this.setZoom(n.td.maxZoom)}),S.fitBounds(e)),g(n,!0)},x.clear=function(n){if(o(n.td)){if(I.clearById(n.td)||I.objClearById(n.td))return void g(n,!0);n.td={name:n.td}}n.td.id?t.each(h(n.td.id),function(t,n){I.clearById(n)||I.objClearById(n)}):(I.clear(h(n.td.name),n.td.last,n.td.first,n.td.tag),I.objClear(h(n.td.name),n.td.last,n.td.first,n.td.tag)),g(n,!0)},x.get=function(e,i,a){var r,s,u=i?e:e.td;return i||(a=u.full),o(u)?(s=I.getById(u,!1,a)||I.objGetById(u),s===!1&&(r=u,u={})):r=u.name,"map"===r&&(s=S),s||(s=[],u.id?(t.each(h(u.id),function(t,n){s.push(I.getById(n,!1,a)||I.objGetById(n))}),R(u.id)||(s=s[0])):(t.each(r?h(r):[n],function(n,e){var o;u.first?(o=I.get(e,!1,u.tag,a),o&&s.push(o)):u.all?t.each(I.all(e,u.tag,a),function(t,n){s.push(n)}):(o=I.get(e,!0,u.tag,a),o&&s.push(o))}),u.all||R(r)||(s=s[0]))),s=R(s)||!u.all?s:[s],i?s:void g(e,s)},x.exec=function(n){t.each(h(n.td.func),function(e,o){t.each(x.get(n.td,!0,n.td.hasOwnProperty("full")?n.td.full:!0),function(t,n){o.call(i,n)})}),g(n,!0)},x.trigger=function(n){if(o(n.td))q.event.trigger(S,n.td);else{var e=[S,n.td.eventName];n.td.var_args&&t.each(n.td.var_args,function(t,n){e.push(n)}),q.event.trigger.apply(q.event,e)}c(n),b.ack()}}var A,q,Z=0,z=t.isFunction,R=t.isArray,V={},G=new I;t.fn.gmap3=function(){var n,e=[],o=!0,i=[];for(r(),n=0;n<arguments.length;n++)arguments[n]&&e.push(arguments[n]);return e.length||e.push("map"),t.each(this,function(){var n=t(this),a=n.data("gmap3");o=!1,a||(a=new U(n),n.data("gmap3",a)),1!==e.length||"get"!==e[0]&&!x(e[0])?a._plan(e):i.push("get"===e[0]?a.get("map",!0):a.get(e[0].get,!0,e[0].get.full))}),i.length?1===i.length?i[0]:i:this}}(jQuery);


$("#map-canvas1").gmap3({
        action: "init",
        marker: {
            values: [ {
                latLng: [ 45.6985904, 9.665980099999956 ], 
                data: "Viale19",
                options: {
                    icon: "images/marker.png"
                }
            } ],
            options: {
                draggable: false
            },
            events: {
                mouseover: function(a, b, c) {
                    var d = $(this).gmap3("get"), e = $(this).gmap3({
                        get: {
                            name: "infowindow"
                        }
                    });
                    if (e) {
                        e.open(d, a);
                        e.setContent(c.data);
                    } else $(this).gmap3({
                        infowindow: {
                            anchor: a,
                            options: {
                                content: c.data
                            }
                        }
                    });
                },
                mouseout: function() {
                    var a = $(this).gmap3({
                        get: {
                            name: "infowindow"
                        }
                    });
                    if (a) a.close();
                }
            }
        },
        map: {
            options: {
                zoom: 14,
                zoomControl: true,
                mapTypeControl: true,
                scaleControl: true,
                scrollwheel: false,
                streetViewControl: true,
                draggable: true,
                styles:{
    "version": 8,
    "name": "Viale|19",
    "metadata": {
        "mapbox:autocomposite": true,
        "mapbox:type": "default",
        "mapbox:groups": {
            "1444934828655.3389": {
                "name": "Aeroways",
                "collapsed": true
            },
            "1444933322393.2852": {
                "name": "POI labels  (scalerank 1)",
                "collapsed": true
            },
            "1444855786460.0557": {
                "name": "Roads",
                "collapsed": true
            },
            "1444856071629.7817": {
                "name": "Place labels",
                "collapsed": true
            },
            "1444934295202.7542": {
                "name": "Admin boundaries",
                "collapsed": true
            },
            "1444856151690.9143": {
                "name": "State labels",
                "collapsed": true
            },
            "1444933721429.3076": {
                "name": "Road labels",
                "collapsed": true
            },
            "1444933358918.2366": {
                "name": "POI labels (scalerank 2)",
                "collapsed": true
            },
            "1444933808272.805": {
                "name": "Water labels",
                "collapsed": true
            },
            "1444933372896.5967": {
                "name": "POI labels (scalerank 3)",
                "collapsed": true
            },
            "1444855799204.86": {
                "name": "Bridges",
                "collapsed": true
            },
            "1444856087950.3635": {
                "name": "Marine labels",
                "collapsed": true
            },
            "1456969573402.7817": {
                "name": "Hillshading",
                "collapsed": true
            },
            "1444856869758.2375": {
                "name": "Wetlands",
                "collapsed": true
            },
            "1444862510685.128": {
                "name": "City labels",
                "collapsed": true
            },
            "1444855769305.6016": {
                "name": "Tunnels",
                "collapsed": true
            },
            "1456970288113.8113": {
                "name": "Landcover",
                "collapsed": false
            },
            "1444856144497.7825": {
                "name": "Country labels",
                "collapsed": true
            }
        },
        "mapbox:trackposition": false
    },
    "center": [
        9.666201368583273,
        45.698534342678414
    ],
    "zoom": 17.442774955154746,
    "bearing": 0,
    "pitch": 0,
    "sources": {
        "composite": {
            "url": "mapbox://mapbox.mapbox-terrain-v2,mapbox.mapbox-streets-v7",
            "type": "vector"
        }
    },
    "sprite": "mapbox://sprites/viale19/cisbu55iw001g2xpevhgwzavw",
    "glyphs": "mapbox://fonts/viale19/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "interactive": true,
            "layout": {},
            "paint": {
                "background-color": "hsl(0, 100%, 99%)",
                "background-opacity": 1
            }
        },
        {
            "id": "landcover_wood",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1456970288113.8113"
            },
            "source": "composite",
            "source-layer": "landcover",
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "==",
                "class",
                "wood"
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(55, 1%, 20%)",
                "fill-opacity": 0.1,
                "fill-antialias": false
            }
        },
        {
            "id": "landcover_scrub",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1456970288113.8113"
            },
            "source": "composite",
            "source-layer": "landcover",
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "==",
                "class",
                "scrub"
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(55, 1%, 20%)",
                "fill-opacity": 0.1,
                "fill-antialias": false
            }
        },
        {
            "id": "landcover_grass",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1456970288113.8113"
            },
            "source": "composite",
            "source-layer": "landcover",
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "==",
                "class",
                "grass"
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(122, 56%, 50%)",
                "fill-opacity": 0.1,
                "fill-antialias": false
            }
        },
        {
            "id": "landcover_crop",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1456970288113.8113"
            },
            "source": "composite",
            "source-layer": "landcover",
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "==",
                "class",
                "crop"
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(55, 1%, 20%)",
                "fill-opacity": 0.1,
                "fill-antialias": false
            }
        },
        {
            "id": "national_park",
            "type": "fill",
            "source": "composite",
            "source-layer": "landuse_overlay",
            "interactive": true,
            "filter": [
                "==",
                "class",
                "national_park"
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(132, 2%, 20%)",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            0
                        ],
                        [
                            6,
                            0.5
                        ]
                    ]
                }
            }
        },
        {
            "id": "parks",
            "type": "fill",
            "source": "composite",
            "source-layer": "landuse",
            "interactive": true,
            "filter": [
                "==",
                "class",
                "park"
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(132, 74%, 47%)",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            0
                        ],
                        [
                            6,
                            0.75
                        ]
                    ]
                }
            }
        },
        {
            "id": "pitch",
            "type": "fill",
            "source": "composite",
            "source-layer": "landuse",
            "interactive": true,
            "filter": [
                "==",
                "class",
                "pitch"
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(132, 2%, 20%)"
            }
        },
        {
            "id": "industrial",
            "type": "fill",
            "source": "composite",
            "source-layer": "landuse",
            "interactive": true,
            "filter": [
                "==",
                "class",
                "industrial"
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(0, 0%, 20%)"
            }
        },
        {
            "id": "sand",
            "type": "fill",
            "source": "composite",
            "source-layer": "landuse",
            "interactive": true,
            "filter": [
                "==",
                "class",
                "sand"
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(132, 2%, 20%)"
            }
        },
        {
            "id": "hillshade_highlight_bright",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1456969573402.7817"
            },
            "source": "composite",
            "source-layer": "hillshade",
            "maxzoom": 16,
            "interactive": true,
            "filter": [
                "==",
                "level",
                94
            ],
            "layout": {},
            "paint": {
                "fill-color": "#fff",
                "fill-opacity": {
                    "stops": [
                        [
                            14,
                            0.04
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "fill-antialias": false
            }
        },
        {
            "id": "hillshade_highlight_med",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1456969573402.7817"
            },
            "source": "composite",
            "source-layer": "hillshade",
            "maxzoom": 16,
            "interactive": true,
            "filter": [
                "==",
                "level",
                90
            ],
            "layout": {},
            "paint": {
                "fill-color": "#fff",
                "fill-opacity": {
                    "stops": [
                        [
                            14,
                            0.04
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "fill-antialias": false
            }
        },
        {
            "id": "hillshade_shadow_faint",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1456969573402.7817"
            },
            "source": "composite",
            "source-layer": "hillshade",
            "maxzoom": 16,
            "interactive": true,
            "filter": [
                "==",
                "level",
                89
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(0, 0%, 35%)",
                "fill-opacity": {
                    "stops": [
                        [
                            14,
                            0.033
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "fill-antialias": false
            }
        },
        {
            "id": "hillshade_shadow_med",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1456969573402.7817"
            },
            "source": "composite",
            "source-layer": "hillshade",
            "maxzoom": 16,
            "interactive": true,
            "filter": [
                "==",
                "level",
                78
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(0, 0%, 35%)",
                "fill-opacity": {
                    "stops": [
                        [
                            14,
                            0.033
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "fill-antialias": false
            }
        },
        {
            "id": "hillshade_shadow_dark",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1456969573402.7817"
            },
            "source": "composite",
            "source-layer": "hillshade",
            "maxzoom": 16,
            "interactive": true,
            "filter": [
                "==",
                "level",
                67
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(0, 0%, 35%)",
                "fill-opacity": {
                    "stops": [
                        [
                            14,
                            0.06
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "fill-antialias": false
            }
        },
        {
            "id": "hillshade_shadow_extreme",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1456969573402.7817"
            },
            "source": "composite",
            "source-layer": "hillshade",
            "maxzoom": 16,
            "interactive": true,
            "filter": [
                "==",
                "level",
                56
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(0, 0%, 35%)",
                "fill-opacity": {
                    "stops": [
                        [
                            14,
                            0.06
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "fill-antialias": false
            }
        },
        {
            "id": "waterway-river-canal",
            "type": "line",
            "source": "composite",
            "source-layer": "waterway",
            "minzoom": 8,
            "interactive": true,
            "filter": [
                "any",
                [
                    "==",
                    "class",
                    "canal"
                ],
                [
                    "==",
                    "class",
                    "river"
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "butt"
                        ],
                        [
                            11,
                            "round"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(185, 2%, 10%)",
                "line-width": {
                    "base": 1.3,
                    "stops": [
                        [
                            8.5,
                            0.1
                        ],
                        [
                            20,
                            8
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            0
                        ],
                        [
                            8.5,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "water shadow",
            "type": "fill",
            "source": "composite",
            "source-layer": "water",
            "interactive": true,
            "layout": {},
            "paint": {
                "fill-color": "hsl(185, 3%, 5%)",
                "fill-translate": {
                    "base": 1.2,
                    "stops": [
                        [
                            7,
                            [
                                0,
                                0
                            ]
                        ],
                        [
                            16,
                            [
                                -1,
                                -1
                            ]
                        ]
                    ]
                },
                "fill-translate-anchor": "viewport",
                "fill-opacity": 1
            }
        },
        {
            "id": "water",
            "ref": "water shadow",
            "interactive": true,
            "paint": {
                "fill-color": "hsl(185, 98%, 51%)"
            }
        },
        {
            "id": "barrier_line-land-polygon",
            "type": "fill",
            "source": "composite",
            "source-layer": "barrier_line",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Polygon"
                ],
                [
                    "==",
                    "class",
                    "land"
                ]
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(55, 1%, 20%)",
                "fill-outline-color": "hsl(55, 1%, 20%)"
            }
        },
        {
            "id": "barrier_line-land-line",
            "type": "line",
            "source": "composite",
            "source-layer": "barrier_line",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "class",
                    "land"
                ]
            ],
            "layout": {
                "line-cap": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.99,
                    "stops": [
                        [
                            14,
                            0.75
                        ],
                        [
                            20,
                            40
                        ]
                    ]
                },
                "line-color": "hsl(55, 1%, 20%)"
            }
        },
        {
            "id": "aeroway-polygon",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1444934828655.3389"
            },
            "source": "composite",
            "source-layer": "aeroway",
            "minzoom": 11,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!=",
                    "type",
                    "apron"
                ],
                [
                    "==",
                    "$type",
                    "Polygon"
                ]
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(0, 0%, 27%)",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            11,
                            0
                        ],
                        [
                            11.5,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "aeroway-runway",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444934828655.3389"
            },
            "source": "composite",
            "source-layer": "aeroway",
            "minzoom": 9,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "type",
                    "runway"
                ]
            ],
            "layout": {},
            "paint": {
                "line-color": "hsl(0, 0%, 27%)",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            9,
                            1
                        ],
                        [
                            18,
                            80
                        ]
                    ]
                }
            }
        },
        {
            "id": "aeroway-taxiway",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444934828655.3389"
            },
            "source": "composite",
            "source-layer": "aeroway",
            "minzoom": 9,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "type",
                    "taxiway"
                ]
            ],
            "layout": {},
            "paint": {
                "line-color": "hsl(0, 0%, 27%)",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            10,
                            0.5
                        ],
                        [
                            18,
                            20
                        ]
                    ]
                }
            }
        },
        {
            "id": "building",
            "type": "fill",
            "source": "composite",
            "source-layer": "building",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "==",
                "underground",
                "false"
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(0, 0%, 0%)",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            15.5,
                            0
                        ],
                        [
                            16,
                            1
                        ]
                    ]
                },
                "fill-outline-color": "hsl(55, 1%, 15%)",
                "fill-antialias": true
            }
        },
        {
            "id": "tunnel-street-low",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "street"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-color": "hsl(185, 2%, 15%)",
                "line-opacity": {
                    "stops": [
                        [
                            11.5,
                            0
                        ],
                        [
                            12,
                            1
                        ],
                        [
                            14,
                            1
                        ],
                        [
                            14.01,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "tunnel-street_limited-low",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "street_limited"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-color": "hsl(185, 2%, 15%)",
                "line-opacity": {
                    "stops": [
                        [
                            11.5,
                            0
                        ],
                        [
                            12,
                            1
                        ],
                        [
                            14,
                            1
                        ],
                        [
                            14.01,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "tunnel-service-link-track-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!=",
                    "type",
                    "trunk_link"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ],
                [
                    "in",
                    "class",
                    "link",
                    "service",
                    "track"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.75
                        ],
                        [
                            20,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(185, 2%, 29%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            0.5
                        ],
                        [
                            18,
                            12
                        ]
                    ]
                },
                "line-dasharray": [
                    3,
                    3
                ]
            }
        },
        {
            "id": "tunnel-street_limited-case",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "ref": "tunnel-street_limited-low",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.75
                        ],
                        [
                            20,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(185, 2%, 29%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            13,
                            0
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-dasharray": [
                    3,
                    3
                ],
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13.99,
                            0
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "tunnel-street-case",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "ref": "tunnel-street-low",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.75
                        ],
                        [
                            20,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(185, 2%, 29%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            13,
                            0
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-dasharray": [
                    3,
                    3
                ],
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13.99,
                            0
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "tunnel-secondary-tertiary-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "structure",
                    "tunnel"
                ],
                [
                    "in",
                    "class",
                    "secondary",
                    "tertiary"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            10,
                            0.75
                        ],
                        [
                            18,
                            2
                        ]
                    ]
                },
                "line-dasharray": [
                    3,
                    3
                ],
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            8.5,
                            0.5
                        ],
                        [
                            10,
                            0.75
                        ],
                        [
                            18,
                            26
                        ]
                    ]
                },
                "line-color": "hsl(185, 2%, 29%)"
            }
        },
        {
            "id": "tunnel-primary-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "primary"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            16,
                            2
                        ]
                    ]
                },
                "line-dasharray": [
                    3,
                    3
                ],
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                "line-color": "hsl(185, 2%, 29%)"
            }
        },
        {
            "id": "tunnel-trunk_link-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "structure",
                    "tunnel"
                ],
                [
                    "==",
                    "type",
                    "trunk_link"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.75
                        ],
                        [
                            20,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(185, 2%, 29%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-dasharray": [
                    3,
                    3
                ]
            }
        },
        {
            "id": "tunnel-motorway_link-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway_link"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.75
                        ],
                        [
                            20,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(185, 2%, 29%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-dasharray": [
                    3,
                    3
                ]
            }
        },
        {
            "id": "tunnel-trunk-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "structure",
                    "tunnel"
                ],
                [
                    "==",
                    "type",
                    "trunk"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            16,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(185, 2%, 29%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                "line-opacity": 1,
                "line-dasharray": [
                    3,
                    3
                ]
            }
        },
        {
            "id": "tunnel-motorway-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            16,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(185, 2%, 29%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                "line-opacity": 1,
                "line-dasharray": [
                    3,
                    3
                ]
            }
        },
        {
            "id": "tunnel-construction",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "construction"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ]
            ],
            "layout": {
                "line-join": "miter"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-color": "hsl(185, 2%, 15%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13.99,
                            0
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                },
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            [
                                0.4,
                                0.8
                            ]
                        ],
                        [
                            15,
                            [
                                0.3,
                                0.6
                            ]
                        ],
                        [
                            16,
                            [
                                0.2,
                                0.3
                            ]
                        ],
                        [
                            17,
                            [
                                0.2,
                                0.25
                            ]
                        ],
                        [
                            18,
                            [
                                0.15,
                                0.15
                            ]
                        ]
                    ]
                }
            }
        },
        {
            "id": "tunnel-path",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "!=",
                    "type",
                    "steps"
                ],
                [
                    "==",
                    "class",
                    "path"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            15,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ]
                },
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            [
                                1,
                                0
                            ]
                        ],
                        [
                            15,
                            [
                                1.75,
                                1
                            ]
                        ],
                        [
                            16,
                            [
                                1,
                                0.75
                            ]
                        ],
                        [
                            17,
                            [
                                1,
                                0.5
                            ]
                        ]
                    ]
                },
                "line-color": "hsl(185, 2%, 15%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0
                        ],
                        [
                            14.25,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "tunnel-steps",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "==",
                        "structure",
                        "tunnel"
                    ],
                    [
                        "==",
                        "type",
                        "steps"
                    ]
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            15,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ]
                },
                "line-color": "hsl(185, 2%, 15%)",
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            [
                                1,
                                0
                            ]
                        ],
                        [
                            15,
                            [
                                1.75,
                                1
                            ]
                        ],
                        [
                            16,
                            [
                                1,
                                0.75
                            ]
                        ],
                        [
                            17,
                            [
                                0.3,
                                0.3
                            ]
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0
                        ],
                        [
                            14.25,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "tunnel-trunk_link",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "ref": "tunnel-trunk_link-case",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-color": "hsl(185, 2%, 15%)",
                "line-opacity": 1,
                "line-dasharray": [
                    1,
                    0
                ]
            }
        },
        {
            "id": "tunnel-motorway_link",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "ref": "tunnel-motorway_link-case",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-color": "hsl(185, 2%, 15%)",
                "line-opacity": 1,
                "line-dasharray": [
                    1,
                    0
                ]
            }
        },
        {
            "id": "tunnel-pedestrian",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "==",
                        "class",
                        "pedestrian"
                    ],
                    [
                        "==",
                        "structure",
                        "tunnel"
                    ]
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            0.5
                        ],
                        [
                            18,
                            12
                        ]
                    ]
                },
                "line-color": "hsl(185, 2%, 15%)",
                "line-opacity": 1,
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            [
                                1,
                                0
                            ]
                        ],
                        [
                            15,
                            [
                                1.5,
                                0.4
                            ]
                        ],
                        [
                            16,
                            [
                                1,
                                0.2
                            ]
                        ]
                    ]
                }
            }
        },
        {
            "id": "tunnel-service-link-track",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "ref": "tunnel-service-link-track-case",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            0.5
                        ],
                        [
                            18,
                            12
                        ]
                    ]
                },
                "line-color": "hsl(185, 2%, 15%)",
                "line-dasharray": [
                    1,
                    0
                ]
            }
        },
        {
            "id": "tunnel-street_limited",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "ref": "tunnel-street_limited-low",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-color": "hsl(185, 2%, 15%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13.99,
                            0
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "tunnel-street",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "ref": "tunnel-street-low",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-color": "hsl(185, 2%, 15%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13.99,
                            0
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "tunnel-secondary-tertiary",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "ref": "tunnel-secondary-tertiary-case",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            8.5,
                            0.5
                        ],
                        [
                            10,
                            0.75
                        ],
                        [
                            18,
                            26
                        ]
                    ]
                },
                "line-color": "hsl(185, 2%, 15%)",
                "line-opacity": 1,
                "line-dasharray": [
                    1,
                    0
                ],
                "line-blur": 0
            }
        },
        {
            "id": "tunnel-primary",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "ref": "tunnel-primary-case",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                "line-color": "hsl(185, 2%, 15%)",
                "line-opacity": 1,
                "line-dasharray": [
                    1,
                    0
                ],
                "line-blur": 0
            }
        },
        {
            "id": "tunnel-trunk",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "trunk"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                "line-color": "hsl(185, 2%, 15%)"
            }
        },
        {
            "id": "tunnel-motorway",
            "metadata": {
                "mapbox:group": "1444855769305.6016"
            },
            "ref": "tunnel-motorway-case",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                "line-dasharray": [
                    1,
                    0
                ],
                "line-opacity": 1,
                "line-color": "hsl(185, 2%, 15%)",
                "line-blur": 0
            }
        },
        {
            "id": "road-pedestrian-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "==",
                        "class",
                        "pedestrian"
                    ],
                    [
                        "==",
                        "structure",
                        "none"
                    ]
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            14.5
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-gap-width": 0,
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13.9,
                            0
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-street-low",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "==",
                        "class",
                        "street"
                    ],
                    [
                        "==",
                        "structure",
                        "none"
                    ]
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-opacity": {
                    "stops": [
                        [
                            11,
                            0
                        ],
                        [
                            11.25,
                            1
                        ],
                        [
                            14,
                            1
                        ],
                        [
                            14.01,
                            0
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-street_limited-low",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "==",
                        "class",
                        "street_limited"
                    ],
                    [
                        "==",
                        "structure",
                        "none"
                    ]
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-opacity": {
                    "stops": [
                        [
                            11,
                            0
                        ],
                        [
                            11.25,
                            1
                        ],
                        [
                            14,
                            1
                        ],
                        [
                            14.01,
                            0
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-service-link-track-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!=",
                    "type",
                    "trunk_link"
                ],
                [
                    "!in",
                    "structure",
                    "bridge",
                    "tunnel"
                ],
                [
                    "in",
                    "class",
                    "link",
                    "service",
                    "track"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.75
                        ],
                        [
                            20,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            0.5
                        ],
                        [
                            18,
                            12
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13.9,
                            0
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-street_limited-case",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "ref": "road-street_limited-low",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.75
                        ],
                        [
                            20,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            13,
                            0
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13.9,
                            0
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-street-case",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "ref": "road-street-low",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.75
                        ],
                        [
                            20,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            13,
                            0
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13.9,
                            0
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-main-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "structure",
                    "bridge",
                    "tunnel"
                ],
                [
                    "in",
                    "class",
                    "secondary",
                    "tertiary"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            10,
                            0.75
                        ],
                        [
                            18,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            8.5,
                            0.5
                        ],
                        [
                            10,
                            0.75
                        ],
                        [
                            18,
                            26
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            6,
                            0
                        ],
                        [
                            7,
                            0.4
                        ],
                        [
                            9,
                            0.5
                        ],
                        [
                            10,
                            1
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-primary-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "structure",
                    "bridge",
                    "tunnel"
                ],
                [
                    "==",
                    "class",
                    "primary"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            16,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            6,
                            0
                        ],
                        [
                            7,
                            0.4
                        ],
                        [
                            9,
                            0.5
                        ],
                        [
                            10,
                            1
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-motorway_link-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 10,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "structure",
                    "bridge",
                    "tunnel"
                ],
                [
                    "==",
                    "class",
                    "motorway_link"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.75
                        ],
                        [
                            20,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            6,
                            0
                        ],
                        [
                            7,
                            0.4
                        ],
                        [
                            9,
                            0.5
                        ],
                        [
                            10,
                            1
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-trunk_link-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "structure",
                    "bridge",
                    "tunnel"
                ],
                [
                    "==",
                    "type",
                    "trunk_link"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.75
                        ],
                        [
                            20,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            6,
                            0
                        ],
                        [
                            7,
                            0.4
                        ],
                        [
                            9,
                            0.5
                        ],
                        [
                            10,
                            1
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-trunk-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 5,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "structure",
                    "bridge",
                    "tunnel"
                ],
                [
                    "==",
                    "class",
                    "trunk"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            7,
                            0.5
                        ],
                        [
                            10,
                            1
                        ],
                        [
                            16,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            9,
                            1.4
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            6,
                            0
                        ],
                        [
                            6.1,
                            1
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-motorway-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "structure",
                    "bridge",
                    "tunnel"
                ],
                [
                    "==",
                    "class",
                    "motorway"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            7,
                            0.5
                        ],
                        [
                            10,
                            1
                        ],
                        [
                            16,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                "line-opacity": 1,
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-construction",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "==",
                        "class",
                        "construction"
                    ],
                    [
                        "==",
                        "structure",
                        "none"
                    ]
                ]
            ],
            "layout": {
                "line-join": "miter"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13.99,
                            0
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                },
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            [
                                0.4,
                                0.8
                            ]
                        ],
                        [
                            15,
                            [
                                0.3,
                                0.6
                            ]
                        ],
                        [
                            16,
                            [
                                0.2,
                                0.3
                            ]
                        ],
                        [
                            17,
                            [
                                0.2,
                                0.25
                            ]
                        ],
                        [
                            18,
                            [
                                0.15,
                                0.15
                            ]
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-sidewalks",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "!in",
                        "structure",
                        "bridge",
                        "tunnel"
                    ],
                    [
                        "in",
                        "type",
                        "crossing",
                        "sidewalk"
                    ]
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            15,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            [
                                1,
                                0
                            ]
                        ],
                        [
                            15,
                            [
                                1.75,
                                1
                            ]
                        ],
                        [
                            16,
                            [
                                1,
                                0.75
                            ]
                        ],
                        [
                            17,
                            [
                                1,
                                0.5
                            ]
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            16,
                            0
                        ],
                        [
                            16.25,
                            1
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-path",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "!in",
                        "structure",
                        "bridge",
                        "tunnel"
                    ],
                    [
                        "!in",
                        "type",
                        "crossing",
                        "sidewalk",
                        "steps"
                    ],
                    [
                        "==",
                        "class",
                        "path"
                    ]
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            15,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            [
                                1,
                                0
                            ]
                        ],
                        [
                            15,
                            [
                                1.75,
                                1
                            ]
                        ],
                        [
                            16,
                            [
                                1,
                                0.75
                            ]
                        ],
                        [
                            17,
                            [
                                1,
                                0.5
                            ]
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0
                        ],
                        [
                            14.25,
                            1
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-steps",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "!in",
                        "structure",
                        "bridge",
                        "tunnel"
                    ],
                    [
                        "==",
                        "type",
                        "steps"
                    ]
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            15,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            [
                                1,
                                0
                            ]
                        ],
                        [
                            15,
                            [
                                1.75,
                                1
                            ]
                        ],
                        [
                            16,
                            [
                                1,
                                0.75
                            ]
                        ],
                        [
                            17,
                            [
                                0.3,
                                0.3
                            ]
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0
                        ],
                        [
                            14.25,
                            1
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-trunk_link",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "ref": "road-trunk_link-case",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-opacity": 1,
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-motorway_link",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "ref": "road-motorway_link-case",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-opacity": 1,
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-pedestrian",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "ref": "road-pedestrian-case",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            0.5
                        ],
                        [
                            18,
                            12
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-opacity": 1,
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            [
                                1,
                                0
                            ]
                        ],
                        [
                            15,
                            [
                                1.5,
                                0.4
                            ]
                        ],
                        [
                            16,
                            [
                                1,
                                0.2
                            ]
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-service-link-track",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!=",
                    "type",
                    "trunk_link"
                ],
                [
                    "!in",
                    "structure",
                    "bridge",
                    "tunnel"
                ],
                [
                    "in",
                    "class",
                    "link",
                    "service",
                    "track"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            0.5
                        ],
                        [
                            18,
                            12
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-street_limited",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "ref": "road-street_limited-low",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13.99,
                            0
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-street",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "ref": "road-street-low",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13.99,
                            0
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-secondary-tertiary",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "ref": "road-main-case",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            8.5,
                            0.5
                        ],
                        [
                            10,
                            0.75
                        ],
                        [
                            18,
                            26
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-opacity": {
                    "base": 1.2,
                    "stops": [
                        [
                            5,
                            0
                        ],
                        [
                            5.5,
                            1
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-primary",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "ref": "road-primary-case",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-opacity": {
                    "base": 1.2,
                    "stops": [
                        [
                            5,
                            0
                        ],
                        [
                            5.5,
                            1
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-trunk",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "ref": "road-trunk-case",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            9,
                            1.4
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-opacity": 1,
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-motorway",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "ref": "road-motorway-case",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                "line-color": "hsl(0, 100%, 49%)",
                "line-opacity": 1,
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-rail",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855786460.0557"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "structure",
                    "bridge",
                    "tunnel"
                ],
                [
                    "in",
                    "class",
                    "major_rail",
                    "minor_rail"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 100%, 49%)",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0.75
                        ],
                        [
                            20,
                            1
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            22,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-pedestrian-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "==",
                        "class",
                        "pedestrian"
                    ],
                    [
                        "==",
                        "structure",
                        "bridge"
                    ]
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            14.5
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 17%)",
                "line-gap-width": 0,
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13.99,
                            0
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-street-low",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "street"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 27%)",
                "line-opacity": {
                    "stops": [
                        [
                            11.5,
                            0
                        ],
                        [
                            12,
                            1
                        ],
                        [
                            14,
                            1
                        ],
                        [
                            14.01,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-street_limited-low",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "street_limited"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 27%)",
                "line-opacity": {
                    "stops": [
                        [
                            11.5,
                            0
                        ],
                        [
                            12,
                            1
                        ],
                        [
                            14,
                            1
                        ],
                        [
                            14.01,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-service-link-track-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!=",
                    "type",
                    "trunk_link"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    "in",
                    "class",
                    "link",
                    "service",
                    "track"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.75
                        ],
                        [
                            20,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 17%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            0.5
                        ],
                        [
                            18,
                            12
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-street_limited-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "street_limited"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.75
                        ],
                        [
                            20,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 17%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            13,
                            0
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-street-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "street"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.75
                        ],
                        [
                            20,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 17%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13.99,
                            0
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                },
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            13,
                            0
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-secondary-tertiary-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    "in",
                    "class",
                    "secondary",
                    "tertiary"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            10,
                            0.75
                        ],
                        [
                            18,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 17%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            8.5,
                            0.5
                        ],
                        [
                            10,
                            0.75
                        ],
                        [
                            18,
                            26
                        ]
                    ]
                },
                "line-translate": [
                    0,
                    0
                ]
            }
        },
        {
            "id": "bridge-primary-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "primary"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            16,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 17%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                "line-translate": [
                    0,
                    0
                ]
            }
        },
        {
            "id": "bridge-trunk_link-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    "==",
                    "type",
                    "trunk_link"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.75
                        ],
                        [
                            20,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 17%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            10.99,
                            0
                        ],
                        [
                            11,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-motorway_link-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "<=",
                    "layer",
                    1
                ],
                [
                    "==",
                    "class",
                    "motorway_link"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.75
                        ],
                        [
                            20,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 17%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-opacity": 1
            }
        },
        {
            "id": "bridge-trunk-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "trunk"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            10,
                            1
                        ],
                        [
                            16,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 17%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-motorway-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            7,
                            0.5
                        ],
                        [
                            10,
                            1
                        ],
                        [
                            16,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 17%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-construction",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "construction"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ]
            ],
            "layout": {
                "line-join": "miter"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 27%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13.99,
                            0
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                },
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            [
                                0.4,
                                0.8
                            ]
                        ],
                        [
                            15,
                            [
                                0.3,
                                0.6
                            ]
                        ],
                        [
                            16,
                            [
                                0.2,
                                0.3
                            ]
                        ],
                        [
                            17,
                            [
                                0.2,
                                0.25
                            ]
                        ],
                        [
                            18,
                            [
                                0.15,
                                0.15
                            ]
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-path",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "!=",
                    "type",
                    "steps"
                ],
                [
                    "==",
                    "class",
                    "path"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            15,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 27%)",
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            [
                                1,
                                0
                            ]
                        ],
                        [
                            15,
                            [
                                1.75,
                                1
                            ]
                        ],
                        [
                            16,
                            [
                                1,
                                0.75
                            ]
                        ],
                        [
                            17,
                            [
                                1,
                                0.5
                            ]
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0
                        ],
                        [
                            14.25,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-steps",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "==",
                        "structure",
                        "bridge"
                    ],
                    [
                        "==",
                        "type",
                        "steps"
                    ]
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            15,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 27%)",
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            [
                                1,
                                0
                            ]
                        ],
                        [
                            15,
                            [
                                1.75,
                                1
                            ]
                        ],
                        [
                            16,
                            [
                                1,
                                0.75
                            ]
                        ],
                        [
                            17,
                            [
                                0.3,
                                0.3
                            ]
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0
                        ],
                        [
                            14.25,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-trunk_link",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "layer",
                    2,
                    3,
                    4,
                    5
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    "==",
                    "type",
                    "trunk_link"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 27%)"
            }
        },
        {
            "id": "bridge-motorway_link",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "layer",
                    2,
                    3,
                    4,
                    5
                ],
                [
                    "==",
                    "class",
                    "motorway_link"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 27%)"
            }
        },
        {
            "id": "bridge-pedestrian",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "ref": "bridge-pedestrian-case",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            0.5
                        ],
                        [
                            18,
                            12
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 27%)",
                "line-opacity": 1,
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            [
                                1,
                                0
                            ]
                        ],
                        [
                            15,
                            [
                                1.5,
                                0.4
                            ]
                        ],
                        [
                            16,
                            [
                                1,
                                0.2
                            ]
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-service-link-track",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!=",
                    "type",
                    "trunk_link"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    "in",
                    "class",
                    "link",
                    "service",
                    "track"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            0.5
                        ],
                        [
                            18,
                            12
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 27%)"
            }
        },
        {
            "id": "bridge-street_limited",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "ref": "bridge-street_limited-low",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 27%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13.99,
                            0
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-street",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "ref": "bridge-street-low",
            "interactive": true,
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 27%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13.99,
                            0
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-secondary-tertiary",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    "in",
                    "type",
                    "secondary",
                    "tertiary"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            8.5,
                            0.5
                        ],
                        [
                            10,
                            0.75
                        ],
                        [
                            18,
                            26
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 27%)",
                "line-opacity": {
                    "base": 1.2,
                    "stops": [
                        [
                            5,
                            0
                        ],
                        [
                            5.5,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-primary",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    "==",
                    "type",
                    "primary"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 27%)",
                "line-opacity": {
                    "base": 1.2,
                    "stops": [
                        [
                            5,
                            0
                        ],
                        [
                            5.5,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-trunk",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "layer",
                    2,
                    3,
                    4,
                    5
                ],
                [
                    "==",
                    "class",
                    "trunk"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 27%)"
            }
        },
        {
            "id": "bridge-motorway",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "layer",
                    2,
                    3,
                    4,
                    5
                ],
                [
                    "==",
                    "class",
                    "motorway"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 27%)"
            }
        },
        {
            "id": "bridge-rail",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    "in",
                    "class",
                    "major_rail",
                    "minor_rail"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 17%)",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0.75
                        ],
                        [
                            20,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-trunk_link-2-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    "==",
                    "type",
                    "trunk_link"
                ],
                [
                    ">=",
                    "layer",
                    2
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.75
                        ],
                        [
                            20,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 27%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            10.99,
                            0
                        ],
                        [
                            11,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-motorway_link-2-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway_link"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    ">=",
                    "layer",
                    2
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.75
                        ],
                        [
                            20,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 17%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-opacity": 1
            }
        },
        {
            "id": "bridge-trunk-2-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "trunk"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    ">=",
                    "layer",
                    2
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            10,
                            1
                        ],
                        [
                            16,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 27%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-motorway-2-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    ">=",
                    "layer",
                    2
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            7,
                            0.5
                        ],
                        [
                            10,
                            1
                        ],
                        [
                            16,
                            2
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 17%)",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-trunk_link-2",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    "==",
                    "type",
                    "trunk_link"
                ],
                [
                    ">=",
                    "layer",
                    2
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 27%)"
            }
        },
        {
            "id": "bridge-motorway_link-2",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway_link"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    ">=",
                    "layer",
                    2
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 27%)"
            }
        },
        {
            "id": "bridge-trunk-2",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "trunk"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    ">=",
                    "layer",
                    2
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 27%)"
            }
        },
        {
            "id": "bridge-motorway-2",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444855799204.86"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    ">=",
                    "layer",
                    2
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 27%)"
            }
        },
        {
            "id": "admin-3-4-boundaries-bg",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444934295202.7542"
            },
            "source": "composite",
            "source-layer": "admin",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "maritime",
                    0
                ],
                [
                    ">=",
                    "admin_level",
                    3
                ]
            ],
            "layout": {
                "line-join": "bevel"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 10%)",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            3.5
                        ],
                        [
                            10,
                            8
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            4,
                            0
                        ],
                        [
                            6,
                            0.75
                        ]
                    ]
                },
                "line-dasharray": [
                    1,
                    0
                ],
                "line-translate": [
                    0,
                    0
                ],
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            8,
                            3
                        ]
                    ]
                }
            }
        },
        {
            "id": "admin-2-boundaries-bg",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444934295202.7542"
            },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 1,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "admin_level",
                    2
                ],
                [
                    "==",
                    "maritime",
                    0
                ]
            ],
            "layout": {
                "line-join": "miter"
            },
            "paint": {
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            3.5
                        ],
                        [
                            10,
                            10
                        ]
                    ]
                },
                "line-color": "hsl(0, 0%, 10%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            4,
                            0.5
                        ]
                    ]
                },
                "line-translate": [
                    0,
                    0
                ],
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            10,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "admin-3-4-boundaries",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444934295202.7542"
            },
            "source": "composite",
            "source-layer": "admin",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "maritime",
                    0
                ],
                [
                    ">=",
                    "admin_level",
                    3
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round"
            },
            "paint": {
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            6,
                            [
                                2,
                                0
                            ]
                        ],
                        [
                            7,
                            [
                                2,
                                2,
                                6,
                                2
                            ]
                        ]
                    ]
                },
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0.75
                        ],
                        [
                            12,
                            1.5
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            2,
                            0
                        ],
                        [
                            3,
                            1
                        ]
                    ]
                },
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            4,
                            "hsl(0, 0%, 27%)"
                        ],
                        [
                            5,
                            "hsl(0, 0%, 35%)"
                        ]
                    ]
                }
            }
        },
        {
            "id": "admin-2-boundaries",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444934295202.7542"
            },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 1,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "admin_level",
                    2
                ],
                [
                    "==",
                    "disputed",
                    0
                ],
                [
                    "==",
                    "maritime",
                    0
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 43%)",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0.5
                        ],
                        [
                            10,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "admin-2-boundaries-dispute",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444934295202.7542"
            },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 1,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "admin_level",
                    2
                ],
                [
                    "==",
                    "disputed",
                    1
                ],
                [
                    "==",
                    "maritime",
                    0
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-dasharray": [
                    1.5,
                    1.5
                ],
                "line-color": "hsl(0, 0%, 14%)",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0.5
                        ],
                        [
                            10,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "waterway-label",
            "type": "symbol",
            "source": "composite",
            "source-layer": "waterway_label",
            "minzoom": 12,
            "interactive": true,
            "filter": [
                "in",
                "class",
                "canal",
                "river"
            ],
            "layout": {
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "text-max-angle": 30,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            13,
                            12
                        ],
                        [
                            18,
                            16
                        ]
                    ]
                }
            },
            "paint": {
                "text-halo-width": 0,
                "text-halo-blur": 0,
                "text-color": "hsl(0, 0%, 32%)"
            }
        },
        {
            "id": "poi-scalerank3",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444933372896.5967"
            },
            "source": "composite",
            "source-layer": "poi_label",
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "maki",
                    "campsite",
                    "cemetery",
                    "dog-park",
                    "garden",
                    "golf",
                    "park",
                    "picnic-site",
                    "playground",
                    "zoo"
                ],
                [
                    "==",
                    "scalerank",
                    3
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            16,
                            11
                        ],
                        [
                            20,
                            13
                        ]
                    ]
                },
                "text-max-angle": 38,
                "symbol-spacing": 250,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 1,
                "text-offset": [
                    0,
                    0
                ],
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01,
                "text-max-width": 8
            },
            "paint": {
                "text-color": "hsl(0, 0%, 60%)",
                "text-halo-color": "#212121",
                "text-halo-width": 1,
                "text-halo-blur": 0
            }
        },
        {
            "id": "poi-parks-scalerank3",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444933372896.5967"
            },
            "source": "composite",
            "source-layer": "poi_label",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "scalerank",
                    3
                ],
                [
                    "in",
                    "maki",
                    "campsite",
                    "cemetery",
                    "dog-park",
                    "garden",
                    "golf",
                    "park",
                    "picnic-site",
                    "playground",
                    "zoo"
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            16,
                            11
                        ],
                        [
                            20,
                            12
                        ]
                    ]
                },
                "text-max-angle": 38,
                "symbol-spacing": 250,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 2,
                "text-offset": [
                    0,
                    0
                ],
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01,
                "text-max-width": 8
            },
            "paint": {
                "text-halo-blur": 0,
                "text-halo-color": "#212121",
                "text-halo-width": 1,
                "text-color": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            "hsl(0, 0%, 47%)"
                        ],
                        [
                            9,
                            "hsl(0, 0%, 73%)"
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-label-small",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444933721429.3076"
            },
            "source": "composite",
            "source-layer": "road_label",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "class",
                    "",
                    "ferry",
                    "link",
                    "motorway",
                    "path",
                    "pedestrian",
                    "primary",
                    "secondary",
                    "street",
                    "street_limited",
                    "tertiary",
                    "track",
                    "trunk"
                ],
                [
                    "==",
                    "$type",
                    "LineString"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            15,
                            10
                        ],
                        [
                            20,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 500,
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "text-padding": 1,
                "text-rotation-alignment": "map",
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01
            },
            "paint": {
                "text-color": "hsl(0, 0%, 78%)",
                "text-halo-color": "#212121",
                "text-halo-width": 1.25,
                "text-halo-blur": 0
            }
        },
        {
            "id": "road-label-medium",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444933721429.3076"
            },
            "source": "composite",
            "source-layer": "road_label",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "in",
                    "class",
                    "",
                    "link",
                    "pedestrian",
                    "street",
                    "street_limited"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            11,
                            10
                        ],
                        [
                            20,
                            14
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 500,
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "text-padding": 1,
                "text-rotation-alignment": "map",
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01
            },
            "paint": {
                "text-color": "hsl(220, 24%, 39%)",
                "text-halo-color": "#212121",
                "text-halo-width": 1,
                "text-halo-blur": 0
            }
        },
        {
            "id": "road-label-large",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444933721429.3076"
            },
            "source": "composite",
            "source-layer": "road_label",
            "minzoom": 12,
            "interactive": true,
            "filter": [
                "in",
                "class",
                "motorway",
                "primary",
                "secondary",
                "tertiary",
                "trunk"
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            10
                        ],
                        [
                            20,
                            16
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 400,
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "text-padding": 1,
                "text-rotation-alignment": "map",
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01
            },
            "paint": {
                "text-color": "hsl(0, 0%, 78%)",
                "text-halo-color": "#212121",
                "text-halo-width": 1,
                "text-halo-blur": 0
            }
        },
        {
            "id": "poi-scalerank2",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444933358918.2366"
            },
            "source": "composite",
            "source-layer": "poi_label",
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "maki",
                    "campsite",
                    "cemetery",
                    "dog-park",
                    "garden",
                    "golf",
                    "park",
                    "picnic-site",
                    "playground",
                    "zoo"
                ],
                [
                    "==",
                    "scalerank",
                    2
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            11
                        ],
                        [
                            20,
                            12
                        ]
                    ]
                },
                "text-max-angle": 38,
                "symbol-spacing": 250,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 2,
                "text-offset": [
                    0,
                    0.65
                ],
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01,
                "text-max-width": 8
            },
            "paint": {
                "text-color": "hsl(0, 0%, 60%)",
                "text-halo-color": "#212121",
                "text-halo-width": 1,
                "text-halo-blur": 0
            }
        },
        {
            "id": "poi-parks-scalerank2",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444933358918.2366"
            },
            "source": "composite",
            "source-layer": "poi_label",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "scalerank",
                    2
                ],
                [
                    "in",
                    "maki",
                    "campsite",
                    "cemetery",
                    "dog-park",
                    "garden",
                    "golf",
                    "park",
                    "picnic-site",
                    "playground",
                    "zoo"
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            11
                        ],
                        [
                            20,
                            12
                        ]
                    ]
                },
                "text-max-angle": 38,
                "symbol-spacing": 250,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 2,
                "text-offset": [
                    0,
                    0
                ],
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01,
                "text-max-width": 8
            },
            "paint": {
                "text-color": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            "hsl(0, 0%, 47%)"
                        ],
                        [
                            9,
                            "hsl(0, 0%, 73%)"
                        ]
                    ]
                },
                "text-halo-color": "#212121",
                "text-halo-width": 1,
                "text-halo-blur": 0
            }
        },
        {
            "id": "water-label",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444933808272.805"
            },
            "source": "composite",
            "source-layer": "water_label",
            "minzoom": 5,
            "interactive": true,
            "filter": [
                ">",
                "area",
                10000
            ],
            "layout": {
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-max-width": 7,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            13,
                            13
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                }
            },
            "paint": {
                "text-color": "hsl(0, 0%, 32%)",
                "text-halo-blur": 0
            }
        },
        {
            "id": "poi-parks-scalerank1",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444933322393.2852"
            },
            "source": "composite",
            "source-layer": "poi_label",
            "interactive": true,
            "filter": [
                "all",
                [
                    "<=",
                    "scalerank",
                    1
                ],
                [
                    "in",
                    "maki",
                    "campsite",
                    "cemetery",
                    "dog-park",
                    "garden",
                    "golf",
                    "park",
                    "picnic-site",
                    "playground",
                    "zoo"
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            11
                        ],
                        [
                            18,
                            12
                        ]
                    ]
                },
                "text-max-angle": 38,
                "symbol-spacing": 250,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 2,
                "text-offset": [
                    0,
                    0
                ],
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01,
                "text-max-width": 8
            },
            "paint": {
                "text-color": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            "hsl(0, 0%, 47%)"
                        ],
                        [
                            9,
                            "hsl(0, 0%, 73%)"
                        ]
                    ]
                },
                "text-halo-color": "#212121",
                "text-halo-width": 1,
                "text-halo-blur": 0
            }
        },
        {
            "id": "poi-scalerank1",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444933322393.2852"
            },
            "source": "composite",
            "source-layer": "poi_label",
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "maki",
                    "campsite",
                    "cemetery",
                    "dog-park",
                    "garden",
                    "golf",
                    "park",
                    "picnic-site",
                    "playground",
                    "zoo"
                ],
                [
                    "<=",
                    "scalerank",
                    1
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            11
                        ],
                        [
                            18,
                            12
                        ]
                    ]
                },
                "text-max-angle": 38,
                "symbol-spacing": 250,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 2,
                "text-offset": [
                    0,
                    0
                ],
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01,
                "text-max-width": 8
            },
            "paint": {
                "text-color": "hsl(0, 0%, 60%)",
                "text-halo-color": "#212121",
                "text-halo-width": 1,
                "text-halo-blur": 0
            }
        },
        {
            "id": "airport-label",
            "type": "symbol",
            "source": "composite",
            "source-layer": "airport_label",
            "minzoom": 10,
            "interactive": true,
            "filter": [
                "<=",
                "scalerank",
                2
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            12
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "icon-image": {
                    "stops": [
                        [
                            12,
                            "{maki}-11"
                        ],
                        [
                            13,
                            "{maki}-15"
                        ]
                    ]
                },
                "symbol-spacing": 250,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 2,
                "text-offset": [
                    0,
                    0.75
                ],
                "text-anchor": "top",
                "text-field": {
                    "stops": [
                        [
                            11,
                            "{ref}"
                        ],
                        [
                            14,
                            "{name_en}"
                        ]
                    ]
                },
                "text-letter-spacing": 0.01,
                "text-max-width": 9
            },
            "paint": {
                "text-color": "hsl(0, 0%, 85%)",
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)",
                "text-halo-width": 0.5,
                "text-halo-blur": 0
            }
        },
        {
            "id": "place-islets-archipelago-aboriginal",
            "type": "symbol",
            "source": "composite",
            "source-layer": "place_label",
            "maxzoom": 16,
            "interactive": true,
            "filter": [
                "in",
                "type",
                "aboriginal_lands",
                "archipelago",
                "islet"
            ],
            "layout": {
                "text-line-height": 1.2,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            11
                        ],
                        [
                            18,
                            16
                        ]
                    ]
                },
                "text-max-angle": 38,
                "symbol-spacing": 250,
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 2,
                "text-offset": [
                    0,
                    0
                ],
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01,
                "text-max-width": 8
            },
            "paint": {
                "text-color": "hsl(0, 0%, 85%)",
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)",
                "text-halo-width": 1,
                "text-halo-blur": 0
            }
        },
        {
            "id": "place-neighbourhood",
            "type": "symbol",
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 12,
            "maxzoom": 16,
            "interactive": true,
            "filter": [
                "==",
                "type",
                "neighbourhood"
            ],
            "layout": {
                "text-field": "{name_en}",
                "text-transform": "uppercase",
                "text-letter-spacing": 0.1,
                "text-max-width": 7,
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 3,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            11
                        ],
                        [
                            16,
                            16
                        ]
                    ]
                }
            },
            "paint": {
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)",
                "text-halo-width": 1,
                "text-color": "hsl(0, 0%, 70%)",
                "text-halo-blur": 0
            }
        },
        {
            "id": "place-suburb",
            "type": "symbol",
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 11,
            "maxzoom": 16,
            "interactive": true,
            "filter": [
                "==",
                "type",
                "suburb"
            ],
            "layout": {
                "text-field": "{name_en}",
                "text-transform": "uppercase",
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-letter-spacing": 0.15,
                "text-max-width": 7,
                "text-padding": 3,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            11,
                            11
                        ],
                        [
                            15,
                            18
                        ]
                    ]
                }
            },
            "paint": {
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)",
                "text-halo-width": 1,
                "text-color": "hsl(0, 0%, 70%)",
                "text-halo-blur": 0
            }
        },
        {
            "id": "place-hamlet",
            "type": "symbol",
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 10,
            "maxzoom": 16,
            "interactive": true,
            "filter": [
                "==",
                "type",
                "hamlet"
            ],
            "layout": {
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            11.5
                        ],
                        [
                            15,
                            16
                        ]
                    ]
                }
            },
            "paint": {
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)",
                "text-halo-width": 1.25,
                "text-color": "hsl(0, 0%, 85%)",
                "text-halo-blur": 0
            }
        },
        {
            "id": "place-village",
            "type": "symbol",
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 11,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "==",
                "type",
                "village"
            ],
            "layout": {
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-max-width": 7,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            11.5
                        ],
                        [
                            16,
                            18
                        ]
                    ]
                }
            },
            "paint": {
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)",
                "text-halo-width": 1.25,
                "text-color": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "hsl(0, 0%, 75%)"
                        ],
                        [
                            11,
                            "hsl(0, 0%, 85%)"
                        ]
                    ]
                },
                "text-halo-blur": 0
            }
        },
        {
            "id": "place-town",
            "type": "symbol",
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 7,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "==",
                "type",
                "town"
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            11.5
                        ],
                        [
                            15,
                            20
                        ]
                    ]
                },
                "text-font": {
                    "base": 1,
                    "stops": [
                        [
                            11,
                            [
                                "DIN Offc Pro Regular",
                                "Arial Unicode MS Regular"
                            ]
                        ],
                        [
                            12,
                            [
                                "DIN Offc Pro Medium",
                                "Arial Unicode MS Regular"
                            ]
                        ]
                    ]
                },
                "text-padding": 2,
                "text-offset": [
                    0,
                    0
                ],
                "text-field": "{name_en}",
                "text-max-width": 7
            },
            "paint": {
                "text-color": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "hsl(0, 0%, 75%)"
                        ],
                        [
                            11,
                            "hsl(0, 0%, 85%)"
                        ]
                    ]
                },
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)",
                "text-halo-width": 1.25,
                "icon-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            7.99,
                            1
                        ],
                        [
                            8,
                            0
                        ]
                    ]
                },
                "text-halo-blur": 0
            }
        },
        {
            "id": "place-islands",
            "type": "symbol",
            "source": "composite",
            "source-layer": "place_label",
            "maxzoom": 16,
            "interactive": true,
            "filter": [
                "==",
                "type",
                "island"
            ],
            "layout": {
                "text-line-height": 1.2,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            11
                        ],
                        [
                            18,
                            16
                        ]
                    ]
                },
                "text-max-angle": 38,
                "symbol-spacing": 250,
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 2,
                "text-offset": [
                    0,
                    0
                ],
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01,
                "text-max-width": 7
            },
            "paint": {
                "text-color": "hsl(0, 0%, 85%)",
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)",
                "text-halo-width": 1,
                "text-halo-blur": 0
            }
        },
        {
            "id": "place-city-sm",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444862510685.128"
            },
            "source": "composite",
            "source-layer": "place_label",
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "scalerank",
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                [
                    "==",
                    "type",
                    "city"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            6,
                            12
                        ],
                        [
                            14,
                            22
                        ]
                    ]
                },
                "text-font": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            [
                                "DIN Offc Pro Regular",
                                "Arial Unicode MS Regular"
                            ]
                        ],
                        [
                            8,
                            [
                                "DIN Offc Pro Medium",
                                "Arial Unicode MS Regular"
                            ]
                        ]
                    ]
                },
                "text-offset": [
                    0,
                    0
                ],
                "text-field": "{name_en}",
                "text-max-width": 7
            },
            "paint": {
                "text-color": "hsl(0, 0%, 90%)",
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)",
                "text-halo-width": 1.25,
                "icon-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            7.99,
                            1
                        ],
                        [
                            8,
                            0
                        ]
                    ]
                },
                "text-halo-blur": 0
            }
        },
        {
            "id": "place-city-md-s",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444862510685.128"
            },
            "source": "composite",
            "source-layer": "place_label",
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "city"
                ],
                [
                    "in",
                    "ldir",
                    "E",
                    "S",
                    "SE",
                    "SW"
                ],
                [
                    "in",
                    "scalerank",
                    3,
                    4,
                    5
                ]
            ],
            "layout": {
                "text-field": "{name_en}",
                "text-size": {
                    "base": 0.9,
                    "stops": [
                        [
                            5,
                            12
                        ],
                        [
                            12,
                            22
                        ]
                    ]
                },
                "text-anchor": "top",
                "text-offset": {
                    "base": 1,
                    "stops": [
                        [
                            7.99,
                            [
                                0,
                                0.1
                            ]
                        ],
                        [
                            8,
                            [
                                0,
                                0
                            ]
                        ]
                    ]
                },
                "text-font": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            [
                                "DIN Offc Pro Regular",
                                "Arial Unicode MS Regular"
                            ]
                        ],
                        [
                            8,
                            [
                                "DIN Offc Pro Medium",
                                "Arial Unicode MS Regular"
                            ]
                        ]
                    ]
                },
                "icon-image": "dot-10"
            },
            "paint": {
                "text-halo-width": 1,
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)",
                "text-color": "hsl(0, 0%, 90%)",
                "text-halo-blur": 0,
                "icon-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            7.99,
                            1
                        ],
                        [
                            8,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "place-city-md-n",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444862510685.128"
            },
            "source": "composite",
            "source-layer": "place_label",
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "city"
                ],
                [
                    "in",
                    "ldir",
                    "N",
                    "NE",
                    "NW",
                    "W"
                ],
                [
                    "in",
                    "scalerank",
                    3,
                    4,
                    5
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 0.9,
                    "stops": [
                        [
                            5,
                            12
                        ],
                        [
                            12,
                            22
                        ]
                    ]
                },
                "text-font": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            [
                                "DIN Offc Pro Regular",
                                "Arial Unicode MS Regular"
                            ]
                        ],
                        [
                            8,
                            [
                                "DIN Offc Pro Medium",
                                "Arial Unicode MS Regular"
                            ]
                        ]
                    ]
                },
                "text-offset": {
                    "base": 1,
                    "stops": [
                        [
                            7.99,
                            [
                                0,
                                -0.25
                            ]
                        ],
                        [
                            8,
                            [
                                0,
                                0
                            ]
                        ]
                    ]
                },
                "text-anchor": "bottom",
                "text-field": "{name_en}",
                "text-max-width": 7,
                "icon-image": "dot-10"
            },
            "paint": {
                "text-color": "hsl(0, 0%, 90%)",
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)",
                "text-halo-width": 1,
                "icon-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            7.99,
                            1
                        ],
                        [
                            8,
                            0
                        ]
                    ]
                },
                "text-halo-blur": 0
            }
        },
        {
            "id": "place-city-lg-s",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444862510685.128"
            },
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 1,
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "all",
                [
                    "<=",
                    "scalerank",
                    2
                ],
                [
                    "==",
                    "type",
                    "city"
                ],
                [
                    "in",
                    "ldir",
                    "E",
                    "S",
                    "SE",
                    "SW"
                ]
            ],
            "layout": {
                "icon-image": "dot-11",
                "text-font": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            [
                                "DIN Offc Pro Regular",
                                "Arial Unicode MS Regular"
                            ]
                        ],
                        [
                            8,
                            [
                                "DIN Offc Pro Medium",
                                "Arial Unicode MS Regular"
                            ]
                        ]
                    ]
                },
                "text-offset": {
                    "base": 1,
                    "stops": [
                        [
                            7.99,
                            [
                                0,
                                0.15
                            ]
                        ],
                        [
                            8,
                            [
                                0,
                                0
                            ]
                        ]
                    ]
                },
                "text-anchor": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            "top"
                        ],
                        [
                            8,
                            "center"
                        ]
                    ]
                },
                "text-field": "{name_en}",
                "text-max-width": 7,
                "text-size": {
                    "base": 0.9,
                    "stops": [
                        [
                            4,
                            12
                        ],
                        [
                            10,
                            22
                        ]
                    ]
                }
            },
            "paint": {
                "text-color": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            "hsl(0, 0%, 95%)"
                        ],
                        [
                            9,
                            "hsl(0, 0%, 90%)"
                        ]
                    ]
                },
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)",
                "text-halo-width": 1,
                "icon-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            7.99,
                            1
                        ],
                        [
                            8,
                            0
                        ]
                    ]
                },
                "text-halo-blur": 0
            }
        },
        {
            "id": "place-city-lg-n",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444862510685.128"
            },
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 1,
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "all",
                [
                    "<=",
                    "scalerank",
                    2
                ],
                [
                    "==",
                    "type",
                    "city"
                ],
                [
                    "in",
                    "ldir",
                    "N",
                    "NE",
                    "NW",
                    "W"
                ]
            ],
            "layout": {
                "icon-image": "dot-11",
                "text-font": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            [
                                "DIN Offc Pro Regular",
                                "Arial Unicode MS Regular"
                            ]
                        ],
                        [
                            8,
                            [
                                "DIN Offc Pro Medium",
                                "Arial Unicode MS Regular"
                            ]
                        ]
                    ]
                },
                "text-offset": {
                    "base": 1,
                    "stops": [
                        [
                            7.99,
                            [
                                0,
                                -0.25
                            ]
                        ],
                        [
                            8,
                            [
                                0,
                                0
                            ]
                        ]
                    ]
                },
                "text-anchor": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            "bottom"
                        ],
                        [
                            8,
                            "center"
                        ]
                    ]
                },
                "text-field": "{name_en}",
                "text-max-width": 7,
                "text-size": {
                    "base": 0.9,
                    "stops": [
                        [
                            4,
                            12
                        ],
                        [
                            10,
                            22
                        ]
                    ]
                }
            },
            "paint": {
                "text-color": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            "hsl(0, 0%, 95%)"
                        ],
                        [
                            9,
                            "hsl(0, 0%, 90%)"
                        ]
                    ]
                },
                "text-opacity": 1,
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)",
                "text-halo-width": 1,
                "icon-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            7.99,
                            1
                        ],
                        [
                            8,
                            0
                        ]
                    ]
                },
                "text-halo-blur": 0
            }
        },
        {
            "id": "marine-label-sm-ln",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444856087950.3635"
            },
            "source": "composite",
            "source-layer": "marine_label",
            "minzoom": 3,
            "maxzoom": 10,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    ">=",
                    "labelrank",
                    4
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            12
                        ],
                        [
                            6,
                            16
                        ]
                    ]
                },
                "symbol-spacing": {
                    "base": 1,
                    "stops": [
                        [
                            4,
                            100
                        ],
                        [
                            6,
                            400
                        ]
                    ]
                },
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "text-field": "{name_en}",
                "text-letter-spacing": 0.1,
                "text-max-width": 5
            },
            "paint": {
                "text-color": "hsl(0, 0%, 32%)",
                "text-halo-blur": 0,
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)"
            }
        },
        {
            "id": "marine-label-sm-pt",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444856087950.3635"
            },
            "source": "composite",
            "source-layer": "marine_label",
            "minzoom": 3,
            "maxzoom": 10,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    ">=",
                    "labelrank",
                    4
                ]
            ],
            "layout": {
                "text-field": "{name_en}",
                "text-max-width": 5,
                "text-letter-spacing": 0.1,
                "text-line-height": 1.5,
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            12
                        ],
                        [
                            6,
                            16
                        ]
                    ]
                }
            },
            "paint": {
                "text-color": "hsl(0, 0%, 32%)",
                "text-halo-blur": 0,
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)"
            }
        },
        {
            "id": "marine-label-md-ln",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444856087950.3635"
            },
            "source": "composite",
            "source-layer": "marine_label",
            "minzoom": 2,
            "maxzoom": 8,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "in",
                    "labelrank",
                    2,
                    3
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": {
                    "base": 1.1,
                    "stops": [
                        [
                            2,
                            12
                        ],
                        [
                            5,
                            20
                        ]
                    ]
                },
                "symbol-spacing": 250,
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "text-field": "{name_en}",
                "text-letter-spacing": 0.15,
                "text-max-width": 5
            },
            "paint": {
                "text-color": "hsl(0, 0%, 32%)",
                "text-halo-blur": 0,
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)"
            }
        },
        {
            "id": "marine-label-md-pt",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444856087950.3635"
            },
            "source": "composite",
            "source-layer": "marine_label",
            "minzoom": 2,
            "maxzoom": 8,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "in",
                    "labelrank",
                    2,
                    3
                ]
            ],
            "layout": {
                "text-field": "{name_en}",
                "text-max-width": 5,
                "text-letter-spacing": 0.15,
                "text-line-height": 1.5,
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1.1,
                    "stops": [
                        [
                            2,
                            14
                        ],
                        [
                            5,
                            20
                        ]
                    ]
                }
            },
            "paint": {
                "text-color": "hsl(0, 0%, 32%)",
                "text-halo-blur": 0,
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)"
            }
        },
        {
            "id": "marine-label-lg-ln",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444856087950.3635"
            },
            "source": "composite",
            "source-layer": "marine_label",
            "minzoom": 1,
            "maxzoom": 4,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "labelrank",
                    1
                ]
            ],
            "layout": {
                "text-field": "{name_en}",
                "text-max-width": 4,
                "text-letter-spacing": 0.25,
                "text-line-height": 1.1,
                "symbol-placement": "line",
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            1,
                            14
                        ],
                        [
                            4,
                            30
                        ]
                    ]
                }
            },
            "paint": {
                "text-color": "hsl(0, 0%, 32%)",
                "text-halo-blur": 0,
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)"
            }
        },
        {
            "id": "marine-label-lg-pt",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444856087950.3635"
            },
            "source": "composite",
            "source-layer": "marine_label",
            "minzoom": 1,
            "maxzoom": 4,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "labelrank",
                    1
                ]
            ],
            "layout": {
                "text-field": "{name_en}",
                "text-max-width": 4,
                "text-letter-spacing": 0.25,
                "text-line-height": 1.5,
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            1,
                            14
                        ],
                        [
                            4,
                            30
                        ]
                    ]
                }
            },
            "paint": {
                "text-color": "hsl(0, 0%, 32%)",
                "text-halo-blur": 0,
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)"
            }
        },
        {
            "id": "state-label-sm",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444856151690.9143"
            },
            "source": "composite",
            "source-layer": "state_label",
            "minzoom": 3,
            "maxzoom": 9,
            "interactive": true,
            "filter": [
                "<",
                "area",
                20000
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            6,
                            10
                        ],
                        [
                            9,
                            14
                        ]
                    ]
                },
                "text-transform": "uppercase",
                "text-font": [
                    "DIN Offc Pro Bold",
                    "Arial Unicode MS Bold"
                ],
                "text-field": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "{abbr}"
                        ],
                        [
                            6,
                            "{name_en}"
                        ]
                    ]
                },
                "text-letter-spacing": 0.15,
                "text-max-width": 5
            },
            "paint": {
                "text-opacity": 1,
                "text-color": "hsl(0, 0%, 50%)",
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)",
                "text-halo-width": 1,
                "text-halo-blur": 0
            }
        },
        {
            "id": "state-label-md",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444856151690.9143"
            },
            "source": "composite",
            "source-layer": "state_label",
            "minzoom": 3,
            "maxzoom": 8,
            "interactive": true,
            "filter": [
                "all",
                [
                    "<",
                    "area",
                    80000
                ],
                [
                    ">=",
                    "area",
                    20000
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            10
                        ],
                        [
                            8,
                            16
                        ]
                    ]
                },
                "text-transform": "uppercase",
                "text-font": [
                    "DIN Offc Pro Bold",
                    "Arial Unicode MS Bold"
                ],
                "text-field": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "{abbr}"
                        ],
                        [
                            5,
                            "{name_en}"
                        ]
                    ]
                },
                "text-letter-spacing": 0.15,
                "text-max-width": 6
            },
            "paint": {
                "text-opacity": 1,
                "text-color": "hsl(0, 0%, 50%)",
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)",
                "text-halo-width": 1,
                "text-halo-blur": 0
            }
        },
        {
            "id": "state-label-lg",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444856151690.9143"
            },
            "source": "composite",
            "source-layer": "state_label",
            "minzoom": 3,
            "maxzoom": 7,
            "interactive": true,
            "filter": [
                ">=",
                "area",
                80000
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            4,
                            10
                        ],
                        [
                            7,
                            18
                        ]
                    ]
                },
                "text-transform": "uppercase",
                "text-font": [
                    "DIN Offc Pro Bold",
                    "Arial Unicode MS Bold"
                ],
                "text-padding": 1,
                "text-field": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "{abbr}"
                        ],
                        [
                            4,
                            "{name_en}"
                        ]
                    ]
                },
                "text-letter-spacing": 0.15,
                "text-max-width": 6
            },
            "paint": {
                "text-opacity": 1,
                "text-color": "hsl(0, 0%, 50%)",
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)",
                "text-halo-width": 1,
                "text-halo-blur": 0
            }
        },
        {
            "id": "country-label-sm",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444856144497.7825"
            },
            "source": "composite",
            "source-layer": "country_label",
            "minzoom": 1,
            "maxzoom": 10,
            "interactive": true,
            "filter": [
                ">=",
                "scalerank",
                5
            ],
            "layout": {
                "text-field": "{name_en}",
                "text-max-width": 6,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 0.9,
                    "stops": [
                        [
                            5,
                            14
                        ],
                        [
                            9,
                            22
                        ]
                    ]
                }
            },
            "paint": {
                "text-halo-width": 1.25,
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)",
                "text-color": "hsl(0, 0%, 45%)",
                "text-halo-blur": 0
            }
        },
        {
            "id": "country-label-md",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444856144497.7825"
            },
            "source": "composite",
            "source-layer": "country_label",
            "minzoom": 1,
            "maxzoom": 8,
            "interactive": true,
            "filter": [
                "in",
                "scalerank",
                3,
                4
            ],
            "layout": {
                "text-field": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "{code}"
                        ],
                        [
                            2,
                            "{name_en}"
                        ]
                    ]
                },
                "text-max-width": 6,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            10
                        ],
                        [
                            8,
                            24
                        ]
                    ]
                }
            },
            "paint": {
                "text-halo-width": 1.25,
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)",
                "text-color": "hsl(0, 0%, 45%)",
                "text-halo-blur": 0
            }
        },
        {
            "id": "country-label-lg",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444856144497.7825"
            },
            "source": "composite",
            "source-layer": "country_label",
            "minzoom": 1,
            "maxzoom": 7,
            "interactive": true,
            "filter": [
                "in",
                "scalerank",
                1,
                2
            ],
            "layout": {
                "text-field": "{name_en}",
                "text-max-width": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            5
                        ],
                        [
                            3,
                            6
                        ]
                    ]
                },
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            1,
                            10
                        ],
                        [
                            6,
                            24
                        ]
                    ]
                },
                "icon-image": "campsite-15"
            },
            "paint": {
                "text-halo-width": 1.25,
                "text-halo-color": "hsla(0, 0%, 10%, 0.75)",
                "text-color": "hsl(0, 0%, 45%)",
                "text-halo-blur": 0
            }
        }
    ],
    "created": "2016-08-26T14:10:16.001Z",
    "id": "cisbu55iw001g2xpevhgwzavw",
    "modified": "2016-08-27T10:30:47.350Z",
    "owner": "viale19",
    "draft": false
}
            }
        }
    });