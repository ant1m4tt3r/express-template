class Hello {
  index(req, res) {
    return res.send('Hello world!')
  }
}

export default new Hello()
