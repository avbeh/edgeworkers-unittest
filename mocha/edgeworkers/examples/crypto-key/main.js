import { crypto, pem2ab } from "crypto";
import { Crypto } from "../../../__mocks__/cryptoKey";
/*import { atob, btoa, TextEncoder } from "encoding";

function base64url_decode(input) {
  // base64url -> base64 rewrite borrowed from https://stackoverflow.com/a/51838635
  // Replace non-url compatible chars with base64 standard chars
  input = input.replace(/-/g, "+").replace(/_/g, "/");

  // Pad out with standard base64 required padding characters
  var pad = input.length % 4;
  if (pad) {
    if (pad === 1) {
      throw new Error(
        "InvalidLengthError: Input base64url string is the wrong length to determine padding"
      );
    }
    input += new Array(5 - pad).join("=");
  }

  // Convert the base64 string into a binary string
  var binary_string = atob(input);

  // Convert the binary string into an ArrayBuffer
  // Borrowed from https://stackoverflow.com/a/21797381
  var len = binary_string.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}

// Borrowed from https://stackoverflow.com/a/54113881
async function verify_rs256(jwsObject, crypto_key) {
  const jwsSigningInput = jwsObject.split(".").slice(0, 2).join(".");
  const jwsSignature = jwsObject.split(".")[2];

  return await crypto.subtle.verify(
    { name: "RSASSA-PKCS1-v1_5" },
    crypto_key,
    base64url_decode(jwsSignature),
    new TextEncoder().encode(jwsSigningInput)
  );
} */

export function onClientRequest(request) {
  /* let answer = "Hello, world";
  if (atob("SGVsbG8sIHdvcmxk") !== answer) {
    throw new Error("Decoding using atob() gone wrong!");
  }

  let encoded_answer = "SGVsbG8sIHdvcmxk";
  if (btoa("Hello, world") !== encoded_answer) {
    throw new Error("Encoding using btoa() gone wrong!");
  }
  */

  //verifying getRandomValues()
  let crypto = new Crypto;
  crypto.getRandomValues(new Uint8Array(6));
  

  // crypto.getRandomValues();
  //verifying digest()
  /*  await crypto.subtle.digest("SHA-1", new Int32Array(new ArrayBuffer(8)));

  //verifying decrypt()
  let raw_key = new Uint8Array([
    93, 210, 19, 203, 234, 199, 254, 16, 118, 129, 214, 61, 229, 117, 91, 33,
  ]);
  let iv = new Uint8Array([
    237, 234, 45, 119, 168, 16, 178, 26, 14, 182, 253, 39, 79, 181, 180, 219,
  ]);
  let imported_key = await crypto.subtle.importKey(
    "raw",
    raw_key,
    { name: "AES-CBC", iv: iv },
    false,
    ["encrypt", "decrypt"]
  );
  let input_data_array = new Uint8Array([
    44, 237, 221, 235, 17, 155, 115, 79, 8, 211, 94, 216, 92, 183, 9, 106, 15,
    210, 0, 52, 92, 163, 2, 222, 130, 70, 80, 132, 80, 243, 28, 110, 25, 18, 20,
    98, 63, 51, 5, 136, 72, 206, 212, 46, 255, 220, 131, 188, 133, 109,
  ]);
  let encrypted_data = await crypto.subtle.encrypt(
    { name: "AES-CBC", iv: iv },
    imported_key,
    input_data_array
  );
  let decrypted_data = await crypto.subtle.decrypt(
    { name: "AES-CBC", iv: iv },
    imported_key,
    encrypted_data
  );

  let decrypted_data_array = new Uint8Array(decrypted_data);
  if (decrypted_data_array.toString() !== input_data_array.toString()) {
    throw new Error("Unexpected decrypted data using decrypt()!");
  }

  let jwt =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.NHVaYe26MbtOYhSKkoKYdFVomg4i8ZJd8_-RU8VNbftc4TSMb4bXP3l3YlNWACwyXPGffz5aXHc6lty1Y2t4SWRqGteragsVdZufDn5BlnJl9pdR_kdVFUsra2rWKEofkZeIC4yWytE58sMIihvo9H1ScmmVwBcQP6XETqYd0aSHp1gOa9RdUPDvoXQ5oqygTqVtxaDr6wUFKrKItgBMzWIdNZ6y7O9E0DhEPTbE9rfBo6KTFsHAZnMg4k68CDp2woYIaXbmYTWcvbzIuHO7_37GT79XdIwkm95QJ7hYC9RiwrV7mesbY4PAahERJawntho0my942XheVLmGwLMBkQ";

  const pemEncodedKey = `-----BEGIN PUBLIC KEY-----
        MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu1SU1LfVLPHCozMxH2Mo
        4lgOEePzNm0tRgeLezV6ffAt0gunVTLw7onLRnrq0/IzW7yWR7QkrmBL7jTKEn5u
        +qKhbwKfBstIs+bMY2Zkp18gnTxKLxoS2tFczGkPLPgizskuemMghRniWaoLcyeh
        kd3qqGElvW/VDL5AaWTg0nLVkjRo9z+40RQzuVaE8AkAFmxZzow3x+VJYKdjykkJ
        0iT9wCS0DRTXu269V264Vf/3jvredZiKRkgwlL9xNAwxXFg0x/XFw005UWVRIkdg
        cKWTjpBP2dPwVZ4WWC+9aGVd+Gyn1o0CLelf4rEjGoXbAAEgAqeGUxrcIlbjXfbc
        mwIDAQAB
        -----END PUBLIC KEY-----`;

  let crypto_key = await crypto.subtle.importKey(
    "spki",
    pem2ab(pemEncodedKey),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["verify"]
  );

  await verify_rs256(jwt, crypto_key)
    .then((verified) => request.respondWith(202, {}, "verified: " + verified))
    .catch((e) => request.respondWith(500, {}, "err: " + e.message));*/
}
