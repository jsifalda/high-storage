export default (storage, prefix = null) => {
  let getPath = (name) => {
    if (prefix) {
      return `${prefix}_${name}`
    } else {
      return name
    }
  }

  return {

    set (name, value) {
      storage.setItem(getPath(name), value)
      return this
    },

    get (name, defaults = null) {
      return storage.getItem(getPath(name)) || defaults
    },

    clear (name) {
      storage.removeItem(getPath(name))
      return this
    }
  }
}
