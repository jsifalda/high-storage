export default (storage, prefix = null) => {

  if (!storage || typeof storage.setItem === 'undefined' || typeof storage.getItem === 'undefined') {
    throw new Error('Please provide valid storage service, which has got "setItem" & "getItem" methods.')
  }

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
    }
  }

}
