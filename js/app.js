const merge = (t, s) => { const o = Object, a = o.assign; for (const k of o.keys(s)) s[k] instanceof o && a(s[k], merge(t[k], s[k])); return a(t || {}, s), t }
const loadScript = (src, async = true, type = 'text/javascript') => {
  return new Promise((resolve, reject) => {
    try {
      const el = document.createElement('script')
      const container = document.head || document.body
      el.type = type
      el.async = async
      el.src = src
      el.addEventListener('load', () => {
        resolve({ status: true })
      })
      el.addEventListener('error', () => {
        reject({
          status: false,
          message: `Failed to load the script ${src}`
        })
      })
      container.appendChild(el)
    } catch (err) {
      reject(err)
    }
  })
}

loadScript('js/static.js')
  .then(data => {
    loadScript('js/Template.js')
      .then(data => {
        loadScript('js/Train.js')
          .then(data => {
            loadScript('js/main.js')
              .then(data => { })
              .catch(err => { console.error(err) })
          })
      })
      .catch(err => { console.error(err) })
  })
  .catch(err => { console.error(err) })
