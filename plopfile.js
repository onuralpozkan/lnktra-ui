export default function (plop) {
  // plop generator code
  plop.setGenerator("component", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/{{pascalCase name}}/src/index.ts",
        templateFile: "generators/Component/src/index.ts.hbs",
      },
      {
        type: "add",
        path: "packages/{{pascalCase name}}/src/{{pascalCase name}}.tsx",
        templateFile: "generators/Component/src/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "packages/{{pascalCase name}}/src/index.scss",
        templateFile: "generators/Component/src/Index.scss.hbs",
      },
      {
        type: "add",
        path: "packages/{{pascalCase name}}/src/stories/{{pascalCase name}}.stories.tsx",
        templateFile: "generators/Component/src/stories/Stories.tsx.hbs",
      },
      {
        type: "add",
        path: "packages/{{pascalCase name}}/src/__tests__/{{pascalCase name}}.test.tsx",
        templateFile: "generators/Component/src/__tests__/Test.tsx.hbs",
      },
      {
        type: "add",
        path: "packages/{{pascalCase name}}/src/vite-env.d.ts",
        templateFile: "generators/Component/src/vite-env.d.hbs",
      },
      {
        type: "add",
        path: "packages/{{pascalCase name}}/tsconfig.json",
        templateFile: "generators/Component/tsconfig.json.hbs",
      },
      {
        type: "add",
        path: "packages/{{pascalCase name}}/.npmignore",
        templateFile: "generators/Component/NPMIgnore.hbs",
      },
      {
        type: "add",
        path: "packages/{{pascalCase name}}/CHANGELOG.md",
        templateFile: "generators/Component/CHANGELOG.md.hbs",
      },
      {
        type: "add",
        path: "packages/{{pascalCase name}}/package.json",
        templateFile: "generators/Component/package.json.hbs",
      },
      {
        type: "add",
        path: "packages/{{pascalCase name}}/README.md",
        templateFile: "generators/Component/README.md.hbs",
      },
    ],
  });
}
