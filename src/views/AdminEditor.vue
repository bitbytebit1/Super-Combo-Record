<template>
  <div>
    <!-- {{  }} -->

    <v-data-table
      :items="localItems"
      :headers="cHeaders"
      :search="search"
      ref="table"
      show-group-by
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <!-- SEARCH BUTTON -->
          <v-btn
            icon
            class="ml-1"
            @click="showSearch = !showSearch"
          >
            <v-icon>search</v-icon>
          </v-btn>

          <transition
            name="search-fade"
            mode="out-in"
          >
            <!-- GENERAL INFO -->
            <div
              v-if="!showSearch"
              class="d-flex font-weight-thin"
              :key="1"
            >
              <v-divider
                class="mx-4"
                inset
                vertical
              />

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

            <!-- SEARCH BOX -->
            <div
              v-else
              class="d-flex"
              :key="2"
            >
              <v-divider
                class="mx-4"
                inset
                vertical
              />

              <v-text-field
                v-model="search"
                single-line
                autofocus
                dense
                hide-details
                clearable
                label="Search"
                width="50"
              />
              <v-divider
                class="mx-4"
                inset
                vertical
              />
              <!-- FILTER BOX -->
              <v-select
                :items="Object.keys(localItems[0])"
                clearable
                multiple
                label="Filter by"
                prepend-icon="mdi-filter"
                hide-details
                single-line
                v-model="selectedFilter"
              />
              <v-divider
                class="mx-4"
                inset
                vertical
              />
              <div>
                {{ search ? `Results ${filterLength()}` : '' }}
              </div>
            </div>
          </transition>
          <v-spacer />
          <v-divider
            class="mx-4"
            inset
            vertical
          />
          <!-- SAVE TO FILE BUTTON -->
          <v-btn
            color="primary"
            dark
            class="mr-2"
            @click="saveFile(localItems)"
          >
            Save
          </v-btn>

          <!-- NEW ITEM DIALOG -->
          <v-dialog
            v-model="dialog"
            fullscreen
            max-width="600px"
          >
            <!-- NEW ITEM BUTTON -->
            <template v-slot:activator="{ on }">
              <v-btn
                color="primary"
                dark
                v-on="on"
              >
                New Item
              </v-btn>
            </template>
            <!-- NEW ITEM CARD -->
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
                <v-spacer />
                <!-- CARD ACTIONS -->
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    outlined
                    color=""
                    text
                    @click="close"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    outlined
                    color=""
                    text
                    @click="save"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card-title>

              <!-- INPUT BOXES -->
              <v-card-text>
                <v-container>
                  <v-row no-gutters>
                    <v-col
                      cols="12"
                      sm="6"
                    >
                      <v-col
                        cols="12"
                        :key="i"
                        v-for="(item, i) of editedItem"
                        class="text-capitalize my-2"
                      >
                        <!-- INPUTS -->
                        <div
                          class="d-inline-block ma-0"
                          style="width:85px;"
                        >
                          {{ i }}
                        </div>

                        <v-textarea
                          v-if="i == 'description'"
                          v-model="editedItem[i]"
                          hide-details
                          dense
                        />
                        <v-text-field
                          v-else
                          class="d-inline-block ml-4"
                          dense
                          v-model="editedItem[i]"
                          hide-details
                        />
                      </v-col>
                    </v-col>
                    <!-- PREVIEW ITEM -->
                    <v-col
                      cols="12"
                      sm="6"
                    >
                      Preview item
                      <slot
                        name="item"
                        :item="editedItem"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <!-- <template v-slot:item.name="{ item }">
        <v-edit-dialog
          :return-value.sync="item.name"
          large
        >
          {{ item.name }}
          <template v-slot:input>
            <v-text-field
              v-model="item.name"
              label="Edit"
              single-line
              counter
            />
          </template>
        </v-edit-dialog>
      </template> -->
      <!-- <template v-slot:item.sku="{ item }">
        <v-edit-dialog
          large
          :return-value.sync="item.sku"
        >
          {{ item.sku }}
          <template v-slot:input>
            <v-text-field
              v-model="item.sku"
              label="Edit"
              single-line
              counter
            />
          </template>
        </v-edit-dialog>
      </template> -->
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

      <template
        v-for="(slot, i) in inlineEditSlots"
        v-slot:[slot]="scope"
      >
        <v-edit-dialog
          :return-value.sync="scope.item[scope.header.value]"
          :key="`edit-${i}-${scope.header.value}`"
          large
        >
          {{ scope.item[scope.header.value] }}
          <template v-slot:input>
            <v-text-field
              v-model="scope.item[scope.header.value]"
              label="Edit"
              single-line
              counter
            />
          </template>
        </v-edit-dialog>
        <!-- {{ scope.header.value }} -->
        <!-- {{ scope.item[scope.header.value] }} -->
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
    inlineEditSlots: ['item.file', 'item.name', 'item.description', 'item.sku', 'item.img'],
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
    filterLength () {
      if (!this.$refs.table) return 0
      if (!this.$refs.table.$children[0].filteredItems) return 0
      // console.log(this.$refs.table)
      return this.$refs.table.$children[0].filteredItems.length
    },
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
.v-text-field__suffix{
  color: whitesmoke !important;
}
.search-fade-enter-active,
.search-fade-leave-active {
  transition: opacity 0.1s ease;
}
.search-fade-enter {
  opacity: 0;
}
.search-fade-leave-to {
  opacity: 0;
}

</style>
