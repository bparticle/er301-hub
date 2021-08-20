import { pastels } from "../plugins/pastels"
import { wantedList } from "../plugins/wantedList"

Number.prototype.toFixedDown = function (digits) {
  var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
    m = this.toString().match(re);
  return m ? parseFloat(m[1]) : this.valueOf();
};

for (let i = 0; i < wantedList.length; i++) {
  const project = wantedList[i]
  let award = 0;
  if (project.backers) {
    for (let j = 0; j < project.backers.length; j++) {
      const backer = project.backers[j];
      let amount;

      // Calculate expenses, taxes, expenses
      if (backer.method != "donation") {
        /* When the backer bought mechandise on Big Cartel */
        const grossIn = parseFloat(backer.amount - backer.expenses) // Remove Printful expenses
        const netIn = grossIn - (grossIn * .02) // - 2% BigCartel, miscellaneous fees and currency conversion costs
        amount = netIn / 2 // 50% of remaining sum goes to the project
      } else {
        /* When the backer used the PayPal donation button */
        amount = backer.amount * 0.7 // 70% of remaining amount goes to the project
      }
      award += Number(amount)
    }

    wantedList[i].award = award.toFixedDown(1)
  } else {
    wantedList[i].award = "0"
  }
}

const sortedProjects = wantedList.sort((a, b) =>
  a.award > b.award ? -1 : 1
)

const openProjects = sortedProjects.filter(proj => {
  return proj.status === "open" || proj.status === "in development"
})

const completedProjects = sortedProjects.filter(proj => {
  return proj.status === "completed"
})

export const state = () => ({
  openProjects: openProjects,
  completedProjects: completedProjects,
  pastels: pastels,
  cats: [],
  catColors: []
})

export const getters = {
  openProjects: state => {
    return state.openProjects
  },
  completedProjects: state => {
    return state.completedProjects
  },
  totalAmountOpen: state => {
    return Number(state.openProjects.map(proj => proj.award).reduce(function (a, b) {
      return a + b;
    }, 0))
  }
}

export const mutations = {
  addAward(state, payload) {
    state.wantedList[payload.index].award = payload.award
  },
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
    var checkIfArray = function (array) {
      return (Array.isArray(array) === true && !array.length);
    }
    var fillCats = function () {
      // Get unique categories
      var uniqueCats = []
      var cats = []
      if (Array.isArray(payload.projects)) {
        for (let i = 0; i < payload.projects.length; i++) {
          const proj = payload.projects[i]
          for (let j = 0; j < proj.units.length; j++) {
            const cat = proj.units[j].category.toLowerCase()
            uniqueCats.push(cat)
          }
        }
      } else {
        for (let j = 0; j < payload.projects.units.length; j++) {
          const cat = payload.projects.units[j].category.toLowerCase()
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
          color: pastels[Math.floor(Math.random() * pastels.length)],
          colorPassive: 'whitesmoke',
        })
      }
      state.cats = cats
    }

    // If force is true, refill categories
    if (payload.force === true) {
      fillCats()
    } else {
      // Else refill only when empty
      if (state.cats.length === 0) {
        fillCats()
      }
    }
  }
}

export const actions = {
  guidGenerator() {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return (
      S4() +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      S4() +
      S4()
    )
  },
}