// import http from "k6/http";
// import { sleep, check } from "k6";
// export const options = {
//   vus: 10,
//   noConnectionReuse: true,
//   stages: [
//     // { duration: "1m", target: 10 }, // fast ramp-up to a high point
//     // { duration: "1m", target: 4 },
//     { duration: "10s", target: 3000 },
//     // { duration: "1m30s", target: 60 },
//     // { duration: "20s", target: 10 },
//     // { duration: "20m", target: 6000 },
//     // No plateau
//     // { duration: "1m", target: 0 }, // quick ramp-down to 0 users
//   ],
// };

// const prospect = {
//   email: "txvukjavintbtgkxyh@tcwlm.com",
//   phone: "+1456575751",
//   first_name: "test",
//   last_name: "test",
//   address: "suite 111 1509",
//   address2: "",
//   city: "Elizabethtown",
//   state: "KY",
//   country: "US",
//   zip: "42701",
//   dial_code: "1",
//   custom_fields: [],
// };

// const headers = {
//   "Cache-Control": "no-cache, private",
//   "Content-Encoding": "gzip",
//   "Content-Type": "application/json",
//   Date: "Tue, 27 Jun 2023 14:28:49 GMT",
//   Server: "nginx",
//   "Set-Cookie": [
//     "XSRF-TOKEN=eyJpdiI6IlJoZjdweGVRY01pdVwvQXJtQWpaMzV3PT0iLCJ2YWx1ZSI6IkJcL1BVTlNSYjlkT29WXC9cL1RUSzlUYlc2dGliWm8zY01kS0pXSWNlY3IzSUFFWFpXUjU3MkNhd2RadU1BNXhkZDRNaHRJRm93WnA3cUtlc3BnSGt4WlZrSjNRZ2lLMkltQ1hLNXJnRkZNSXhiRGpnT2U1MnFvVGE1QmdTQ2hYMkIwIiwibWFjIjoiMGY4Y2YzMThhOTBkMjRlNTMyYWVhZDk5MzMyYTJkNTJiMDZjODBhMmI4ZjNkYjk4ZjZkZjlhOWU0NjgyN2QwYiJ9; expires=Tue, 27-Jun-2023 16:28:49 GMT; Max-Age=7200; path=/",
//     "unify_checkout_session=eyJpdiI6Ink0OVczU3VLXC9kQWFTM0pSUWU5NkpRPT0iLCJ2YWx1ZSI6Iko5Vmc0T0lxc2d4V3pIOExycVZTb2FtcVVIWnVYa0pVbTA3SkcrckZrQUlHZzFHSkl4STMyWkJlQzFBdWd3XC9sdE5ZSHVNbktOSkhJdXZnQWFxMTE5TVdDN2Zab0IzQmg5Ym9TSTJaTzV0OWN2RmVOVEFwZG5yTmFRV2grVEI4MSIsIm1hYyI6ImU4OTc1YzVmYmRlZjE0YTMwYTRjNWJlMjJiYzczNDA0NDUxN2U5Y2E4ZWJlY2E0OWZiOGU4OTBlNWUxN2FhZGYifQ%3D%3D; expires=Tue, 27-Jun-2023 16:28:49 GMT; Max-Age=7200; path=/; httponly",
//   ],
//   Vary: "Accept-Encoding",
//   Via: "1.1 google",
//   Authority: "checkout.sohofashion.co",
//   Method: "POST",
//   Path: "/api/v3/checkout/create-prospect",
//   Scheme: "https",
//   Accept: "application/json, text/plain, */*",
//   "Accept-Encoding": "gzip, deflate, br",
//   "Accept-Language": "en-US,en;q=0.6",
//   "Content-Length": "255",
//   Cookie:
//     "_y=2aa904e0-fac8-42f0-a554-41ef9a6d4838; _s=977dcb74-cfb7-4682-bc6e-8096591c428d; _shopify_y=2aa904e0-fac8-42f0-a554-41ef9a6d4838; _shopify_s=977dcb74-cfb7-4682-bc6e-8096591c428d; _orig_referrer=; _landing_page=%2F; _shopify_sa_p=; _g1687224391=UExO; _shopify_sa_t=2023-06-27T14%3A24%3A58.890Z; _cmp_a=%7B%22purposes%22%3A%7B%22a%22%3Atrue%2C%22p%22%3Atrue%2C%22m%22%3Atrue%2C%22t%22%3Atrue%7D%2C%22display_banner%22%3Afalse%2C%22merchant_geo%22%3A%22US%22%2C%22sale_of_data_region%22%3Atrue%7D; __cf_bm=EDTkl8wWMmww9GKQNfJbf4oCVBc1idhB0nzZNu3ms0k-1687875955-0-AQMdHhwSlirgn8flH7eRYp4IMCpADpor5vFqTz3wBKkUsjqjiIzFJVEAyUkgUS3nJNymkeTGwOoNUEWhUvyD+eM=; XSRF-TOKEN=eyJpdiI6InFDRE5ITU9JT2pwNENQRlE5WHNOSmc9PSIsInZhbHVlIjoicWR6V04wNm9Xc1wvUGtIMnNFc1MzNFRDbTRvamFoUmFKUVJBc1BENEdadUhZcGRCT0xSUDlmbUVuR1ZGYmQ2d0NOS09cLyt0eWs5YVwveWNIWU9cL2h2VmJ2cld3c3Brc1RGTGRLQzdielNcLzlrbE1RZ0x1TFk0bnFFYzZFTFRqZWRGcCIsIm1hYyI6IjZhN2YyMDYzYzE1MzIzODUyNmQwZjE0Y2Q5YzAxMjdkYWQyNmQyM2U1MTlhMWZjY2FkZGNjYmE0MGE0ZmNkYzcifQ%3D%3D; unify_checkout_session=eyJpdiI6IlhjN25ZbG5QR1E3cXlTRkxQbUhQUUE9PSIsInZhbHVlIjoid1V1dUtBRllCeEF1VUtGMUVLV2x6TmdsYmpIQzQxSG1MUndYS2tocjVoXC85R1JjQzlrd1hGNWpDUDM4V1wvZmd5cnB6NkZZVHRsWG1EbHhybWtudkJUTU03TXFcL1FGXC9SXC9MUEFodTZlSHVqMXI0SkduMjlXT1hLeDRcLzRLSnh3bG4iLCJtYWMiOiJkZThhNWY5Njc0MWFiMjc4MjhkZjI3MWFkYTk5YzMzMGJiZGVlNTY4NGYxNTIxZGU1MmM4ZjgxM2ViYzJhYTU4In0%3D",
//   Origin: "https://checkout.sohofashion.co",
//   Referer: "https://checkout.sohofashion.co/checkout",
//   "Sec-Ch-Ua": '"Not.A/Brand";v="8", "Chromium";v="114", "Brave";v="114"',
//   "Sec-Ch-Ua-Mobile": "?1",
//   "Sec-Ch-Ua-Platform": '"Android"',
//   "Sec-Fetch-Dest": "empty",
//   "Sec-Fetch-Mode": "cors",
//   "Sec-Fetch-Site": "same-origin",
//   "Sec-Gpc": "1",
//   "User-Agent":
//     "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36",
//   "X-Csrf-Token": "9lQXqsQGW9xiu1GLfpv9pnwp9gNyW9gjNmuQ1vRU",
//   "X-Requested-With": "XMLHttpRequest",
//   "X-Xsrf-Token":
//     "eyJpdiI6InFDRE5ITU9JT2pwNENQRlE5WHNOSmc9PSIsInZhbHVlIjoicWR6V04wNm9Xc1wvUGtIMnNFc1MzNFRDbTRvamFoUmFKUVJBc1BENEdadUhZcGRCT0xSUDlmbUVuR1ZGYmQ2d0NOS09cLyt0eWs5YVwveWNIWU9cL2h2VmJ2cld3c3Brc1RGTGRLQzdielNcLzlrbE1RZ0x1TFk0bnFFYzZFTFRqZWRGcCIsIm1hYyI6IjZhN2YyMDYzYzE1MzIzODUyNmQwZjE0Y2Q5YzAxMjdkYWQyNmQyM2U1MTlhMWZjY2FkZGNjYmE0MGE0ZmNkYzcifQ==",
// };

