import * as SDL from "../mod.ts";

SDL.Init(SDL.INIT_VIDEO, "../ext/SDL/lib/x64/SDL2.dll");

console.info("SDL Initialized.");

const window = SDL.CreateWindow(
  "Hello World!",
  SDL.WINDOWPOS_CENTERED,
  SDL.WINDOWPOS_CENTERED,
  1024,
  768,
  SDL.WINDOW_SHOWN | SDL.WINDOW_RESIZABLE,
);

if (window.value === 0n) {
  console.error(`Failed to create window: ${SDL.GetError()}`);
  Deno.exit(1);
}

let surface = SDL.GetWindowSurface(window);
console.info(surface.flags);
console.info(surface.w, surface.h);
SDL.FillRect(
  surface,
  null,
  SDL.MapRGB(surface.format, 0x64, 0x95, 0xED),
);
SDL.UpdateWindowSurface(window);

const event = new SDL.Event();

let done = false;
while (!done) {
  while (SDL.PollEvent(event) != 0) {
    if (event.type === SDL.QUIT) {
      console.info("Done.");
      done = true;
    } else if (event.type === SDL.WINDOWEVENT) {
      const windowEvent = event as SDL.WindowEvent;
      if (windowEvent.event === SDL.WINDOWEVENT_SHOWN) {
        console.info(`Window ${windowEvent.windowID} shown.`);
      } else if (windowEvent.event === SDL.WINDOWEVENT_MINIMIZED) {
        console.info(`Window ${windowEvent.windowID} minimized.`);
      } else if (windowEvent.event === SDL.WINDOWEVENT_RESTORED) {
        console.info(`Window ${windowEvent.windowID} restored.`);
      } else if (windowEvent.event === SDL.WINDOWEVENT_RESIZED) {
        console.info(`Window ${windowEvent.windowID} resized: ${event.data1} ${event.data2}`);
        surface = SDL.GetWindowSurface(window);
        SDL.FillRect(
          surface,
          null,
          SDL.MapRGB(surface.format, 0x64, 0x95, 0xED),
        );
        SDL.UpdateWindowSurface(window);
      }
    }
  }
  SDL.Delay(100);
}

console.info("Destroying SDL Window...");
SDL.DestroyWindow(window);
console.info("SDL Window destoryed.");

SDL.Quit();
console.info("SDL Shutdown.");
