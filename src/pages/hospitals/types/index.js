// Определение типов через JSDoc (документирование через комментарии)

/**
 * @typedef {Object} THospital
 * @property {string} name
 * @property {number} id
 */

/**
 * @typedef {Object} THospitalSecondary
 * @property {string} name
 * @property {number} data
 */

/**
 * @typedef {Object} TYear
 * @property {number} data
 * @property {number} id
 */

/**
 * @typedef {Object} TMonth
 * @property {string} data
 * @property {number} id
 */

/**
 * @typedef {TYear} TDay - Переопределение типа TYear для TDay
 */

/**
 * @typedef {Object} IHospitalStatistic
 * @property {THospitalSecondary[]} statistics
 * @property {number} max_count
 */

// Перечисление (enum) в JavaScript
const ANNOTATES = {
    Price: "price",
    Count: "count",
    Patients: "number_patients"
  };
  
  // Экспорт через CommonJS или ES6-модули
  // Если используется CommonJS
//   module.exports = {
//     ANNOTATES
//   };
  
  // Если используется ES6-модули
  export { ANNOTATES };
  