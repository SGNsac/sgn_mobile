
const changeReal = (value : string) => {
  let valueFormated

  if (value === '' || value === null) {
    valueFormated = 'R$ 0,00'
  } else {
    const valueInt = parseInt(value).toFixed(2)
    valueFormated = 'R$' + valueInt.replace('.', ',')
  }

  return valueFormated
}

export default changeReal
