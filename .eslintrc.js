module.exports = {
  "plugins": [
    "babel"
  ],
  "extends": "airbnb",
  "rules": {
    "semi": ["error", "never"],
    "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": 0,
    "jsx-a11y/href-no-hash": 0,
    "no-underscore-dangle": 0,
    "max-len": [2, {"code": 200, "tabWidth": 4, "ignoreUrls": true}]
  },
  "env": {
    "browser": true,
    "jest": true,
  }
};