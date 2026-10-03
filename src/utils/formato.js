// Formatea un número como pesos chilenos (ej: 64990 -> $64.990)
const formateadorCLP = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  minimumFractionDigits: 0,
})

export const formatearPrecio = (valor) => formateadorCLP.format(valor)