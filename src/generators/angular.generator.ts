import { execa } from "execa";

export async function generateAngular(name: string) {
  console.log("🚀 Creating Angular project:", name);

  // Flags basiques pour init rapide (masquer prompts)
  const args = [
    name,
    "--defaults",
    "--skip-git",
    "--skip-install"
  ];

  try {
    await execa("ng", ["new", ...args], { stdio: "inherit" });
    console.log("✅ Angular project created:", name);
  } catch (err) {
    console.error("❌ Failed to create Angular project:", err);
  }
}
