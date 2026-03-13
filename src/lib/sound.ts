const sounds: Record<string, HTMLAudioElement> = {};

const SOUND_URLS: Record<string, string> = {
  correct: "data:audio/wav;base64,UklGRl4AAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YToAAAA/P0BAQUFCQkNDQ0NDQkJBQUA/Pz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0c",
  wrong: "data:audio/wav;base64,UklGRl4AAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YToAAABCPzw5NjMwLSojHhkUDwoFAP37+Pb08fDv7u7u7+/w8fL09vj6/P8CBAcKDRAUGBwe",
};

function getSound(name: string): HTMLAudioElement | null {
  if (sounds[name]) return sounds[name];
  const url = SOUND_URLS[name];
  if (!url) return null;
  const audio = new Audio(url);
  audio.volume = 0.3;
  sounds[name] = audio;
  return audio;
}

export function playSound(name: "correct" | "wrong" | "levelup" | "streak") {
  try {
    const audio = getSound(name);
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
  } catch {
    // Audio not supported
  }
}

export function preloadSounds() {
  Object.keys(SOUND_URLS).forEach(getSound);
}
