const fs = require("fs-extra")

const appInfo = JSON.stringify({})

// eslint-disable-next-line space-before-function-paren
module.exports = {
  packagerConfig: {
    asar: false, // TODO: true for release
    darwinDarkModeSupport: "true",
    packageManager: "npm",
    osxSign: {
      entitlements: "entitlements.plist",
      "entitlements-inherit": "entitlements.plist",
      "gatekeeper-assess": false,
      hardenedRuntime: true,
      identity: "Developer ID Application: GitHub (VEKTX9H2N7)"
    },
    osxNotarize: {
      appleId: process.env.APPLE_ID,
      appleIdPassword: process.env.APPLE_ID_PASSWORD
    },
    executableName: "classroom-assistant",
    icon: "./app/resources/icon.icns",
    protocols: [
      {
        name: "Classroom Assistant",
        schemes: ["x-github-classroom"],
      },
    ],
  },
  makers: [
    {
      name: "@electron-forge/maker-zip",
    },

  ],
  publishers: [

  ],
  windowsStoreConfig: {
    packageName: "",
    name: "classroom-assistant"
  },
  hooks: {
    generateAssets: async () => {
      return new Promise((resolve, reject) =>
        fs.writeFile("./app/app-info.json", appInfo, (e) => {
          if (e) reject(e)
          else resolve()
        })
      )
    },
  },
  plugins: [
    [
      "@electron-forge/plugin-webpack",
      {
        mainConfig: "./webpack.main.config.js",
        renderer: {
          config: "./webpack.renderer.config.js",
          entryPoints: [
            {
              html: "./app/index.html",
              js: "./app/index.jsx",
              name: "main_window",
            },
          ],
        },
      },
    ],
  ],
}
