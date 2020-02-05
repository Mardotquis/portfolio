import * as Sentry from '@sentry/browser';
import axios from 'axios';

function setTags(ipInfo) {
  /**********
  setting the information returned from the IP lookup as tags/extra information

  mainly to know location of visitor
  **********/

  Sentry.configureScope(function(scope) {
    scope.setTags(ipInfo)
    scope.setExtras(ipInfo)
  });
}

function logVisitor(ipInfo={}) {
  // only attaching the ':: <ip-address>' along if it's defined
  Sentry.captureMessage(`New portfolio visitor!${(ipInfo && ipInfo.query) ? ` :: ${ipInfo.query}` : ''}`, 'info');
}

export default async function() {
  if(process.env.NODE_ENV == 'development') {
    // stopping the function inside development environment
    return
  }

 // first initializing Sentry in the project
  Sentry.init({dsn: process.env.SENTRY_DSN});

  let ipInfo;

  try {
    // then getting IP information together for tags
    ipInfo = (await axios('http://ip-api.com/json')).data
    setTags(ipInfo)
  } catch (error) {
    console.log('Error with initial load setup.')
  }

  // and finally sending a log with the visitor's information
  logVisitor(ipInfo)
}
