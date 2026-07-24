import mixpanel from "mixpanel-browser";

// We check if we are in the browser environment since Astro renders on the server first.
const isBrowser = typeof window !== "undefined";
const isLocalhost = isBrowser && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");

if (isBrowser && !isLocalhost) {
  mixpanel.init("21e0e59673580c01b0c2d452a271ba08", {
    autocapture: false, // Disabled to prevent default autocapture events and focus on custom events
    record_sessions_percent: 100,
    track_pageview: false, // Disable default page view to prevent duplicates
  });
}

// Extract all URL query parameters
const getUrlParams = () => {
  if (!isBrowser) return {};
  const params = new URLSearchParams(window.location.search);
  const result: Record<string, string> = {};
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  return result;
};

// Register parameters as super properties so they are included in ALL events
if (isBrowser && !isLocalhost) {
  const urlParams = getUrlParams();
  if (Object.keys(urlParams).length > 0) {
    mixpanel.register(urlParams);
  }
}

/**
 * Tracks a custom event in Mixpanel.
 * @param eventName The name of the event to track
 * @param properties Optional properties to send with the event
 */
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (!isBrowser) return;
  if (isLocalhost) {
    console.log(`[Mixpanel Local] Event: ${eventName}`, { ...properties, ...getUrlParams() });
    return;
  }
  mixpanel.track(eventName, properties);
};

/**
 * Tracks a Page View explicitly, capturing referrers and query parameters.
 */
export const trackPageView = () => {
  if (!isBrowser) return;
  
  const properties = {
    path: window.location.pathname,
    url: window.location.href,
    search: window.location.search,
    referrer: document.referrer || "Direct/None",
    title: document.title,
    ...getUrlParams(),
  };

  if (isLocalhost) {
    console.log(`[Mixpanel Local] Page View:`, properties);
    return;
  }
  mixpanel.track("Page View", properties);
};

/**
 * Identify a user with a unique ID.
 * Call this when a user logs in or is identified.
 * @param userId Unique identifier for the user
 */
export const identifyUser = (userId: string) => {
  if (!isBrowser) return;
  if (isLocalhost) {
    console.log(`[Mixpanel Local] Identify: ${userId}`);
    return;
  }
  mixpanel.identify(userId);
};

/**
 * Set user properties in Mixpanel (People Analytics).
 * @param properties Key-value pairs of user properties
 */
export const setPeopleProperties = (properties: Record<string, any>) => {
  if (!isBrowser) return;
  if (isLocalhost) {
    console.log(`[Mixpanel Local] People Properties Set:`, properties);
    return;
  }
  mixpanel.people.set(properties);
};

export default mixpanel;
