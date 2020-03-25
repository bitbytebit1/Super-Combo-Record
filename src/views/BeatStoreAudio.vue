<template>
  <v-card
    :class="!playing || paused ? 'v-card--outlined' : 'v-card--playing'"
    class="ma-1"
  >
    <v-card-text
      v-ripple
      class="song-image outlined"
      style="display:flex;justify-content:center;align-items:center;"
      @click="playing ? pause() : play()"
    >
      <!-- PREVIOUS -->
      <v-btn
        v-if="showControls"
        class="d-inline-block white--text mr-2 "
        outlined
        icon
        @click="previous"
      >
        <v-icon>
          mdi-skip-previous
        </v-icon>
      </v-btn>
      <!-- PLAY -->
      <v-btn
        class="d-inline-block white--text "
        :outlined="!playing || paused"
        x-large
        icon
        :disabled="!loaded"
      >
        <transition
          name="fade"
          mode="out-in"
        >
          <v-icon
            v-if="!playing || paused"
          >
            mdi-play
          </v-icon>
          <Spinner
            v-else
          />
          <!-- <v-icon
            v-else
            color="white"
          >
            mdi-pause
          </v-icon> -->
        </transition>
      </v-btn>
      <!-- NEXT -->
      <v-btn
        v-if="showControls"
        class="d-inline-block white--text ml-2"
        outlined
        icon
        @click="next"
      >
        <v-icon>
          mdi-skip-next
        </v-icon>
      </v-btn>
      <!-- VOLUME -->
      <div
        v-if="showControls"
        id="right"
        class="hidden-xs-only d"
        style="displa"
        @wheel.prevent="onWheel"
        @click.stop
      >
        <v-speed-dial
          transition="none"
          open-on-hover
        >
          <v-btn
            slot="activator"
            fab
            hover
            icon
            outline
            small
            @click.stop="toggleMute"
          >
            <v-icon>{{ volIcon }}</v-icon>
          </v-btn>
          <div
            class="slider-wrapper ma-0 pa-0"
          >
            <input
              v-model="volume"
              class="vol-slider pointer"
              type="range"
              min="0"
              max="10"
              step="0.01"
              @input="volumeChange"
            >
          </div>
        </v-speed-dial>
      </div>
    </v-card-text>
    <!-- TITLE -->
    <v-card-text
      v-text="title"
      class="text-center title"
    />

    <!-- PROGRESS -->
    <v-row
      no-gutters
      class="text-center"
    >
      <!-- CURRENT TIME -->
      <v-col cols="2">
        {{ currentTime }}
      </v-col>
      <!-- PERCENTAGE -->
      <v-col cols="8">
        <v-progress-linear
          v-model="percentage"
          class="d-block"
          height="10"
          style="margin-top:7px;"
          @click.native="setPosition()"
          :disabled="!loaded"
        />
      </v-col>
      <!-- duration -->
      <v-col cols="2">
        {{ duration }}
      </v-col>
    </v-row>
    <!-- PRICE -->
    <v-card-text
      v-text="price[0]"
      class="text-center subtitle-1"
    />
    <!-- :class="freeColor(price[0], true)" -->
    <!-- PURCHASE -->
    <div class="text-center pb-4">
      <v-menu
        :close-on-content-click="false"
        open-on-hover
        bottom
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            :class="freeColor(price[0], true)"
            outlined
            v-on="on"
          >
            {{ price[0] =='Free' ? 'Download' : 'Purchase' }}
          </v-btn>
        </template>

        <v-list
          nav
          class="v-card--outlined"
        >
          <v-list-group
            v-for="(item, i) in purchaseOptions"
            :key="i"
          >
            <template v-slot:activator>
              <v-list-item-title active-class="white--text">
                {{ item.title }}
                <span
                  v-text="price[i]"
                  :class="freeColor(price[i], true)"
                  class="text-center pl-1  subtitle-1"
                />
              </v-list-item-title>
            </template>
            <div
              class="text-center py-4"
              v-html="buttons[i]"
            />
          </v-list-group>
        </v-list>
      </v-menu>
    </div>
    <audio
      :id="`scr-player-${id}`"
      ref="player"
      @ended="ended"
      @canplay="canPlay"
      :src="file"
    />
  </v-card>
