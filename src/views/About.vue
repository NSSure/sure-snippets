<template>
  <div class="container about">
    <div style="background-color: #323232; padding: 15px;">
      <h5 style="margin-bottom: 0;">What is Sure Snippets?</h5>
    </div>
    <div style="background-color: #2A2A2A; padding: 15px;">
      <p>Sure Snippets allows you to create repeating code patterns for use in <a href="https://code.visualstudio.com/">Visual Studio Code</a>.</p>
    </div>

    <br>
    <br>

    <div style="background-color: #323232; padding: 15px;">
      <h5 style="margin-bottom: 0;">How can I use my snippets?</h5>
    </div>
    <div style="background-color: #2A2A2A; padding: 15px;">
      <p>Sure Snippets allows you to export the snippets you create to a JSON file that can then be imported into Visual Studio Code.</p>
    </div>

    <br>
    <br>

    <div style="background-color: #323232; padding: 15px;">
      <h5 style="margin-bottom: 0;">What does the exported JSON look like?</h5>
    </div>
    <div style="background-color: #2A2A2A; padding: 15px;">
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

    <br>
    <br>

    <div style="background-color: #323232; padding: 15px;">
      <h5 style="margin-bottom: 0;">Developer</h5>
    </div>
    <div class="text-center" style="background-color: #2A2A2A; padding: 15px;">
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
</template>

<style scoped>
  a {
    color: #FDB81F;
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