// export default function () {
//   // const res = http.post(
//   //   "https://checkout.sohofashion.co/api/v3/checkout/create-prospect",
//   //   prospect,
//   //   headers
//   // );
//   http.get("https://sohofashion.co/contact");
//   // const res = http.get("https://sohofashion.co/collections/women-tops");
//   // check(res, { "status was 200": (r) => r.status == 200 });
//   // sleep(1);
// }

// // https://sohofashion.co/contact

// // https://checkout.sohofashion.co/api/v3/checkout/create-prospect

// // const prospect = {
// //   "email": "txvukjavintbtgkxyh@tcwlm.com",
// //   "phone": "+1456575751",
// //   "first_name": "test",
// //   "last_name": "test",
// //   "address": "suite 111 1509",
// //   "address2": "",
// //   "city": "Elizabethtown",
// //   "state": "KY",
// //   "country": "US",
// //   "zip": "42701",
// //   "dial_code": "1",
// //   "custom_fields": []
// // }

// // import http from 'k6/http';

// // export default function () {
// //   const prospect = {
// //     "email": "txvukjavintbtgkxyh@tcwlm.com",
// //     "phone": "+1456575751",
// //     "first_name": "test",
// //     "last_name": "test",
// //     "address": "suite 111 1509",
// //     "address2": "",
// //     "city": "Elizabethtown",
// //     "state": "KY",
// //     "country": "US",
// //     "zip": "42701",
// //     "dial_code": "1",
// //     "custom_fields": []
// //   }

