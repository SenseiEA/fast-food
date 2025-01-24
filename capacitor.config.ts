import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "FastFood",
  webDir: "dist",
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000, // Adjust duration in milliseconds
      launchAutoHide: true,
      backgroundColor: "#D71921", // Replace with your desired color
      androidScaleType: "CENTER_CROP", // Adjust as needed
      showSpinner: false, // Set to true if you want a spinner
    },
  },
};

export default config;
