import inquirer from "inquirer";

export async function createCommand() {
  const { framework } = await inquirer.prompt([
    {
      type: "list",
      name: "framework",
      message: "Choose framework",
      choices: ["Angular", "React"],
    },
  ]);

  let stack = null;

  if (framework === "React") {
    const answer = await inquirer.prompt([
      {
        type: "list",
        name: "stack",
        message: "Choose React stack",
        choices: ["Vite", "Next.js", "React minimal"],
      },
    ]);
    stack = answer.stack;
  }

  console.log("✅ Selection complete:");
  console.log("Framework:", framework);
  if (stack) console.log("Stack:", stack);
}
