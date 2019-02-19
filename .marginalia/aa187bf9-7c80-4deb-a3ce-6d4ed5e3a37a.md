This branch replaces `server` with `app` 
Client (FEPW_Lambda-Notes) routes to `app`. 
where  Backend-project_Glenn-David routes to `server`. 
Experiment 1: replace `server` with `app` RESULT: FAIL CRASHES UNTIL `server` is restored.

Experiment 2: `App.js` line 44 Replace `App` with `Server`
RESULT: FAIL Client CRASH until line 10 class name is changed from `App` to `Server` to match line 44 