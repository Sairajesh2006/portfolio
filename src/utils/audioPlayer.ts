/**
 * Space Ambient Web Audio Generator
 * Generates an ethereal, relaxing, low-frequency cosmic chord progression
 * using native Web Audio API oscillators and gain envelopes.
 * 
 * Features:
 * - 100% offline & zero external network dependencies
 * - Never autoplays (starts ONLY on explicit user click)
 * - Gentle fade-in and fade-out transitions
 * - Volume controllable
 */

class AmbientSoundscape {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private filter: BiquadFilterNode | null = null;
  private intervalId: number | null = null;

  // Gentle pentatonic space chord frequencies in Hz (F# minor / A major pentatonic)
  private chords = [
    [146.83, 220.00, 293.66, 440.00], // D chord
    [164.81, 246.94, 329.63, 493.88], // E chord
    [185.00, 277.18, 369.99, 554.37], // F#m chord
    [130.81, 196.00, 261.63, 392.00], // C chord
  ];
  private currentChordIndex = 0;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public start() {
    if (this.isPlaying) return;
    this.initContext();
    if (!this.ctx) return;

    this.isPlaying = true;

    // Master gain node with smooth fade-in
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 3);

    // Warm low-pass filter to give an ethereal, soft space tone
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(450, this.ctx.currentTime);
    this.filter.Q.setValueAtTime(1.5, this.ctx.currentTime);

    this.filter.connect(this.masterGain);
    this.masterGain.connect(this.ctx.destination);

    this.playChord(this.chords[0]);

    // Transition smoothly between ambient chords every 6 seconds
    this.intervalId = window.setInterval(() => {
      if (!this.isPlaying) return;
      this.currentChordIndex = (this.currentChordIndex + 1) % this.chords.length;
      this.playChord(this.chords[this.currentChordIndex]);
    }, 6000);
  }

  private playChord(freqs: number[]) {
    if (!this.ctx || !this.filter || !this.isPlaying) return;

    // Fade out previous oscillators
    const now = this.ctx.currentTime;
    const oldOscs = [...this.oscillators];
    this.oscillators = [];

    oldOscs.forEach(osc => {
      try {
        osc.stop(now + 2);
      } catch {
        // already stopped
      }
    });

    // Create new chord layer
    freqs.forEach((freq, idx) => {
      if (!this.ctx || !this.filter) return;
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      // Subtle detune for rich celestial warmth
      osc.detune.setValueAtTime((idx - 1.5) * 4, now);

      oscGain.gain.setValueAtTime(0.001, now);
      oscGain.gain.linearRampToValueAtTime(0.06 / (idx + 1), now + 2);

      osc.connect(oscGain);
      oscGain.connect(this.filter);

      osc.start(now);
      this.oscillators.push(osc);
    });
  }

  public stop() {
    if (!this.isPlaying || !this.ctx || !this.masterGain) {
      this.isPlaying = false;
      return;
    }

    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    const now = this.ctx.currentTime;
    this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 1.2);

    setTimeout(() => {
      this.oscillators.forEach(osc => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // ignore
        }
      });
      this.oscillators = [];
      this.isPlaying = false;
    }, 1250);
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

export const ambientSound = new AmbientSoundscape();
