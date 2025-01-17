import { basename } from "path";

export default definePreset({
  name: "Base: Javascript",
  handler: async (ctx) => {
    await extractTemplates({
      extractDotFiles: true,
    });
    await editFiles({
      files: ["**"],
      operations: [
        {
          type: "replace-variables",
          variables: {
            app: basename(ctx.applyOptions.targetDirectory),
          },
        },
      ],
    });
    await installPackages({
      packages: [
        "@serverless-stack/cli@1.0.0-beta.9",
        "@serverless-stack/resources@1.0.0-beta.9",
      ],
      dev: true,
    });
  },
});
