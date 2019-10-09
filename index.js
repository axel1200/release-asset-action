const github = require('@actions/github');
//const core = require('@actions/core');

async function run() {
  // This should be a token with access to your repository scoped in as a secret.
  // The YML workflow will need to set myToken with the GitHub Secret Token
  // myToken: ${{ secrets.GITHUB_TOKEN }
  // https://help.github.com/en/articles/virtual-environments-for-github-actions#github_token-secret
  //const token = core.getInput('myToken');
  const token = process.env.GITHUB_TOKEN;

  const octokit = new github.GitHub(token);
  const context = github.context;
  console.log("* Event Name **********************************************************************");
  console.log(context.eventName);
  console.log("* CONTEXT **********************************************************************");
  console.log(context);
  const { data: release } = await octokit.repos.listReleases({
    ...context.repo
  })

  console.log("* RELEASE **********************************************************************");
  console.log(release);
}

run();
