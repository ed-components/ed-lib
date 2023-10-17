import { defaultValueCtx, Editor, rootCtx } from "@milkdown/core";
import { commonmark } from "@milkdown/preset-commonmark";
import { history } from "@milkdown/plugin-history";
import { nord } from "@milkdown/theme-nord";

import "@milkdown/theme-nord/style.css";

import "./style.css";

const markdown = `# Milkdown Vanilla Commonmark

> You're scared of a world where you're needed.

This is a demo for using Milkdown with **Vanilla Typescript**.`;

// const req = await fetch(
//   "https://raw.githubusercontent.com/erasabi/trekthroughs/master/pen_testing/RickdiculouslyEasy.md"
// );

// const markdown = await req.text();

console.log(markdown);
Editor.make()
  .config((ctx) => {
    ctx.set(rootCtx, "#editor");
    ctx.set(defaultValueCtx, markdown);
  })
  .config(nord)
  .use(commonmark)
  .use(history)
  .create();
