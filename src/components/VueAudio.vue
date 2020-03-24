<template>
  <v-card>
    <v-card-text>
      <v-card-text
        v-ripple
        class="grey dark song-image d-flex "
        style="display:flex;justify-content:center;align-items:center;"
        @click="playing ? pause() : play()"
      >
        <v-btn
          class="d-inline-block white--text"
          outlined
          x-large
          icon
          color="black"
          :disabled="!loaded"
        >
          <v-icon v-if="!playing || paused">
            mdi-play
          </v-icon>
          <v-icon v-else>
            mdi-pause
          </v-icon>
        </v-btn>
      </v-card-text>
      <div
        v-text="title"
        class="text-center title"
      />

      <div>
        <v-row
          no-gutters
          class="text-center"
        >
          <v-col>
            {{ currentTime }}
          </v-col>
          <v-col>
            <v-progress-linear
              v-model="percentage"
              class="d-block"
              height="5"
              style="margin-top: 8px; margin-bottom: 8px;"
              @click.native="setPosition()"
              :disabled="!loaded"
            />
          </v-col>
          <v-col>
            {{ duration }}
          </v-col>
        </v-row>
      </div>

      <v-card-text
        v-text="price"
        class="text-center red--text subtitle-1"
      />
    </v-card-text>
    <div class="text-center pb-4">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            color="primary"
            dark
            v-on="on"
          >
            Purchase
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="true">
            <v-list-item-title>MP3 with intro</v-list-item-title>
          </v-list-item>
          <v-list-item @click="true">
            <v-list-item-title>WAV with intro</v-list-item-title>
          </v-list-item>
          <v-list-item @click="true">
            <v-list-item-title>Project files without intro</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <audio
      id="player"
      ref="player"
      @ended="ended"
      @canplay="canPlay"
      :src="file"
    />
  </v-card>
</template>
<script>
const formatTime = second => new Date(second * 1000).toISOString().substr(14, 5)
export default {
  name: 'VuetifyAudio',
  props: {
    price: {
      type: String,
      default: null
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
    }
  },
  computed: {
    duration: function () {
      return this.audio ? formatTime(this.totalDuration) : ''
    }
  },
  data () {
    return {
      firstPlay: true,
      isMuted: false,
      loaded: false,
      playing: false,
      paused: false,
      percentage: 0,
      currentTime: '00:00',
      audio: undefined,
      totalDuration: 0
    }
  },
  methods: {
    setPosition () {
      this.audio.currentTime = parseInt(this.audio.duration / 100 * this.percentage)
    },
    stop () {
      this.paused = this.playing = false
      this.audio.pause()
      this.audio.currentTime = 0
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
      if (e.type === 'play' && this.firstPlay) {
        // in some situations, audio.currentTime is the end one on chrome
        this.audio.currentTime = 0
        if (this.firstPlay) {
          this.firstPlay = false
        }
      }
      if (e.type === 'pause' && this.paused === false && this.playing === false) {
        this.currentTime = '00:00'
      }
    },
    _handleEnded () {
      this.paused = this.playing = false
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
.song-image{
  height: 191px;
}
</style>
