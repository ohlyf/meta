const { TamaguiPlugin } = require('tamagui-loader');
module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    config.plugin('TamaguiPlugin').use(TamaguiPlugin, [
      {
        config: './tamagui.config.ts',
        components: ['tamagui'],
      },
    ]);
  });
};
