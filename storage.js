(function (window,storageType) {"use strict";/*nabil©2019*/if(typeof window === "object"){storageType = storageType || "sessionStorage";if(!window[storageType])storageType="sessionStorage";if(!window[storageType]){console.error(storageType);window.Database=window.database={ok:false};return ;}var storageName=storageType;window.Database=window.database= {ok:true,database: window[storageName],clear:function() {window[storageName].clear();return this;},getItem:function(key) {return window[storageName].getItem(key);},key:function(index) {return window[storageName].key(index);},removeItem:function(key) {window[storageName].removeItem(key);return this;},setItem:function(key, value) {window[storageName].setItem(key, value);return this;},get:function(key) {return window[storageName].getItem(key);},set:function(key, value) {window[storageName].setItem(key, value);return this;}};}})(window,"localStorage");
