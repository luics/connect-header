var testrunner = require("qunit");

testrunner.setup({
  // logging options
  log:{

    // log assertions overview
    assertions:true,

    // log expected and actual values for failed tests
    errors:true,

    // log tests overview
    tests:true,

    // log summary
    summary:false,

    // log global summary (all files)
    globalSummary:true,

    // log currently testing code file
    testing:true
  },

  // run test coverage tool
  coverage:false

  // define dependencies, which are required then before code

  // define namespace your code will be attached to on global['your namespace']
  //namespace:"header"

});

// Run
testrunner.run({
  code:__dirname + "/lib/header.js", // ./lib/index.js
  tests:__dirname + "/test/header.js"
});