// This file is auto generated. To update the file make changes to the code generator.

// deno-lint-ignore-file no-unused-vars

import { fromPlatformString, PlatformPointer, toPlatformString } from "platform";
import { BoxedPointer } from "../boxes.ts";
import { Pointer, PointerTo } from "../pointers.ts";
import { f64, i32, PointerValue, TypedArray, u32, u64, u8 } from "../types.ts";
import { Symbols, symbols } from "./_symbols.ts";

import {} from "./structs.ts";

import { Surface, version } from "../SDL/structs.ts";

interface SDLContext {
  library: Deno.DynamicLibrary<Symbols>;

  // TODO: In order to use the correct types we'll have to do a bunch of casts.
  // deno-lint-ignore no-explicit-any
  symbols: any;
  // symbols: Deno.DynamicLibrary<Symbols>["symbols"];
}

const context: SDLContext = {
  // We don't want to check in every function if the
  // library has been loaded so the following are
  // set to null even though the type says it shouldn't
  // be null.
  library: null!,
  symbols: null!,
};

export function Init(flags: number, libraryPath?: string): number {
  // TODO: Improve this logic.
  if (!libraryPath) {
    libraryPath = "libSDL2_image";
  }

  context.library = Deno.dlopen(libraryPath, symbols);
  context.symbols = context.library.symbols;

  return context.symbols.IMG_Init(flags) as number;
}

export function Linked_Version(): version | null {
  return version.of(context.symbols.IMG_Linked_Version() as PointerValue<version>);
}

export function Load(
  file: string,
): Surface | null {
  return Surface.of(context.symbols.IMG_Load(
    toPlatformString(file),
  ) as PointerValue<Surface>);
}

export function Quit(): void {
  context.symbols.IMG_Quit();
  context.library.close();
}