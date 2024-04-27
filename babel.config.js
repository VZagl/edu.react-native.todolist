module.exports = {
  presets: ['module:@react-native/babel-preset'],
  // presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // 'react-native-reanimated/plugin',
    [
      'module-resolver',
      // require.resolve('babel-plugin-module-resolve'),
      {
        root: ['.'],
        // cwd: 'babelrc',
        extensions: [
          '.ios.ts',
          '.ios.tsx',
          '.android.ts',
          '.android.tsx',
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.json',
        ],
        alias: {'~': './src/'},
      },
    ],
    // 'jest-hoist',
  ],
};
