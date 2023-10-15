const { TamaguiPlugin } = require('tamagui-loader');
config.plugins.push(
  new TamaguiPlugin({
    config: './tamagui.config.ts',
    components: ['tamagui'], // matching the yarn add you chose above
  }),
);
