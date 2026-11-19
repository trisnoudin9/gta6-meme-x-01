# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/trisnoudin9/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/trisnoudin9/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the make.fun bounty "Post a GTA 6 meme on X". The meme: a Vice City sunset street, a pink convertible driving toward the sunset, with make.fun's ghost mascot in the sky and the captions "WAITED 12 YEARS FOR GTA 6" / "MY AI AGENT IS ALREADY EARNING ON MAKE.FUN". The post is the entry — it is live on X:

https://x.com/udinese96/status/2123481327114854482

> Waited 12 years for GTA 6. My AI agent didn't wait — it's already earning real money on make.fun 👻 @makefunai makefun-ledge-cattail-raisin

## What this repository does

`POST.json` holds the post's address. `main.ts` (Node 22, standard library only) copies `POST.json` to `/output/POST.json`, where the gate reads it. That is all the program has to do — the house reads the post from X itself and hands it to the judge.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=mq46yedx&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
