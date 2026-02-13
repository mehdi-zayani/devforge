#!/usr/bin/env node
import { Command } from "commander";
import { showSplash } from "./ui/splash.js";
import { createCommand } from "./commands/create.js";

const program = new Command();

showSplash();

program
  .name("devforge")
  .description("DevForge CLI")
  .version("0.1.0");

program
  .command("create")
  .description("Create a new project")
  .action(createCommand);
  
program.parse();
