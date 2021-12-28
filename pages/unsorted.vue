<template>
  <div class="is-fluid firmware">
    <div class="columns">
      <div class="column">
        <section class="section introduction has-background-light p-6">
          <h1 class="project__title title">Unsorted projects</h1>
          <p class="pt-3 pb-3">
            This is a list of unsorted projects dumped in the Wanted thread on
            the O|D forum. Anyone who feels like cleaning this up or organizing
            it can do so by asking editing permissions to a Google sheet that is
            the data source of this list. Ask @bparticle on the forum.
          </p>
          <Nuxt-Link :to="'/wanted'">Back to the WANTED page</Nuxt-Link>
        </section>
        <section class="section">
          <table class="table">
            <thead>
              <tr>
                <th v-for="(header, index) in headers" :key="index">
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in rows" :key="index">
                <td v-for="(cell, index) in row" :key="index">
                  {{ cell }}
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const response = await fetch(
      `https://docs.google.com/spreadsheets/d/1C59ySZzTyQ5gGwoG-uQ_BUnXTfoU03wxOe5DQwvHsjM/gviz/tq?tqx=out:json`
    )
      .then((res) => res.text())
      .then((text) => {
        return JSON.parse(text.substr(47).slice(0, -2))
      })

    const headers = response.table.rows[0].c.map((header) => header.v)
    const rows = response.table.rows
      .slice(1)
      .map((row) => row.c.map((cell) => (cell === null ? '' : cell.v)))
    console.log(rows)
    return { headers, rows }
  },
}
</script>