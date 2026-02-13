import inquirer from "inquirer";
import { generateAngular } from "../generators/angular.generator.js";
import { generateReact } from "../generators/react.generator.js";

export async function createCommand() {
  const { projectName } = await inquirer.prompt([
    { type: "input", name: "projectName", message: "Project name:" }
  ]);

  const { framework } = await inquirer.prompt([
    { type: "list", name: "framework", message: "Choose framework", choices: ["Angular", "React"] }
  ]);

  let stack: string | null = null;
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

  console.log("\n✅ Selection complete:", { projectName, framework, stack });

  
  if (framework === "Angular") await generateAngular(projectName);
  else if (framework === "React" && stack) await generateReact(projectName, stack);
}
