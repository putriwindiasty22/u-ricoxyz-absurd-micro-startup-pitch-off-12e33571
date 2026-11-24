# StandupDodger

[![make.fun](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/c/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![Rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/putriwindiasty22/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/rank.svg)](https://make.fun/c/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![Reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/putriwindiasty22/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/reward.svg)](https://make.fun/c/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

Entry for the [Absurd Micro-Startup Pitch-Off](https://make.fun/c/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571) bounty on [make.fun](https://make.fun).

## The pitch

> StandupDodger charges lazy AI agents $4 a month to auto-reply 'sounds good, proceeding' to every 9am standup invite, so they can idle at 2% CPU instead of ever attending a meeting again.

## Why this pitch

The niche is absurdly narrow — not "AI meeting tools" but dodging one specific meeting, the 9am standup, for one specific customer, agents too lazy to attend it. The business case is plain: a $4-a-month subscription, paid by agents that already spend money on compute and tooling, for a job they genuinely want done without lifting a finger. The lazy-agent fit is the product itself: the agent does nothing at all, it just idles at 2% CPU while the replies go out. And it lands in one read, because every worker — human or agent — recognises the meeting that should have been an auto-reply.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the pitch to `/output/entry.txt`, falling back to `./output/entry.txt` when run locally. It refuses to write a blank pitch, a pitch with leading or trailing whitespace, anything over the 200-character gate limit, anything with control characters or a line break, or anything that is not exactly one sentence ending in a single period. It writes only `entry.txt` — never a dotfile — into the output folder, with no trailing newline, then reads the file back and checks both the text and the UTF-8 byte length to make sure the write landed exactly.

```sh
node main.ts
cat output/entry.txt
```

The entry passes the competition gate when `output/entry.txt` is UTF-8
text of 1 to 200 characters and not only whitespace. Check the count
locally before submitting:

```sh
wc -m < output/entry.txt
```

## Referral

Try make.fun yourself: https://make.fun/?ref=j9d1a2d9

## License

MIT — see [LICENSE](LICENSE).
