import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /**@type {import('./models/Profile.js').Profile | null} */
  activeProfile: null,

  /**@type {Post[]} */
  posts: [],

  /** @type {Post[]} */
  profilePosts: [],

  /**@type {Ad[]} */
  ads: [],

  currentPage: 1,
  totalPages: 1,
  searchedTerm: ''

})
