type TUser = {
  home?: string;
  description?: string;
  shell?: string;
  groups?: string[];
};

class User {
  home?: string;
  description?: string;
  shell?: string;
  groups?: string[];

  constructor({ description, groups, home, shell }: TUser) {
    this.description = description ?? "Default user";
    this.groups = groups ?? [];
    this.home = home ?? Deno.env.get("HOME");
    this.shell = shell ?? Deno.env.get("SHELL") ?? "/bin/bash";
  }
}

var user: User = new User({});
var users: User[] = [user];

export { User, users };
