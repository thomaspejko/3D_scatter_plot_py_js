!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r(t.d3=t.d3||{})}(this,function(t){"use strict";function r(t,r,e,n){var o=Math.cos(r),u=Math.sin(r),a=Math.cos(e),d=Math.sin(e),c=Math.cos(n),i=Math.sin(n),f=o*d*i-u*c,p=o*d*c+u*i,y=u*a,x=u*d*i+o*c,h=u*d*c-o*i,s=-d,z=a*i,j=a*c;return{x:o*a*t.x+f*-t.y+p*t.z,y:y*t.x+x*-t.y+h*t.z,z:s*t.x+z*-t.y+j*t.z}}function e(t,r,e,n,o){return r===x.ortho?{x:e[0]+n*t.x,y:e[1]+n*t.y}:r===x.persp?{x:e[0]+n*t.x/(t.z+o),y:e[1]+n*t.y/(t.z+o)}:void 0}function n(t,n,o,u,a,d,c,i){for(var f=t.length-1;f>=0;f--){var p=t[f];p.rotated=r({x:p.x,y:p.y,z:p.z},o,u,a),p.projected=e(p.rotated,n,d,c,i)}return t}function o(t,n,o,u,a,d,c,i){for(var f=t.length-1;f>=0;f--){var p=t[f],y=p[0],x=p[1];y.rotated=r({x:y.x,y:y.y,z:y.z},o,u,a),x.rotated=r({x:x.x,y:x.y,z:x.z},o,u,a),y.projected=e(y.rotated,n,d,c,i),x.projected=e(x.rotated,n,d,c,i),p.lng=Math.sqrt(Math.pow(x.rotated.x-y.rotated.x,2)+Math.pow(x.rotated.y-y.rotated.y,2)+Math.pow(x.rotated.z-y.rotated.z,2)),p.midPoint={x:(y.x+x.x)/2,y:(y.y+x.y)/2,z:(y.z+x.z)/2}}return t}function u(t,r,e,n,o,u,a,d){for(var c=t.length-1;c>=0;c--);return t}function a(t,r,e,n,o,u,a,d){for(var c=t.length-1;c>=0;c--);return t}function d(t,n,o,u,a,d,c,i){for(var f=t.length-1;f>=0;f--){var p=t[f],y=p[0],x=p[1],h=p[2];y.rotated=r({x:y.x,y:y.y,z:y.z},o,u,a),x.rotated=r({x:x.x,y:x.y,z:x.z},o,u,a),h.rotated=r({x:h.x,y:h.y,z:h.z},o,u,a),y.projected=e(y.rotated,n,d,c,i),x.projected=e(x.rotated,n,d,c,i),h.projected=e(h.rotated,n,d,c,i),p.area=1}return t}function c(t,r,e,n,o,u,a,d){for(var c=t.length-1;c>=0;c--);return t}function i(t,r,e,n,o,u,a,d){for(var c=t.length-1;c>=0;c--);return t}function f(t){return"M"+t.projected.x+","+t.projected.y+"m"+-t.radius+",0a"+t.radius+","+t.radius+",0,1,1,"+2*t.radius+",0a"+t.radius+","+t.radius+",0,1,1,-"+2*t.radius+",0"}function p(t){return"M"+t[0].projected.x+","+t[0].projected.y+"L"+t[1].projected.x+","+t[1].projected.y}function y(t){return"M"+t[0].projected.x+","+t[0].projected.y+"L"+t[1].projected.x+","+t[1].projected.y+"L"+t[2].projected.x+","+t[2].projected.y}var x={ortho:"ortho",persp:"persp"},h=function(){function t(t){return M[v](t,e,j,l,g,h,s,z)}var r=x.ortho,e=(x.persp,r),h=[0,0],s=1,z=1,j=0,l=0,g=0,v="POINTS",M={POINTS:n,LINES:o,LINES_LOOP:u,LINES_STRIP:a,TRIANGLES:d,TRIANGLES_STRIP:c,TRIANGLES_FAN:i},I={POINTS:f,LINES:p,TRIANGLES:y};return t.projection=function(r){return arguments.length?(e=r,t):e},t.origin=function(r){return arguments.length?(h=r,t):h},t.scale=function(r){return arguments.length?(s=r,t):s},t.distance=function(r){return arguments.length?(z=r,t):z},t.rotateZ=function(r){return arguments.length?(j=r,t):j},t.rotateY=function(r){return arguments.length?(l=r,t):l},t.rotateX=function(r){return arguments.length?(g=r,t):g},t.primitiveType=function(r){return arguments.length?(v=r,t):v},t.draw=function(t){return I[v](t)},t};t._3d=h,Object.defineProperty(t,"__esModule",{value:!0})});
