/**
 * @license 
 * jQuery Tools @VERSION Tooltip - UI essentials
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/tooltip/
 *
 * Since: November 2008
 * Date: @DATE 
 */
!function($){function t(t,e,o){var i=o.relative?t.position().top:t.offset().top,n=o.relative?t.position().left:t.offset().left,s=o.position[0];i-=e.outerHeight()-o.offset[0],n+=t.outerWidth()+o.offset[1],/iPad/i.test(navigator.userAgent)&&(i-=$(window).scrollTop());var f=e.outerHeight()+t.outerHeight();"center"==s&&(i+=f/2),"bottom"==s&&(i+=f),s=o.position[1];var r=e.outerWidth()+t.outerWidth();return"center"==s&&(n-=r/2),"left"==s&&(n-=r),{top:i,left:n}}function e(e,i){var n=this,s=e.add(n),f,r=0,a=0,l=e.attr("title"),d=e.attr("data-tooltip"),p=o[i.effect],u,c=e.is(":input"),h=c&&e.is(":checkbox, :radio, select, :button, :submit"),g=e.attr("type"),v=i.events[g]||i.events[c?h?"widget":"input":"def"];if(!p)throw'Nonexistent effect "'+i.effect+'"';if(v=v.split(/,\s*/),2!=v.length)throw"Tooltip: bad events configuration for "+g;e.on(v[0],function(t){clearTimeout(r),i.predelay?a=setTimeout(function(){n.show(t)},i.predelay):n.show(t)}).on(v[1],function(t){clearTimeout(a),i.delay?r=setTimeout(function(){n.hide(t)},i.delay):n.hide(t)}),l&&i.cancelDefault&&(e.removeAttr("title"),e.data("title",l)),$.extend(n,{show:function(o){if(!f&&(d?f=$(d):i.tip?f=$(i.tip).eq(0):l?f=$(i.layout).addClass(i.tipClass).appendTo(document.body).hide().append(l):(f=e.next(),f.length||(f=e.parent().next())),!f.length))throw"Cannot find tooltip for "+e;if(n.isShown())return n;f.stop(!0,!0);var c=t(e,f,i);if(i.tip&&f.html(e.data("title")),o=$.Event(),o.type="onBeforeShow",s.trigger(o,[c]),o.isDefaultPrevented())return n;c=t(e,f,i),f.css({position:"absolute",top:c.top,left:c.left}),u=!0,p[0].call(n,function(){o.type="onShow",u="full",s.trigger(o)});var h=i.events.tooltip.split(/,\s*/);return f.data("__set")||(f.off(h[0]).on(h[0],function(){clearTimeout(r),clearTimeout(a)}),h[1]&&!e.is("input:not(:checkbox, :radio), textarea")&&f.off(h[1]).on(h[1],function(t){t.relatedTarget!=e[0]&&e.trigger(v[1].split(" ")[0])}),i.tip||f.data("__set",!0)),n},hide:function(t){return f&&n.isShown()?(t=$.Event(),t.type="onBeforeHide",s.trigger(t),t.isDefaultPrevented()?void 0:(u=!1,o[i.effect][1].call(n,function(){t.type="onHide",s.trigger(t)}),n)):n},isShown:function(t){return t?"full"==u:u},getConf:function(){return i},getTip:function(){return f},getTrigger:function(){return e}}),$.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(t,e){$.isFunction(i[e])&&$(n).on(e,i[e]),n[e]=function(t){return t&&$(n).on(e,t),n}})}$.tools=$.tools||{version:"@VERSION"},$.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,fadeIE:!1,position:["top","center"],offset:[0,0],relative:!1,cancelDefault:!0,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(t,e,i){o[t]=[e,i]}};var o={toggle:[function(t){var e=this.getConf(),o=this.getTip(),i=e.opacity;1>i&&o.css({opacity:i}),o.show(),t.call()},function(t){this.getTip().hide(),t.call()}],fade:[function(t){var e=this.getConf();!$.browser.msie||e.fadeIE?this.getTip().fadeTo(e.fadeInSpeed,e.opacity,t):(this.getTip().show(),t())},function(t){var e=this.getConf();!$.browser.msie||e.fadeIE?this.getTip().fadeOut(e.fadeOutSpeed,t):(this.getTip().hide(),t())}]};$.fn.tooltip=function(t){var o=this.data("tooltip");return o?o:(t=$.extend(!0,{},$.tools.tooltip.conf,t),"string"==typeof t.position&&(t.position=t.position.split(/,?\s/)),this.each(function(){o=new e($(this),t),$(this).data("tooltip",o)}),t.api?o:this)}}(jQuery),/**
 * @license 
 * jQuery Tools @VERSION / Tooltip Dynamic Positioning
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/tooltip/dynamic.html
 *
 * Since: July 2009
 * Date: @DATE 
 */
