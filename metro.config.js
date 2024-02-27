const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  return {
    resolver: {
      extraNodeModules: {
        '@react-native-firebase/app': require.resolve('@react-native-firebase/app'),
        '@react-native-firebase/database': require.resolve('@react-native-firebase/database'),
      },
    },
    transformer: {
      assetPlugins: defaultConfig.transformer.assetPlugins,
    },
  };
})();
