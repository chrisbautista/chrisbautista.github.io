// vanilla js helpers
// chris bautista
// jan 25 2015

(function() {

    // find elements

    function Cb() {}

    Cb.prototype.qs = function _qs(search) {
        _qs.cache = _qs.cache || document.querySelector(search);
        return _qs.cache;
    };

    Cb.prototype.qsa = function _qsa(search, convertToArray) {
        if (convertToArray) {
            _qsa.cache = _qsa.cache || [].slice.call(document.querySelectorAll(search));
        } else {
            _qsa.cache = _qsa.cache || document.querySelectorAll(search);
        }
        return _qsa.cache;
    };


    Cb.prototype.removeClassList = function(elem, classes) {
      // console.log(classes);
        if (typeof classes == "object") {
            classes.forEach(function(item, key) {
              elem.classList.remove(item);
            });
        }
    };

    Cb.prototype.addClass = function(elem,cl) {
        if(elem.classList){
          elem.classList.add(cl);
        }
    };
    Cb.prototype.removeClass = function(elem,cl) {
        if(elem.classList){
          elem.classList.remove(cl);
        }
    };

    Cb.prototype.extend = function extend (defaults, config){

      for (var prop in config) {
        if(config[prop] && config.hasOwnProperty(prop)){
          defaults[prop] = config[prop];
        }
      }
      return defaults;
    };

    // test suite
    function CbTest() {
        if (!document.getElementById('results')) {
            // append to body
            var ul = document.createElement('ul');
            ul.id = 'results';
            document.getElementById('container').appendChild(ul);
        }
    }
    CbTest.prototype.assert = function _assert(value, desc) {
        _assert.cache = _assert.cache || [];
        _assert.cache.push({
            'assertion': value,
            'desc': desc
        });
        var li = document.createElement('li');
        li.className = value ? "pass" : "fail";
        li.appendChild(document.createTextNode(" test " + _assert.cache.length + " " + desc));
        document.getElementById('results').appendChild(li);
    };

    CbTest.prototype.log = function _log() {
        try {
            console.log.apply(console, arguments);
        } catch (e) {
            try {
                opera.postError.apply(opera, arguments);
            } catch (f) {
                alert(Array.prototype.join.call(arguments, " "));
            }
        }
    };

    window.util = new Cb() || null;
    window.test = CbTest || null;
}());