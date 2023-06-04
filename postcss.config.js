export default (ctx) => {
  return {
    plugins: {
      "postcss-import": {
        path: ["./node_modules"],
      },
      "postcss-preset-env": {
        stage: 0,
        features: {
          "nesting-rules": true,
          "custom-media-queries": true,
          "custom-properties": {
            preserve: false,
            warnings: false,
          },
        },
      },
      "postcss-selector-replace": {
        before: [/^\.spectrum--(.*?)/g],
        after: [":root, :host"],
      },
    },
  };
};
