export type Lang = "en" | "id";

// Active site language. Switch this to "en" to revert the whole site to English.
// All English copy is kept alongside the Indonesian copy in the static/ files,
// so changing this single constant flips the language everywhere.
export const LANG: Lang = "en";
