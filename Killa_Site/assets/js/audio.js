// ==========================================
// AUDIO SYNTHESIS: WEB AUDIO API
// Synthesizes authentic Maratha Tutari (Horn) & Nagara (Dhol) sounds
// ==========================================

const SoundFX = {
  ctx: null,
  enabled: true,

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  },

  playTutari() {
    try {
      this.init();
      if (!this.ctx || !this.enabled) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const now = this.ctx.currentTime;
      // Tutari musical fanfare notes (approximate frequencies for traditional royal salute)
      const notes = [
        { freq: 440, dur: 0.18, time: 0 },       // A4
        { freq: 554.37, dur: 0.18, time: 0.2 },  // C#5
        { freq: 659.25, dur: 0.22, time: 0.4 },  // E5
        { freq: 880, dur: 0.7, time: 0.65 },     // High A5 (long sustained blast)
        { freq: 659.25, dur: 0.25, time: 1.4 },  // E5
        { freq: 880, dur: 1.1, time: 1.68 }      // High A5 crescendo!
      ];

      notes.forEach(note => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        // Brass harmonic rich waveform
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(note.freq, now + note.time);

        // Brass resonant filter
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(note.freq * 1.5, now + note.time);
        filter.Q.setValueAtTime(3.0, now + note.time);

        // Envelope
        gain.gain.setValueAtTime(0.0001, now + note.time);
        gain.gain.exponentialRampToValueAtTime(0.28, now + note.time + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.18, now + note.time + note.dur * 0.8);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + note.time + note.dur);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + note.time);
        osc.stop(now + note.time + note.dur + 0.05);
      });
    } catch (e) {
      console.warn("Audio playback not allowed yet", e);
    }
  },

  playDhol() {
    try {
      this.init();
      if (!this.ctx || !this.enabled) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const now = this.ctx.currentTime;
      // Deep bass drum boom
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.35);

      gain.gain.setValueAtTime(0.5, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.45);
    } catch (e) {
      console.warn("Dhol sound error", e);
    }
  },

  playClick() {
    try {
      this.init();
      if (!this.ctx || !this.enabled) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(580, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.05);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    } catch (e) {}
  }
};
