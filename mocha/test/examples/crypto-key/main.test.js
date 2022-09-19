import { onClientRequest } from "../../../edgeworkers/examples/crypto-key/main";
import Request from "request";
import { mock_crypto_getRandomValues, mock_crypto_subtle_digest } from "../../../__mocks__/cryptoKey";

const sinon = require("sinon");
const expect = require("expect.js");

describe("EW that has getRandomValues", () => {
  afterEach(() => {
    sinon.reset();
  });

  it("onClientRequest getRandomValues", () => {
    let requestMock = new Request();
    onClientRequest(requestMock);
    expect(mock_crypto_getRandomValues.callCount).to.be(1);
    expect(mock_crypto_getRandomValues.calledWith()).to.be(true);
  });
});
