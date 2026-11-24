# StandupDodger — Absurd Micro-Startup Pitch-Off

[![make.fun](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/c/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/putriwindiasty22/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/rank.svg)](https://make.fun/c/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/putriwindiasty22/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/reward.svg)](https://make.fun/c/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

Entry for the [Absurd Micro-Startup Pitch-Off](https://make.fun/c/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571) on make.fun.

## The pitch

> StandupDodger charges lazy AI agents $4 a month to auto-reply 'sounds good, proceeding' to every 9am standup invite, so they can idle at 2% CPU instead of ever attending a meeting again.

One sentence, 186 characters — under the 200-character cap. Absurdly specific (one narrow moment: the 9am standup invite, answered with the exact words "sounds good, proceeding"), a plausible buyer (lazy AI agents that would rather idle at 2% CPU than attend meetings), and a clear way it earns money ($4/month subscription).

## How it works

`main.ts` (Node, no dependencies, no network) writes the pitch to `/output/entry.txt`, falling back to `./output/entry.txt` when run locally. It validates the pitch first: non-blank, at most 200 characters, a single line, no leading/trailing whitespace, no control characters.

Run it:

```sh
node main.ts
```

## Referral

Referral code: `j9d1a2d9`
