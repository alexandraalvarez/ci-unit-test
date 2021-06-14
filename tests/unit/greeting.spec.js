import {mount} from '@vue/test-utils'
import Greeting from '@/components/Greeting.vue'

describe('Greeting.vue', () => {
    it('renders a greeting', () => {
        const wrapper = mount(Greeting)

        //expect(received.to[matcher](expected))
        expect(wrapper.text()).toMatch('Vue and TDD')
    })
})