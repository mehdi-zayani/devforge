import { execa } from "execa";

export async function generateReact(name: string, stack: string) {
  console.log(`🚀 Creating React project (${stack}):`, name);

  // Initialisation
  let cmd = "";
  let args: string[] = [];

  switch(stack) {
    case "Vite":
      cmd = "npm";
      args = ["create", "vite@latest", name, "--", "--template", "react"];
      break;
    case "Next.js":
      cmd = "npx";
      args = ["create-next-app", name];
      break;
    case "React minimal":
      cmd = "npx";
      args = ["create-react-app", name];
      break;
    default:
      throw new Error(`Unknown React stack: ${stack}`);
  }

  try {
    await execa(cmd, args, { stdio: "inherit" });
    console.log("✅ React project created:", name);
  } catch (err) {
    console.error("❌ Failed to create React project:", err);
  }
}
