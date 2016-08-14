# angular2-seed & ng2-bootstrap & SB Admin 2.0

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 3.x.x.

```bash
git clone https://github.com/AngularShowcase/ng2-bootstrap-sbadmin.git
cd ng2-bootstrap-sbadmin
npm install   # clean npm cache & delete node_modules folder if you get an error
npm start     # start with --env dev
npm run docs      # api document for app
```
_Does not rely on any global dependencies._

# Configuration

Default application server configuration

```javascript
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

# Now to extend?

If you want to use your custom libraries:

```bash
npm install my-library --save
vim tools/config.js
```
Add reference to the installed library in `PATH.src.jslib` (or whatever you like).