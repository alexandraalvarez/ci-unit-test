import { shallowMount } from '@vue/test-utils'
import Mocking from '@/components/Mocking.vue'

jest.mock('axios')

describe('Mocking.vue', () => {

    it('fetches async when a button is clicked', (done) => {
        const wrapper = shallowMount(Mocking)
        wrapper.find('button').trigger('click')

        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.value).toBe('value')
            done()
        })
        
    })
})
