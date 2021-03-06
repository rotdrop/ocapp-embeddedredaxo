/**Embed a Redaxo instance as app into ownCloud, intentionally with
 * single-sign-on.
 * 
 * @author Claus-Justus Heine
 * @copyright 2013 Claus-Justus Heine <himself@claus-justus-heine.de>
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU GENERAL PUBLIC LICENSE
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU AFFERO GENERAL PUBLIC LICENSE for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library.  If not, see <http://www.gnu.org/licenses/>.
 */

var Redaxo = Redaxo || {
    appName: 'redaxo',
    refreshInterval: 300
};

(function(window, $, Redaxo) {

  // Dummy
  Redaxo.loadHandler = function(redaxoFrame, callback) {
    var redaxo = redaxoFrame.contents();

    // Remove the logout stuff
    redaxo.find('ul.rex-logout').remove();
    
    // shift the entire thing a little bit into the inside
    redaxo.find('div#rex-website').css({'margin-left': '50px',
                                        'margin-top': '50px'});

    redaxo.find('a').filter(function() {
      return this.hostname && this.hostname !== window.location.hostname;
    }).each(function() {
      $(this).attr('target','_blank');
    });

    if (typeof callback == 'undefined') {
      callback = function() {};
    }

    if (redaxoFrame.is(':hidden')) {
      $('#redaxoLoader').fadeOut('slow');
      redaxoFrame.slideDown('slow', function() {
        callback();
      });
    } else {
      $('#redaxoLoader').fadeOut('slow');
      callback();
    }
  }

})(window, jQuery, Redaxo);

$(document).ready(function() {

  var redaxoContainer = $('#redaxo_container');
  var redaxoFrame = $('#redaxoFrame');
  var redaxo = redaxoFrame.contents();

  var setHeightCallback = function() {
    redaxoContainer.height($('#content').height());
  };
  
  if (redaxoFrame.length > 0) {
    redaxoFrame.load(function() {
      Redaxo.loadHandler(redaxoFrame, setHeightCallback);
    });
    
    var resizeTimer;
    $(window).resize(function()  {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setHeightCallback);
    });
  }
  if (redaxo.find('ul.rex-logout').length > 0) {
    Redaxo.loadHandler(redaxoFrame, setHeightCallback);
  }

});
