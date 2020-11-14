<template>
  <main class="feed-page page">
    <div class="feed_wrapper wrapper">
      <aside class="aside_bar">
        <div class="login_button">
          <span>로그인</span>
        </div>
      </aside>
      <div class="feed">
        <option-bar 
          @open-filter="toggleFilter(true)"
          @open-setting="toggleSetting(true)"
        >
        </option-bar>
        <section class="feed_list">
          <feed-item 
            v-for="(feed, index) in feeds" 
            :key="`feed_${ feed.id }`"
            :style="{ order: Math.floor(index / cycle) }"
            v-bind="feed"
          ></feed-item>

          <commercial-item 
            v-for="(commercial, index) in showCommercials"
            :style="{ order: index }"
            :key="`commercial_${ commercial.id }`"
            :fold="foldedCommercials.includes(index)"
            :index="index"
            v-bind="commercial"
          ></commercial-item>
        </section>
      </div>
    </div>
    <modal-wrapper v-if="openFilter" >
      <filter-form  @close-filter="toggleFilter(false)"></filter-form>
    </modal-wrapper>
    <modal-wrapper v-if="openSetting" >
      <setting-form  @close-filter="toggleSetting(false)"></setting-form>
    </modal-wrapper>
    
  </main>
</template>

<script>
  import OptionBar from './20_OptionBar'
  import FeedItem from './30_FeedItem'
  import CommercialItem from './40_CommercialItem'
  import ModalWrapper from '@/components/10_app/30_Modal'
  import FilterForm from './15_FilterForm'
  import SettingForm from './17_SettingForm'

  export default {
    name: "Feed",
    components: {
      'option-bar': OptionBar,
      'feed-item': FeedItem,
      'commercial-item': CommercialItem,
      'modal-wrapper': ModalWrapper,
      'filter-form': FilterForm,
      'setting-form': SettingForm
    },
    data(){
      return {
        openFilter: false,
        openSetting: false,
        cycle: 4
      }
    },
    computed: {
      feeds(){ return this.$store.state.feeds },
      showCommercials(){
        return this.$store.getters.show_commercials
      },
      foldedCommercials(){
        return this.$store.state.folded_commercials
      }
    },
    methods: {
      toggleFilter(next){ this.openFilter = next },
      toggleSetting(next){ this.openSetting = next },
      handleScroll(){
        const { scrollY, innerHeight } = window;
        const floor = document.documentElement.offsetHeight - scrollY - innerHeight;
        const { feed_end, loading } = this.$store.state
        if(floor < 1 && !feed_end && !loading){
          this.$store.dispatch('add_feeds')
        }
      },
    },
    created(){
      // * get category
      this.$store.dispatch('get_category', () => {
        this.$store.dispatch('change_filter_category', { 
          category: this.$store.getters.id_category 
        })
      })
      // * handle scroll
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed(){
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="scss" scoped>
    @import '@/styles/30_feed/10_Feed.scss';
</style>