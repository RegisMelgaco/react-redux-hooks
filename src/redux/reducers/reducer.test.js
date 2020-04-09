import { expect } from 'chai'
import createTestStore from 'redux-test-store'
import initStore from '../store/store'
import * as Actions from '../actions/actions'
import * as Consts from '../../consts'


describe('reducer', () => {
    it('on action articlesFetchFailed', done => {
        const testStore = createTestStore(initStore(), done)

        testStore.when(Consts.ARTICLES_FETCH_FAILED, (state, _) => {
            expect(state.areArticlesLoading).to.be.false
        })
        
        testStore.dispatch(Actions.faillFetchArticles(Error("something bad")))
    })

    it('on action articlesFetchSucceeded', done => {
        const testStore = createTestStore(initStore(), done)

        testStore.when(Consts.ARTICLES_FETCH_SUCCEEDED, (state, _) => {
            expect(state.areArticlesLoading).to.be.false
        })
        
        testStore.dispatch(Actions.succeedFetchArticles())
    })

    it('on action createArticle with no articles', done => {
        const testStore = createTestStore(initStore(), done)
        const newArticle = {title: "Test Title"}

        testStore.when(Consts.ARTICLE_CREATE, (state, _) => {
            expect(state.articles[0].id).to.be.equals(1)
            expect(Object.values(state.articles[0])).to.include.members(Object.values(newArticle))
        })

        testStore.dispatch(Actions.createArticle(newArticle))
    })

    it('on action createArticle with article exiting articles', done => {
        const store = initStore({articles: [{title: "title", id: 11}]})
        const testStore = createTestStore(store, done)

        const newArticle = {title: "new article"}

        testStore.when(Consts.ARTICLE_CREATE, (state, _) => {
            expect(state.articles[1]).to.have.property("id").be.equals(12)
            expect(Object.values(state.articles[1])).to.include.members(Object.values(newArticle))
        })

        testStore.dispatch(Actions.createArticle(newArticle))
    })
})
