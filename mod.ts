const main = async function (_args: string[]) {
  const XDG_CONFIG: string = (Deno.env.get("HOME") || "") + "/.config/";
  const config = await import(XDG_CONFIG + "lembret/config.ts");
  console.log(config);
};

if (import.meta.main) await main(Deno.args);
