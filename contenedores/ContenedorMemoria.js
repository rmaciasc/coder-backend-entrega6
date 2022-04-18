class ContenedorMemoria {
  constructor() {
    this.productos = []
    this.id = 0
  }

  listar(id) {
    id = parseInt(id)
    const objectIndex = this.productos.findIndex((x) => x.id === id)
    const producto = this.productos[objectIndex]
    if (!producto) {
      return { error: 'producto no encontrado' }
    } else {
      return producto
    }
  }

  listarAll() {
    return this.productos
  }

  guardar(elem) {
    this.id++
    elem.id = this.id
    this.productos.push(elem)
    return elem
  }

  actualizar(elem, id) {
    id = parseInt(id)
    const objectIndex = this.productos.findIndex((x) => x.id === id)
    elem.id = id
    this.productos[objectIndex] = elem

    return this.productos[objectIndex]
  }

  borrar(id) {
    id = parseInt(id)
    const objectIndex = this.productos.findIndex((x) => x.id === id)
    this.productos.splice(objectIndex, 1)
  }

  borrarAll() {
    this.productos = []
  }
}

module.exports = ContenedorMemoria
