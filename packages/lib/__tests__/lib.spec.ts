import { lib } from '../lib/lib';
import { mocked } from "ts-jest/utils"

describe("lib", () => {
    it("print text", () => {
        global.console.log=jest.fn()
        lib()
        expect(mocked(global.console.log).mock.calls).toBe([["i am lib"]])
    })
})