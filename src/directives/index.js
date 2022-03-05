import Vue from 'vue'

Vue.directive('focus', {
  /**
     * inserted hook: cuando el documento es insertado en el DOM
     * @param {HTMLElement} el elemento al que está dirigido la directiva
     */
  inserted: function (el) {
    el.focus()
  }
})

Vue.directive('diablo', {
  /**
     * @param {HTMLElement} el Elemento al que se le aplica la directiva
     * @param {DirectiveBinding} binding Datos que recive la directiva
     *                           a través de argumentos. modificadores, etc.
     */
  bind (el, binding) {
    const color = {
      bone: '#E8DCC2',
      white: '#FFFFFF'
    }

    el.style.fontFamily = 'DiabloHeavy, sans-serif'

    // console.log('binding')
    // console.log(binding)

    // Argumento (':')
    const arg = binding.arg === 'bone' ? 'bone' : 'white'

    if (arg === 'bone') {
      el.style.color = color.bone
    } else {
      el.style.color = color.white
    }

    // Modificadores ('.')
    if (Object.keys(binding.modifiers).length > 0) {
      const value = binding.value || 1
      const borderExp = `${value}px solid ${color[arg]}`

      if (binding.modifiers.bottom) {
        el.style.borderBottom = borderExp
        el.style.paddingBottom = '10px'
      }
      if (binding.modifiers.top) {
        el.style.borderTop = borderExp
        el.style.paddingTop = '10px'
      }
    }
  }
})
