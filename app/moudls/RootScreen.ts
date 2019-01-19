import {action, observable, configure} from "mobx"

// configure({ enforceActions: "observed"})
class RootScreen {
    @observable
    statusBarHeight: number=20;
    @observable
    headerHeight: number = 44;
    @observable 
    tabHeight: number = 50;

    @action("设置状态栏高度")
    setStatusBarHeight(statusBarHeight: number) {
        this.statusBarHeight = statusBarHeight

    }

    @action("设置header高度")
    setHeaderHeight(headerHeight: number) {
        this.headerHeight = headerHeight
    }

    @action("设置底部tab高度")
    setTabHeight(tabHeight: number) {
        this.tabHeight = tabHeight
    }

}

export let rootScreen = new RootScreen();