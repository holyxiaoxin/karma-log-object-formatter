# Karma Log Object Formatter

    Problem: Logging objects are casted into a single line.
    Solution: This patch prettify logging object up to depth of 3.

Working for `"karma version" : "0.13.15"`.

### Installation

- Patch ONLY the function `var stringify = function stringify(...){...}` from
this repo's `patch.js` to your global karma directory `/node_modules/karma/static/karma.js`.

### Tips
- If you are using nvm, the location where global karma resides in is in
`/Users/{username}/.nvm/versions/node/v{current-node-version}/lib/node_modules
/karma/static`.

- Refer to this repo's `karma.js`.
