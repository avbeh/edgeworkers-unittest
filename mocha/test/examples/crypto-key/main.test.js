import { onClientRequest } from "../../../edgeworkers/examples/crypto-key/main";
import Request from "request";
import {
  mock_crypto_getRandomValues,
  mock_crypto_subtle_decrypt,
  mock_crypto_subtle_digest,
  mock_crypto_subtle_encrypt,
  mock_crypto_subtle_importKey,
} from "../../../__mocks__/cryptoKey";

const sinon = require("sinon");
const expect = require("expect.js");

describe("Crypto EW", () => {
  afterEach(() => {
    sinon.reset();
  });

  it("onClientRequest getRandomValues(), digest(), importKey(), encrypt(), decrypt()", () => {
    let requestMock = new Request();
    onClientRequest(requestMock);

    expect(mock_crypto_getRandomValues.callCount).to.be(1);
    expect(mock_crypto_getRandomValues.calledWith()).to.be(true);

    expect(mock_crypto_subtle_digest.callCount).to.be(1);
    expect(mock_crypto_subtle_digest.calledWith()).to.be(true);

    expect(mock_crypto_subtle_importKey.callCount).to.be(2);
    expect(mock_crypto_subtle_importKey.calledWith()).to.be(true);

    expect(mock_crypto_subtle_encrypt.callCount).to.be(1);
    expect(mock_crypto_subtle_encrypt.calledWith()).to.be(true);

    expect(mock_crypto_subtle_decrypt.callCount).to.be(1);
    expect(mock_crypto_subtle_decrypt.calledWith()).to.be(true);
  });
});
