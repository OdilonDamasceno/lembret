type User = {
  home?: string;
  description?: string;
  shell?: string;
  groups?: string[];
};

type UserConfig = {
  users: Record<string, User>;
};

declare global {
  const config: UserConfig;
}
