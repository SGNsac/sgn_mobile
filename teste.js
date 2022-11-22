const changeReal = (value) => {
  let valueFormated

  if (value === '' || value === null) {
    valueFormated = 'Sem valor'
  } else {
    const valueInt = parseInt(value).toFixed(2)
    valueFormated = valueInt.replace('.', ',')
  }

  return valueFormated
}

console.log(changeReal(1))
