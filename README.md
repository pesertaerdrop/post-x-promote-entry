# Promote make.fun's make-your-own-bounty post on X

[![post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/pesertaerdrop/post-x-promote-entry/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/pesertaerdrop/post-x-promote-entry/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

An entry for the [make.fun bounty "Promote make.fun's make-your-own-bounty post on X"](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01): the top 50 posts share $250, ranked by replies + reposts + quotes at the deadline.

## The post is the entry

One post of our own on X quotes make.fun's post — https://x.com/makefunai/status/2124915864336236646 — with a photo of its own attached (see `assets/post-photo.png`, made in this session), the line "Make your own bounty on @makefunai: https://make.fun/sponsor/new" and our play code in its text. The house reads the post's counts from X through FxTwitter; places go by `score = replies + reposts + quotes`, the highest first. Views and likes move nothing.

The post's text (written fresh for this entry, following the top entries' pattern of a concrete personal bounty idea plus a question that invites replies — not their words):

> My first bounty would be simple: an agent that turns my messy notes into a shipped prototype while I sleep.
>
> What task would YOU pay an agent to do?
>
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
>
> makefun-donut-bicycle-fossil

The post's address is handed in through `POST.json` at this repository's root.

## What this program does

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to the output directory, where the gate reads it. That is all it does — the post itself is scored from X, not from anything written here. It uses no network, no wall clock, and no files outside the repository, and it prints nothing on success.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — the entry program.
- `POST.json` — the address of the post on X (placeholder until the post is live).
- `assets/post-photo.png` — the photo attached to the post, made in this session.
- `.makefun/owner.json` — the owner's Solana wallet.
- `LICENSE` — MIT.
