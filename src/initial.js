import * as Sentry from '@sentry/browser';
import axios from 'axios';

function setTags(ipInfo) {
  /**********
  setting the information returned from the IP lookup as tags/extra information

  mainly to know location of visitor
  **********/

  Sentry.configureScope(function (scope) {
    scope.setTags(ipInfo);
    scope.setExtras(ipInfo);
  });
}

function logVisitor(ipInfo = {}) {
  // only attaching the ':: <ip-address>' along if it's defined
  Sentry.captureMessage(
    `New portfolio visitor!${ipInfo && ipInfo.ip ? ` :: ${ipInfo.ip}` : ''}`,
    'info'
  );
}

export default async function () {
  // stopping the function inside development environment or if it's hosted on a testing/development link(Netlify)
  if (
    process.env.NODE_ENV == 'development' ||
    !window.location.hostname.includes('hellomarquis.com')
  ) {
    return;
  }

  // first initializing Sentry in the project
  Sentry.init({
    dsn: 'https://89ef92b639924bf5a647d64c1f7d8c6c@sentry.io/2253657',
  });
  /**********
  also not hiding the DSN via an environment variable because
  the user can see it anyway when they check the Network requests...

  I'll just whitelist the website's URL
  **********/
  let ipInfo;

  try {
    /**********
    then getting IP information together for tags

    also don't care about this API key because the information isn't that important
    **********/
    ipInfo = (await axios('https://ipinfo.io/?token=dc78148815ec7b')).data;
    setTags(ipInfo);

    // sending headers to custom pageload integration
    await axios({
      method: 'post',
      url:
        'https://qz4rx6qar7.execute-api.us-east-1.amazonaws.com/prod/pageload',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: 'hello' }),
    });
  } catch (error) {
    console.log('Error with initial load setup.');
  }

  // and finally sending a log with the visitor's information
  logVisitor(ipInfo);
}
