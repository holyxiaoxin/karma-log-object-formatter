# Karma Log Object Formatter

    Problem: Logging objects are casted into a single line.
    Solution: This patch prettify logging object up to depth of 3.

Tested working for `"karma version" : "0.13.18"`.

### Installation

- Refer to this repo's `original_karma.js` and make sure that stringify function is identical. Search for `function stringify` in `original_karma.js`.

- Patch ONLY the function `var stringify = function stringify(...){...}` from
this repo's `patch.js` to your global karma directory `/node_modules/karma/static/karma.js`.
- Restart `karma start`.

### Tips
- If you are using nvm, the location where global `karma.js` file resides in is in
`/Users/{username}/.nvm/versions/node/v{current-node-version}/lib/node_modules
/karma/static/`.
