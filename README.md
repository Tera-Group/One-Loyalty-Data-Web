# ONE Loyalty Tracking Documentation

This document provides instructions for integrating and using the **oneloyalty-tracking-web-sdk** to capture and track events in a web environment.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Reference](#api-reference)
   - [init](#init)
   - [trackEvent](#trackevent)
5. [Contributing](#contributing)

---

## Introduction

The **oneloyalty-tracking-web-sdk** is designed to collect user interactions and events on a website. It supports:

- Tracking page views, button clicks, and custom events.
- Sending user and device information for analytics.

---

## Installation

### Via Script Tag

Include the SDK script directly in your HTML file:

```html
<script src="oneloyalty-tracking-web-sdk.js"></script>
```

---

## Usage

### Initialization

Before using the SDK, initialize it with your application-specific configuration.

```javascript
OneLoyaltyTrackingWebSDK.init({
  appName: "YOUR_APP_NAME",
  appVersion: "YOUR_APP_VERSION",
  trackingUrl: "https://oneloyalty-tracking-data-api.dev.terasvc.com",
  loyaltyUrl: "https://loyalty-service-api.dev.terasvc.com",
  token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.xxx",
});
```

### Tracking Events

Track user actions or custom events:

```javascript
OneLoyaltyTrackingWebSDK.trackEvent("event_name", {
  buttonId: "purchase-btn",
  action: "clicked",
});
```

---

## API Reference

### `init`

#### Description

Initializes the SDK with the required configuration.

#### Syntax

```javascript
OneLoyaltyTrackingWebSDK.init(config: InitConfig): void
```

#### Parameters

| Parameter     | Type      | Description                                 | Required |
| ------------- | --------- | ------------------------------------------- | -------- |
| `appName`     | `string`  | Your app name.                              | Yes      |
| `appVersion`  | `string`  | Your app version.                           | Yes      |
| `trackingUrl` | `string`  | The tracking service that provided by Tera. | Yes      |
| `loyaltyUrl`  | `string`  | The loyalty service that provided by Tera.  | Yes      |
| `token`       | `string`  | the user token.                             | Yes      |
| `debug`       | `boolean` | Enables/disables debug logs in the console. | No       |

#### Example

```javascript
OneLoyaltyTrackingWebSDK.init({
  appName: "YOUR_APP_NAME",
  appVersion: "YOUR_APP_VERSION",
  trackingUrl: "https://oneloyalty-tracking-data-api.dev.terasvc.com",
  loyaltyUrl: "https://loyalty-service-api.dev.terasvc.com",
  token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.xxx",
});
```

---

### `trackEvent`

#### Description

Sends an event to the server.

#### Syntax

```javascript
OneLoyaltyTrackingWebSDK.trackEvent(eventName: string, eventData?: object): void
```

#### Parameters

| Parameter   | Type     | Description                        | Required |
| ----------- | -------- | ---------------------------------- | -------- |
| `eventName` | `string` | Name of the event being tracked.   | Yes      |
| `eventData` | `object` | Additional metadata for the event. | No       |

#### Example

```javascript
OneLoyaltyTrackingWebSDK.trackEvent("level_completed", {
  level: 5,
  score: 4500,
});
```

---

## Contributing

We welcome contributions to improve the SDK. To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request with a detailed description.

## License

[The MIT License](./LICENSE).
