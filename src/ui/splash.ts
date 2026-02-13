import figlet from "figlet";
import chalk from "chalk";

export function showSplash() {
  console.clear(); 
  const text = figlet.textSync("DevForge", {
    horizontalLayout: "full",
  });
  console.log(chalk.cyanBright(text));
  console.log(chalk.redBright("🚀  CLI to generate modern Angular & React projects\n"));
}
