import * as Amplitude from 'expo-analytics-amplitude';
import { AMPLITUDE_API_KEY } from '@env';

let isInitialized = false;

export const events = {
  ACTIVE: 'ACTIVE',
  REGISTRATIONS: 'REGISTRATIONS',
};

export function initialize() {
  if (isInitialized || !AMPLITUDE_API_KEY) {
    return;
  }
  Amplitude.initializeAsync(AMPLITUDE_API_KEY);
  isInitialized = true;
}

export function track(event, options) {
  if (options) {
    Amplitude.logEventWithPropertiesAsync(event, options);
  } else {
    Amplitude.logEventAsync(event);
  }
}

export default {
  events,
  initialize,
  track,
};
