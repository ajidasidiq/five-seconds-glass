// Five Seconds to Explain the Glass — make.fun bounty entry.
// The cat's one-sentence defence, written to /output/entry.txt for the judge.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "It sat in my sunbeam, judging me with its smug little reflection, so I evicted it.";

// No trailing newline: the file must hold exactly the sentence, 1-200 chars.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
