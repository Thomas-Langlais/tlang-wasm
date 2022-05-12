/* tslint:disable */
/* eslint-disable */
/**
*/
export function start(): void;
/**
*/
export class BrowserKeyboardInterface {
  free(): void;
/**
* @param {KeyboardEvent} ev
*/
  send_keyboard_event(ev: KeyboardEvent): void;
}
/**
*/
export class Output {
  free(): void;
/**
* @returns {string}
*/
  readonly code: string;
/**
* @returns {string}
*/
  readonly result: string;
}
/**
*/
export class OutputInterface {
  free(): void;
/**
* @returns {Output | undefined}
*/
  poll(): Output | undefined;
}
/**
*/
export class TerminalApi {
  free(): void;
/**
* @param {Element} code_element
*/
  constructor(code_element: Element);
/**
* @returns {BrowserKeyboardInterface}
*/
  browser_keyboard_interface(): BrowserKeyboardInterface;
/**
* @returns {OutputInterface}
*/
  output_interface(): OutputInterface;
/**
* @returns {Promise<void>}
*/
  run_repl_loop(): Promise<void>;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_terminalapi_free: (a: number) => void;
  readonly __wbg_output_free: (a: number) => void;
  readonly output_code: (a: number, b: number) => void;
  readonly output_result: (a: number, b: number) => void;
  readonly __wbg_outputinterface_free: (a: number) => void;
  readonly outputinterface_poll: (a: number) => number;
  readonly terminalapi_new: (a: number) => number;
  readonly terminalapi_browser_keyboard_interface: (a: number) => number;
  readonly terminalapi_output_interface: (a: number) => number;
  readonly terminalapi_run_repl_loop: (a: number) => number;
  readonly start: () => void;
  readonly __wbg_browserkeyboardinterface_free: (a: number) => void;
  readonly browserkeyboardinterface_send_keyboard_event: (a: number, b: number) => void;
  readonly __wbindgen_export_0: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hf7b7d17be096728c: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h7f01530108aa2467: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
