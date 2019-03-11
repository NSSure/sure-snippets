<template>
  <div class="about">
    <div class="panel-card">
      <div class="header">
        <h5 style="margin-bottom: 0;">What is Sure Snippets?</h5>
      </div>
      <div class="content">
        <p>Sure Snippets allows you to create repeating code patterns for use in <a href="https://code.visualstudio.com/">Visual Studio Code</a>.</p>
        <p>Read more about VS Code snippets and all available configuration options <a href="https://code.visualstudio.com/docs/editor/userdefinedsnippets" target="_blank">here</a>.</p>
      </div>
    </div>

    <br>
    <br>

    <div class="panel-card">
      <div class="header">
        <h5 style="margin-bottom: 0;">How can I use my snippets?</h5>
      </div>
      <div class="content">
        <p>Sure Snippets allows you to export the snippets you create to a JSON file that can then be imported into Visual Studio Code.</p>
        <ul>
          <li>Go to the <router-link to="/export">export</router-link> page</li>
          <li>Click the download bottom at the top of the page</li>
        </ul>
      </div>
    </div>

    <br>
    <br>

    <div class="panel-card">
      <div class="header">
        <h5 style="margin-bottom: 0;">How to quick traverse your snippet?</h5>
      </div>
      <div class="content">
        <p>VS Code allows you to quickly traverse your snippets by inserting placeholders into your snippet. These allow you to tab through snippet to each placeholder</p>
        <table class="table table-dark">
          <tbody>
            <tr>
              <td><strong>Basic placeholder</strong></td>
              <td>$0</td>
            </tr>
            <tr>
              <td><strong>Default value placeholder</strong></td>
              <td> ${0:default}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <br>
    <br>

    <div class="panel-card">
      <div class="header">
        <h5 style="margin-bottom: 0;">What does the exported JSON look like?</h5>
      </div>
      <div class="content">
        <pre v-highlightjs style="agate">
          <code class="json">
            "${name}": {
                "prefix": "${shortcut}",
                "description": "${description}",
                "scope": "${language}",
                "body": [${bodyComponents}]
            }
          </code>
        </pre>
        <table class="table table-dark">
          <thead class="thead-dark">
          </thead>
          <tbody>
            <tr>
              <td><strong>Name</strong></td>
              <td>The name fo the snippet</td>
            </tr>
            <tr>
              <td><strong>Shortcut</strong></td>
              <td>The keyboard shortcut used to generate the snippet in your code file.</td>
            </tr>
            <tr>
              <td><strong>Description</strong></td>
              <td>A brief description on what the snippet does and is used for.</td>
            </tr>
            <tr>
              <td><strong>Language</strong></td>
              <td>The language that the snippet is scoped to (can be global)</td>
            </tr>
            <tr>
              <td><strong>Body</strong></td>
              <td>The body contains the components that build the snippet</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <br>
    <br>

    <div class="panel-card">
      <div class="header">
        <h5 style="margin-bottom: 0;">Developer</h5>
      </div>
      <div class="content text-center">
        <p>Developed by NSSure</p>
        <div class="form-group">
          <a class="mr-4">
          <i class="fa fa-github fa-3x text-warning"></i>
        </a>
        <a>
          <i class="fa fa-gitlab fa-3x text-warning"></i>
        </a>
        </div>
        <p>Thanks for using Sure Snippets and have fun creating new snippets!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  a {
    color: #41B883;
  }

  .about {
    padding: 50px;
  }

  .red {
    color: #C81E38;
  }

  pre,
  code {
    background-color: #2E2E2E;
    color: #f7f7f7;
  }
</style>

