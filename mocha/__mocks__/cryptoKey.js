const sinon = require("sinon");

export const mock_crypto_subtle_importKey = sinon.stub();
/*export class ImportKey {
  constructor() {
    this.importKey = mock_CrytoKey_subtle_importKey;
  }
}*/

export const mock_crypto_subtle_encrypt = sinon.stub();
/*export class Encrypt {
  constructor() {
    this.encrypt = mock_CrytoKey_subtle_encrypt;
  }
}*/

export const mock_crypto_subtle_decrypt = sinon.stub();
/*export class Decrypt {
  constructor() {
    this.decrypt = mock_CrytoKey_subtle_decrypt;
  }
}*/

export const mock_crypto_subtle_verify = sinon.stub();
/*export class Verify {
  constructor() {
    this.verify = mock_CrytoKey_subtle_verify;
  }
}*/

export const mock_crypto_subtle_digest = sinon.stub();
/*export class Digest {
  constructor() {
    this.digest = mock_CrytoKey_subtle_digest;
  }
}*/

export const mock_crypto_getRandomValues = sinon.stub();
export class Crypto {
  constructor() {
    this.getRandomValues = mock_crypto_getRandomValues;
  }
}