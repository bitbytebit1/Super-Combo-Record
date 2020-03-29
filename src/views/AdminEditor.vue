<template>
  <v-data-table
    :items="localItems"
    :headers="cHeaders"
    :search="search"
    show-group-by
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-btn
          icon
          class="ml-1"
          @click="showSearch = !showSearch"
        >
          <v-icon>search</v-icon>
        </v-btn>
        <v-divider
          class="mx-4"
          inset
          vertical
        />
        <!-- <v-fade-transition> -->
        <div
          v-if="!showSearch"
          class="d-flex font-weight-thin"
        >
          <v-toolbar-title>
            Items - {{ localItems.length }}
          </v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          />
          <v-toolbar-title>
            Last - {{ localItems[localItems.length-1].sku }}
          </v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          />
          <v-toolbar-title>
            Types - {{ $store.getters['Products/queryItemsUniqueProperty'](storeName, 'subtype').length }}
          </v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          />
        </div>
        <!-- </v-fade-transition> -->
        <!-- <v-fade-transition> -->
        <div
          v-if="showSearch"
          class="d-flex"
        >
          <v-text-field
            v-model="search"
            single-line
            hide-details
            autofocus
            dense
            clearable
            label="Search"
          />
          <v-divider
            class="mx-4"
            inset
            vertical
          />
          <v-select
            :items="Object.keys(localItems[0])"
            dense
            clearable
            multiple
            label="Filter by"
            prepend-icon="mdi-filter"
            hide-details
            single-line
            offset-y
            deletable-chips

            v-model="selectedFilter"
          />
        </div>
        <!-- </v-fade-transition> -->
        <!-- <v-fade-transition> -->

        <!-- </v-fade-transition> -->

        <!-- <v-fade-transition> -->

        <v-spacer />
        <!-- </v-fade-transition> -->
        <v-divider
          class="mx-4"
          inset
          vertical
        />
        <v-btn
          color="primary"
          dark
          class="mr-2"
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
              v-on="on"
            >
              New Item
            </v-btn>
          </template>
          <v-card shaped>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container class="py-0">
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="12"
                    :key="i"
                    v-for="(item, i) of editedItem"
                    class="text-capitalize"
                  >
                    {{ i }}
                    <v-textarea
                      v-if="i == 'description'"
                      v-model="editedItem[i]"
                      hide-details
                      dense
                    />
                    <v-text-field
                      v-else
                      dense
                      v-model="editedItem[i]"
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
    <template v-slot:item.sku="{ item }">
      <div
        style="width: 100px;"
      >
        {{ item.sku }}
      </div>
    </template>
    <template v-slot:item.description="{ item }">
      <div
        class="d-inline-block text-truncate"
        style="max-width: 80px;"
      >
        {{ item.description }}
      </div>
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
</template>

<script>

export default {

  created () {
    this.initialize()
    // this.editedItem = this.cDefaultItem
    // this.editedIndex = 0
  },
  props: {
    items: { type: Array, default: () => [] },
    storeName: { type: String, default: '' }
  },
  watch: {
    items: {
      handler: 'initialize'
      // immediate: true
    },
    dialog (val) {
      val || this.close()
    }
  },
  data: () => ({
    search: '',
    showSearch: false,
    selectedFilter: [],
    localItems: [],
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
    cDefaultItem () {
      // const ret = Object.assign({}, this.localItems[0])
      // const keys = Object.keys(this.localItems[0])
      // for (let i = 0; i < keys.length; i++) {
      // ret[keys[i]] = ''
      // console.log(ret)
      // }
      return this.localItems[this.localItems.length - 1]
    },
    cHeaders () {
      const ret = Object.keys(this.localItems[0]).map(row => ({
        text: row,
        align: 'left',
        value: row,
        class: 'text-capitalize',
        filterable: !this.selectedFilter.length || this.selectedFilter.some(r => r === row)
      }))
      ret.push({
        text: 'actions',
        align: 'left',
        value: 'actions',
        width: 'auto',
        class: 'text-capitalize'
      })
      return ret
    }
  },

  methods: {

    initialize () {
      this.localItems = Object.assign([], this.items)
      this.editedItem = Object.assign({}, this.cDefaultItem)
    },

    editItem (item) {
      this.editedIndex = this.localItems.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.localItems.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.localItems.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        // this.editedItem = Object.assign({}, this.cDefaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.localItems[this.editedIndex], this.editedItem)
      } else {
        this.localItems.push(this.editedItem)
      }
      const commitBody = {
        name: this.storeName,
        items: this.localItems
      }
      this.$store.commit('Products/updateItems', commitBody)
      this.close()
    },

    saveFile: function (array) {
      const data = JSON.stringify(array, null, 2)
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
.admin-fade-enter-active,
.admin-fade-leave-active {
  transition: opacity 1s;
}
.admin-fade-enter {
  opacity: 0;
}
.admin-fade-leave-to {
  opacity: 0;
}

</style>
