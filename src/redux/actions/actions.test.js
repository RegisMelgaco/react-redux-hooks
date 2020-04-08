import { requestArticlesFromApi, createArticle, articlesFetchSucceeded, articlesFetchFailed } from "./actions"
import { expect } from 'chai'
import { ARTICLES_FETCH_REQUESTED, ARTICLE_CREATE, ARTICLES_FETCH_SUCCEEDED, ARTICLES_FETCH_FAILED } from "../../consts"


describe('requestArticlesFromApi', () => {
    it('test action instatiation', done => {
        const action = requestArticlesFromApi()

        expect(action.type).to.be.equal(ARTICLES_FETCH_REQUESTED)
        done()
    })
})

describe('createArticle', () => {
    it('test action instatiation', done => {
        const payload = {value: 'value'}
        const action = createArticle(payload)

        expect(action.type).to.be.equal(ARTICLE_CREATE)
        expect(action.payload).to.be.equal(payload)
        done()
    })
})

describe('finalizeFetchArticlesFromApi', () => {
    it('test action without payload', done => {
        const action = articlesFetchSucceeded()

        expect(action.type).to.be.equal(ARTICLES_FETCH_SUCCEEDED)
        expect(action.payload.articles).to.be.empty
        done()
    })

    it('test with some payload', done => {
        const payload = [{title: "title"}, {value: 'value'}]
        const action = articlesFetchSucceeded(payload)

        expect(action.type).to.be.equal(ARTICLES_FETCH_SUCCEEDED)
        expect(Object.values(action.payload)).to.have.lengthOf(1)
        expect(Object.values(action.payload)[0]).to.be.equal(payload)
        done()
    })
})

describe('articlesFetchFailed', () => {
    it('test action instatiation', done => {
        const error = Error({messange: "error messange"})
        const payload = {error}
        const action = articlesFetchFailed(payload)

        expect(action.type).to.be.equal(ARTICLES_FETCH_FAILED)
        expect(action.payload.error).to.be.equal(payload)
        done()
    })
})
