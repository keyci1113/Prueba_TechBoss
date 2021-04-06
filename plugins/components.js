import Vue from 'vue'
import Navbar from '@/components/Navbar'
import ContactForm from '@/components/ContactForm'
import Spinner from '@/components/Spinner'
import Alert from '@/components/Alert'
import Drawer from '@/components/Drawer'

Vue.component('agh-navbar', Navbar)
Vue.component('agh-contact', ContactForm)
Vue.component('alert', Alert)
Vue.component('agh-spinner', Spinner)
Vue.component('menu-drawer', Drawer)
