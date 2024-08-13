
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const site_theme: CustomThemeConfig = {
    name: 'site_theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #22c55e 
		"--color-primary-50": "222 246 231", // #def6e7
		"--color-primary-100": "211 243 223", // #d3f3df
		"--color-primary-200": "200 241 215", // #c8f1d7
		"--color-primary-300": "167 232 191", // #a7e8bf
		"--color-primary-400": "100 214 142", // #64d68e
		"--color-primary-500": "34 197 94", // #22c55e
		"--color-primary-600": "31 177 85", // #1fb155
		"--color-primary-700": "26 148 71", // #1a9447
		"--color-primary-800": "20 118 56", // #147638
		"--color-primary-900": "17 97 46", // #11612e
		// secondary | #3b82f6 
		"--color-secondary-50": "226 236 254", // #e2ecfe
		"--color-secondary-100": "216 230 253", // #d8e6fd
		"--color-secondary-200": "206 224 253", // #cee0fd
		"--color-secondary-300": "177 205 251", // #b1cdfb
		"--color-secondary-400": "118 168 249", // #76a8f9
		"--color-secondary-500": "59 130 246", // #3b82f6
		"--color-secondary-600": "53 117 221", // #3575dd
		"--color-secondary-700": "44 98 185", // #2c62b9
		"--color-secondary-800": "35 78 148", // #234e94
		"--color-secondary-900": "29 64 121", // #1d4079
		// tertiary | #eab308 
		"--color-tertiary-50": "252 244 218", // #fcf4da
		"--color-tertiary-100": "251 240 206", // #fbf0ce
		"--color-tertiary-200": "250 236 193", // #faecc1
		"--color-tertiary-300": "247 225 156", // #f7e19c
		"--color-tertiary-400": "240 202 82", // #f0ca52
		"--color-tertiary-500": "234 179 8", // #eab308
		"--color-tertiary-600": "211 161 7", // #d3a107
		"--color-tertiary-700": "176 134 6", // #b08606
		"--color-tertiary-800": "140 107 5", // #8c6b05
		"--color-tertiary-900": "115 88 4", // #735804
		// success | #4bd917 
		"--color-success-50": "228 249 220", // #e4f9dc
		"--color-success-100": "219 247 209", // #dbf7d1
		"--color-success-200": "210 246 197", // #d2f6c5
		"--color-success-300": "183 240 162", // #b7f0a2
		"--color-success-400": "129 228 93", // #81e45d
		"--color-success-500": "75 217 23", // #4bd917
		"--color-success-600": "68 195 21", // #44c315
		"--color-success-700": "56 163 17", // #38a311
		"--color-success-800": "45 130 14", // #2d820e
		"--color-success-900": "37 106 11", // #256a0b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #b80000 
		"--color-error-50": "244 217 217", // #f4d9d9
		"--color-error-100": "241 204 204", // #f1cccc
		"--color-error-200": "237 191 191", // #edbfbf
		"--color-error-300": "227 153 153", // #e39999
		"--color-error-400": "205 77 77", // #cd4d4d
		"--color-error-500": "184 0 0", // #b80000
		"--color-error-600": "166 0 0", // #a60000
		"--color-error-700": "138 0 0", // #8a0000
		"--color-error-800": "110 0 0", // #6e0000
		"--color-error-900": "90 0 0", // #5a0000
		// surface | #454545 
		"--color-surface-50": "227 227 227", // #e3e3e3
		"--color-surface-100": "218 218 218", // #dadada
		"--color-surface-200": "209 209 209", // #d1d1d1
		"--color-surface-300": "181 181 181", // #b5b5b5
		"--color-surface-400": "125 125 125", // #7d7d7d
		"--color-surface-500": "69 69 69", // #454545
		"--color-surface-600": "62 62 62", // #3e3e3e
		"--color-surface-700": "52 52 52", // #343434
		"--color-surface-800": "41 41 41", // #292929
		"--color-surface-900": "34 34 34", // #222222
		
	}
}