</template>
<script>
import Spinner from '@/components/Spinner.vue'
const formatTime = second => new Date(second * 1000).toISOString().substr(14, 5)
export default {
  name: 'VuetifyAudio',
  components: {
    Spinner
  },
  props: {
    buttons: {
      type: Array,
      default: () => []
    },
    id: {
      type: Number,
      default: null
    },
    price: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: null
    },
    file: {
      type: String,
      default: null
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    ended: {
      type: Function,
      default: () => {}
    },
    canPlay: {
      type: Function,
      default: () => {}
    },
    color: {
      type: String,
      default: null
    },
    downloadable: {
      type: Boolean,
      default: false
    },
    showControls: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    duration: function () {
      return this.audio ? formatTime(this.totalDuration) : ''
    }
  },
  data () {
    return {
      purchaseOptions: [
        {
          action: '',
          title: 'MP3 Tagged',
          active: false,
          items: [
            { title: '' }
          ]
        },
        {
          action: '',
          title: 'WAV Untagged',
          active: false,
          items: [
            { title: '' }
          ]
        },
        {
          action: '',
          title: 'WAV Untagged and Track',
          active: false,
          items: [
            { title: '' }
          ]
        }
      ],
      firstPlay: true,
      isMuted: false,
      loaded: false,
      playing: false,
      paused: false,
      percentage: 0,
      currentTime: '00:00',
      audio: undefined,
      totalDuration: 0,
      volume: 0.8,
      volIcon: 'volume_up'
    }
  },
  methods: {
    freeColor (price, text) {
      const r = price === 'Free' ? 'green' : 'red'
      return text ? r + '--text' : r
    },
    volumeChange () {
      this.volume = this.audio.volume * 10
      this.updateVolIcon()
    },
    updateVolIcon () {
      return (this.volIcon = this.eAudio.volume > 0.5 ? 'volume_up' : this.eAudio.volume === 0 || this.eAudio.muted ? 'volume_off' : 'volume_down')
    },
    buy (id) {
      console.log(this.buttons)
      console.log(this.buttons[0])
    },
    setPosition () {
      this.audio.currentTime = parseInt(this.audio.duration / 100 * this.percentage)
    },
    stop () {
      this.paused = this.playing = false
      this.audio.pause()
      this.audio.currentTime = 0
    },
    previous () {
      document.getElementById('scr-player-' + (this.id - 1)).play()
    },
    next () {
      document.getElementById('scr-player-' + (this.id + 1)).play()
    },
    play () {
      if (this.playing) return
      this.audio.play().then(a => { this.playing = true })
      this.paused = false
    },
    pause () {
      this.paused = !this.paused;
      (this.paused) ? this.audio.pause() : this.audio.play()
    },
    download () {
      this.audio.pause()
      window.open(this.file, 'download')
    },
    mute () {
      this.isMuted = !this.isMuted
      this.audio.muted = this.isMuted
      this.volumeValue = this.isMuted ? 0 : 75
    },
    reload () {
      this.audio.load()
    },
    _handleLoaded: function () {
      if (this.audio.readyState >= 2) {
        if (this.audio.duration === Infinity) {
          // Fix duration for streamed audio source or blob based
          // https://stackoverflow.com/questions/38443084/how-can-i-add-predefined-length-to-audio-recorded-from-mediarecorder-in-chrome/39971175#39971175
          this.audio.currentTime = 1e101
          this.audio.ontimeupdate = () => {
            this.audio.ontimeupdate = () => {}
            this.audio.currentTime = 0
            this.totalDuration = parseInt(this.audio.duration)
            this.loaded = true
          }
        } else {
          this.totalDuration = parseInt(this.audio.duration)
          this.loaded = true
        }
        if (this.autoPlay) this.audio.play()
      } else {
        throw new Error('Failed to load sound file')
      }
    },
    _handlePlayingUI: function (e) {
      this.percentage = this.audio.currentTime / this.audio.duration * 100
      this.currentTime = formatTime(this.audio.currentTime)
      this.playing = true
    },
    _handlePlayPause: function (e) {
      this.playing = e.type === 'play'
      this.paused = e.type === 'pause'
      if (e.type === 'play' && this.firstPlay) {
        // in some situations, audio.currentTime is the end one on chrome
        this.audio.currentTime = 0
        if (this.firstPlay) {
          this.firstPlay = false
        }
      }
      var audios = document.getElementsByTagName('audio')
      if (e.type === 'play') {
        for (var i = 0, len = audios.length; i < len; i++) {
          if (audios[i] !== e.target) {
            audios[i].pause()
          }
        }
      }
      if (e.type === 'pause' && this.paused === false && this.playing === false) {
        this.currentTime = '00:00'
      }
    },
    _handleEnded () {
      this.paused = this.playing = false
      const query = document.getElementById('scr-player-' + (this.id + 1)).play()
      console.log(query)
    },
    init: function () {
      this.audio.addEventListener('timeupdate', this._handlePlayingUI)
      this.audio.addEventListener('loadeddata', this._handleLoaded)
      this.audio.addEventListener('pause', this._handlePlayPause)
      this.audio.addEventListener('play', this._handlePlayPause)
      this.audio.addEventListener('ended', this._handleEnded)
    }
  },
  mounted () {
    this.audio = this.$refs.player
    this.init()
  },
  beforeDestroy () {
    this.audio.removeEventListener('timeupdate', this._handlePlayingUI)
    this.audio.removeEventListener('loadeddata', this._handleLoaded)
    this.audio.removeEventListener('pause', this._handlePlayPause)
    this.audio.removeEventListener('play', this._handlePlayPause)
    this.audio.removeEventListener('ended', this._handleEnded)
  }
}
</script>
<style>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.v-list .v-list-item--active {
    color: antiquewhite!important;
}
.song-image{
  height: 169px;
  box-sizing:border-box;
}
.outlined {
  border: thin solid rgba(255, 255, 255, 0.12) !important;
}
.v-card--playing{
  border: thin solid rgba(255, 255, 255, 0.12) !important;
  border-bottom: thin solid rgba(255, 0, 0, 0.42) !important;
  border-top: thin solid rgba(255, 0, 0, 0.42) !important;
}
.vol-slider {
  background: red
}
#progress-slider-2{
  margin-top: 15px;
}
.vol-slider {
    -webkit-appearance: none;
    width: 100%;
    height: 25px;
    background: #504949;
    outline: none;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.vol-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 25px;
}

.vol-slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
}
.vol-slider::-moz-range-track {
    background: #504949;
}

.vol-slider::-webkit-slider-runnable-track {
    background: #504949;
}
.slider-wrapper input {
  width: 150px;
  height: 20px;
  margin: 0;
  transform-origin: 75px 75px;
  transform: rotate(-90deg);
}

.slider-wrapper {
  display: inline-block;
  width: 20px;
  height: 150px;
  padding: 0;
}
</style>
