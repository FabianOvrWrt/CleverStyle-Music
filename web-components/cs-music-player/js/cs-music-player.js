// Generated by CoffeeScript 1.4.0

/**
 * @package     CleverStyle Music
 * @category    Web Components
 * @author      Nazar Mokrynskyi <nazar@mokrynskyi.com>
 * @copyright   Copyright (c) 2014, Nazar Mokrynskyi
 * @license     MIT License, see license.txt
*/


(function() {
  var music_library, music_storage;

  music_storage = navigator.getDeviceStorage('music');

  music_library = cs.music_library;

  Polymer('cs-music-player', {
    rescan: function() {
      return music_library.rescan(function() {
        this.clean_playlist();
        return alert('Rescanned successfully, playlist refreshed');
      });
    },
    play: function() {
      return music_library.get_next_id_to_play(function(id) {
        return music_library.get(id, function(item) {
          return music_storage.get(item.name).onsuccess = function() {
            window.player = AV.Player.fromURL(window.URL.createObjectURL(this.result));
            player.on('ready', function() {
              return this.device.device.node.context.mozAudioChannelType = 'content';
            });
            return player.play();
          };
        });
      });
    }
  });

}).call(this);