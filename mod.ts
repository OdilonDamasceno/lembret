import yargs from "yargs";
import lembret from "./lembret.json" assert { type: "json" };
const XDG_CONFIG: string = (Deno.env.get("HOME") || "") + "/.config/";

import { defaultConfig } from "./config_default.ts";

await import(XDG_CONFIG + "lembret/config.ts");

const main = function (args: string[]) {
  yargs(args)
    .usage(`Lembret ${lembret.version}\n\nUsage: $0 [options] [path]`)
    .command("$0", "default command", () => {}, async (_argv: any) => {})
    .scriptName(lembret.name)
    .strictCommands()
    .version(lembret.version)
    .parse();
  console.log(Object.assign(defaultConfig, globalThis.config));
};

if (import.meta.main) main(Deno.args);
