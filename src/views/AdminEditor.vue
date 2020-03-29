<template>
  <div>
    <v-data-table
      :items="localItems"
      :headers="cHeaders"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Total - {{ items.length }}</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          />
          <v-toolbar-title>Last - {{ items[items.length-1].id }}</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          />
          <v-toolbar-title>Types - {{ items[items.length-1].id }}</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          />
          <v-spacer />
          <v-btn
            color="primary"
            dark
            class="mb-2 mr-2"
            @click="saveFile(localItems)"
          >
            Save
          </v-btn>

          <v-dialog
            v-model="dialog"
            max-width="600px"
          >
            <template v-slot:activator="{ on }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-on="on"
              >
                New Item
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                      :key="i"
                      v-for="(item, i) in editedItem"
                    >
                      <v-textarea
                        v-if="i == 'description'"
                        v-model="editedItem[i]"
                        :label="i"
                        hide-details
                      />
                      <v-text-field
                        v-else
                        v-model="editedItem[i]"
                        :label="i"
                        hide-details
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>

export default {

  props: {
    items: { type: Array, default: () => [] }
  },
  watch: {
    items: {
      immediate: true,
      handler: function (newValue) {
        this.localItems = Object.assign([], newValue)
      }
    },
    dialog (val) {
      val || this.close()
    }
  },
  data: () => ({
    dialog: false,
    editedIndex: -1,
    editedItem: {},
    importFile: {},
    defaultItem: {}
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
    cItems: {
      get () {
        let r = this.localItems
        if (this.localItems.length) {
          r = r.map(row => ({ ...row, actions: 'true' }))
        }
        return r
      }
    },
    cDefaultItem () {
      const ret = Object.assign({}, this.localItems[0])
      const keys = Object.keys(this.localItems[0])
      for (let i = 0; i < keys.length; i++) {
        ret[keys[i]] = ''
        // console.log(ret)
      }
      return ret
    },
    cHeaders () {
      const ret = Object.keys(this.localItems[0]).map(row => ({
        text: row,
        align: 'left',
        value: row,
        width: 'auto'
      }))
      ret.push({
        text: 'actions',
        align: 'left',
        value: 'actions',
        width: 'auto'
      })
      return ret
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    importChange (e) {
      console.log(e)
      try {
        const files = e.target.files
        if (!files.length) {
          alert('No file selected!')
          return
        }
        const file = files[0]
        const reader = new FileReader()
        reader.onload = (event) => {
          console.log('FILE CONTENT', event.target.result)
        }
        reader.readAsText(file)
      } catch (err) {
        console.error(err)
      }
    },
    initialize () {
      this.desserts = this.items
    },

    editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.localItems.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.cDefaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.localItems[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },

    saveFile: function (array) {
      const data = JSON.stringify(array)
      const blob = new Blob([data], { type: 'text/plain' })
      const e = document.createEvent('MouseEvents')
      const a = document.createElement('a')
      a.download = 'test.json'
      a.href = window.URL.createObjectURL(blob)
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
      e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      a.dispatchEvent(e)
    }

  }
}
</script>

<style>

</style>
