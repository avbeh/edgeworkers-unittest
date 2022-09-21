const sinon = require("sinon");

//subtle object methods
export const mock_crypto_subtle_importKey = sinon.stub();
export const mock_crypto_subtle_encrypt = sinon.stub();
export const mock_crypto_subtle_decrypt = sinon.stub();
export const mock_crypto_subtle_verify = sinon.stub();
export const mock_crypto_subtle_digest = sinon.stub();

class Subtle {
  constructor() {
    this.digest = mock_crypto_subtle_digest;
    this.importKey = mock_crypto_subtle_importKey;;
    this.encrypt = mock_crypto_subtle_encrypt;
    this.decrypt = mock_crypto_subtle_decrypt;
    this.verify = mock_crypto_subtle_verify;
  }
}

//crypto object methods
export const mock_crypto_getRandomValues = sinon.stub();

class Crypto {
  constructor() {
    this.getRandomValues = mock_crypto_getRandomValues;
    this.subtle = new Subtle();
  }
}
export const crypto = new Crypto();

export const mock_verify_rs256 = sinon.stub();
export const mock_pem2ab = sinon.stub();
export const mock_encoding_base64url_decode = sinon.stub();

export const pem2ab = mock_pem2ab;
export const verify_rs256 = mock_verify_rs256;
export const base64url_decode = mock_encoding_base64url_decode;

