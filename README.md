# connect-header

This middleware sets or removes header on HTTP responses.

## Installation

    $ npm install connect-header

## Usage

To set header on responses, simply use `header` middleware like.

    var header = require('connect-header');

    app.use(header({
      'X-Name':'luics',
      'X-Age':'25'
    }));

To remove header, use `header` middleware and specify `null`.

    var header = require('connect-header');

    app.use(header({
      'X-Age':null
    }));


## Credits

  - [luics](http://github.com/luics)


## Test

    $ npm install
    $ npm test


## License

(The MIT License)

Copyright (c) 2012 Luics

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