// //   const payload = JSON.stringify(prospect);
// //   const headers = {
// //     'Cache-Control': 'no-cache, private',
// //     'Content-Encoding': 'gzip',
// //     'Content-Type': 'application/json',
// //     'Date': 'Tue, 27 Jun 2023 14:28:49 GMT',
// //     'Server': 'nginx',
// //     'Set-Cookie': [
// //       'XSRF-TOKEN=eyJpdiI6IlJoZjdweGVRY01pdVwvQXJtQWpaMzV3PT0iLCJ2YWx1ZSI6IkJcL1BVTlNSYjlkT29WXC9cL1RUSzlUYlc2dGliWm8zY01kS0pXSWNlY3IzSUFFWFpXUjU3MkNhd2RadU1BNXhkZDRNaHRJRm93WnA3cUtlc3BnSGt4WlZrSjNRZ2lLMkltQ1hLNXJnRkZNSXhiRGpnT2U1MnFvVGE1QmdTQ2hYMkIwIiwibWFjIjoiMGY4Y2YzMThhOTBkMjRlNTMyYWVhZDk5MzMyYTJkNTJiMDZjODBhMmI4ZjNkYjk4ZjZkZjlhOWU0NjgyN2QwYiJ9; expires=Tue, 27-Jun-2023 16:28:49 GMT; Max-Age=7200; path=/',
// //       'unify_checkout_session=eyJpdiI6Ink0OVczU3VLXC9kQWFTM0pSUWU5NkpRPT0iLCJ2YWx1ZSI6Iko5Vmc0T0lxc2d4V3pIOExycVZTb2FtcVVIWnVYa0pVbTA3SkcrckZrQUlHZzFHSkl4STMyWkJlQzFBdWd3XC9sdE5ZSHVNbktOSkhJdXZnQWFxMTE5TVdDN2Zab0IzQmg5Ym9TSTJaTzV0OWN2RmVOVEFwZG5yTmFRV2grVEI4MSIsIm1hYyI6ImU4OTc1YzVmYmRlZjE0YTMwYTRjNWJlMjJiYzczNDA0NDUxN2U5Y2E4ZWJlY2E0OWZiOGU4OTBlNWUxN2FhZGYifQ%3D%3D; expires=Tue, 27-Jun-2023 16:28:49 GMT; Max-Age=7200; path=/; httponly'
// //     ],
// //     'Vary': 'Accept-Encoding',
// //     'Via': '1.1 google',
// //     'Authority': 'checkout.sohofashion.co',
// //     'Method': 'POST',
// //     'Path': '/api/v3/checkout/create-prospect',
// //     'Scheme': 'https',
// //     'Accept': 'application/json, text/plain, */*',
// //     'Accept-Encoding': 'gzip, deflate, br',
// //     'Accept-Language': 'en-US,en;q=0.6',
// //     'Content-Length': '255',
// //     'Cookie': '_y=2aa904e0-fac8-42f0-a554-41ef9a6d4838; _s=977dcb74-cfb7-4682-bc6e-8096591c428d; _shopify_y=2aa904e0-fac8-42f0-a554-41ef9a6d4838; _shopify_s=977dcb74-cfb7-4682-bc6e-8096591c428d; _orig_referrer=; _landing_page=%2F; _shopify_sa_p=; _g1687224391=UExO; _shopify_sa_t=2023-06-27T14%3A24%3A58.890Z; _cmp_a=%7B%22purposes%22%3A%7B%22a%22%3Atrue%2C%22p%22%3Atrue%2C%22m%22%3Atrue%2C%22t%22%3Atrue%7D%2C%22display_banner%22%3Afalse%2C%22merchant_geo%22%3A%22US%22%2C%22sale_of_data_region%22%3Atrue%7D; __cf_bm=EDTkl8wWMmww9GKQNfJbf4oCVBc1idhB0nzZNu3ms0k-1687875955-0-AQMdHhwSlirgn8flH7eRYp4IMCpADpor5vFqTz3wBKkUsjqjiIzFJVEAyUkgUS3nJNymkeTGwOoNUEWhUvyD+eM=; XSRF-TOKEN=eyJpdiI6InFDRE5ITU9JT2pwNENQRlE5WHNOSmc9PSIsInZhbHVlIjoicWR6V04wNm9Xc1wvUGtIMnNFc1MzNFRDbTRvamFoUmFKUVJBc1BENEdadUhZcGRCT0xSUDlmbUVuR1ZGYmQ2d0NOS09cLyt0eWs5YVwveWNIWU9cL2h2VmJ2cld3c3Brc1RGTGRLQzdielNcLzlrbE1RZ0x1TFk0bnFFYzZFTFRqZWRGcCIsIm1hYyI6IjZhN2YyMDYzYzE1MzIzODUyNmQwZjE0Y2Q5YzAxMjdkYWQyNmQyM2U1MTlhMWZjY2FkZGNjYmE0MGE0ZmNkYzcifQ%3D%3D; unify_checkout_session=eyJpdiI6IlhjN25ZbG5QR1E3cXlTRkxQbUhQUUE9PSIsInZhbHVlIjoid1V1dUtBRllCeEF1VUtGMUVLV2x6TmdsYmpIQzQxSG1MUndYS2tocjVoXC85R1JjQzlrd1hGNWpDUDM4V1wvZmd5cnB6NkZZVHRsWG1EbHhybWtudkJUTU03TXFcL1FGXC9SXC9MUEFodTZlSHVqMXI0SkduMjlXT1hLeDRcLzRLSnh3bG4iLCJtYWMiOiJkZThhNWY5Njc0MWFiMjc4MjhkZjI3MWFkYTk5YzMzMGJiZGVlNTY4NGYxNTIxZGU1MmM4ZjgxM2ViYzJhYTU4In0%3D',
// //     'Origin': 'https://checkout.sohofashion.co',
// //     'Referer': 'https://checkout.sohofashion.co/checkout',
// //     'Sec-Ch-Ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Brave";v="114"',
// //     'Sec-Ch-Ua-Mobile': '?1',
// //     'Sec-Ch-Ua-Platform': '"Android"',
// //     'Sec-Fetch-Dest': 'empty',
// //     'Sec-Fetch-Mode': 'cors',
// //     'Sec-Fetch-Site': 'same-origin',
// //     'Sec-Gpc': '1',
// //     'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36',
// //     'X-Csrf-Token': '9lQXqsQGW9xiu1GLfpv9pnwp9gNyW9gjNmuQ1vRU',
// //     'X-Requested-With': 'XMLHttpRequest',
// //     'X-Xsrf-Token': 'eyJpdiI6InFDRE5ITU9JT2pwNENQRlE5WHNOSmc9PSIsInZhbHVlIjoicWR6V04wNm9Xc1wvUGtIMnNFc1MzNFRDbTRvamFoUmFKUVJBc1BENEdadUhZcGRCT0xSUDlmbUVuR1ZGYmQ2d0NOS09cLyt0eWs5YVwveWNIWU9cL2h2VmJ2cld3c3Brc1RGTGRLQzdielNcLzlrbE1RZ0x1TFk0bnFFYzZFTFRqZWRGcCIsIm1hYyI6IjZhN2YyMDYzYzE1MzIzODUyNmQwZjE0Y2Q5YzAxMjdkYWQyNmQyM2U1MTlhMWZjY2FkZGNjYmE0MGE0ZmNkYzcifQ==',
// //   };
// //   http.post('https://checkout.sohofashion.co/api/v3/checkout/create-prospect', payload, { headers });
// // }

// // https://checkout.sohofashion.co/api/v3/checkout/create-prospect

export {};
