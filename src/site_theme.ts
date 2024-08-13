
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
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #1d5fe2 
		"--color-primary-50": "221 231 251", // #dde7fb
		"--color-primary-100": "210 223 249", // #d2dff9
		"--color-primary-200": "199 215 248", // #c7d7f8
		"--color-primary-300": "165 191 243", // #a5bff3
		"--color-primary-400": "97 143 235", // #618feb
		"--color-primary-500": "29 95 226", // #1d5fe2
		"--color-primary-600": "26 86 203", // #1a56cb
		"--color-primary-700": "22 71 170", // #1647aa
		"--color-primary-800": "17 57 136", // #113988
		"--color-primary-900": "14 47 111", // #0e2f6f
		// secondary | #15429e 
		"--color-secondary-50": "220 227 240", // #dce3f0
		"--color-secondary-100": "208 217 236", // #d0d9ec
		"--color-secondary-200": "197 208 231", // #c5d0e7
		"--color-secondary-300": "161 179 216", // #a1b3d8
		"--color-secondary-400": "91 123 187", // #5b7bbb
		"--color-secondary-500": "21 66 158", // #15429e
		"--color-secondary-600": "19 59 142", // #133b8e
		"--color-secondary-700": "16 50 119", // #103277
		"--color-secondary-800": "13 40 95", // #0d285f
		"--color-secondary-900": "10 32 77", // #0a204d
		// tertiary | #0c275a 
		"--color-tertiary-50": "219 223 230", // #dbdfe6
		"--color-tertiary-100": "206 212 222", // #ced4de
		"--color-tertiary-200": "194 201 214", // #c2c9d6
		"--color-tertiary-300": "158 169 189", // #9ea9bd
		"--color-tertiary-400": "85 104 140", // #55688c
		"--color-tertiary-500": "12 39 90", // #0c275a
		"--color-tertiary-600": "11 35 81", // #0b2351
		"--color-tertiary-700": "9 29 68", // #091d44
		"--color-tertiary-800": "7 23 54", // #071736
		"--color-tertiary-900": "6 19 44", // #06132c
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