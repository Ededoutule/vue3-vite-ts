import { createStore,StoreOptions, Store, CommitOptions, Commit } from "vuex";
import { USERINFO } from "@/interfaceConfig/index";


let userInfo: USERINFO = {
  name: "duchao",
  age: 25,
  sex: "male"
}


let store: StoreOptions<any> = {
  state: {
    userInfo,
  },
  mutations: {
    getUserInfo (status: any, name: string) {
      status!.userInfo!.name = name
    }
  },
  actions: {
    getUserInfo ({ commit }, name: string) {
      commit('getUserInfo', name)
    }
  }
}

let stores = createStore(store)


export default stores