function($){function t(t){var e=$(window),o=e.width()+e.scrollLeft(),i=e.height()+e.scrollTop();return[t.offset().top<=e.scrollTop(),o<=t.offset().left+t.width(),i<=t.offset().top+t.height(),e.scrollLeft()>=t.offset().left]}function e(t){for(var e=t.length;e--;)if(t[e])return!1;return!0}var o=$.tools.tooltip;o.dynamic={conf:{classNames:"top right bottom left"}},$.fn.dynamic=function(i){"number"==typeof i&&(i={speed:i}),i=$.extend({},o.dynamic.conf,i);var n=$.extend(!0,{},i),s=i.classNames.split(/\s/),f;return this.each(function(){var o=$(this).tooltip().onBeforeShow(function(o,i){var r=this.getTip(),a=this.getConf();f||(f=[a.position[0],a.position[1],a.offset[0],a.offset[1],$.extend({},a)]),$.extend(a,f[4]),a.position=[f[0],f[1]],a.offset=[f[2],f[3]],r.css({visibility:"hidden",position:"absolute",top:i.top,left:i.left}).show();var l=$.extend(!0,{},n),d=t(r);e(d)||(d[2]&&($.extend(a,l.top),a.position[0]="top",r.addClass(s[0])),d[3]&&($.extend(a,l.right),a.position[1]="right",r.addClass(s[1])),d[0]&&($.extend(a,l.bottom),a.position[0]="bottom",r.addClass(s[2])),d[1]&&($.extend(a,l.left),a.position[1]="left",r.addClass(s[3])),(d[0]||d[2])&&(a.offset[0]*=-1),(d[1]||d[3])&&(a.offset[1]*=-1)),r.css({visibility:"visible"}).hide()});o.onBeforeShow(function(){var t=this.getConf(),e=this.getTip();setTimeout(function(){t.position=[f[0],f[1]],t.offset=[f[2],f[3]]},0)}),o.onHide(function(){var t=this.getTip();t.removeClass(i.classNames)}),ret=o}),i.api?ret:this}}(jQuery),/**
 * @license 
 * jQuery Tools @VERSION / Tooltip Slide Effect
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/tooltip/slide.html
 *
 * Since: September 2009
 * Date: @DATE 
 */
function($){var t=$.tools.tooltip;$.extend(t.conf,{direction:"up",bounce:!1,slideOffset:10,slideInSpeed:200,slideOutSpeed:200,slideFade:!$.browser.msie});var e={up:["-","top"],down:["+","top"],left:["-","left"],right:["+","left"]};t.addEffect("slide",function(t){var o=this.getConf(),i=this.getTip(),n=o.slideFade?{opacity:o.opacity}:{},s=e[o.direction]||e.up;n[s[1]]=s[0]+"="+o.slideOffset,o.slideFade&&i.css({opacity:0}),i.show().animate(n,o.slideInSpeed,t)},function(t){var o=this.getConf(),i=o.slideOffset,n=o.slideFade?{opacity:0}:{},s=e[o.direction]||e.up,f=""+s[0];o.bounce&&(f="+"==f?"-":"+"),n[s[1]]=f+"="+i,this.getTip().animate(n,o.slideOutSpeed,function(){$(this).hide(),t.call()})})}(jQuery);