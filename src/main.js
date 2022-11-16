import { createApp } from 'vue'
import App from './App.vue'
import './styles/app.css'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHourglassEnd } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faWheelchairMove } from '@fortawesome/free-solid-svg-icons'
import { faDice } from '@fortawesome/free-solid-svg-icons'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { faBowlingBall } from '@fortawesome/free-solid-svg-icons'
import { faRobot } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faHourglassEnd, faMusic, faWheelchairMove, faDice, faVolumeHigh, faBowlingBall, faRobot)

import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
