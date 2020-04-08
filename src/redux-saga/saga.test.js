import sinon from  'sinon'
import { expect } from 'chai'

import * as Api from '../network/Api'
import { apiWorker } from './workers'
import { articlesFetchFailed } from '../redux/actions/actions'


describe('apiWorker', () => {
    it('on error', done => {
        const error = new Error({messange: "no internet connection"})
        const fakeFetch = sinon.fake.throws(error)
        sinon.replace(Api, 'requestArticles', fakeFetch)

        const gen = apiWorker()

        expect(gen.next().value).to.be.equals(articlesFetchFailed(error))
        expect(gen.next().done).to.be.true
        done()
    })
})