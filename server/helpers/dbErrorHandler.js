const getUniqueErrorMessage = err => {
  let output

  try {
    let fieldName = Object.keys(err.keyPattern)[0]

    output =
      fieldName.split('')[0].toUpperCase() +
      fieldName.slice(1) +
      ' already exists'
  } catch (ex) {
    output = 'Unique field already exists'
  }
  return output
}

const getErrorMessage = err => {
  let message = ''

  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = getUniqueErrorMessage(err)
        break
      default:
        'Something went wrong'
    }
  } else {
    for (let errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message
    }
  }
  return message
}

export default { getErrorMessage }
