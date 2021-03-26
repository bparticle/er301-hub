import { pastels } from "../plugins/pastels"

export const state = () => ({
  pastels: pastels,
  cats: [],
  catColors: []
})

export const mutations = {
  enableCat(state, payload) {
    state.cats.find(cat => cat === payload).active = true
  },
  disableCat(state, payload) {
    state.cats.find(cat => cat === payload).active = false
  },
  addAllCats(state, payload) {
    state.cats = payload
  },
  addUniqueCats(state, payload) {
    if (state.cats.length === 0) {
      // Get unique categories
      var uniqueCats = []
      var cats = []
      for (let i = 0; i < payload.length; i++) {
        const proj = payload[i]
        for (let j = 0; j < proj.units.length; j++) {
          const cat = proj.units[j].category
          uniqueCats.push(cat)
        }
      }
      uniqueCats = _.sortBy(
        uniqueCats.filter((e, i) => uniqueCats.indexOf(e) === i)
      )

      for (let k = 0; k < uniqueCats.length; k++) {
        cats.push({
          category: uniqueCats[k],
          active: false,
          color: state.pastels[k],
          colorSelected: 'whitesmoke',
        })
      }

      state.cats = cats
    }
  }
}
