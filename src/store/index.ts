import { createStore,StoreOptions } from "vuex";



let store: StoreOptions<any> = {
  state: {
    userInfo: {
      name: 'duchao'
    }
  },
  mutations: {
    getUserInfo (status: any, name: string) {
      status.userInfo.name = name
    }
  }
}

let stores = createStore(store)


export default stores