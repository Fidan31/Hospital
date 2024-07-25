

/**
 * @typedef {Object} TSelectItem
 * @property {number} id
 * @property {string} name
 * @property {string} [color]
 */

/**
 * @typedef {Object} TSelectProps
 * @property {string} name
 * @property {TSelectItem[]} data
 * @property {string} className
 * @property {(selectedItem: TSelectItem) => void} onSelect
 * @property {boolean} multiple
 */

/**
 * @typedef {Object} TFormValues
 * @property {string} [annotate_type]
 * @property {number[]} [hospital_ids]
 * @property {number[]} [services_ids]
 * @property {number} [service_id]
 * @property {number} [service_id_st]
 * @property {number} [service_id_nd]
 * @property {number} [hospital_id]
 * @property {number} [hospital_id_st]
 * @property {number} [hospital_id_nd]
 * @property {Object} [chart_date]
 * @property {number} [chart_date.year]
 * @property {number} [chart_date.month]
 * @property {Object} [dates]
 * @property {number} [dates.year]
 * @property {number} [dates.month]
 * @property {number} [dates.day]
 */

// Перечисление (enum) в JavaScript
const Role = {
    SuperUser: "superuser",
    Admin: "admin",
    Manager: "manager",
    Financer: "financer"
  };
  
  // Экспорт через CommonJS или ES6-модули
  // Если используется CommonJS
//   module.exports = { Role };
  
  // Если используется ES6-модули
  export { Role };
  