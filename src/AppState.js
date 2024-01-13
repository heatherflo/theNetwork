import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /**@type {Profile} */
  profile: null,

  /**@type {Post[]} */
  posts: [],

  /**@type {Ad[]} */
  ads: [],

  currentPage: 1,
  totalPages: 1,
  searchTerm: ''

})
