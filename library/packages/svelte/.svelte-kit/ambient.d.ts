
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const BUN_INSTALL: string;
	export const CHROME_DESKTOP: string;
	export const COLORTERM: string;
	export const CONDA_CHANGEPS1: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const DESKTOP_SESSION: string;
	export const DISPLAY: string;
	export const EDITOR: string;
	export const ENCORE_INSTALL: string;
	export const FPATH: string;
	export const GDK_BACKEND: string;
	export const GDMSESSION: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const GIT_ASKPASS: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const GNOME_KEYRING_CONTROL: string;
	export const GNOME_SETUP_DISPLAY: string;
	export const GNOME_SHELL_SESSION_MODE: string;
	export const GOPATH: string;
	export const GSM_SKIP_SSH_AGENT_WORKAROUND: string;
	export const GTK_MODULES: string;
	export const HOME: string;
	export const HOMEBREW_CELLAR: string;
	export const HOMEBREW_PREFIX: string;
	export const HOMEBREW_REPOSITORY: string;
	export const INFOPATH: string;
	export const INVOCATION_ID: string;
	export const JAVA_HOME: string;
	export const JOURNAL_STREAM: string;
	export const LANG: string;
	export const LOGNAME: string;
	export const MANAGERPID: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const NODE: string;
	export const OLDPWD: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const PATH: string;
	export const PERIOD: string;
	export const PROTO_APP_LOG: string;
	export const PROTO_DETECTED_FROM: string;
	export const PROTO_HOME: string;
	export const PROTO_NODE_BIN: string;
	export const PROTO_NODE_VERSION: string;
	export const PROTO_OFFLINE_TIMEOUT: string;
	export const PROTO_SHIM_NAME: string;
	export const PROTO_SHIM_PATH: string;
	export const PROTO_VERSION: string;
	export const PWD: string;
	export const QT_ACCESSIBILITY: string;
	export const QT_IM_MODULE: string;
	export const SESSION_MANAGER: string;
	export const SHELL: string;
	export const SHLVL: string;
	export const SSH_AUTH_SOCK: string;
	export const SSH_SOCKET_DIR: string;
	export const STARSHIP_SESSION_KEY: string;
	export const STARSHIP_SHELL: string;
	export const SYSTEMD_EXEC_PID: string;
	export const TERM: string;
	export const TERM_PROGRAM: string;
	export const TERM_PROGRAM_VERSION: string;
	export const USER: string;
	export const USERNAME: string;
	export const USER_ZDOTDIR: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const VSCODE_INJECTION: string;
	export const WARP_HONOR_PS1: string;
	export const WARP_IS_LOCAL_SHELL_SESSION: string;
	export const WARP_USE_SSH_WRAPPER: string;
	export const WAYLAND_DISPLAY: string;
	export const XAUTHORITY: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const XDG_DATA_DIRS: string;
	export const XDG_MENU_PREFIX: string;
	export const XDG_RUNTIME_DIR: string;
	export const XDG_SESSION_CLASS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XDG_SESSION_TYPE: string;
	export const XMODIFIERS: string;
	export const ZDOTDIR: string;
	export const ZPLUG_BIN: string;
	export const ZPLUG_CACHE_DIR: string;
	export const ZPLUG_ERROR_LOG: string;
	export const ZPLUG_FILTER: string;
	export const ZPLUG_HOME: string;
	export const ZPLUG_LOADFILE: string;
	export const ZPLUG_PROTOCOL: string;
	export const ZPLUG_REPOS: string;
	export const ZPLUG_ROOT: string;
	export const ZPLUG_THREADS: string;
	export const ZPLUG_USE_CACHE: string;
	export const ZSH: string;
	export const ZSH_CACHE_DIR: string;
	export const _: string;
	export const _ZPLUG_AWKPATH: string;
	export const _ZPLUG_CONFIG_SUBSHELL: string;
	export const _ZPLUG_OHMYZSH: string;
	export const _ZPLUG_PREZTO: string;
	export const _ZPLUG_URL: string;
	export const _ZPLUG_VERSION: string;
	export const __ORIG_PATH: string;
	export const npm_config_local_prefix: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const npm_lifecycle_event: string;
	export const npm_node_execpath: string;
	export const npm_package_json: string;
	export const npm_package_name: string;
	export const npm_package_version: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		BUN_INSTALL: string;
		CHROME_DESKTOP: string;
		COLORTERM: string;
		CONDA_CHANGEPS1: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		DESKTOP_SESSION: string;
		DISPLAY: string;
		EDITOR: string;
		ENCORE_INSTALL: string;
		FPATH: string;
		GDK_BACKEND: string;
		GDMSESSION: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		GIT_ASKPASS: string;
		GNOME_DESKTOP_SESSION_ID: string;
		GNOME_KEYRING_CONTROL: string;
		GNOME_SETUP_DISPLAY: string;
		GNOME_SHELL_SESSION_MODE: string;
		GOPATH: string;
		GSM_SKIP_SSH_AGENT_WORKAROUND: string;
		GTK_MODULES: string;
		HOME: string;
		HOMEBREW_CELLAR: string;
		HOMEBREW_PREFIX: string;
		HOMEBREW_REPOSITORY: string;
		INFOPATH: string;
		INVOCATION_ID: string;
		JAVA_HOME: string;
		JOURNAL_STREAM: string;
		LANG: string;
		LOGNAME: string;
		MANAGERPID: string;
		MEMORY_PRESSURE_WATCH: string;
		MEMORY_PRESSURE_WRITE: string;
		NODE: string;
		OLDPWD: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		PATH: string;
		PERIOD: string;
		PROTO_APP_LOG: string;
		PROTO_DETECTED_FROM: string;
		PROTO_HOME: string;
		PROTO_NODE_BIN: string;
		PROTO_NODE_VERSION: string;
		PROTO_OFFLINE_TIMEOUT: string;
		PROTO_SHIM_NAME: string;
		PROTO_SHIM_PATH: string;
		PROTO_VERSION: string;
		PWD: string;
		QT_ACCESSIBILITY: string;
		QT_IM_MODULE: string;
		SESSION_MANAGER: string;
		SHELL: string;
		SHLVL: string;
		SSH_AUTH_SOCK: string;
		SSH_SOCKET_DIR: string;
		STARSHIP_SESSION_KEY: string;
		STARSHIP_SHELL: string;
		SYSTEMD_EXEC_PID: string;
		TERM: string;
		TERM_PROGRAM: string;
		TERM_PROGRAM_VERSION: string;
		USER: string;
		USERNAME: string;
		USER_ZDOTDIR: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		VSCODE_GIT_IPC_HANDLE: string;
		VSCODE_INJECTION: string;
		WARP_HONOR_PS1: string;
		WARP_IS_LOCAL_SHELL_SESSION: string;
		WARP_USE_SSH_WRAPPER: string;
		WAYLAND_DISPLAY: string;
		XAUTHORITY: string;
		XDG_CURRENT_DESKTOP: string;
		XDG_DATA_DIRS: string;
		XDG_MENU_PREFIX: string;
		XDG_RUNTIME_DIR: string;
		XDG_SESSION_CLASS: string;
		XDG_SESSION_DESKTOP: string;
		XDG_SESSION_TYPE: string;
		XMODIFIERS: string;
		ZDOTDIR: string;
		ZPLUG_BIN: string;
		ZPLUG_CACHE_DIR: string;
		ZPLUG_ERROR_LOG: string;
		ZPLUG_FILTER: string;
		ZPLUG_HOME: string;
		ZPLUG_LOADFILE: string;
		ZPLUG_PROTOCOL: string;
		ZPLUG_REPOS: string;
		ZPLUG_ROOT: string;
		ZPLUG_THREADS: string;
		ZPLUG_USE_CACHE: string;
		ZSH: string;
		ZSH_CACHE_DIR: string;
		_: string;
		_ZPLUG_AWKPATH: string;
		_ZPLUG_CONFIG_SUBSHELL: string;
		_ZPLUG_OHMYZSH: string;
		_ZPLUG_PREZTO: string;
		_ZPLUG_URL: string;
		_ZPLUG_VERSION: string;
		__ORIG_PATH: string;
		npm_config_local_prefix: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		npm_lifecycle_event: string;
		npm_node_execpath: string;
		npm_package_json: string;
		npm_package_name: string;
		npm_package_version: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
