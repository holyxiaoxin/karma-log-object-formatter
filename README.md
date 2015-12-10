# Karma Log Object Formatter

    Problem: Logging objects are casted into a single line.
    Solution: This patch prettify logging object up to depth of 3.

Working for `"karma version" : "0.13.15"`.

### Installation
- Search for the function `var stringify = function stringify(...){...}` by
searching for `*** stringify function ***` in this repo.

- Patch the function `var stringify = function stringify(...){...}` from this repo
to your global karma directory `/node_modules/karma/static/karma.js`.

- If you are using nvm, the location where global karma resides in is in
`/Users/{username}/.nvm/versions/node/v{current-node-version}/lib/node_modules
/karma/static`.
