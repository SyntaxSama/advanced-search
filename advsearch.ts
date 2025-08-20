/// <reference path="./plugin.d.ts" />

function init() {
  $ui.register((ctx) => {
    ctx.dom.onReady(() => {
      ctx.dom.observe("div[data-headlessui-state='open']", async (elements) => {
        for (const el of elements) {
          el.setProperty('className', 'hidden')
          ctx.screen.navigateTo("/search");
        }
      });
    });
  });
}
