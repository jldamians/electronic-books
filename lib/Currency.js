'use strict'

const CURRENCY_CODES = require('./constants/CurrencyCodes')

/**
 * Impuesto
 * @param {String} code Código de moneda
 * @param {Number} exchangeRate Tasa de cambios a sol (S/)
 * @constructor
 */
function Currency(code, exchangeRate) {
  let _args = {
    code,
    exchangeRate,
  }

  /**
   * Código de moneda
   * - PEN
   * - USD
   */
  Object.defineProperty(this, 'code', {
    get: () => {
      const currencyTypeAllowed = (
        _args.code === CURRENCY_CODES.PEN || _args.code === CURRENCY_CODES.USD
      )

      if (currencyTypeAllowed) {
        return _args.code
      } else {
        throw new Error(`El código de moneda ${_args.code} no está permitido`)
      }
    },
  })

  // Tipo de cambio
  Object.defineProperty(this, 'exchangeRate', {
    get: () => {
      if (_args.code === CURRENCY_CODES.PEN) {
        return 1
      } else if (_args.code = CURRENCY_CODES.USD) {
        return _args.exchangeRate
      } else {
        throw new Error(`El código de moneda ${_args.code} no está permitido`)
      }
    },
  })
}

module.exports = Currency
