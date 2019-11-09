import { expect } from 'chai'
import { getExtension, getContentType, getContentTypeMaybe } from '../src/index'
import { Just, None } from 'amonad'

describe("getExtension", () => {
  it("simple name", () => {
    expect(getExtension("test")).eql(undefined)
  })

  it("simple name with extension", () => {
    expect(getExtension("test.txt")).eql("txt")
  })

  it("complex absolute path", () => {
    expect(getExtension("text1/test")).eql(undefined)
  })

  it("complex absolute path with extension", () => {
    expect(getExtension("text1/test.jpg")).eql("jpg")
  })

  it("complex relative path", () => {
    expect(getExtension("./text1/test")).eql(undefined)
  })

  it("complex relative path with extension", () => {
    expect(getExtension("./text1/test.mpeg")).eql("mpeg")
  })
})

describe("getContentType", () => {
  it("simple name", () => {
    expect(getContentType("test")).eql(undefined)
  })

  it("simple name with extension", () => {
    expect(getContentType("test.txt")).eql("text/plain")
  })

  it("complex absolute path", () => {
    expect(getContentType("text1/test")).eql(undefined)
  })

  it("complex absolute path with extension", () => {
    expect(getContentType("text1/test.jpg")).eql("image/jpeg")
  })

  it("complex relative path", () => {
    expect(getContentType("./text1/test")).eql(undefined)
  })

  it("complex relative path with extension", () => {
    expect(getContentType("./text1/test.mpeg")).eql("video/mpeg")
  })
})


describe("getContentTypeMaybe", () => {
  it("simple name", () => {
    expect(getContentTypeMaybe("test")).eql(None())
  })

  it("simple name with extension", () => {
    expect(getContentTypeMaybe("test.txt")).eql(Just("text/plain"))
  })

  it("complex absolute path", () => {
    expect(getContentTypeMaybe("text1/test")).eql(None())
  })

  it("complex absolute path with extension", () => {
    expect(getContentTypeMaybe("text1/test.jpg")).eql(Just("image/jpeg"))
  })

  it("complex relative path", () => {
    expect(getContentTypeMaybe("./text1/test")).eql(None())
  })

  it("complex relative path with extension", () => {
    expect(getContentTypeMaybe("./text1/test.mpeg")).eql(Just("video/mpeg"))
  })
})