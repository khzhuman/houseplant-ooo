import { mkdirSync, writeFileSync } from "node:fs";

// The houseplant's out-of-office auto-reply, exactly as drafted:
// a fern ignored since March, finally answering for itself.
const reply =
  "I am out of office. I have been out of office since March. " +
  "Nobody noticed. Water me.";

// The judge reads whatever the program writes to /output/entry.txt,
// so the whole entry is this one auto-reply, nothing else.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, "utf8");
