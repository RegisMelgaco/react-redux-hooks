// import { put } from 'redux-saga/effects'
// import sinon from  'sinon'
// import { expect } from 'chai'

// import * as Api from '../network/Api'
// import { apiWorker } from './workers'
// import { faillFetchArticles } from '../redux/actions/actions'


// describe('apiWorker', () => {

//     it('on error', done => {
//         const spy = sinon.stub(Api, 'requestArticles').throws("dsadsa")
//         const gen = apiWorker()
//         gen.next()

//         sinon.assert.match(gen.next().value, put(faillFetchArticles("dsadsa")))

//         // expect(gen.next().value).to.be.equals(put(faillFetchArticles("asdads")))
//         // expect(gen.next().done).to.be.true

//         sinon.restore()
//         done()
//     })
// })